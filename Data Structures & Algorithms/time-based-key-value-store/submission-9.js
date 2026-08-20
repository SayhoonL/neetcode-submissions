class TimeMap {
    constructor() {
        this.keyStore = new Map();
        this.timeStamp = 0
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const newKey = `${key}|${timestamp}`
        console.log("set",newKey)
        this.keyStore.set(newKey, value)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const newKey = `${key}|${timestamp}`
        console.log("get",newKey)
        if(this.keyStore.get(newKey) !== undefined){
            return this.keyStore.get(newKey)
        }
        else{
            for(let i = timestamp; i >= 0; i--){
                const newKey = `${key}|${i}`
                if(this.keyStore.get(newKey) !== undefined){
                    return this.keyStore.get(newKey)
                }
            }
        }

        return ""
    }
}
