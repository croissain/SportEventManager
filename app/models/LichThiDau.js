const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LichThiDau', {
    SoTT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NgayBD: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NgayKT: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NoiDung: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LichThiDau',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LichThiDau_pkey",
        unique: true,
        fields: [
          { name: "SoTT" },
        ]
      },
    ]
  });
};
