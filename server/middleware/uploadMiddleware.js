import multer from "multer";
import moment from "moment";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    const newNameFile = moment().format('DDMMYYYY-HHmmss_SSS')

    cb(null, `${newNameFile}-${file.originalname}`)
  }
})

const fileFilterFormat = (req, file, cb) => {
  file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' 
    ? cb(null, true)
    : cb(null, false)
}

const fileLimitsFormat = {
  fileSize: 1024 * 1024 * 5
}

export default multer({
  storage,
  fileFilterFormat,
  fileLimitsFormat
});
