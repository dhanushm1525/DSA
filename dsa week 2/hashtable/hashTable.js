class HashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    hash(key){
        let total =0
        for(let i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }


    
    set(key,value){
        let index = this.hash(key)
        this.table[index] =  value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }


    remove(key){
        let index = this.hash(key)
        this.table[index]=undefined
    }


    display(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
        }
    }
}

const table = new HashTable(10)

table.set("in","india")
table.set("age",72)
table.set("aus","ausies")
table.set("macro","moonji")

console.log(table.get('age'));

