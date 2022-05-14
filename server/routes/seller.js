const router = require('express').Router();
const path = require('path')
const multer  = require('multer');

/**
  * @swagger
  * tags:
  *   name: File-upload-proxy
  *   description: Public Routes
  */

  /**
   * @swagger
   * '/s/upload':
   *    post:
   *        tags:
   *            - File-upload-proxy
   *        summary: Register a user
   *        consumes:
   *            - multipart/form-data
   *        parameters:
   *            - in: formData
   *              name: upfile
   *              type: file
   *              required: true
   *              description: The file to upload.
   *        responses:
   *            200:
   *                description: Success
   *            400:
   *                description: Exist user account
   *            500:
   *                description: Server failure
   */
const  storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        const name = Date.now() + path.extname(file.originalname)
        //console.log(name);
        cb(null, name);
    },
});
const upload = multer({storage: storage});

router.route("/upload").post (upload.single('Img'),(req, res) => {
    res.status(200).json(`img/${req.file.filename}`);

});
///--------------------------------------------------------------


module.exports = router;