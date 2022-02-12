const { mail, gmail } = require('./function/names');

if(!process.env.REFRESH_LINK && !process.env.CLIENT_SECRET && !process.env.CLIENT_ID){
     mail()
}

 else{
      gmail()       
 }
 
                                    