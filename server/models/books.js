// Student Name: Eman Shalabi
// Student ID: 301248910

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);