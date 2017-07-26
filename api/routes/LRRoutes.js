'use strict';

module.exports = function(app) {
    var lRController = require('../controllers/LRController');

    app.route('/lrs').get(lRController.list_all_lrs).post(lRController.create_a_lr);
      
};

