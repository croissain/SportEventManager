const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ChiTietTD', {
    MaTD: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TranDau',
        key: 'MaTD'
      }
    },
    TGian: {
      type: DataTypes.TIME,
      allowNull: false,
      primaryKey: true
    },
    TheVang: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    TheDo: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    CauThuRa: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    CauThuVao: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    GhiChu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Video: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ChiTietTD',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK__ChiTietT__CBAB1E461DE57479",
        unique: true,
        fields: [
          { name: "MaTD" },
          { name: "TGian" },
        ]
      },
    ]
  });
};
