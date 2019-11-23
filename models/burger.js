module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            notNull: true,
            validate: {
                len: [1, 50]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }

    });
    return Burger;
}