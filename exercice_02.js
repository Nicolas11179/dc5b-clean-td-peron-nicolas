//créer et écrire dans un fichier csv

const fs = require('fs');

let compteur = 1;

const data = [
    {Id: '1', Name: 'Blabla', Puissance: "50W", Autonomie: '3h', Energie: 'Essence'}
];

const writeStream = fs.createWriteStream('tondeuse.csv');

writeStream.write('Id,Name,Puissance,Autonomie,Energie\n');

for (let i = 0; i < 19; i++) {
    data.forEach((row) => {
        let dataRow = row.Id+','+row.Name+','+row.Puissance+','+row.Autonomie+','+row.Energie+'\n';
        writeStream.write(dataRow);
    });
}

writeStream.end;