const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin"); // Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) }); 
const db = admin.firestore();

const app = express(); 
app.use(cors());
app.use(express.json());

app.listen(5000, () => { console.log("Server is running on port 5000"); });

// Отримання меню з Firestore
app.get("/api/menu", async (req, res) => {
    const snapshot = await db.collection("menu").get();
    const menu = [];
    snapshot.forEach(doc => {
        menu.push({ id: doc.id, ...doc.data() });
    });
    res.json(menu);
}); 

// Отримання коментарів з Firestore
app.get("/api/comments", async (req, res) => {
    const snapshot = await db.collection("comments").get();
    const comments = [];
    snapshot.forEach(doc => {
        comments.push({ id: doc.id, ...doc.data() });
    });
    res.json(comments);
}); 

// Додавання нового коментаря
app.post("/api/add_comment", async (req, res) => {
    const { email, comment } = req.body;

    // Перевірка обовʼязкових полів
    if (!email || !comment) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Перевірка на наявність конкурентів
    if (containsCompetitorNames(comment)) {
        return res.status(400).json({ error: "Comment contains competitor brand names" });
    }

    try {
        const docRef = await db.collection("comments").add({
            email,
            comment
        });

        res.status(201).json({
            message: "Comment created successfully",
            id: docRef.id
        });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Failed to add comment" });
    }
});

// Функція перевірки наявності назв конкурентів
function containsCompetitorNames(text) {
    const competitorNames = ["BrandX", "CompetitorCo", "OtherStore"]; // 🔧 Назви конкурентів
    const lowerText = text.toLowerCase();

    return competitorNames.some(name => lowerText.includes(name.toLowerCase()));
}