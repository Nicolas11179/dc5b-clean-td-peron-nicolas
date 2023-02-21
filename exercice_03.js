//modifier un fichier csv

const fs = require('fs');

const createCsvParser = require('csv-parser');

const readStream = fs.createReadStream('electronic-card-transactions-december-2022-csv-tables.csv');
const writeStream = fs.createWriteStream('new-electronic-card.csv');

const parser = createCsvParser();

