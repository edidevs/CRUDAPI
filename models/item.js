module.exports = function (sequelize, DataTypes ) {
    let Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    });

    return Item;
}