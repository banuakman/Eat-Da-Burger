// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    // select all burgers
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    // create a burger
    insertOne(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => cb(res));
    },
    // update a burger
    updateOne(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
    // delete burger
    delete(condition, cb) {
        orm.delete('burgers', condition, (res) => cb(res));
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;