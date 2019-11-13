const fetch = require('node-fetch')


const callCounter = () => {
    fetch('http://192.168.20.104/api/xdevices.json')
    .then(res => res.json())
    .then(json => console.log(json))
}


callCounter()
setTimeout(callCounter, 10000) // pour l'instant ça fait l'appel toutes les 10 secondes pour le test mais faudra mettre un truc genre toutes les 10min
