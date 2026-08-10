/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxArea = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    // dp[i][j] = largest square of 1s starting at (i, j)
    const dp = Array.from(
        { length: m + 1 },
        () => new Array(n + 1).fill(0)
    );

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i + 1][j],
                    dp[i][j + 1],
                    dp[i + 1][j + 1]
                );
            }
        }
    }

    function canMake(k) {
        const rows = m - k + 1;
        const cols = n - k + 1;

        // valid[i][j] = 1 if k x k square can start here
        const pref = Array.from(
            { length: rows + 1 },
            () => new Array(cols + 1).fill(0)
        );

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const val = dp[i][j] >= k ? 1 : 0;

                pref[i + 1][j + 1] =
                    val +
                    pref[i][j + 1] +
                    pref[i + 1][j] -
                    pref[i][j];
            }
        }

        function getSum(r1, c1, r2, c2) {
            if (r1 > r2 || c1 > c2) return 0;

            return (
                pref[r2 + 1][c2 + 1]
                - pref[r1][c2 + 1]
                - pref[r2 + 1][c1]
                + pref[r1][c1]
            );
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                if (dp[i][j] < k) continue;

                // Square completely above
                if (getSum(0, 0, i - k, cols - 1) > 0) {
                    return true;
                }

                // Square completely below
                if (getSum(i + k, 0, rows - 1, cols - 1) > 0) {
                    return true;
                }

                // Square completely left
                if (getSum(0, 0, rows - 1, j - k) > 0) {
                    return true;
                }

                // Square completely right
                if (getSum(0, j + k, rows - 1, cols - 1) > 0) {
                    return true;
                }
            }
        }

        return false;
    }

    let left = 1;
    let right = Math.min(m, n);
    let answer = 0;

    while (left <= right) {
        const k = Math.floor((left + right) / 2);

        if (canMake(k)) {
            answer = k;
            left = k + 1;
        } else {
            right = k - 1;
        }
    }

    return answer * answer;
};