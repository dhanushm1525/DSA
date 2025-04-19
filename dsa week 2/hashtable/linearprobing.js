class LinearProbingHashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size)
    }

    hashFunction(key) {
        return key % this.size;
    }

    insert(key) {
        let index = this.hashFunction(key);
        let originalIndex = index;
        let i = 1;

        // Linear probing: check next available slot
        while (this.table[index] !== null) {
            index = (originalIndex + i) % this.size;
            
            i++;
        }

        this.table[index] = key;
     
    }

    display() {
        console.log("Hash Table:", this.table);
    }
}

// Example usage
let lpHashTable = new LinearProbingHashTable(7);
lpHashTable.insert(50);
lpHashTable.insert(700);
lpHashTable.insert(76);
lpHashTable.insert(85); // Causes collision and probes next index
lpHashTable.display();





let originalindex = index
let i= 1;

while(this.table[index]!==null){
    index = (originalindex+i)%this.size
    i++
}