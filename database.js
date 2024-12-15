import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, picture TEXT, price REAL)");

    /*const products = [
        {"name":"The Lord of the Rings","description":"This is an awesome book!","picture":"https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg","price":29.19},
        {"name":"Red Book","description":"First edition of Red Book series Part I","picture":"https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png","price":12.49},
        {"name":"Harry Potter","description":"Harry Potter 1-6\r\nFull collection.","picture":"https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png","price":24.99},
        {"name":"Game of Thrones","description":"Blue Books series Part 1","picture":"https://www.clipartqueen.com/picture-files/book-blue.png","price":18.99},
        {"name":"James Bond","description":"Time to die","picture":"https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png","price":19.09}
    ];

    for (const product of products) {
        await dbRun("INSERT INTO products (name, description, picture, price) VALUES (?, ?, ?, ?)", [product.name, product.description, product.picture, product.price]);
    }*/
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };