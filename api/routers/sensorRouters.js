'use strict';
module.exports = function(app) {
  var sensorData = require('../controllers/sensorController');

  // Sensor Routes
  app.route('/sensors')
    .get(sensorData.listAllSensorData)
    .post(sensorData.createSensorData);


  /*app.route('/sensors/:sensorId')
    .get(sensorData.read_a_task)
    .put(sensorData.update_a_task)
    .delete(sensorData.delete_a_task);
    */
};