'use strict';

module.exports = function(app) {
    var lRController = require('../controllers/LRController');

    app.route('/lrs').get(lRController.list_all_lrs).post(lRController.create_a_lr);
        
        

    // app.route('/lrs')
    //     .get(lRController.list_all_lrs)
    //     .post(lRController.create_a_lr);

    // app.route('/task/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};

