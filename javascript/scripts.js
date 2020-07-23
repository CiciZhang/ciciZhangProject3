const teacup = {}

teacup.clearInput = () => $('#userInput').val("")
// this function clears the user input



teacup.listener = function () {
   
    $('#submitButton').on('click', function (event) {
        event.preventDefault()
        const userInput = $('#userInput').val()
        // console.log(userInput, 'userInput works') CC GET RID OF THIS 
        $('.result').append(`<p>${userInput}</p> <p>YOU CAN DO IT!</p>`)
        teacup.clearInput()
       console.log(typeof(userInput)) 
       // user input is a string 

    })

} 


// document ready 
$(function(){
    teacup.listener()
})