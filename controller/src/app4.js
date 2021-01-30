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
            Accept: 'application/json',
            }

        }) .then((response102) => {

            console.log(response102.data)


        }).catch(() => {

            console.log('Error in cam102')
        }),

        axios.get("http://192.168.43.103:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response103) => {

            console.log(response103.data)


        }).catch(() => {

            console.log('Error in cam103')
        }),

        axios.get("http://192.168.43.104:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response104) => {

            console.log(response104.data)


        }).catch(() => {

            console.log('Error in cam104')
        }),

        axios.get("http://192.168.43.105:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response105) => {

            console.log(response105.data)


        }).catch(() => {

            console.log('Error in cam105')
        }),

        axios.get("http://192.168.43.106:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response106) => {

            console.log(response106.data)


        }).catch(() => {

            console.log('Error in cam106')
        }),

        axios.get("http://192.168.43.107:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

            }) .then((response107) => {

            console.log(response107.data)


            }).catch(() => {

            console.log('Error in cam107')
        }),

        axios.get("http://192.168.43.108:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response108) => {

            console.log(response108.data)


        }).catch(() => {

            console.log('Error in cam108')
        }),

        axios.get("http://192.168.43.109:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response109) => {

            console.log(response109.data)


        }).catch(() => {

            console.log('Error in cam109')
        }),

        axios.get("http://192.168.43.110:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response110) => {

            console.log(response110.data)


        }).catch(() => {

            console.log('Error in cam110')
        }),

        axios.get("http://192.168.43.111:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response111) => {

            console.log(response111.data)


        }).catch(() => {

            console.log('Error in cam111')
        }),

        axios.get("http://192.168.43.112:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response112) => {

            console.log(response112.data)


        }).catch(() => {

            console.log('Error in cam112')
        }),

        axios.get("http://192.168.43.113:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response113) => {

            console.log(response113.data)


        }).catch(() => {

            console.log('Error in cam113')
        }),

        
        axios.get("http://192.168.43.114:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response114) => {

            console.log(response114.data)


        }).catch(() => {

            console.log('Error in cam114')
        }),

        axios.get("http://192.168.43.115:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response115) => {

            console.log(response115.data)


        }).catch(() => {

            console.log('Error in cam115')
        }),

        axios.get("http://192.168.43.116:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response116) => {

            console.log(response116.data)


        }).catch(() => {

            console.log('Error in cam116')
        }),

        axios.get("http://192.168.43.117:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response117) => {

            console.log(response117.data)


        }).catch(() => {

            console.log('Error in cam117')
        }),

        axios.get("http://192.168.43.118:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response118) => {

            console.log(response118.data)


        }).catch(() => {

            console.log('Error in cam118')
        }),

        axios.get("http://192.168.43.119:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response119) => {

            console.log(response119.data)


        }).catch(() => {

            console.log('Error in cam119')
        }),

        axios.get("http://192.168.43.120:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response120) => {

            console.log(response120.data)


        }).catch(() => {

            console.log('Error in cam120')
        }),

        axios.get("http://192.168.43.121:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response121) => {

            console.log(response121.data)


        }).catch(() => {

            console.log('Error in cam121')
        }),

        axios.get("http://192.168.43.122:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response122) => {

            console.log(response122.data)


        }).catch(() => {

            console.log('Error in cam122')
        }),

        axios.get("http://192.168.43.123:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response123) => {

            console.log(response123.data)


        }).catch(() => {

            console.log('Error in cam123')
        }),

        axios.get("http://192.168.43.124:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response124) => {

            console.log(response124.data)


        }).catch(() => {

            console.log('Error in cam124')
        }),

        axios.get("http://192.168.43.125:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response125) => {

            console.log(response125.data)


        }).catch(() => {

            console.log('Error in cam125')
        }),

        axios.get("http://192.168.43.126:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response126) => {

            console.log(response126.data)


        }).catch(() => {

            console.log('Error in cam126')
        }),

        axios.get("http://192.168.43.127:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response127) => {

            console.log(response127.data)


        }).catch(() => {

            console.log('Error in cam127')
        }),

        axios.get("http://192.168.43.128:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response128) => {

            console.log(response128.data)


        }).catch(() => {

            console.log('Error in cam128')
        }),

        axios.get("http://192.168.43.129:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response129) => {

            console.log(response129.data)


        }).catch(() => {

            console.log('Error in cam129')
        }),

        axios.get("http://192.168.43.130:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response130) => {

            console.log(response130.data)


        }).catch(() => {

            console.log('Error in cam130')
        }),

        axios.get("http://192.168.43.131:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response131) => {

            console.log(response131.data)


        }).catch(() => {

            console.log('Error in cam131')
        }),

        axios.get("http://192.168.43.132:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response132) => {

            console.log(response132.data)


        }).catch(() => {

            console.log('Error in cam132')
        }),

        axios.get("http://192.168.43.133:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response133) => {

            console.log(response133.data)


        }).catch(() => {

            console.log('Error in cam133')
        }),

        axios.get("http://192.168.43.134:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response134) => {

            console.log(response134.data)


        }).catch(() => {

            console.log('Error in cam134')
        }),

        axios.get("http://192.168.43.135:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response135) => {

            console.log(response135.data)


        }).catch(() => {

            console.log('Error in cam135')
        }),

        axios.get("http://192.168.43.136:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response136) => {

            console.log(response136.data)


        }).catch(() => {

            console.log('Error in cam136')
        }),
        
        axios.get("http://192.168.43.137:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response137) => {

            console.log(response137.data)


        }).catch(() => {

            console.log('Error in cam137')
        }),

        axios.get("http://192.168.43.138:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response138) => {

            console.log(response138.data)


        }).catch(() => {

            console.log('Error in cam138')
        }),

        axios.get("http://192.168.43.139:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response139) => {

            console.log(response139.data)


        }).catch(() => {

            console.log('Error in cam139')
        }),

        axios.get("http://192.168.43.140:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response140) => {

            console.log(response140.data)


        }).catch(() => {

            console.log('Error in cam140')
        }),

        axios.get("http://192.168.43.141:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response141) => {

            console.log(response141.data)


        }).catch(() => {

            console.log('Error in cam141')
        }),

        axios.get("http://192.168.43.142:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response142) => {

            console.log(response142.data)


        }).catch(() => {

            console.log('Error in cam142')
        }),

        axios.get("http://192.168.43.143:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response143) => {

            console.log(response143.data)


        }).catch(() => {

            console.log('Error in cam143')
        }),

        axios.get("http://192.168.43.144:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response144) => {

            console.log(response144.data)


        }).catch(() => {

            console.log('Error in cam144')
        }),

        axios.get("http://192.168.43.145:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response145) => {

            console.log(response145.data)


        }).catch(() => {

            console.log('Error in cam145')
        }),

        axios.get("http://192.168.43.146:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response146) => {

            console.log(response146.data)


        }).catch(() => {

            console.log('Error in cam146')
        }),

        axios.get("http://192.168.43.147:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response147) => {

            console.log(response147.data)


        }).catch(() => {

            console.log('Error in cam147')
        }),

        axios.get("http://192.168.43.148:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response148) => {

            console.log(response148.data)


        }).catch(() => {

            console.log('Error in cam148')
        }),

        axios.get("http://192.168.43.149:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response149) => {

            console.log(response149.data)


        }).catch(() => {

            console.log('Error in cam149')
        }),

        axios.get("http://192.168.43.150:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response150) => {

            console.log(response150.data)


        }).catch(() => {

            console.log('Error in cam150')
        }),

        axios.get("http://192.168.43.151:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response151) => {

            console.log(response151.data)


        }).catch(() => {

            console.log('Error in cam151')
        }),

        axios.get("http://192.168.43.152:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response152) => {

            console.log(response152.data)


        }).catch(() => {

            console.log('Error in cam152')
        }),

        axios.get("http://192.168.43.153:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response153) => {

            console.log(response153.data)


        }).catch(() => {

            console.log('Error in cam153')
        }),

        axios.get("http://192.168.43.154:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response154) => {

            console.log(response154.data)


        }).catch(() => {

            console.log('Error in cam154')
        }),

        axios.get("http://192.168.43.155:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response155) => {

            console.log(response155.data)


        }).catch(() => {

            console.log('Error in cam155')
        }),

        axios.get("http://192.168.43.156:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response156) => {

            console.log(response156.data)


        }).catch(() => {

            console.log('Error in cam156')
        }),

        axios.get("http://192.168.43.157:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response157) => {

            console.log(response157.data)


        }).catch(() => {

            console.log('Error in cam157')
        }),

        axios.get("http://192.168.43.158:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response158) => {

            console.log(response158.data)


        }).catch(() => {

            console.log('Error in cam158')
        }),

        axios.get("http://192.168.43.159:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response159) => {

            console.log(response159.data)


        }).catch(() => {

            console.log('Error in cam159')
        }),

        axios.get("http://192.168.43.160:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response160) => {

            console.log(response160.data)


        }).catch(() => {

            console.log('Error in cam160')
        }),

        axios.get("http://192.168.43.161:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response161) => {

            console.log(response161.data)


        }).catch(() => {

            console.log('Error in cam161')
        }),

        axios.get("http://192.168.43.162:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response162) => {

            console.log(response162.data)


        }).catch(() => {

            console.log('Error in cam162')
        }),

        axios.get("http://192.168.43.163:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response163) => {

            console.log(response163.data)


        }).catch(() => {

            console.log('Error in cam163')
        }),

        axios.get("http://192.168.43.164:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response164) => {

            console.log(response164.data)


        }).catch(() => {

            console.log('Error in cam164')
        }),

        axios.get("http://192.168.43.165:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response165) => {

            console.log(response165.data)


        }).catch(() => {

            console.log('Error in cam165')
        }),

        axios.get("http://192.168.43.166:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response166) => {

            console.log(response166.data)


        }).catch(() => {

            console.log('Error in cam166')
        }),

        axios.get("http://192.168.43.167:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response167) => {

            console.log(response167.data)


        }).catch(() => {

            console.log('Error in cam167')
        }),

        axios.get("http://192.168.43.168:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response168) => {

            console.log(response168.data)


        }).catch(() => {

            console.log('Error in cam168')
        }),

        axios.get("http://192.168.43.170:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response170) => {

            console.log(response170.data)


        }).catch(() => {

            console.log('Error in cam170')
        }),

        axios.get("http://192.168.43.171:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response171) => {

            console.log(response171.data)


        }).catch(() => {

            console.log('Error in cam171')
        }),

        axios.get("http://192.168.43.172:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response172) => {

            console.log(response172.data)


        }).catch(() => {

            console.log('Error in cam172')
        }),

        axios.get("http://192.168.43.173:3000/capture",{

            headers: {
            Accept: 'application/json',
            }

        }) .then((response173) => {

            console.log(response173.data)


        }).catch(() => {

            console.log('Error in cam173')
        }),



    ]) 

    //Lot one
    function lot1(){
        Promise.all([

            axios.get("http://192.168.43.102:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response102) => {

                fs.writeFileSync(`./img/cam102.zip`,response102.data)

            }).catch(() => {

                console.log('Error in cam102')
            }),


            axios.get("http://192.168.43.104:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response104) => {

                fs.writeFileSync(`./img/cam104.zip`,response104.data)

            }).catch(() => {

                console.log('Error in cam104')
            }),

            axios.get("http://192.168.43.105:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response105) => {

                fs.writeFileSync(`./img/cam105.zip`,response105.data)

            }).catch(() => {

                console.log('Error in cam105')
            }),

            axios.get("http://192.168.43.106:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response106) => {

                fs.writeFileSync(`./img/cam106.zip`,response106.data)

            }).catch(() => {

                console.log('Error in cam106')
            }),

            axios.get("http://192.168.43.158:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response158) => {

                fs.writeFileSync(`./img/cam158.zip`,response158.data)

            }).catch(() => {

                console.log('Error in cam158')
            }),

            axios.get("http://192.168.43.159:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response159) => {

                fs.writeFileSync(`./img/cam159.zip`,response159.data)

            }).catch(() => {

                console.log('Error in cam159')
            }),

            axios.get("http://192.168.43.160:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response160) => {

                fs.writeFileSync(`./img/cam160.zip`,response160.data)

            }).catch(() => {

                console.log('Error in cam160')
            }),

            axios.get("http://192.168.43.161:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response161) => {

                fs.writeFileSync(`./img/cam161.zip`,response161.data)

            }).catch(() => {

                console.log('Error in cam161')
            })

        ]) .then(() =>{

            console.log('Lot 1 completed')
        })   
    }

    //Lot 2
    function lot2(){
        Promise.all([
            axios.get("http://192.168.43.108:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response108) => {

                fs.writeFileSync(`./img/cam108.zip`,response108.data)

            }).catch(() => {

                console.log('Error in cam108')
            }),

            axios.get("http://192.168.43.109:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response109) => {

                fs.writeFileSync(`./img/cam109.zip`,response109.data)

            }).catch(() => {

                console.log('Error in cam109')
            }),

            axios.get("http://192.168.43.110:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response110) => {

                fs.writeFileSync(`./img/cam110.zip`,response110.data)

            }).catch(() => {

                console.log('Error in cam110')
            }),

            axios.get("http://192.168.43.111:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response111) => {

                fs.writeFileSync(`./img/cam111.zip`,response111.data)

            }).catch(() => {

                console.log('Error in cam111')
            }),

            axios.get("http://192.168.43.112:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response112) => {

                fs.writeFileSync(`./img/cam112.zip`,response112.data)

            }).catch(() => {

                console.log('Error in cam112')
            }),

            axios.get("http://192.168.43.113:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response113) => {

                fs.writeFileSync(`./img/cam113.zip`,response113.data)

            }).catch(() => {

                console.log('Error in cam113')
            }),

            axios.get("http://192.168.43.114:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response114) => {

                fs.writeFileSync(`./img/cam114.zip`,response114.data)

            }).catch(() => {

                console.log('Error in cam114')
            }),

            axios.get("http://192.168.43.115:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response115) => {

                fs.writeFileSync(`./img/cam115.zip`,response115.data)

            }).catch(() => {

                console.log('Error in cam115')
            })
            
        ]).then(() =>{

            console.log('Lot2 Completed')
        })    
    }

    

    //Lot 3
    function lot3(){
        Promise.all([
            axios.get("http://192.168.43.116:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response116) => {

                fs.writeFileSync(`./img/cam116.zip`,response116.data)

            }).catch(() => {

                console.log('Error in cam116')
            }),

            axios.get("http://192.168.43.117:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response117) => {

                fs.writeFileSync(`./img/cam117.zip`,response117.data)

            }).catch(() => {

                console.log('Error in cam117')
            }),

            axios.get("http://192.168.43.118:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response118) => {

                fs.writeFileSync(`./img/cam118.zip`,response118.data)

            }).catch(() => {

                console.log('Error in cam118')
            }),

            axios.get("http://192.168.43.119:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response119) => {

                fs.writeFileSync(`./img/cam119.zip`,response119.data)

            }).catch(() => {

                console.log('Error in cam119')
            }),

            axios.get("http://192.168.43.120:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response120) => {

                fs.writeFileSync(`./img/cam120.zip`,response120.data)

            }).catch(() => {

                console.log('Error in cam120')
            }),

            axios.get("http://192.168.43.121:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response121) => {

                fs.writeFileSync(`./img/cam121.zip`,response121.data)

            }).catch(() => {

                console.log('Error in cam121')
            }),

            axios.get("http://192.168.43.122:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response122) => {

                fs.writeFileSync(`./img/cam122.zip`,response122.data)

            }).catch(() => {

                console.log('Error in cam122')
            }),

            axios.get("http://192.168.43.123:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response123) => {

                fs.writeFileSync(`./img/cam123.zip`,response123.data)

            }).catch(() => {

                console.log('Error in cam123')
            })

        ]).then(() =>{

            console.log('Lot3 Completed')
        })    
    }

    //Lot 4
    function lot4(){
        Promise.all([

            
            axios.get("http://192.168.43.124:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response124) => {

                fs.writeFileSync(`./img/cam124.zip`,response124.data)

            }).catch(() => {

                console.log('Error in cam124')
            }),

            axios.get("http://192.168.43.125:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response125) => {

                fs.writeFileSync(`./img/cam125.zip`,response125.data)

            }).catch(() => {

                console.log('Error in cam125')
            }),

            axios.get("http://192.168.43.126:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response126) => {

                fs.writeFileSync(`./img/cam126.zip`,response126.data)

            }).catch(() => {

                console.log('Error in cam126')
            }),

            axios.get("http://192.168.43.127:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response127) => {

                fs.writeFileSync(`./img/cam127.zip`,response127.data)

            }).catch(() => {

                console.log('Error in cam127')
            }),

            axios.get("http://192.168.43.128:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response128) => {

                fs.writeFileSync(`./img/cam128.zip`,response128.data)

            }).catch(() => {

                console.log('Error in cam128')
            }),

            axios.get("http://192.168.43.129:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response129) => {

                fs.writeFileSync(`./img/cam129.zip`,response129.data)

            }).catch(() => {

                console.log('Error in cam129')
            }),

            axios.get("http://192.168.43.130:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response130) => {

                fs.writeFileSync(`./img/cam130.zip`,response130.data)

            }).catch(() => {

                console.log('Error in cam130')
            }),

            axios.get("http://192.168.43.131:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response131) => {

                fs.writeFileSync(`./img/cam131.zip`,response131.data)

            }).catch(() => {

                console.log('Error in cam131')
            })

        ]).then(() =>{

            console.log('Lot4 Completed')
        })     
    }

    //Lot 5
    function lot5(){
        Promise.all([
            axios.get("http://192.168.43.132:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response132) => {

                fs.writeFileSync(`./img/cam132.zip`,response132.data)

            }).catch(() => {

                console.log('Error in cam132')
            }),

            axios.get("http://192.168.43.133:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response133) => {

                fs.writeFileSync(`./img/cam133.zip`,response133.data)

            }).catch(() => {

                console.log('Error in cam133')
            }),

            axios.get("http://192.168.43.134:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response134) => {

                fs.writeFileSync(`./img/cam134.zip`,response134.data)

            }).catch(() => {

                console.log('Error in cam134')
            }),

            axios.get("http://192.168.43.136:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response136) => {

                fs.writeFileSync(`./img/cam136.zip`,response136.data)

            }).catch(() => {

                console.log('Error in cam136')
            }),

            axios.get("http://192.168.43.137:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response137) => {

                fs.writeFileSync(`./img/cam137.zip`,response137.data)

            }).catch(() => {

                console.log('Error in cam137')
            }),

            axios.get("http://192.168.43.138:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response138) => {

                fs.writeFileSync(`./img/cam138.zip`,response138.data)

            }).catch(() => {

                console.log('Error in cam138')
            }),

            axios.get("http://192.168.43.139:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response139) => {

                fs.writeFileSync(`./img/cam139.zip`,response139.data)

            }).catch(() => {

                console.log('Error in cam139')
            })

        ]).then(() =>{

            console.log('Lot5 Completed')
        })     
    }

    //Lot 6
    function lot6(){
        Promise.all([
            axios.get("http://192.168.43.140:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response140) => {

                fs.writeFileSync(`./img/cam140.zip`,response140.data)

            }).catch(() => {

                console.log('Error in cam140')
            }),

            axios.get("http://192.168.43.141:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response141) => {

                fs.writeFileSync(`./img/cam141.zip`,response141.data)

            }).catch(() => {

                console.log('Error in cam141')
            }),

            axios.get("http://192.168.43.142:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response142) => {

                fs.writeFileSync(`./img/cam142.zip`,response142.data)

            }).catch(() => {

                console.log('Error in cam142')
            }),

            axios.get("http://192.168.43.143:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response143) => {

                fs.writeFileSync(`./img/cam143.zip`,response143.data)

            }).catch(() => {

                console.log('Error in cam143')
            }),

            axios.get("http://192.168.43.144:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response144) => {

                fs.writeFileSync(`./img/cam144.zip`,response144.data)

            }).catch(() => {

                console.log('Error in cam144')
            }),

            axios.get("http://192.168.43.145:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response145) => {

                fs.writeFileSync(`./img/cam145.zip`,response145.data)

            }).catch(() => {

                console.log('Error in cam145')
            }),

            axios.get("http://192.168.43.146:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response146) => {

                fs.writeFileSync(`./img/cam146.zip`,response146.data)

            }).catch(() => {

                console.log('Error in cam146')
            }),

            axios.get("http://192.168.43.147:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response147) => {

                fs.writeFileSync(`./img/cam147.zip`,response147.data)

            }).catch(() => {

                console.log('Error in cam147')
            })

        ]).then(() =>{

            console.log('Lot6 Completed')
        })     
    }

    //Lot 7
    function lot7(){
        Promise.all([
            axios.get("http://192.168.43.148:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response148) => {

                fs.writeFileSync(`./img/cam148.zip`,response148.data)

            }).catch(() => {

                console.log('Error in cam148')
            }),

            axios.get("http://192.168.43.149:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response149) => {

                fs.writeFileSync(`./img/cam149.zip`,response149.data)

            }).catch(() => {

                console.log('Error in cam149')
            }),

            axios.get("http://192.168.43.150:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response150) => {

                fs.writeFileSync(`./img/cam150.zip`,response150.data)

            }).catch(() => {

                console.log('Error in cam150')
            }),

            axios.get("http://192.168.43.151:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response151) => {

                fs.writeFileSync(`./img/cam151.zip`,response151.data)

            }).catch(() => {

                console.log('Error in cam151')
            }),

            axios.get("http://192.168.43.152:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response152) => {

                fs.writeFileSync(`./img/cam152.zip`,response152.data)

            }).catch(() => {

                console.log('Error in cam152')
            }),

            axios.get("http://192.168.43.153:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response153) => {

                fs.writeFileSync(`./img/cam153.zip`,response153.data)

            }).catch(() => {

                console.log('Error in cam153')
            }),

            axios.get("http://192.168.43.154:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response154) => {

                fs.writeFileSync(`./img/cam154.zip`,response154.data)

            }).catch(() => {

                console.log('Error in cam154')
            }),

            axios.get("http://192.168.43.155:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response155) => {

                fs.writeFileSync(`./img/cam155.zip`,response155.data)

            }).catch(() => {

                console.log('Error in cam155')
            }),

            axios.get("http://192.168.43.156:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response156) => {

                fs.writeFileSync(`./img/cam156.zip`,response156.data)

            }).catch(() => {

                console.log('Error in cam156')
            }),

            axios.get("http://192.168.43.157:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response157) => {

                fs.writeFileSync(`./img/cam157.zip`,response157.data)

            }).catch(() => {

                console.log('Error in cam157')
            }),

            axios.get("http://192.168.43.103:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response103) => {

                fs.writeFileSync(`./img/cam103.zip`,response103.data)

            }).catch(() => {

                console.log('Error in cam103')
            }),

            axios.get("http://192.168.43.107:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response107) => {

                fs.writeFileSync(`./img/cam107.zip`,response107.data)

            }).catch(() => {

                console.log('Error in cam107')
            }),

            axios.get("http://192.168.43.135:3000/image",{

            headers: {
            Accept: 'application/zip',
            },
            responseType: 'arraybuffer',

            }) .then((response135) => {

            fs.writeFileSync(`./img/cam135.zip`,response135.data)

            }).catch(() => {

            console.log('Error in cam135')
            })

        ]).then(() =>{

            console.log('Lot7 Completed')
        })     
    }

    //Lot 8
    function lot8(){
        Promise.all([
            axios.get("http://192.168.43.162:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response162) => {

                fs.writeFileSync(`./img/cam162.zip`,response162.data)

            }).catch(() => {

                console.log('Error in cam162')
            }),

            axios.get("http://192.168.43.163:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response163) => {

                fs.writeFileSync(`./img/cam163.zip`,response163.data)

            }).catch(() => {

                console.log('Error in cam163')
            }),

            axios.get("http://192.168.43.164:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response164) => {

                fs.writeFileSync(`./img/cam164.zip`,response164.data)

            }).catch(() => {

                console.log('Error in cam164')
            }),

            axios.get("http://192.168.43.165:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response165) => {

                fs.writeFileSync(`./img/cam165.zip`,response165.data)

            }).catch(() => {

                console.log('Error in cam165')
            }),

            axios.get("http://192.168.43.166:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response166) => {

                fs.writeFileSync(`./img/cam166.zip`,response166.data)

            }).catch(() => {

                console.log('Error in cam166')
            }),

            axios.get("http://192.168.43.167:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response167) => {

                fs.writeFileSync(`./img/cam167.zip`,response167.data)

            }).catch(() => {

                console.log('Error in cam167')
            }),

            axios.get("http://192.168.43.168:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response168) => {

                fs.writeFileSync(`./img/cam168.zip`,response168.data)

            }).catch(() => {

                console.log('Error in cam168')
            }),

            axios.get("http://192.168.43.169:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response169) => {

                fs.writeFileSync(`./img/cam169.zip`,response169.data)

            }).catch(() => {

                console.log('Error in cam169')
            }),

            axios.get("http://192.168.43.170:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response170) => {

                fs.writeFileSync(`./img/cam170.zip`,response170.data)

            }).catch(() => {

                console.log('Error in cam170')
            }),

            axios.get("http://192.168.43.171:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response171) => {

                fs.writeFileSync(`./img/cam171.zip`,response171.data)

            }).catch(() => {

                console.log('Error in cam171')
            }),

            axios.get("http://192.168.43.172:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response172) => {

                fs.writeFileSync(`./img/cam172.zip`,response172.data)

            }).catch(() => {

                console.log('Error in cam172')
            }),

            axios.get("http://192.168.43.173:3000/image",{

                headers: {
                Accept: 'application/zip',
                },
                responseType: 'arraybuffer',

            }) .then((response173) => {

                fs.writeFileSync(`./img/cam173.zip`,response173.data)

            }).catch(() => {

                console.log('Error in cam173')
            })

        ]).then(() =>{

            console.log('Lot8 Completed')
        })     
    }


 setTimeout(lot1,50000)
 setTimeout(lot2,65000)
 setTimeout(lot3,70000)
 setTimeout(lot4,75000)
 setTimeout(lot5,80000)
 setTimeout(lot6,85000)
 setTimeout(lot7,90000)
 setTimeout(lot8,110000)

app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})