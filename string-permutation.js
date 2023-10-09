//using backtracking https://learnersbucket.com/examples/algorithms/program-to-print-all-the-permutation-of-string/
//ServiceNow question
let findPermutations = (string) => {
    if (!string || typeof string !== "string") {
        return "Please enter a string"
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        if (string.indexOf(char) != i) //if char is repeating then dont permute agiain eg: aabc
            continue

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}

findPermutations("abc") //output -> ["abc", "acb", "bac", "bca", "cab", "cba"]