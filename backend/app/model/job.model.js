module.exports = (sequelize, Sequelize) => {
    var Job = sequelize.define(
        'job',
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            employer_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false
            },
            title: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT
            },
            requirements: {
                type: Sequelize.TEXT
            },
            salary_range: {
                type: Sequelize.TEXT
            },
            location: {
                type: Sequelize.TEXT
            },
            employment_type: {
                type: Sequelize.TEXT
            },
            posted_at: {
                type: Sequelize.DATE
            }
        });

    Job.associate = (models) => {
        Job.hasMany(models.employer, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Job.belongsTo(models.application, {
            foreignKey: 'job_id'
        });
    };

    return Job;
};