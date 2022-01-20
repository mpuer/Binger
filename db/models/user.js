'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Channel, {
      through: 'Usershows',
      foreignKey: 'usersId',
      otherKey: 'channelId'
    })
    User.hasMany(models.Review, {
      foreignkey: 'usersId'
    })
  };
  return User;
};
