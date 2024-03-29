const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"))

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
    cb(null, "public")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ "-"+ file.originalname)
    }
});

const upload = multer({storage}).array("file");

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if(err){
            return res.status(500).json(err)
        }

         return   res.status(200).send(req.files)

    })
})

const port = 8000

app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
})