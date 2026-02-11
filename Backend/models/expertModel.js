const { Schema,model } = require('../connection');

const expertSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String},
    password: {type: String, required: true},
    createdAt: {type: String, default: Date.now}
    
});
module.exports = model('experts', expertSchema);
