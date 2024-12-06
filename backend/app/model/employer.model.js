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
                type: Sequelize.INTEGER(10),
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
        Employer.belongsTo(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Employer.hasMany(models.employer_review, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Employer.hasMany(models.job, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Employer.hasMany(models.application, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return Employer;
};