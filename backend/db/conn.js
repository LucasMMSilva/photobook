const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/photobook');
    console.log('Conected database.');
}
main().catch((err)=>console.log(err));

module.exports = mongoose;