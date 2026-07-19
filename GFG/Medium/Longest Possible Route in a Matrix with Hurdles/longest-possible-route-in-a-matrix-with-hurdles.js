class Solution {
    longestPath(mat, xs, ys, xd, yd) {
        let n = mat.length;
        let m = mat[0].length;

        // Source ya destination blocked ho
        if (mat[xs][ys] === 0 || mat[xd][yd] === 0) {
            return -1;
        }

        let visited = Array.from({ length: n }, () => Array(m).fill(false));

        function dfs(x, y) {
            if (x === xd && y === yd) {
                return 0;
            }

            visited[x][y] = true;

            let maxLen = -1;

            let dx = [-1, 1, 0, 0];
            let dy = [0, 0, -1, 1];

            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < m &&
                    mat[nx][ny] === 1 &&
                    !visited[nx][ny]
                ) {
                    let path = dfs(nx, ny);

                    if (path !== -1) {
                        maxLen = Math.max(maxLen, path + 1);
                    }
                }
            }

            visited[x][y] = false; // Backtracking

            return maxLen;
        }

        return dfs(xs, ys);
    }
}