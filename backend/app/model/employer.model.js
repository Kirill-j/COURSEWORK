const { employer } = require("../config/db.config");

module.exports = (sequelize, Sequelize) => {
    var Employer = sequelize.define(
        'employer',
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: Sequelize.INTEGER(!0),
                allowNull: false
            },
            company_name: {
                type: Sequelize.TEXT
            },
            industry: {
                type: Sequelize.TEXT
            },
            location: {
                type: Sequelize.TEXT
            },
            website: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT
            }
        });

    Employer.associate = (models) => {
        Employer.hasOne(models.employer_review, {
            foreingKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });

        Employer.hasMany(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        Employer.belongsTo(models.job, {
            foreignKey: 'employer_id'
        });
    };

    return Employer;
};