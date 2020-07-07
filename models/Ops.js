module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ops', {
        OPID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        cityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Planned',
        },
        organiser: {
            type: DataTypes.STRING,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
    });
};