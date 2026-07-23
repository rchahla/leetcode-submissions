class Node {

    constructor(key,val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     * @param {Node} node
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0,0)
        this.right = new Node(0,0)

        //left= LRU and right= MRU 
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node){
        let prev = node.prev;
        let nxt = node.next;

        prev.next = nxt;
        nxt.prev = prev;
    }

    insert(node){
        let rpointer = this.right;
        let prv = this.right.prev;
        prv.next = node;
        node.prev = prv;
        node.next = rpointer;
        rpointer.prev = node;

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)){
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).val
        } else{
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)){
            this.remove(this.cache.get(key));
        
        }
        this.cache.set(key, new Node(key,value));
        this.insert(this.cache.get(key))

        if (this.cache.size > this.cap){
            //remove and evict the LRU

            let lru = this.left.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }  
        
    }
}
