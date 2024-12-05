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
                type: Sequelize.DATE
            }
        });
    
    Application.associate = (models) => {
        Application.hasMany(models.job_seeker, {
            foreignKey: 'job_seeker_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });

        Application.hasMany(models.job, {
            foreignKey: 'job_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
    };

    return Application;
};