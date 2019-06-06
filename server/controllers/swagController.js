const swag = require('../models/swag');

module.exports = {
    read: (req, res, next) => {
        res.status.send(200).send(swag);
    }
};