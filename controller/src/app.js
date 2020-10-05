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
        
        axios.get("http://192.168.43.103:3000/capture", {  

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

        axios.get("http://192.168.43.106:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.107:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.108:3000/capture", {  

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

        axios.get("http://192.168.43.112:3000/capture", {  

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

        axios.get("http://192.168.43.116:3000/capture", {  

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
            
        }),

        axios.get("http://192.168.43.122:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.123:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.124:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.125:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.126:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.127:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.128:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.129:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.130:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.131:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.132:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.133:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.134:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.135:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.136:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.137:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.138:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.139:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.140:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.141:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.142:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.143:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.144:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.145:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.146:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.147:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.148:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.149:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        }),

        axios.get("http://192.168.43.150:3000/capture", {  

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',
            
        })

    ]).then(axios.spread((response1, response2, response3, response4, response5, response6, response7, response8, response9, response10,
        response11, response12, response13, response14, response15, response16, response17, response18, response19, response20,
        response21, response22, response23, response24, response25, response26, response27, response28, response29, response30,
        response31, response32, response33, response34, response35, response36, response37, response38, response39, response40,
        response41, response42, response43, response44, response45, response46, response47, response48, response49, response50) => {

        //saving to local storage
        fs.writeFileSync(`./img/cam01${now}.zip`,response1.data) 
        fs.writeFileSync(`./img/cam02${now}.zip`,response2.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response3.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response4.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response5.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response6.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response7.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response8.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response9.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response10.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response11.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response12.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response13.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response14.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response15.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response16.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response17.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response18.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response19.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response20.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response21.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response22.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response23.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response24.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response25.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response26.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response27.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response28.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response29.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response30.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response31.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response32.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response33.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response34.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response35.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response36.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response37.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response38.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response39.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response40.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response41.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response42.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response43.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response44.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response45.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response46.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response47.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response48.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response49.data)
        fs.writeFileSync(`./img/cam02${now}.zip`,response50.data)
        

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
            cam15:`cam15: ${response15.statusText}`,
            cam16:`cam16: ${response16.statusText}`,
            cam17:`cam17: ${response17.statusText}`,
            cam18:`cam18: ${response18.statusText}`,
            cam19:`cam19: ${response19.statusText}`,
            cam20:`cam20: ${response20.statusText}`,
            cam21:`cam21: ${response21.statusText}`,
            cam22:`cam22: ${response22.statusText}`,
            cam23:`cam23: ${response23.statusText}`,
            cam24:`cam24: ${response24.statusText}`,
            cam25:`cam25: ${response25.statusText}`,
            cam26:`cam26: ${response26.statusText}`,
            cam27:`cam27: ${response27.statusText}`,
            cam28:`cam28: ${response28.statusText}`,
            cam29:`cam29: ${response29.statusText}`,
            cam30:`cam30: ${response30.statusText}`,
            cam31:`cam31: ${response31.statusText}`,
            cam32:`cam32: ${response32.statusText}`,
            cam33:`cam33: ${response33.statusText}`,
            cam34:`cam34: ${response34.statusText}`,
            cam35:`cam35: ${response35.statusText}`,
            cam36:`cam36: ${response36.statusText}`,
            cam37:`cam37: ${response37.statusText}`,
            cam38:`cam38: ${response38.statusText}`,
            cam39:`cam39: ${response39.statusText}`,
            cam40:`cam40: ${response40.statusText}`,
            cam41:`cam41: ${response41.statusText}`,
            cam42:`cam42: ${response42.statusText}`,
            cam43:`cam43: ${response43.statusText}`,
            cam44:`cam44: ${response44.statusText}`,
            cam45:`cam45: ${response45.statusText}`,
            cam46:`cam46: ${response46.statusText}`,
            cam47:`cam47: ${response47.statusText}`,
            cam48:`cam48: ${response48.statusText}`,
            cam49:`cam49: ${response49.statusText}`,
            cam50:`cam50: ${response50.statusText}`

        })
        
        
    })).catch(error => {
        console.log(error)
    })


})




app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})
