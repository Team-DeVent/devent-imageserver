import jwt from 'jsonwebtoken';
import data from '../config/jwt.js';



export async function create (req, res) {
    console.log(req.file.filename)
    res.status(200).json({
        status:1, 
        filename:req.file.filename, 
        filesize:req.file.size
    })

    /*
    if (is_revoke.status == 1) {
    } else {
        res.status(200).json({status:0})
    }
    */
}
