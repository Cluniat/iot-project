//N'oublie de npm install ;)
//pour run le projet : 'node passerelle.js' dans un cmd

const fetch = require('node-fetch')
const mqtt = require('mqtt')

let client = mqtt.connect({host: 'localhost', port: 1883})

client.on('connect', () => {
    console.log("____Connected to mosquitto ____")
    setInterval(publishLoop, 5000)
})

const publishLoop = () => {
    console.log("publishing to mosquitto")
    fetch('http://192.168.20.104/api/xdevices.json')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // uncomment to test mosquitto reception
            // client.subscribe('linky')
            client.publish('linky', JSON.stringify(json))
        })
}

// uncomment to test mosquitto reception

// client.on('message', (topic, message) => {
//     console.log(message.toString())
// })











