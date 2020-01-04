module.exports = {
    DB : process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:admin@sandbox-learnit-i3evk.mongodb.net/learnit-react',

    APP_PORT : process.env.APP_PORT ? process.env.APP_PORT : 80,
}