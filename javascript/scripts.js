const teacup = {}

teacup.phrases = [
    "You got this!",
    // `YES YOU ${word}`,
    // `I'm sure you ${word}, believe in yourself!`,
    "Believe in the me who believes in you.",
    // `Yes you ${word} but please remember to take care of yourself!`,
    "KEEP GOING!!!"
]

// console.log(teacup.phrases[0])

// Get words splits the userInput strings into an array

// console.log(teacup.phrases.length)

// clearInput() method clears the user input
teacup.clearInput = () => $('#userInput').val("")

teacup.stringToWords = myStr => myStr.split(" ")

// listener() method waits for a click then it adds the user's input to the history box before clearing the input field.
teacup.listener = function () {
    $('#submitButton').on('click', function (event) {
        event.preventDefault()
        teacup.userInput = $('#userInput').val()
        const arr = teacup.stringToWords(teacup.userInput)
        console.log(arr)
        $('.result').append(`<p>${teacup.userInput}</p> <p>YOU CAN DO IT!</p>`)
        
        // stringToWords[0]
        // console.log(stringToWords[0])
        teacup.clearInput()
    })
} 



teacup.init = () => {
    teacup.listener()
}

// document ready 
$(function(){
    console.log(teacup.phrases)
    teacup.init()
    teacup.userInput = $('#userInput').val()
    console.log(teacup.userInput)
})

