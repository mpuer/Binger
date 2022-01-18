'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Channels, {
      through: 'Usershows',
      foreignKey: 'usersId',
      otherKey: 'channelId'
    })
  };
  return User;
};
