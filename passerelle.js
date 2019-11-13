//N'oublie de npm install ;)
//pour run le projet : 'node passerelle.js' dans un cmd
const fetch = require('node-fetch')
const mqtt = require('mqtt')


//Questionne le compteur

const callCounter = () => {
    fetch('http://192.168.20.104/api/xdevices.json')
        .then(res => res.json())
        .then(json => {
            var message = json
            console.log(json)
        })
}

callCounter()
setTimeout(callCounter, 10000) // pour l'instant ça fait l'appel toutes les 10 secondes pour le test mais faudra mettre un truc genre toutes les 10min

// Envoie la réponse au mosquitto
//J'ai utiliser cette librairie https://github.com/mqttjs/MQTT.js
// Mais je l'ai pas bien implémenté donc bon courage !
host = 'localhost'
port = 1883
topic = 'report'
let client = mqtt.connect(host, port)
client.on('message', (topic, message) => {
    client.subscribe(topic,
        (err) => {
            if (!err) {
                client.publish(topic, 'coucou')
            }
        })
})







