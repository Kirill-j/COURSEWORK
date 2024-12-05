module.exports = (sequelize, Sequelize) => {
    var JobSeeker = sequelize.define(
        'job_seeker',
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
            full_name: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            bio: {
                type: Sequelize.TEXT
            },
            location: {
                type: Sequelize.TEXT
            },
            desired_position: {
                type: Sequelize.TEXT
            },
            skils: {
                type: Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE
            }
        });

    JobSeeker.associate = (models) => {
        JobSeeker.hasMany(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        JobSeeker.belongsTo(models.application, {
            foreignKey: 'job_seeker_id'
        });

        JobSeeker.belongsTo(models.employer_review, {
            foreignKey: 'job_seeker_id'
        })

        JobSeeker.belongsTo(models.resume, {
            foreignKey: 'job_seeker_id'
        })
    };

    return JobSeeker;
};