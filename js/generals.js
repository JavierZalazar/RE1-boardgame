const listitemBox = document.querySelector("#item-box");
const listReserve = document.querySelector("#mercenarios");
const dangerLVL = document.querySelector("#dangerLVL");
const listNarrative = document.querySelector("#narrativeCards");
const listMision = document.querySelector("#misionCards");
let generals = [];

class General {
    constructor(itemBox, characterReserve, dangerlvl,narrativeCards,misionCards) {
        this.itemBox = itemBox,
        this.characterReserve = characterReserve;
        this.dangerlvl = dangerlvl;
        this.narrativeCards = narrativeCards;
        this.misionCards = misionCards;
    }
};

const testb = function (mansion) {
    const data = mansion;
    for (const general of data){
        generals.push(new General(general.itemBox,general.characterReserve,general.dangerlvl,general.narrativeCards,general.misionCards))
    }
    listitemBoxUI(generals);
    listReserveUI(generals);
    dangerLVLUI(generals);
    listNarrativeUI(generals);
    listMisionUI(generals);
  };

  const listitemBoxUI = (lista) => {
    for (const item of lista) {
        const itemBoxList = document.createElement("ul");
        itemBoxList.className = "list-group list-group-flush";
        item.itemBox.forEach(element => {
            itemBoxList.innerHTML += `
            <li class="list-group-item">${element}</li>
         `  
        });
        listitemBox.appendChild(itemBoxList);;
    }
}
  const listReserveUI = (lista) => {
    for (const character of lista) {
        const characterProfile = document.createElement("div");
        character.characterReserve.forEach(element => {
            characterProfile.innerHTML += `
            <div class="mercenario pb-3">
                <h3>${element.name}</h3>
                    <div class="row align-items-center">
                        <div class="mercenario-img col-4">
                            <img class="img-fluid rounded" src="./img/${element.id}.jpg" alt="${element.name}">
                        </div>
                        <div class="mercenario-life col-8">
                            <img class="img-fluid rounded" src="./img/${element.life}.jpg" alt="${element.name} ${element.life}">
                        </div>
                    </div>
            </div>
         `  
        });
         listReserve.appendChild(characterProfile);;
    }
}
  const dangerLVLUI = (lista) => {
    for (const danger of lista) {
        const dangerLvl = document.createElement("div");
        dangerLvl.innerHTML = `
        <h2 class="pb-1">Danger Level</h2>
        <h3 class="text-danger">${danger.dangerlvl}</h3>
         `
         dangerLVL.appendChild(dangerLvl);;
    }
}
  const listNarrativeUI = (lista) => {
    for (const narrative of lista) {
        const narrativeList = document.createElement("ul");
        narrativeList.className = "list-group list-group-flush";
        narrative.narrativeCards.forEach(element => {
            narrativeList.innerHTML += `
            <li class="list-group-item">${element}</li>
         `  
        });
         listNarrative.appendChild(narrativeList);
    }
}
  const listMisionUI = (lista) => {
    for (const mision of lista) {
        const misionList = document.createElement("ul");
        misionList.className = "list-group list-group-flush";
        mision.misionCards.forEach(element => {
            misionList.innerHTML += `
            <li class="list-group-item">${element}</li>
         `  
        });
         listMision.appendChild(misionList);
    }
}


//   testb()
  