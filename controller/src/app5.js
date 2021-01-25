const fs = require('fs')
const path = require('path')
const express = require('express')
const axios = require('axios')
const hbs = require('hbs')
const camNum = Number(119)

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



    Promise.all([

        axios.get(`http://192.168.43.${camNum}:3000/capture`,{

            headers: {
            Accept: 'application/json',
            }

        }).then((response100) => {

            console.log(response100.data)


        }).catch((error) => {

            console.log(error)
        })

    ]) 

    //Lot one
    function lot1(){
        Promise.all([
            axios.get(`http://192.168.43.${camNum}:3000/image`,{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response100) => {

                fs.writeFileSync(`./img/cam ${camNum}.zip`,response100.data)

            }).catch(() => {

                console.log(`Error in ${camNum}`)
            })

        ]).then(() =>{

            console.log('Lot Completed')
        })      
            
    }

   

 setTimeout(lot1,15000)


app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})