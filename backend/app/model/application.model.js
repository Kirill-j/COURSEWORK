module.exports = (sequelize, Sequelize) => {
    var Application = sequelize.define(
        'application',
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            job_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            job_seeker_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            cover_letter: {
                type: Sequelize.TEXT
            },
            applied_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false
            }
        });
    
    Application.associate = (models) => {
        Application.belongsTo(models.job_seeker, {
            foreignKey: 'job_seeker_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Application.belongsTo(models.job, {
            foreignKey: 'job_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        Application.belongsTo(models.employer, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return Application;
};