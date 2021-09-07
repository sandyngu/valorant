module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-04.cleardb.com",
      user: "b7e20582588cef",
      password: "321846ae",
      database: "heroku_fb81c49fbfec3d0",
      charset: "utf8",
      insecureAuth: true
    }
  },
  production: {
    client: "mysql",
    connection: process.env.CLEARDB_DATABASE_URL
  }
};