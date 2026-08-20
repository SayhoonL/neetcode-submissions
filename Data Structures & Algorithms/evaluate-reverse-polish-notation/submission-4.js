class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
      if (
        token !== "+" &&
        token !== "-" &&
        token !== "*" &&
        token !== "/"
      ) {
        stack.push(Number(token));
        continue;
      }

      const second = stack.pop();
      const first = stack.pop();

      if (token === "+") {
        stack.push(first + second);
      } else if (token === "-") {
        stack.push(first - second);
      } else if (token === "*") {
        stack.push(first * second);
      } else if (token === "/") {
        stack.push(Math.trunc(first / second));
      }
    }

    return stack[0];
  }
}