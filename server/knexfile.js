module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "valorant",
      password: "valorant",
      database: "valorant",
      charset: "utf8",
      insecureAuth: true
    }
  },
  production: {
    client: "mysql",
    connection: process.env.CLEARDB_DATABASE_URL
  }
};