const fs = require('fs')
const path = require('path')
const express = require('express')
const axios = require('axios')
const hbs = require('hbs')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {

    res.render('index')

})

//For timestamp
const date = new Date()
const now = date.getTime()

app.get('/shoot', (req,res) => {

    Promise.all([

        fetch("http://192.168.43.116:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }).then((response1) => {

            fs.writeFileSync(`./img/cam01${now}.zip`,response1.data)


        }).catch((error) => {

            console.log('Error in cam116')
        }),


        fetch("http://192.168.43.122:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response2) => {

            fs.writeFileSync(`./img/cam02${now}.zip`,response2.data)


        }).catch((error) => {

            console.log('Error in cam122')
        })


   ])
        .then((value) => {

            res.render('final', {
                cam01:`cam01: ${value.response1.statusText}`,
                cam02:`cam02: ${value.response2.statusText}`
                
            })
        })
        .catch((err) => {
            console.log(err);
        });
}) 