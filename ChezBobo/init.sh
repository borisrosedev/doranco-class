#!/bin/bash


install_prettier(){
    npm install --save-dev --save-exact prettier
    node --eval "fs.writeFileSync('.prettierrc','{}\n')"

    #npx prettier . --check
    #npx prettier . --write
}

install_eslint(){
    npm install --save-dev eslint-config-prettier
    npm install --save-dev eslint @eslint/js
}

install_loader(){
    npm install --save-dev raw-loader
}

install_webpack(){

}

install_jest(){
    npm install --save-dev jest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
}

