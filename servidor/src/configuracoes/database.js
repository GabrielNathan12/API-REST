const bancoDDados = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'sd',
  define: {
    timestamps: true,
    underscored: true,
  }
}

module.exports = bancoDDados;