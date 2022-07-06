

async function envia() {
    var pokemon = document.querySelector("input").value;
    let dados = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
   .then(resposta => resposta.json())
   .catch( _ => alert(`Não existe um pokemon com o nome ${pokemon}`));
   let dadospokemon = await dados
   console.log(dadospokemon);
   le_dados(dadospokemon);

}
function le_dados(card) {
    
    document.getElementById("Nome").innerHTML = card.name;
    document.getElementById("Peso").innerHTML = card.weight + " lbs";
    document.querySelector("img").src = card.sprites.front_default;
    document.getElementById("Habilidade1").innerHTML = card.abilities[0].ability.name;
    document.getElementById("Habilidade2").innerHTML = card.abilities[1].ability.name;
    document.getElementById("HP").innerHTML = card.stats[0].base_stat;
    document.getElementById("Ataque").innerHTML = card.stats[1].base_stat;
    document.getElementById("Defesa").innerHTML = card.stats[2].base_stat;
    document.getElementById("Ataque especial").innerHTML = card.stats[3].base_stat;
    document.getElementById("Defesa especial").innerHTML = card.stats[4].base_stat;
    document.getElementById("Velocidade").innerHTML = card.stats[5].base_stat;
    document.getElementById("XPbase").innerHTML = card.base_experience;
    document.getElementById("Tipo").innerHTML = card.types[0].type.name;
      
    //const img = document.querySelector("img");
     
}
function mudacss() {
    var pokedex = document.querySelectorAll("div");
    const poke = pokedex[1];
    poke.classList.remove("escondido");
    poke.classList.add("ativado");


} 

