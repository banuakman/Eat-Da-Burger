// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    // select all burgers
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    // create a burger
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    // update a burger
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    // delete burger
    delete(condition, cb) {
        orm.delete('burgers', condition, (res) => cb(res));
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;