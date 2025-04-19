class DoubleHashingHashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    primaryHash(key) {
        return key % this.size;
    }

    secondaryHash(key) {
        let primeSmallerThanSize = this.size - 2; // Choose prime smaller than table size
        return primeSmallerThanSize - (key % primeSmallerThanSize);
    }

    insert(key) {
        let index = this.primaryHash(key);
        let stepSize = this.secondaryHash(key);
        let originalIndex = index;
        let i = 1;

        // Double hashing: rehashing with stepSize
        while (this.table[index] !== null) {
            console.log(`Collision at index ${index}, rehashing with step size ${stepSize}.`);
            index = (originalIndex + i * stepSize) % this.size;
            i++;
        }

        this.table[index] = key;
        console.log(`Inserted ${key} at index ${index}`);
    }

    display() {
        console.log("Hash Table:", this.table);
    }
}

// Example usage
let dhHashTable = new DoubleHashingHashTable(7);
dhHashTable.insert(50);
dhHashTable.insert(700);
dhHashTable.insert(76);
dhHashTable.insert(85); // Causes collision, uses double hashing
dhHashTable.display();
