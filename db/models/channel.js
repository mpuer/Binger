'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: DataTypes.STRING,
    tvShowId: DataTypes.INTEGER,
    coverPicture: DataTypes.STRING
  }, {});
  Channel.associate = function(models) {
    // associations can be defined here
    // Channel.belongsToMany(models.Users, {
    //   through: 'Usershows',
    //   otherKey: 'usersId',
    //   foreignKey: 'channelId',
    // });
    // Channel.hasMany(models.Tvshows, {
    //   foreignKey: 'tvShowId'
    // })
  };
  return Channel;
};
