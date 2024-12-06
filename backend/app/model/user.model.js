module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER(10),
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
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            update_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });

    User.associate = (models) => {
        User.hasOne(models.employer, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        User.hasOne(models.job_seeker, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    }    

    return User;
};