async function getPokemons() {
    const response = await fetch("pokemon.json")
    const pokemons = await response.json()
    return pokemons
}

getPokemons().then(pokemons => {
    const htmlContent = pokemons.map(pokemon => generateHtml(pokemon)).join("")
    document.body.innerHTML = `<div class="container">${htmlContent}</div>`
})

function generateHtml(pokemon) {
    return   `  <div class="grid-items">
                    <div class="pokemon-id">${pokemon.id}</div>
                    <div class="pokemon-name">${pokemon.name.english}</div>
                    <div class="pokemon-type">${pokemon.type.join(" / ")}</div>
                    <div class="pokemon-stat">HP: ${pokemon.base.HP}</div>
                    <div class="pokemon-stat">Attack: ${pokemon.base.Attack}</div>
                    <div class="pokemon-stat">Defense: ${pokemon.base.Defense}</div>
                    <div class="pokemon-stat">Speed: ${pokemon.base.Speed}</div>
                    <div class="pokemon-aname">${pokemon.name.japanese}</div>
                    <div class="pokemon-aname">${pokemon.name.chinese}</div>
                    <div class="pokemon-aname">${pokemon.name.french}</div>
                </div>`
}