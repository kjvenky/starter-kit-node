const vogels = require('vogels');
const Joi = require('joi');

const Lr = vogels.define('Lr', {
      hashKey : 'id',
      timestamps : true,

      schema : {
              id: vogels.types.uuid(),
              name    : Joi.string(),
              created_date  : Joi.number().integer().min(1900).max(2018),
            },

      tableName: "lrs"
});

module.exports = Lr;
