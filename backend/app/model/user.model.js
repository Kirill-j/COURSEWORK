module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: Sequelize.TEXT
            },
            password: {
                type: Sequelize.TEXT
            },
            user_type: {
                type: Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE
            },
            update_at: {
                type: Sequelize.DATE
            }
        });

    User.associate = (models) => {
        User.belongsTo(models.employer, {
            foreignKey: 'user_id'
        });

        User.belongsTo(models.job_seeker, {
            foreignKey: 'user_id'
        });
    }    

    return User;
};