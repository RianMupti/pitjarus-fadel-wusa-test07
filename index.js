// npm install express body-parser cors nodemon mysql
// "start": "node ./bin/www"
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('./src/config/dbconnection');
const { request } = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// buat sebuah endpoint '/visit' dengan metode post, dengan parameter {visit_id: } 
// berdasarkan relasi table, tampilkan data sesuai contoh output yg sudah ada
app.get("/visit/:visit_id", (req, res) => {
    const visit_id = req.params.visit_id;
    const sqlQuery = "SELECT  id,  visit_id = ?,  store_id,  surveyor_id,  category_id, LEFT(json_path, 256) FROM database_development.report_display";

    db.query(sqlQuery, visit_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result)
        }
    })
})

app.get("/product-visit", (req, res) => {

    const visit_id = req.params.visit_id;
    const sqlQuery = "SELECT  id,  visit_id = ?, LEFT(json_path, 256) FROM database_development.report_display";

    db.query(sqlQuery, visit_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result[json_pat])
        }
    })
})

// app.post('/product-visit', (req, res) => {
//      const = 
// })

app.listen(3000, () => {
    console.log('Server running!!');
});
