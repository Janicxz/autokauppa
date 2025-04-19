const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "autokauppa"
}
const db = mysql.createConnection(dbConfig);
db.connect((error) => {
    if (error) {
        console.error("Error connecting to MySQL database:", error);
        return;
    }
    console.log("Connected to MySQL database at " + dbConfig.host);
});

app.get('/api/carDetails/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Got request for car details with id: ${id}`);
    const query = `SELECT * FROM cars WHERE id = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching car details from database:', err);
            res.status(500).json({ message: 'Auton tietoja ei löytynyt.' });
        } else {
            console.log('Car details fetched from database:', results);
            res.json(results);
        }
    });
});

app.get('/api/CarsList', (req, res) => {
    console.log('Got request for cars listing');
    // Fake data for cars
    const cars = [
        { name: "bmw", description: "E39", price: 3400 },
        { name: "audi", description: "A4", price: 5400 },
        { name: "mercedes", description: "C180", price: 7400 },
        { name: "toyota", description: "Corolla", price: 8400 },
        { name: "lada", description: "Niva", price: 5000 },
        { name: "ford", description: "Focus", price: 9400 },
        { name: "fiat", description: "Punto", price: 10400 },
        { name: "opel", description: "Astra", price: 11400 },
        { name: "peugeot", description: "308", price: 12400 },
        { name: "renault", description: "Clio", price: 13400 },
        { name: "skoda", description: "Octavia", price: 14400 },
        { name: "nissan", description: "Qashqai", price: 15400 },
        { name: "honda", description: "Civic", price: 16400 },
        { name: "hyundai", description: "i30", price: 17400 },
        { name: "kia", description: "Ceed", price: 18400 },
        { name: "volkswagen", description: "Golf", price: 19400 },
        { name: "mazda", description: "3", price: 20400 },
        { name: "subaru", description: "Impreza", price: 21400 },
        { name: "mitsubishi", description: "Outlander", price: 22400 },
        { name: "suzuki", description: "Vitara", price: 23400 },
        { name: "land rover", description: "Defender", price: 24400 }
    ];
    db.query("SELECT * FROM cars", (err, result) => {
        if (err) {
            console.error('Error fetching cars from database:', err);
            res.status(500).json({ message: 'Myynnissä olevia autoja ei löytynyt.'});
        } else {
            console.log('Cars fetched from database:', result);
            res.json(result);
        }
    });
    /*if (!cars) {
        console.error('No cars found');
        return res.status(404).json({ message: 'Myynnissä olevia autoja ei löytynyt.'});
    }
    
    console.log('Returning cars list');
    res.json(cars);*/
})

// Start listening on user-defined port or default to 5000
const PORT = process.env.PORT|| 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});