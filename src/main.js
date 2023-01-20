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
    let randomSequence = ''
    let used = []
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

    let guess = document.getElementById("userGuess").value
    let randomSequence = document.getElementById("randomSequence").innerHTML
    let message = document.getElementById("message")
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

    if (rightNumberRightPosition === randomSequence.length) {
        message.innerHTML = "Voce venceu!"
        document.getElementById("userGuess").disabled = true
    }
    
    let rightNumberRightPositionSpan = document.getElementById("rightNumbersRightPosition")
    rightNumberRightPositionSpan.innerHTML = rightNumberRightPosition
    let rightNumberWrongPositionSpan = document.getElementById("rightNumbersWrongPosition")
    rightNumberWrongPositionSpan.innerHTML = rightNumberWrongPosition
    
}