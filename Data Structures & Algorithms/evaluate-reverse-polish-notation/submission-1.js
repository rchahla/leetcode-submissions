class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let numStack = [];

        let operatorMap = {
            "+": (a,b)=>a+b,
            "-": (a,b)=>a-b,
            "*": (a,b)=>a*b,
            "/": (a,b)=> Math.trunc((a/b))
        }

        for (let token of tokens){

            if (token !== "+" && token !=="-" && token !== "*" && token !=="/"){
                 numStack.push(token)
                 continue;
            }else {
                let secondNum = parseInt(numStack.pop());
                let firstNum = parseInt(numStack.pop());

                let result = operatorMap[token](firstNum, secondNum);

                numStack.push(result);

            }
        }

        return numStack.pop();




    }
}
