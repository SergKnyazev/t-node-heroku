const express = require('express');
const cors = require('cors');
const path = require('path');


// const config = require('config');
// const mysql = require('mysql2');
// const {v4} = require('uuid');

const works = [
  {id: '1', work: '1111111', bgColor: '#025F34'},
  {id: '2', work: '2222222', bgColor: '#525F34'},
  {id: '3', work: '3333333', bgColor: '#925F34'},
  {id: '4', work: '4444444', bgColor: '#A25F34'},
  {id: '5', work: '5555555', bgColor: '#F25F34'},
]


// const { worksRouter } = require('../express-crash-course-react/src/routes/worksRouter.js');
// const { database } = require('../express-crash-course-react/src/connectdb/database.js');

const PORT = process.env.PORT ?? 5000;

////web-server -- создаем web-server с помощью библиотеки express
const app = express();

//****************************************************************
// const database = mysql.createConnection({
//   host: 'remotemysql.com',
//   user: '09OhAjwTap',
//   password: '8IxnrlpJPw',
//   database: '09OhAjwTap'
// });

// database.getConnection(err => {
//   err
//     ?
//     console.error('*** Error of connect to MySQL : ' + err.message)
//     :
//     console.log('+++ The connection to the MySQL server is successfully... Ok!');
// })



/**
 //*********************************************
 // const mysql = require('mysql2');

//  const connectionBD = mysql.createConnection({
//   host: 'remotemysql.com',
//   user: 'TNcOihoTB1',
//   password: 'HIIk0PQvUc',
//   database: 'TNcOihoTB1'
// });
//
//  connectionBD.connect(err => {
//   err
//   ?
//   console.error('Ошибка: ' + err.message)
//   :
//   console.log('Подключение к серверу MySQL успешно установлено');
// });

*/


app.use(cors());

// app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './build')));
// app.use(express.static(path.resolve(__dirname)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(worksRouter);

//// console.log(`serverRoutes...`);
//// console.log(serverRoutes);


app.get('/works', async (req, res) => {
  try {
    console.log(works);
    // await res.status(200).json(workss)
    await res.status(200).json(works)
  } catch (error) {
    console.log(error);
    await res.status(400).json({message: `*** Error app.get to "/works" : ${error}`})
  }
})

//web-server -- слушаем порт=PORT
app.listen(PORT, () => {
  console.log(`+++ Server has been started on port ${PORT}... Ok!`)
})
