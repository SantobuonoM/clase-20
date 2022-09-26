export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://root:mongopass@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4/ecommerce?authSource=admin',
        options: {
            useNewUrlParser: true,
            user: "root",
            pass: "1234",
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {

    },
    MODO_PERSISTENCIA: 'mongodb'
}