module.exports = (sequelize, Sequelize) => {
    var Resume = sequelize.define(
        'resume',
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrtement: true,
                primaryKey: true
            },
            job_seeker_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false
            },
            title: {
                type: Sequelize.TEXT
            },
            content: {
                type: Sequelize.TEXT
            },
            file_path: {
                type: Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE
            }
        });
    Resume.associate = (models) => {
        Resume.hasMany(models.job_seeker, {
            foreignKey: 'job_seeker_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return Resume;
};