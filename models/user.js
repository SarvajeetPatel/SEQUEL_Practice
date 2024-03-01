module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model { }

    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.BIGINT(10),
            allowNull:false,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    }, {
        sequelize,
        modelName: 'User',
        paranoid: true,
        deletedAt: 'soft_Delete',
        timestamps: false,
    });
    return User;
}