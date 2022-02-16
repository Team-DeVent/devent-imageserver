import jwt from 'jsonwebtoken';
import data from '../config/jwt.js';



export async function create (req, res) {
    res.status(200).json({status:1})

    /*
    if (is_revoke.status == 1) {
    } else {
        res.status(200).json({status:0})
    }
    */
}
