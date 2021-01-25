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



    Promise.all([

        axios.get("http://192.168.43.117:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }).then((response2) => {

            fs.writeFileSync(`./img/cam13${now}.zip`,response2.data)


        }).catch((error) => {

            console.log('Error in cam102')
        })
        

    ]) .then(() => {

        res.render('final', {
            cam01:`Result: All images received. Please Check the img folder.`    
        })

    }).catch((err) => {

         console.log(err);

    })


app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
