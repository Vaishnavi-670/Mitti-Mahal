const { model, Schema , } = require('../connection');

const mySchema = new Schema ({
    title : String,
    category : {type: String},
    description : {type: String},
    type : {type: String},
    price : {type: Number, required: true},
    image: String,
    createdAt : {type: Date, default: Date.now}
});

module.exports = model('products',mySchema); 