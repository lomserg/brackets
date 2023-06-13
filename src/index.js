module.exports = function check(str, bracketsConfig) {
    // your solution
const pairs = bracketsConfig.reduce((acc, cur) => {
    acc.push(cur.join(''))
    return acc
}, [])

console.log('pairs',pairs)
    //merge arrays
    const flat = bracketsConfig.reduce((acc, val) => {
        const [openBrackets, closeBrackets] = val
        acc.push(openBrackets)
        acc.push(closeBrackets)
        return acc
    }, [])
console.log('flat',flat)

    // parse open brackets
    const OPEN_BRACKETS = flat.reduce((acc, val, i) => {
        if(i % 2 == 0){
            acc.push(val)
            return acc
        }else{
            return acc
        }
    }, [])
  
    console.log('open',OPEN_BRACKETS)


    let stack = []
for(const curVal of str) {
   
    if(OPEN_BRACKETS.includes(curVal)){// if brackets === open
        if(pairs.includes(curVal + stack[stack.length - 1])){
            
            console.log('check',curVal + stack[stack.length - 1])
            stack.pop()
            console.log('stack 2 pop:',stack)
        } else{
            stack.push(curVal)
        }
    }else{ // if brackets !== open
        if(stack.length === 0) {
            return false
        }

        const topOfStack = stack[stack.length - 1]
     
        const validBrackets2 = topOfStack.concat(curVal);
        
        console.log('validBrackets2',validBrackets2)
        console.log('stack 3',stack)
        if(pairs.includes(validBrackets2)){
            stack.pop()
            console.log('stack 4',stack)
        }
    }

}


return stack.length === 0

  }

