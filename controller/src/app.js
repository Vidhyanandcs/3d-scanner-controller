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

app.get('/test', (req,res) => {

    //Get request for testing
    axios.all([

        axios.get("http://192.168.43.100:3000/test"), 
        
        axios.get("http://192.168.43.102:3000/test"),

        axios.get("http://192.168.43.101:3000/pattern")

    ]).then(axios.spread((response1, response2) => {

        res.render('final', {
            cam01:`cam01: ${response1.data}`,
            cam02:`cam02: ${response2.data}`
        })
        
        
    })).catch(error => {
        console.log(error)
    })

})

app.get('/shoot', (req,res) => {


    axios.all([

        axios.get("http://192.168.43.102:3000/capture", {  

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

        }), 
        
        
        axios.get("http://192.168.43.104:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.105:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.109:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.110:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.111:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),


        axios.get("http://192.168.43.113:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.114:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.115:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),


        axios.get("http://192.168.43.117:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.118:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.119:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.120:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.121:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        })

        

    ]).then(axios.spread((response1, response2, response3, response4, response5, response6, response7, response8, response9, response10,
        response11, response12, response13, response14, response15) => {

        //saving to local storage
        fs.writeFileSync(`./img/cam01${now}.zip`,response1.data) 
        fs.writeFileSync(`./img/cam02${now}.zip`,response2.data)
        fs.writeFileSync(`./img/cam03${now}.zip`,response3.data)
        fs.writeFileSync(`./img/cam04${now}.zip`,response4.data)
        fs.writeFileSync(`./img/cam05${now}.zip`,response5.data)
        fs.writeFileSync(`./img/cam06${now}.zip`,response6.data)
        fs.writeFileSync(`./img/cam07${now}.zip`,response7.data)
        fs.writeFileSync(`./img/cam08${now}.zip`,response8.data)
        fs.writeFileSync(`./img/cam09${now}.zip`,response9.data)
        fs.writeFileSync(`./img/cam10${now}.zip`,response10.data)
        fs.writeFileSync(`./img/cam11${now}.zip`,response11.data)
        fs.writeFileSync(`./img/cam12${now}.zip`,response12.data)
        fs.writeFileSync(`./img/cam13${now}.zip`,response13.data)
        fs.writeFileSync(`./img/cam14${now}.zip`,response14.data)
        fs.writeFileSync(`./img/cam15${now}.zip`,response15.data)
        
        

        res.render('final', {
            cam01:`cam01: ${response1.statusText}`,
            cam02:`cam02: ${response2.statusText}`,
            cam03:`cam03: ${response3.statusText}`,
            cam04:`cam04: ${response4.statusText}`,
            cam05:`cam05: ${response5.statusText}`,
            cam06:`cam06: ${response6.statusText}`,
            cam07:`cam07: ${response7.statusText}`,
            cam08:`cam08: ${response8.statusText}`,
            cam09:`cam09: ${response9.statusText}`,
            cam10:`cam10: ${response10.statusText}`,
            cam11:`cam11: ${response11.statusText}`,
            cam12:`cam12: ${response12.statusText}`,
            cam13:`cam13: ${response13.statusText}`,
            cam14:`cam14: ${response14.statusText}`,
            cam15:`cam15: ${response15.statusText}`
            

        })
        
        
    })).catch(error => {
        console.log(error)
    })


})




app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
