const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    contact: String,
    city: { type: String, default: 'unknown' },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('users', mySchema);