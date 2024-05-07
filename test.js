require("dotenv").config();

const MONGO_DB_URL = process.env.MONGODB_URI_PROD;
console.log(MONGO_DB_URL);