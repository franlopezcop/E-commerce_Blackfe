const multer = require('multer');
const path = require('path')

// configura el almacenamiento
const multerMiddleware = (folder, entity) => {
    const storage = multer.diskStorage({
        destination : function(req, file, cb){
            const folderPath = path.join(__dirname, `../../public/${folder}`);
            cb(null, folderPath);
        },
        filename : (req, file, cb) => {
            //const fileName = `img${entity}_${Date.now()}${path.extname(file.originalname)}`;
            const fileName = file.originalname;
            cb(null, fileName);
        }
    });
    
    return multer({ storage });
}

module.exports = multerMiddleware;