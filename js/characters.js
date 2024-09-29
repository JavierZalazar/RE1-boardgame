const listCharacters = document.querySelector("#characters");
let characters = [];


class Character {
    constructor(name, life, inventory) {
        this.name = name,
            this.life = life;
        this.inventory = inventory;
    }
};



const test = function (characterslist) {
    const data = characterslist;
    for (const character of data) {
        characters.push(new Character(character.name, character.life, character.inventory))
    }
    charactersListUI(characters);
};


const charactersListUI = (game) => {
    for (const character of game) {
        const characterProfile = document.createElement("div");
        characterProfile.innerHTML = `
        <div class="character row">
            <div class="character-img col-5 text-center p-3">
                <h2 class="pb-1">Character</h2>
                <img class="img-fluid rounded" src="./img/${character.name}.jpg" alt="${character.name}">
            </div>
            <div class="character-info col-7 text-center p-3 ">
                <div class="character-life pb-4">
                    <h2 class="pb-1">Health Tracker</h2>
                    <img class="img-fluid rounded" src="./img/${character.life}.jpg" alt="${character.name} ${character.life}">
                </div>
                <div class="character-inventory row justify-content-evenly">
                    <h2 class="pb-3">Inventory</h2>
                    <div class="card col-6" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${character.inventory[0]}</li>
                            <li class="list-group-item">${character.inventory[1]}</li>
                            <li class="list-group-item">${character.inventory[2]}</li>
                            <li class="list-group-item">${character.inventory[3]}</li>
                        </ul>
                    </div>
                    <div class="card col-6" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${character.inventory[4]}</li>
                            <li class="list-group-item">${character.inventory[5]}</li>
                            <li class="list-group-item">${character.inventory[6]}</li>
                            <li class="list-group-item">${character.inventory[7]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         `
        listCharacters.appendChild(characterProfile);;
    }
}
