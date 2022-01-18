'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usershow = sequelize.define('Usershow', {
    channelId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER
  }, {});
  Usershow.associate = function(models) {
    // associations can be defined here
  };
  return Usershow;
};