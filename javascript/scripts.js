const teacup = {}

teacup.listener = function () {
   
    $('#submitButton').on('click', function (event) {
        event.preventDefault()
        // console.log('click works!')  CC GET RID OF THIS
        const userInput = $('#userInput').val()
        console.log(userInput, 'userInput works')

    $('.result').html(`<p>${userInput}</p> <p>YOU CAN DO IT!</p>`)

    // next time work on randomizer and also regex for text input 
    // error handling 

    })

} 


// document ready 
$(function(){
    teacup.listener()
})