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

        axios.get("http://192.168.43.102:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }).then((response2) => {

            fs.writeFileSync(`./img/cam02${now}.zip`,response2.data)


        }).catch((error) => {

            console.log('Error in cam102')
        }),


        axios.get("http://192.168.43.103:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response3) => {

            fs.writeFileSync(`./img/cam03${now}.zip`,response3.data)


        }).catch((error) => {

            console.log('Error in cam103')
        }),

        axios.get("http://192.168.43.104:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response4) => {

            fs.writeFileSync(`./img/cam04${now}.zip`,response4.data)


        }).catch((error) => {

            console.log('Error in cam104')
        }),

        axios.get("http://192.168.43.105:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response5) => {

            fs.writeFileSync(`./img/cam05${now}.zip`,response5.data)


        }).catch((error) => {

            console.log('Error in cam105')
        }),

        axios.get("http://192.168.43.106:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response6) => {

            fs.writeFileSync(`./img/cam06${now}.zip`,response6.data)


        }).catch((error) => {

            console.log('Error in cam106')
        }),

        axios.get("http://192.168.43.107:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response7) => {

            fs.writeFileSync(`./img/cam07${now}.zip`,response7.data)


        }).catch((error) => {

            console.log('Error in cam107')
        }),

        axios.get("http://192.168.43.108:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response8) => {

            fs.writeFileSync(`./img/cam08${now}.zip`,response8.data)


        }).catch((error) => {

            console.log('Error in cam108')
        }),

        axios.get("http://192.168.43.109:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response9) => {

            fs.writeFileSync(`./img/cam09${now}.zip`,response9.data)


        }).catch((error) => {

            console.log('Error in cam109')
        }),

        axios.get("http://192.168.43.110:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response10) => {

            fs.writeFileSync(`./img/cam10${now}.zip`,response10.data)


        }).catch((error) => {

            console.log('Error in cam110')
        }),

        axios.get("http://192.168.43.111:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response11) => {

            fs.writeFileSync(`./img/cam11${now}.zip`,response11.data)


        }).catch((error) => {

            console.log('Error in cam111')
        }),

        axios.get("http://192.168.43.112:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response12) => {

            fs.writeFileSync(`./img/cam12${now}.zip`,response12.data)


        }).catch((error) => {

            console.log('Error in cam112')
        }),

        axios.get("http://192.168.43.113:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response13) => {

            fs.writeFileSync(`./img/cam13${now}.zip`,response13.data)


        }).catch((error) => {

            console.log('Error in cam113')
        }),

        axios.get("http://192.168.43.114:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response14) => {

            fs.writeFileSync(`./img/cam14${now}.zip`,response14.data)


        }).catch((error) => {

            console.log('Error in cam114')
        }),

        axios.get("http://192.168.43.115:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response15) => {

            fs.writeFileSync(`./img/cam15${now}.zip`,response15.data)


        }).catch((error) => {

            console.log('Error in cam115')
        }),

        axios.get("http://192.168.43.116:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response16) => {

            fs.writeFileSync(`./img/cam16${now}.zip`,response16.data)


        }).catch((error) => {

            console.log('Error in cam116')
        }),

        axios.get("http://192.168.43.117:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response17) => {

            fs.writeFileSync(`./img/cam17${now}.zip`,response17.data)


        }).catch((error) => {

            console.log('Error in cam117')
        }),

        axios.get("http://192.168.43.118:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response18) => {

            fs.writeFileSync(`./img/cam18${now}.zip`,response18.data)


        }).catch((error) => {

            console.log('Error in cam118')
        }),

        axios.get("http://192.168.43.119:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response19) => {

            fs.writeFileSync(`./img/cam19${now}.zip`,response19.data)


        }).catch((error) => {

            console.log('Error in cam119')
        }),

        axios.get("http://192.168.43.120:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response20) => {

            fs.writeFileSync(`./img/cam20${now}.zip`,response20.data)


        }).catch((error) => {

            console.log('Error in cam120')
        }),

        axios.get("http://192.168.43.121:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response21) => {

            fs.writeFileSync(`./img/cam21${now}.zip`,response21.data)


        }).catch((error) => {

            console.log('Error in cam121')
        }),

        axios.get("http://192.168.43.122:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response22) => {

            fs.writeFileSync(`./img/cam22${now}.zip`,response22.data)


        }).catch((error) => {

            console.log('Error in cam122')
        }),

        axios.get("http://192.168.43.123:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response23) => {

            fs.writeFileSync(`./img/cam23${now}.zip`,response23.data)


        }).catch((error) => {

            console.log('Error in cam123')
        }),

        axios.get("http://192.168.43.124:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response24) => {

            fs.writeFileSync(`./img/cam24${now}.zip`,response24.data)


        }).catch((error) => {

            console.log('Error in cam124')
        }),

        axios.get("http://192.168.43.125:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response25) => {

            fs.writeFileSync(`./img/cam25${now}.zip`,response25.data)


        }).catch((error) => {

            console.log('Error in cam125')
        }),

        axios.get("http://192.168.43.124:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response24) => {

            fs.writeFileSync(`./img/cam24${now}.zip`,response24.data)


        }).catch((error) => {

            console.log('Error in cam124')
        }),

        axios.get("http://192.168.43.125:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response25) => {

            fs.writeFileSync(`./img/cam25${now}.zip`,response25.data)


        }).catch((error) => {

            console.log('Error in cam125')
        }),

        axios.get("http://192.168.43.126:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response26) => {

            fs.writeFileSync(`./img/cam26${now}.zip`,response26.data)


        }).catch((error) => {

            console.log('Error in cam126')
        }),

        axios.get("http://192.168.43.127:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response27) => {

            fs.writeFileSync(`./img/cam27${now}.zip`,response27.data)


        }).catch((error) => {

            console.log('Error in cam127')
        }),

        axios.get("http://192.168.43.128:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response28) => {

            fs.writeFileSync(`./img/cam28${now}.zip`,response28.data)


        }).catch((error) => {

            console.log('Error in cam128')
        }),

        axios.get("http://192.168.43.129:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response29) => {

            fs.writeFileSync(`./img/cam29${now}.zip`,response29.data)


        }).catch((error) => {

            console.log('Error in cam129')
        }),

        axios.get("http://192.168.43.130:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response30) => {

            fs.writeFileSync(`./img/cam30${now}.zip`,response30.data)


        }).catch((error) => {

            console.log('Error in cam130')
        }),

        axios.get("http://192.168.43.131:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response31) => {

            fs.writeFileSync(`./img/cam31${now}.zip`,response31.data)


        }).catch((error) => {

            console.log('Error in cam131')
        }),

        axios.get("http://192.168.43.132:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response32) => {

            fs.writeFileSync(`./img/cam32${now}.zip`,response32.data)


        }).catch((error) => {

            console.log('Error in cam132')
        }),

        axios.get("http://192.168.43.132:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response32) => {

            fs.writeFileSync(`./img/cam32${now}.zip`,response32.data)


        }).catch((error) => {

            console.log('Error in cam132')
        }),

        axios.get("http://192.168.43.133:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response33) => {

            fs.writeFileSync(`./img/cam33${now}.zip`,response33.data)


        }).catch((error) => {

            console.log('Error in cam133')
        }),

        axios.get("http://192.168.43.134:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response34) => {

            fs.writeFileSync(`./img/cam34${now}.zip`,response34.data)


        }).catch((error) => {

            console.log('Error in cam134')
        }),

        axios.get("http://192.168.43.135:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response35) => {

            fs.writeFileSync(`./img/cam35${now}.zip`,response35.data)


        }).catch((error) => {

            console.log('Error in cam135')
        }),

        axios.get("http://192.168.43.136:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response36) => {

            fs.writeFileSync(`./img/cam36${now}.zip`,response36.data)


        }).catch((error) => {

            console.log('Error in cam136')
        }),

        axios.get("http://192.168.43.137:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response37) => {

            fs.writeFileSync(`./img/cam37${now}.zip`,response37.data)


        }).catch((error) => {

            console.log('Error in cam137')
        }),

        axios.get("http://192.168.43.138:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response38) => {

            fs.writeFileSync(`./img/cam38${now}.zip`,response38.data)


        }).catch((error) => {

            console.log('Error in cam138')
        }),

        axios.get("http://192.168.43.139:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response39) => {

            fs.writeFileSync(`./img/cam39${now}.zip`,response39.data)


        }).catch((error) => {

            console.log('Error in cam139')
        }),

        axios.get("http://192.168.43.140:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response40) => {

            fs.writeFileSync(`./img/cam40${now}.zip`,response40.data)


        }).catch((error) => {

            console.log('Error in cam140')
        }),

        axios.get("http://192.168.43.141:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response41) => {

            fs.writeFileSync(`./img/cam41${now}.zip`,response41.data)


        }).catch((error) => {

            console.log('Error in cam141')
        }),

        axios.get("http://192.168.43.142:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response42) => {

            fs.writeFileSync(`./img/cam42${now}.zip`,response42.data)


        }).catch((error) => {

            console.log('Error in cam142')
        }),

        axios.get("http://192.168.43.143:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response43) => {

            fs.writeFileSync(`./img/cam43${now}.zip`,response43.data)


        }).catch((error) => {

            console.log('Error in cam143')
        }),

        axios.get("http://192.168.43.144:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response44) => {

            fs.writeFileSync(`./img/cam44${now}.zip`,response44.data)


        }).catch((error) => {

            console.log('Error in cam144')
        }),

        axios.get("http://192.168.43.145:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response45) => {

            fs.writeFileSync(`./img/cam45${now}.zip`,response45.data)


        }).catch((error) => {

            console.log('Error in cam145')
        }),

        axios.get("http://192.168.43.146:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response46) => {

            fs.writeFileSync(`./img/cam46${now}.zip`,response46.data)


        }).catch((error) => {

            console.log('Error in cam146')
        }),

        axios.get("http://192.168.43.147:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response47) => {

            fs.writeFileSync(`./img/cam47${now}.zip`,response47.data)


        }).catch((error) => {

            console.log('Error in cam147')
        }),

        axios.get("http://192.168.43.148:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response48) => {

            fs.writeFileSync(`./img/cam48${now}.zip`,response48.data)


        }).catch((error) => {

            console.log('Error in cam148')
        }),

        axios.get("http://192.168.43.149:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response49) => {

            fs.writeFileSync(`./img/cam49${now}.zip`,response49.data)


        }).catch((error) => {

            console.log('Error in cam149')
        }),

        axios.get("http://192.168.43.150:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response50) => {

            fs.writeFileSync(`./img/cam50${now}.zip`,response50.data)


        }).catch((error) => {

            console.log('Error in cam150')
        }),

        axios.get("http://192.168.43.151:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response51) => {

            fs.writeFileSync(`./img/cam51${now}.zip`,response51.data)


        }).catch((error) => {

            console.log('Error in cam151')
        }),

        axios.get("http://192.168.43.152:3000/capture",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

        }) .then((response52) => {

            fs.writeFileSync(`./img/cam52${now}.zip`,response52.data)


        }).catch((error) => {

            console.log('Error in cam152')
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