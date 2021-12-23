const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NguoiDangKy', {
    MaNDK: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    TenNDK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SDT: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AnhNDK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MatKhauNDK: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NguoiDangKy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK__NguoiDan__3A1855900EA330E9",
        unique: true,
        fields: [
          { name: "MaNDK" },
        ]
      },
    ]
  });
};
