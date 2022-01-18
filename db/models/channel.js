'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: DataTypes.STRING,
    tvShowId: DataTypes.INTEGER,
    coverPicture: DataTypes.STRING
  }, {});
  Channel.associate = function(models) {
    Channel.belongsToMany(models.Users, {
      through: 'Usershows',
      otherKey: 'usersId',
      foreignKey: 'channelId'
    })
    Channel.belongsTo(models.Tvshow, {
      as: 'Tvshows',
      foreignKey: 'tvShowId'
    })
  };
  return Channel;
};
