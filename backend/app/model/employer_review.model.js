module.exports = (sequelize, Sequelize) => {
    var EmployerReview = sequelize.define(
        'employer_review',
        {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            employer_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            job_seeker_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            rating: {
                type: Sequelize.INTEGER(1),
                allowNull: false
            },
            review: {
                type: Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    
    EmployerReview.associate = (models) => {
        EmployerReview.belongsTo(models.job_seeker, {
            foreignKey: 'job_seeker_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        EmployerReview.belongsTo(models.employer, {
            foreignKey: 'employer_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return EmployerReview;
};