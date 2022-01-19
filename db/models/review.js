'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.TEXT,
    rating: DataTypes.NUMERIC,
    tvShowId: DataTypes.STRING,
    usersId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    // Review.belongsTo(models.Users, {
    //   foreignKey: 'userId'
    // })
    // Review.belongsTo(models.Tvshows, {
    //   foreignKey: 'tvShowId'
    // })
  };
  return Review;
};
