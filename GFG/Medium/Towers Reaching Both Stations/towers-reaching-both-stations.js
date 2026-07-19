class Solution {
    countCoordinates(mat) {
        // code here
        let n = mat.length;
        let m = mat[0].length;

        let p = Array.from({ length: n }, () => Array(m).fill(false));
        let q = Array.from({ length: n }, () => Array(m).fill(false));

        const dir = [[1,0],[-1,0],[0,1],[0,-1]];

        function dfs(r, c, vis) {
            vis[r][c] = true;

            for (let [dr, dc] of dir) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < m &&
                    !vis[nr][nc] &&
                    mat[nr][nc] >= mat[r][c]
                ) {
                    dfs(nr, nc, vis);
                }
            }
        }

        // Station P (Top row + Left column)
        for (let i = 0; i < n; i++) dfs(i, 0, p);
        for (let j = 0; j < m; j++) dfs(0, j, p);

        // Station Q (Bottom row + Right column)
        for (let i = 0; i < n; i++) dfs(i, m - 1, q);
        for (let j = 0; j < m; j++) dfs(n - 1, j, q);

        let ans = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (p[i][j] && q[i][j]) ans++;
            }
        }

        return ans;
    }
}