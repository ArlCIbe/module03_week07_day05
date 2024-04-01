//Part 1-1
console.log("Index.js was linked successfully")

let showPunchlineButtonHTML = document.querySelector("#showPunchlineButton");
showPunchlineButtonHTML.addEventListener("click", function () {
    //Part 1-2

    //select the punchline element
    let punchlineHTML = document.getElementById("jokePunchline")

    //change the value of its visibility to visible
    punchlineHTML.style.visibility = "visible"


});



let refreshJokeButtonHTML = document.querySelector("#refreshJokeButton");
refreshJokeButtonHTML.addEventListener("click", function () {
    //Part 1-3
    console.log("Refreshing Joke..")
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)

            let jokeSetupHTML = document.getElementById("jokeSetup")
            jokeSetupHTML.innerHTML = data.setup

            //reset the value of the punchline html element
            let jokePunchlineHTMl = document.getElementById("jokePunchline")
            jokePunchlineHTMl.innerHTML = data.punchline



            jokePunchlineHTMl.style.visibility = ""
        })

});