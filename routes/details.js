const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../middleware/auth');
const Detail = require('../models/Detail')
const { check, validationResult } = require('express-validator');


//@route    GET api/details
//@desc     Get all user details
//@access   Private
router.get('/', auth, async (req, res) => {
    try {
        const details = await Detail.find({ user: req.user.id }).sort({ date: -1 });
        res.json(details);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});


//@route    POST api/details
//@desc     Add new detail
//@access   Private
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('phone', 'phone is required').not().isEmpty(),
    check('designation', 'designation is required').not().isEmpty(),
],
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, phone, type, address, socialUrl, designation, department, otherDetails } = req.body;
    try {
        const newDetail = new Detail({
            name, email, phone, type, address, socialUrl, designation, department, otherDetails, user: req.user.id
        })
        const detail = await newDetail.save();
        res.json(detail);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')

    }
});


//@route    PUT api/details/:id
//@desc     update detail
//@access   Private
router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type, address, socialUrl, designation, department, otherDetails } = req.body;

    // Build detail object
    const detailFields = {};
    if (name) detailFields.name = name;
    if (email) detailFields.email = email;
    if (phone) detailFields.phone = phone;
    if (type) detailFields.type = type;
    if (address) detailFields.address = address;
    if (socialUrl) detailFields.socialUrl = socialUrl;
    if (designation) detailFields.designation = designation;
    if (department) detailFields.department = department;
    if (otherDetails) detailFields.otherDetails = otherDetails;


    try {
        let detail = await Detail.findById(req.params.id);

        if (!detail) return res.status(404).json({ msg: 'detail not found' });

        // Make sure user owns detail
        if (detail.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        detail = await Detail.findByIdAndUpdate(
            req.params.id,
            { $set: detailFields },
            { new: true },
        );

        res.json(detail);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

// @route     DELETE api/details/:id
// @desc      Delete detail
// @access    Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let detail = await Detail.findById(req.params.id);

        if (!detail) return res.status(404).json({ msg: 'Detail not found' });

        // Make sure user owns details
        if (detail.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Detail.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Detail removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
