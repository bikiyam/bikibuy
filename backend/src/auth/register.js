const express = require('express');
const dotenv = require('dotenv');
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, fullname, password } = req.body;
    const firstname = fullname.split(' ')[0];
    const lastname = fullname.split(' ')[1];
    try{
        // Check if user already exists
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if(user.rows.length > 0){
            return res.status(400).json({msg: 'Username already exists'});
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        
        // Insert user into database
        const result = await pool.query('INSERT INTO users (username, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING *', [username, firstname, lastname, hashedPassword]);
        const userdata = result.rows[0];
        
        // Create and send JWT
        const payload = {
            user: {
                id: userdata.id,
                username: userdata.username
            }
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
        res.cookie("token", token, { httpOnly: true });

        return res.status(200).json({ message: "User Successfully Created" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Error creating user" });
    }
});

module.exports = router;
