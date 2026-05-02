const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
    try {
        const services = await Service.find().sort({ category: 1, name: 1 });
        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/services
// @desc    Add a new service
// @access  Private (Admin)
router.post('/', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

    try {
        const { name, category, price, icon } = req.body;
        const newService = new Service({
            name,
            category,
            price,
            icon
        });

        const service = await newService.save();
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/services/:id
// @desc    Update a service
// @access  Private (Admin)
router.put('/:id', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

    try {
        const { name, category, price, icon } = req.body;
        let service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ msg: 'Service not found' });

        service.name = name || service.name;
        service.category = category || service.category;
        service.price = price !== undefined ? price : service.price;
        service.icon = icon || service.icon;

        await service.save();
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/services/:id
// @desc    Delete a service
// @access  Private (Admin)
router.delete('/:id', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) return res.status(404).json({ msg: 'Service not found' });
        res.json({ msg: 'Service removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
