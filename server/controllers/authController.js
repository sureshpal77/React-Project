import bcrypt from "bcrypt";
import pool from "../database/db.js";


const saltedRounds = 10;

export const register = async (req, res, next) => {
  const { fullName,phoneNumber, email, password ,companyName,isAgency } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltedRounds);

    const result = await pool.query(
      `INSERT INTO pop_users (full_name,phone_number, email,password,company_name,agency) 
       VALUES ($1, $2, $3,$4 ,$5,$6) 
       RETURNING id, full_name,phone_number, email`,
      [fullName, phoneNumber,email, hash ,companyName,isAgency]
    );

    const newUser = result.rows[0];
    res.status(200).json({
      success: true,
      message: "Registration success",
      user: newUser,
    });

    console.log("Inserted:", newUser);
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
};


export const login = async (req,res) =>{
    const {email ,password} = req.body;
    if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
    try {
        const result = await pool.query(
      'SELECT * FROM pop_users WHERE email = $1',[email]
    );

    const user = result.rows[0];
    if(!user){
        return res.status(401).json({
             success: false, 
             message: 'Invalid email'
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return  res.status(401).json({
             success: false, 
             message: 'Invalid password'
        });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email
      }
    });
    } catch (err) {
        res.status(500).json({
      success: false,
      message: "login failed"
    });
    }
}