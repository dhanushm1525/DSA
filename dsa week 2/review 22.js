

/*
([{}])
[{{))}
[[]{}()]
((())
[]{}()
{{{}}}



*/

function check(input) {
    let stack = []

    for (let i = 0; i < input.length; i++) {
        let char = input[i]

        if (char === '(' || char == '[' || char == '{') {
            stack.push(char)
        } else if (char === ')' || char == ']' || char == '}') {
            if (stack.length === 0) {
                return false
            }


            let top = stack.pop()

            if (
                char === ')' && top !== '(' ||
                char === ']' && top !== '[' ||
                char === '}' && top !== '{'

            ) {
                return false
            }

        }
        if (stack.length === 0) {
            return true
        }

    }


}


console.log(check('([{}])'));
console.log(check('[{{))}'));
console.log(check('[[]{}()]'));
console.log(check('((())'));
console.log(check('{{{}}}'));

