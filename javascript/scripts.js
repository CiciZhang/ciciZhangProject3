const teacup = {}



// clearInput() method clears the user input
teacup.clearInput = () => $('#userInput').val("")

//Splits a string into individual words separated by a space
teacup.stringToWords = myStr => myStr.split(" ")

//Randomizer function that gives me a number between 0 and the length of the teacup.phrases array
teacup.getChosenPhrase = () => {
    const arr = teacup.stringToWords(teacup.userInput)
    const word = arr[0]
    if (word === ''){
        return 'There is a huge spaaaaaaaaaaaaaace'
    } else if (!((word.toLowerCase() === "will") || (word.toLowerCase() === "can"))) {
        console.log(typeof word.toLowerCase())
        return 'I am confused.'
    } 

    teacup.phrases = [
        "You got this!",
        `YES YOU ${word.toUpperCase()}`,
        `I'm sure you ${word.toLowerCase()}, believe in yourself!`,
        "Believe in the me who believes in you.",
        `Yes you ${word.toLowerCase()} but please remember to take care of yourself!`,
        "KEEP GOING!!!"
    ]
    const ranIndex = Math.floor(Math.random() * teacup.phrases.length)
    // 
    
    return teacup.phrases[ranIndex]
}

// listener() method waits for a click then it adds the user's input to the history box before clearing the input field.
teacup.listener = function () {
    $('#submitButton').on('click', function (event) {
        event.preventDefault()
        teacup.userInput = $('#userInput').val()
        // error function here 
        const myFinalPhrase = teacup.getChosenPhrase(teacup.phrases)
        $('.result').append(`<p>${teacup.userInput}</p> <p>${myFinalPhrase}</p>`)
      
        teacup.clearInput()
    })
} 



teacup.init = () => {
    teacup.listener()
}

// document ready 
$(function(){
    teacup.init()
    teacup.userInput = $('#userInput').val()
})

