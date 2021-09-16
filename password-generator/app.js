const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '?']

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const charactersEl = document.getElementById('characters')
const copyBtn = document.getElementById('copyelement')
const generateBtn = document.getElementById('generate')

const passwordKeys = {
    lower: getLowercase,
    upper: getUppercase,
    number: getNumbers,
    character: getCharacters
}

generateBtn.addEventListener('click', () => {

    const length = lengthEl.value
    const isLower = lowercaseEl.checked
    const isUpper = uppercaseEl.checked
    const isNumber = numbersEl.checked
    const isCharacter = charactersEl.checked

    resultEl.innerText = createPassword(length, isLower, isUpper, isNumber, isCharacter)
})

function createPassword(length, lower, upper, number, character) {
    let createdPassword = ''

    const passwordOptions = lower + upper + number + character

    const passwordOptionsArr = [{ lower }, { upper }, { number }, { character }].filter(item => Object.values(item)[0])

    for (let i = 0; i < length; i += passwordOptions) {
        passwordOptionsArr.forEach(item => {
            const passwordFunc = Object.keys(item)[0]
            createdPassword += passwordKeys[passwordFunc]()
        })
    }

    const finalPassword = createdPassword.slice(0, length)

    return finalPassword
}

/*
copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }

    textarea.value = password

    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password is copied to the clipboard!')
})
*/

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('The clipboard now contains the password')
})


function getUppercase() {
    return uppercase[Math.floor(Math.random() * 26)]
}

function getLowercase() {
    return lowercase[Math.floor(Math.random() * 26)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * 10)]
}

function getCharacters() {
    return characters[Math.floor(Math.random() * 13)]
}