import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
})

const filter = (req, file, cb) => {
    if (
        file.mimetype == 'image/png' || 
        file.mimetype == 'image/gif' || 
        file.mimetype == 'image/jpeg'
    ) {
        return cb(null, true);
    } else {
        return cb(null, false);
    }
    
}

const upload = multer({
    storage: storage,
    fileFilter: filter
}).single('image');
  
export { upload };
