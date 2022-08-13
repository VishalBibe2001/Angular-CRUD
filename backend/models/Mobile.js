const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Mobile = new Schema({
   modelname: {
      type: String
   },
   modelyear: {
      type: Number
   },
   processor: {
      type: String
   },
   storage: {
      type: String
   },
   color: {
      type:String
   },
   price:{
      type:Number
   }
}, {
   collection: 'mobiles'
})

module.exports = mongoose.model('Mobile', Mobile)