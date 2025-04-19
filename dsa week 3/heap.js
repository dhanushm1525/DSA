class Heap {
    constructor(type = "min") {
      this.heap = [];
      this.type = type; // 'min' or 'max'
    }
  
    // Helper comparator
    compare(a, b) {
      if (this.type === "min") return a < b;
      return a > b;
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.compare(this.heap[index], this.heap[parent])) {
          [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
          index = parent;
        } else {
          break;
        }
      }
    }
  
    extract() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return top;
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
  
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let candidate = index;
  
        if (left < length && this.compare(this.heap[left], this.heap[candidate])) {
          candidate = left;
        }
  
        if (right < length && this.compare(this.heap[right], this.heap[candidate])) {
          candidate = right;
        }
  
        if (candidate === index) break;
  
        [this.heap[index], this.heap[candidate]] = [this.heap[candidate], this.heap[index]];
        index = candidate;
      }
    }
  
    // Heap sort (descending for max-heap, ascending for min-heap)
    static heapSort(arr, type = "min") {
      const heap = new Heap(type);
      for (let item of arr) {
        heap.insert(item);
      }
  
      const sorted = [];
      while (heap.heap.length > 0) {
        sorted.push(heap.extract());
      }
  
      return sorted;
    }
  }
  