// import db from '../app/db/queries/equities';
const db = require('../app/db/queries/equities');
const getData = require('./parseExel');

 db.deleteAllItems()
      .then(() => getData().then(data => data))
      .then((data) => {
            let count = 0;

            console.log(data.lenght);

            data.map(async (item) => {
                  await db.insertItem(item);
                  count++;
            });

            console.log(count);
      })
      .then(() => {
            db.getAllEquities().then((data) => {
               console.log(data)
            });
      })
      .catch(error => {
            throw new Error(error);
      })