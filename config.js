exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/calm-stats-data';
exports.PORT = process.env.PORT || 8001;