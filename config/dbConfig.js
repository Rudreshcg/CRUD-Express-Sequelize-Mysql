module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "softsuave",
    DB: "node_sequelize_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}