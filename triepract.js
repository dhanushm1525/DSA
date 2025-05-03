class Node{
    constructor(){
        this.children = {}
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            } 
            node = node.children[char]
        }
        return node.isEnd
    }

    startswith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char]
        }
        return true
    }
    collectWords(node,prefix,results){
        if(node.isEnd) results.push(prefix)
            for(let char in node.children){
                this.collectWords(node.children[char],prefix+char,results)
            }
    }

    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }
        let results = []
        this.collectWords(node,prefix,results)
        return results
    }

    countWords(node){
        let count = 0;
        if(node.isEnd) count++
        for(let char in node.children){
            count+= this.countWords(node.children[char])
        }
        return count
    }

    count(){
        return this.countWords(this.root)
    }
}


const triee = new Trie()

triee.insert('like')
triee.insert('lie')
triee.insert('love')
triee.insert('live')

// console.log(triee.search('love'));
console.log(triee.startswith('li'));
// console.log(triee.startswith('k'));
console.log("====================================");


console.log(triee.autoComplete('li'));

console.log(triee.count());






