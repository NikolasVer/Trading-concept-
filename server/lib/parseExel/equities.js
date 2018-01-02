const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const buf = fs.readFileSync(path.join(__dirname, '/index.xlsx'));

const parseFile = () =>  {
    return new Promise((resolve, reject) => {
        const workbook = XLSX.read(buf, {type:'buffer'});

            let initialData = workbook.Sheets.equities;
            let globalArray = [];
            let keysArray = ['A', 'B', 'C', 'D', 'E', 'F'];
            let nameRow = ['tsexchange', 'producttype', 'issueclass', 'listings', 'region', 'country']

            //  Перебираем row. Первый с оглавлением пропускаем.
            for(let i = 2; i < 653; i++) {

                // Конечный объект ряда.
                let valueRow = {};

                // Перебираем 6 колонок со значениями
                for(let j = 0; j !== 6; j++) {
                    // Конечное форматированное значение пары кордината:значение
                    let oneItemValueObject = {};

                    // Текущее значение по кординате по типу Book['A1']
                    let objectFromBook = initialData[`${keysArray[j]}${i}`];

                    // Если у ячейки нет велью, то вставляем прочерк
                    if(!objectFromBook || !objectFromBook.v) {
                        objectFromBook = {v: '-'};
                    }

                    // Деалем название object key -я
                    oneItemValueObject[nameRow[j]] = objectFromBook.v;

                    // Формируем конечный объект ряда
                    Object.assign(valueRow, oneItemValueObject);
                }

                globalArray.push(valueRow);
            }

        return resolve(globalArray);
    });
};

// export default parseFile;

module.exports = parseFile