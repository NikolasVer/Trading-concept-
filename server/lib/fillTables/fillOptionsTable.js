import db from '../app/db/queries/options';
import getData from './parseExel';

getData()
      .then((data) => {
            let count = 0;
            data.map(async(item) => {
                  await db.insertItem(item);
                  count++;
            });

            console.log(data);
      })
      .catch(error => {
            throw new Error(error);
      })

// db.deleteAllItems()
//       .then(() => getData().then(data => data))
//       .then((data) => {
//             let count = 0;

//             console.log(data.lenght);

//             data.map(async(item) => {
//                   await db.insertItem(item);
//                   count++;
//             });

//             console.log(count);
//       })
//       .then(() => {
//             db.getAllEquities().then((data) => {
//                   console.log(data)
//             });
//       })
//       .catch(error => {
//             throw new Error(error);
//       })