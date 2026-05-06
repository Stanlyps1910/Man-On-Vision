import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
    console.error(`ERROR: 'dist' folder not found at ${distPath}`);
    console.error("Make sure to run 'npm run build' before starting the server.");
} else {
    app.use(express.static(distPath, {
        maxAge: '1d',
        etag: true
    }));
}

app.get('*', (req, res) => {
    if (fs.existsSync(path.join(distPath, 'index.html'))) {
        res.sendFile(path.join(distPath, 'index.html'));
    } else {
        res.status(404).send('Build not found. Run npm run build first.');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('--------------------------------------------------');
    console.log(`Frontend Web Service live on port ${PORT}`);
    console.log(`Serving artifacts from: ${distPath}`);
    console.log('--------------------------------------------------');
});
