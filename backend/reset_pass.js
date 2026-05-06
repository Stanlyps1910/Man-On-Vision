const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

async function resetPassword() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const hashedPassword = await bcrypt.hash('password123', 10);
        await User.findOneAndUpdate({ email: 'vijaya@1610' }, { password: hashedPassword });
        console.log('Password reset to password123');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

resetPassword();
