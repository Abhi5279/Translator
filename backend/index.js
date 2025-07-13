const { exec } = require("child_process");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/translator', (req, res) => {
    const { text, targetLang } = req.body;

    const cmd = `python translator.py "${text}" ${targetLang}`;

    exec(cmd, { encoding: 'utf8' }, (error, stdout, stderr) => {
        if (error) {
            console.error("Error:", error.message);
            return res.status(500).json({ error: "Translation failed" });
        }

        if (stderr) {
            console.error("Stderr:", stderr);
            return res.status(500).json({ error: "Python error occurred" });
        }

        try {
            const result = JSON.parse(stdout);
            res.json(result);
        } catch (e) {
            console.error("Failed to parse:", e);
            res.status(500).json({ error: "Invalid response from Python" });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
