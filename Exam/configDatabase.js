const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone'); // TODO import real data model


async function configDatabase() {
    const connectionString = 'mongodb://127.0.0.1/Earth-Treasure'; //     // mongodb://localhost:27017/exam-db';

    mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };