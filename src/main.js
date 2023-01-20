const sequentialSearch = (nums, n) => {
    for (let i = 0; i < nums.length; i++) {
        if (n === nums[i]) {
            return true
        }
    }
    return false
}

const getRandomSequence = () => {
    let maxDigits = document.getElementById('maxDigits').value
    var randomSequence = ''
    var used = []
    let count = 0
    while (count < maxDigits) {
        let digit = Math.floor(Math.random() * 7).toString()
        if (!sequentialSearch(used, digit)) {
            randomSequence += digit
            used.push(digit)
            count++
        } else {
            digit = Math.floor(Math.random() * 7).toString()
        }
    }
    console.log(randomSequence)
    document.getElementById("randomSequence").innerHTML = randomSequence
    return randomSequence;
}

const compareUserInput = () => {
    var guess = document.getElementById("userGuess").value
    var randomSequence = document.getElementById("randomSequence").innerHTML
    let rightNumberWrongPosition = 0
    let rightNumberRightPosition = 0

    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < randomSequence; j++) {
            if (guess.charAt(i) === randomSequence.charAt(j)) {
                if (i === j) {
                    rightNumberRightPosition++;
                } else {
                    rightNumberWrongPosition++;
                }
            }
        }
    }
    console.log(`Numeros certos na posicao certa ${rightNumberRightPosition}`)
    console.log(`Numeros certos na posicao errada ${rightNumberWrongPosition}`)
    
    let rightNumberRightPositionSpan = document.getElementById("rightNumbersRightPosition")
    rightNumberRightPositionSpan.innerHTML = rightNumberRightPosition
    let rightNumberWrongPositionSpan = document.getElementById("rightNumbersWrongPosition")
    rightNumberWrongPositionSpan.innerHTML = rightNumberWrongPosition

}