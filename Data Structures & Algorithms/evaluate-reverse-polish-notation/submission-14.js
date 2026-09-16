class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "*" && tokens[i] !== "/") {
                stack.push(tokens[i])
            }
            else {
                if (tokens[i] === "+") {
                    let second = stack.pop()
                    let first = stack.pop()
                    stack.push(Number(first) + Number(second))
                }
                else if (tokens[i] === "-") {
                    let second = stack.pop()
                    let first = stack.pop()
                    stack.push(Number(first) - Number(second))
                }
                else if (tokens[i] === "*") {
                    let second = stack.pop()
                    let first = stack.pop()
                    stack.push(Number(first) * Number(second))
                }
                else {
                    let second = stack.pop()
                    let first = stack.pop()
                    stack.push(Math.trunc(Number(first) / Number(second)))
                }
            }
        }

        return stack.at(-1)
    }
}
