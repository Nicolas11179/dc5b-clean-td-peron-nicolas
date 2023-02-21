//ouvrir fichier csv

const fs = require('fs');
const csvParser = require('csv-parser');

let compteur = 1;

fs.createReadStream('electronic-card-transactions-december-2022-csv-tables.csv')
    .pipe(csvParser())
    .on('data', (data) => {
        if (compteur <= 20) {
            console.log(data);
            compteur++;
        } else {
            return;
        }
    })
    .on('end', () => {
        console.log('CSV file successfuly processed');
    });