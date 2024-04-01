let getRandomPokemonButtonHTML = document.querySelector("#getRandomPokemonButton");
getRandomPokemonButtonHTML.addEventListener("click", function () {
    console.log("Fetching random pokemon...")

    let fetchResult = fetch("https://pokeapi-ptvv.onrender.com/pokemon/team")

    // console.log(fetchResult)

    let jsonPromise = fetchResult.then(function (response) {
        let json = response.json()
        return json
    })
    jsonPromise.then(function (data) {
        console.log(data)
        for (let i = 0; i < 6; i++) {
            let pokemon = data[i]
            console.log(pokemon)

            let pokemonCardHTMLs = document.getElementsByClassName("pokemonCard")
            let pokemonCardHTML = pokemonCardHTMLs[i]
            pokemonCardHTML.innerHTML = null //erase the current content of the pokemon card

            let pokemonCardImg = document.createElement("img")
            pokemonCardImg.src = pokemon.image_url

            let pokemonCardTitle = document.createElement("h3")
            pokemonCardTitle.innerHTML = pokemon.title
            pokemonCardTitle.className = "pokemonName"

            let pokemonCardFooter = document.createElement("div")
            pokemonCardFooter.className = "footer"

             if (pokemon.type == "Fire") {pokemonCardFooter.style.backgroundColor = "red"}
             if (pokemon.type == "Grass") {pokemonCardFooter.style.backgroundColor = "green"}
             if (pokemon.type == "Electric") {pokemonCardFooter.style.backgroundColor = "yellow"}
             if (pokemon.type == "Water") {pokemonCardFooter.style.backgroundColor = "blue"}
             if (pokemon.type == "Fairy") {pokemonCardFooter.style.backgroundColor = "pink"}
             if (pokemon.type == "Bug") {pokemonCardFooter.style.backgroundColor = "black"}
             if (pokemon.type == "Poison") {pokemonCardFooter.style.backgroundColor = "purple"}
             if (pokemon.type == "Ground") {pokemonCardFooter.style.backgroundColor = "brown"}
             if (pokemon.type == "Normal") {pokemonCardFooter.style.backgroundColor = "brown"}

            let pokemonCardType = document.createElement("div")
            pokemonCardType.className = "pokemonType"

            let pokemonCardTypeValue = document.createElement("h3")
            pokemonCardTypeValue.innerHTML = pokemon.type

            pokemonCardType.appendChild(pokemonCardTypeValue)
            pokemonCardFooter.appendChild(pokemonCardType)



            pokemonCardHTML.appendChild(pokemonCardImg)
            pokemonCardHTML.appendChild(pokemonCardTitle)
            pokemonCardHTML.appendChild(pokemonCardFooter)
        }
    })
    
    // fetch("https://pokeapi-ptvv.onrender.com/pokemon/team")
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(data){
    //      console.log(data)
    // })

})
