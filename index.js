const express = require("express");
const hbs = require("hbs");
const Employee = require("./models/Employee");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const connection = require('./dbConnect');
connection();

const app = express();
connection(); // Connect to MongoDB

const encoder = bodyParser.urlencoded({ extended: true })

app.set("views", "./views");
app.set("view engine", "hbs");

const partialPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialPath);

const staticPath = path.join(__dirname, "./views/public");
app.use(express.static(staticPath));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Routes...

app.get("/", async (req, res) => {
  const data = await Employee.find().sort({ employeeId: 1 });
  res.render("index", { data });
});

app.get("/add", (req, res) => res.render("add"));

app.post("/add", upload.single('profilePicture'), async (req, res) => {
  try {
    const employeeData = {
      ...req.body,
      profilePicture: req.file ? req.file.filename : null
    };
    const data = new Employee(employeeData);
    await data.save();
    res.redirect("/");
  } catch (error) {
    console.error('Error adding employee:', error);
    res.redirect("/add");
  }
});

app.get("/employee/:_id", async (req, res) => {
  try {
    const data = await Employee.findOne({ _id: req.params._id });
    if (!data) {
      return res.redirect("/");
    }
    res.render("employee-detail", { data });
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.redirect("/");
  }
});

app.get("/delete/:_id", async (req, res) => {
  await Employee.deleteOne({ _id: req.params._id });
  res.redirect("/");
});

app.get("/update/:_id", async (req, res) => {
  const data = await Employee.findOne({ _id: req.params._id });
  res.render("update", { data });
});

app.post("/update/:_id", upload.single('profilePicture'), async (req, res) => {
  try {
    const data = await Employee.findOne({ _id: req.params._id });
    Object.assign(data, req.body);
    
    // Update profile picture if a new one is uploaded
    if (req.file) {
      data.profilePicture = req.file.filename;
    }
    
    await data.save();
    res.redirect("/");
  } catch (error) {
    console.error('Error updating employee:', error);
    res.redirect("/");
  }
});

app.get("/about", (req, res) => res.render("about"));

// ✅ Use dynamic port for Render deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
