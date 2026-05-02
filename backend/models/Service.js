const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    icon: { type: String, default: 'Camera' }
}, { timestamps: true });

module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema);
