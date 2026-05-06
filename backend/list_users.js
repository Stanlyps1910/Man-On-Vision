const mongoose = require('mongoose');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    email: String,
    role: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', UserSchema);

async function listUsers() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        const users = await User.find({ role: 'admin' });
        console.log('Admin Users:', JSON.stringify(users, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

listUsers();
