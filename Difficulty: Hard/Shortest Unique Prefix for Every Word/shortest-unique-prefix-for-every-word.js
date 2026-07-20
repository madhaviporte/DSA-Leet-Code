class Solution {
    findPrefixes(arr) {
        // code here
         class TrieNode {
            constructor() {
                this.children = {};
                this.count = 0;
            }
        }

        let root = new TrieNode();

        // Insert function
        function insert(word) {
            let curr = root;

            for (let ch of word) {
                if (!curr.children[ch]) {
                    curr.children[ch] = new TrieNode();
                }
                curr = curr.children[ch];
                curr.count++;
            }
        }

        // Get shortest unique prefix
        function getPrefix(word) {
            let curr = root;
            let prefix = "";

            for (let ch of word) {
                curr = curr.children[ch];
                prefix += ch;

                if (curr.count === 1) {
                    return prefix;
                }
            }

            return prefix;
        }

        // Insert all words
        for (let word of arr) {
            insert(word);
        }

        // Find prefixes
        let ans = [];
        for (let word of arr) {
            ans.push(getPrefix(word));
        }

        return ans;
    }
}