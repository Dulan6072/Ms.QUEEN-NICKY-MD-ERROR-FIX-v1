const { tlang } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.githubusercontent.com/X-Notiya/cb99be100d09b54679b715d1763c6364/raw'//



cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
