'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tvshow = sequelize.define('Tvshow', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    showtime: DataTypes.DATE,
    synopsis: DataTypes.TEXT,
    rating: DataTypes.NUMERIC,
    genre: DataTypes.STRING
  }, {});
  Tvshow.associate = function(models) {
    // associations can be defined here
    // Tvshow.hasMany(models.Channels, {
    //   foreignKey: 'tvShowId'
    // })
    // Tvshow.hasMany(models.Reviews, {
    //   foreignKey: 'tvShowId'
    // })
  };
  return Tvshow;
};
