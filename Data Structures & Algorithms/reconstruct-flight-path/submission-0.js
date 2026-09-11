class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let map = new Map()

        for(let [f,t] of tickets){
            if(!map.has(f)){
                map.set(f,[])
            }
            map.get(f).push(t)
        }

        for(let destinations of map.values()){
            destinations.sort().reverse()
        }

        let result = []

        function dfs(airport){
            let destinations = map.get(airport)
            while(destinations && destinations.length > 0){
                let next = destinations.pop()
                dfs(next)
            }
            result.push(airport)
        }


        dfs("JFK")

        return result.reverse()



    }
}
