class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) return false;
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) return false;
        node = node.children[char];
      }
      return true;
    }
  
    _collectWords(node, prefix, results) {
      if (node.isEndOfWord) results.push(prefix);
      for (let char in node.children) {
        this._collectWords(node.children[char], prefix + char, results);
      }
    }
  
    autoComplete(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) return [];
        node = node.children[char];
      }
      let results = [];
      this._collectWords(node, prefix, results);
      return results;
    }
  
    // Count all words in the trie
    _countWordsRecursive(node) {
      let count = 0;
      if (node.isEndOfWord) count++;
      for (let char in node.children) {
        count += this._countWordsRecursive(node.children[char]);
      }
      return count;
    }
  
    countWords() {
      return this._countWordsRecursive(this.root);
    }
  }
  
  const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("apex");
trie.insert("bat");
trie.insert("bath");
trie.insert("batman");


console.log("=== Search ===");
console.log(trie.search("app"));        // true
console.log(trie.search("apple"));      // true
console.log(trie.search("ap"));         // false
console.log(trie.search("batman"));     // true
console.log(trie.search("bats"));       // false

console.log("\n=== Auto Complete ===");
console.log(trie.autoComplete("ap"));   // ["apple", "app", "apex"]
console.log(trie.autoComplete("bat"));  // ["bat", "bath", "batman"]
console.log(trie.autoComplete("b"));    // ["bat", "bath", "batman"]
console.log(trie.autoComplete("z"));    // []



console.log(trie.countWords());         // 6 (total inserted words) 
