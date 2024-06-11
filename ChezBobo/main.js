//main.js 

import router from "./router.js";


const app = function(){
    console.log('🟢 main.js');
    const hash =  window.location.hash;
    console.log('hash = ', hash);
    router(hash);
};

app();

