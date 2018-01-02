const path = require('path');


console.log(__dirname);

const BASE_PATH = path.join(__dirname, 'app', 'db');

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://tlewmlurcwnlcq:8b36b12713091584d902942ac289edcdd61ab5e5bf4495e0e08cde368224e9aa@ec2-54-228-251-254.eu-west-1.compute.amazonaws.com:5432/df673f15qf872u?ssl=true',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations'),
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        },
        ssl: true
    }
}