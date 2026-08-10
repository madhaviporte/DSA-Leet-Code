/**
 * @param {number[]} parent
 * @param {number[]} nums
 * @return {number}
 */
var weightedSum = function(parent, nums) {
    const n = nums.length;

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < n; i++) {
    const parentNode = parent[i] + 1;
    const currentNode = i + 1;

    graph[parentNode].push([currentNode, -1]);
}

function calculateHeight(graph, node, depth) {
    let height = 0;

    for (const child of graph[node]) {
        child[1] = depth;

        const childHeight = calculateHeight(
            graph,
            child[0],
            depth + 1
        );

        height = Math.max(height, childHeight + 1);
    }

    return height;
}

const height = calculateHeight(graph, 0, 1);

function calculateWeight(graph, node, nums, height) {
    let sum = 0;

    for (const child of graph[node]) {
        const childNode = child[0];
        const depth = child[1];

        sum += nums[childNode - 1] * (height - depth + 1);

        sum += calculateWeight(
            graph,
            childNode,
            nums,
            height
        );
    }

    return sum;
}

return calculateWeight(graph, 0, nums, height);
};