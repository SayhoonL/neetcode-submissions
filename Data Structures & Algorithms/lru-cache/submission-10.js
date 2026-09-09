class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            let value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,value)
            return this.map.get(key)
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key)
        }
        this.map.set(key,value)
        
        if(this.map.size > this.size){
            this.map.delete(this.map.keys().next().value)
        }

    }
}
