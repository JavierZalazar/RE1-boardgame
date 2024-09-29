const data = new Promise((resolve, reject) => {
    fetch('../data/character.json')
    .then(response => response.json())
    .then(data => test(data))
    .catch(error => console.log(error));
    })


const data2 = new Promise((resolve, reject) => {
    fetch('../data/campaingInfo.json')
    .then(response => response.json())
    .then(data => testb(data))
    .catch(error => console.log(error));
    })
