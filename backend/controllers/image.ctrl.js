import jwt from 'jsonwebtoken';
import data from '../config/jwt.js';

import { readdir } from 'fs/promises';



export async function create (req, res) {
    console.log(req.file.filename)
    res.status(200).json({
        status:1, 
        filename:req.file.filename, 
        filesize:req.file.size
    })
}

export async function read (req, res) {
    try {
        let files = await readdir('./uploads/');
        res.status(200).json({
            status:1, 
            result:files
        })

    } catch (err) {
        console.error(err);
        res.status(200).json({status:0})
    }
      


}
