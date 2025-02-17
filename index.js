const express = require("express");
const app = express();
const port = 3000;

// Lista di divinità con prefisso
const divinities = [
    { name: "Dio", gender: "M"}, { name: "Gesù", gender: "M"}, { name: "Cristo", gender: "M"}, { name: "Madonna", gender: "F"}, { name: "Zeus", gender: "M"}, { name: "Athena", gender: "F"}, { name: "Thor", gender: "M"}, { name: "Iside", gender: "F"}, { name: "Shiva", gender: "M"}, { name: "Parvati", gender: "F"},
    { name: "Odin", gender: "M"}, { name: "Freya", gender: "F"}, { name: "Apollo", gender: "M"}, { name: "Artemide", gender: "F"}, { name: "Ra", gender: "M"}, { name: "Hathor", gender: "F"},
    { name: "Poseidone", gender: "M"}, { name: "Afrodite", gender: "F"}, { name: "Anubi", gender: "M"}, { name: "Sekhmet", gender: "F"}, { name: "Krishna", gender: "M"}, { name: "Lakshmi", gender: "F"},
    { name: "Brahma", gender: "M"}, { name: "Sarasvati", gender: "F"}, { name: "Dioniso", gender: "M"}, { name: "Demetra", gender: "F"}, { name: "Marte", gender: "M"}, { name: "Venere", gender: "F"},
    { name: "Vishnu", gender: "M"}, { name: "Durga", gender: "F"}, { name: "Ermes", gender: "M"}, { name: "Ecate", gender: "F"}, { name: "Heimdall", gender: "M"}, { name: "Frigg", gender: "F"},
    { name: "Ares", gender: "M"}, { name: "Persefone", gender: "F"}, { name: "Marduk", gender: "M"}, { name: "Inanna", gender: "F"}, { name: "Quetzalcoatl", gender: "M"}, { name: "Coatlicue", gender: "F"},
    { name: "Tlaloc", gender: "M"}, { name: "Ix Chel", gender: "F"}, { name: "Hades", gender: "M"}, { name: "Nike", gender: "F"}, { name: "Set", gender: "M"}, { name: "Neith", gender: "F"}
];

const fonts = [
    "Arial", "Verdana", "Tahoma", "Courier New", "Georgia", "Times New Roman", "Comic Sans MS", "Impact",
    "Lucida Console", "Garamond", "Palatino Linotype", "Trebuchet MS", "Brush Script MT", "Copperplate",
    "Franklin Gothic Medium", "Futura", "Gill Sans", "Helvetica", "Rockwell", "Century Gothic", "Candara",
    "Baskerville", "Big Caslon", "Charcoal", "Chicago", "Geneva", "Monaco", "MS Sans Serif", "MS Serif",
    "Noto Sans", "OCR A", "Papyrus", "Perpetua", "Phosphate", "Playfair Display", "Ravie", "Segoe UI",
    "Snell Roundhand", "Stencil", "Sylfaen", "Symbol", "Tempus Sans ITC", "Trattatello", "Zapf Chancery",
    "Zapfino", "Herculanum", "Hoefler Text", "Didot", "Book Antiqua", "Andale Mono", "Apple Chancery"
];

// Funzione per generare il nome con il prefisso corretto
function formatName(name, gender) {
    const prefix = gender === "F" ? "a " : "o ";
    return `${prefix}${name}`;
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Route principale
app.get("/", (req, res) => {
    const randomDivinity = divinities[Math.floor(Math.random() * divinities.length)];
    const formattedName = formatName(randomDivinity.name, randomDivinity.gender);
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = getRandomColor();
    res.send(`
        <html>
        <head>
            <title>Divinità Casuale</title>
            <style>
                body { display: flex; justify-content: center; align-items: center; height: 100vh; }
                div { font-size: 2em; font-family: ${randomFont}; color: ${randomColor}; }
            </style>
        </head>
        <body>
            <div>"Porc${formattedName}"</div>
        </body>
        </html>
    `);
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});