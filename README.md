# CRUD Management System

A complete Employee Management System built with Node.js, Express.js, Handlebars, and MongoDB.

## Features

### ✅ Core CRUD Operations
- **Create**: Add new employees with profile pictures
- **Read**: View all employees in a table format
- **Update**: Edit employee information and profile pictures
- **Delete**: Remove employees from the system

### ✅ Advanced Features
- **Auto-increment Employee IDs**: Clean IDs (1, 2, 3...) instead of long MongoDB IDs
- **Profile Picture Upload**: Upload and manage employee profile pictures
- **Individual Employee Details**: Click on employee names to view detailed information
- **Responsive Design**: Works on desktop and mobile devices

### ✅ User Interface
- **Modern Bootstrap Design**: Clean and professional interface
- **Material Icons**: Beautiful iconography throughout the application
- **Responsive Tables**: Optimized for all screen sizes
- **Image Preview**: Thumbnail previews in the employee list

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: Handlebars (HBS)
- **Frontend**: Bootstrap 5, Material Icons
- **File Upload**: Multer for handling image uploads
- **Styling**: Custom CSS

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khushi-jain15/CRUD-Management-System.git
   cd CRUD-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Make sure MongoDB is running on your system
   - Update the connection string in `dbConnect.js` if needed

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   - Open your browser and go to `http://localhost:3000`

## Project Structure

```
CRUD-Management-System/
├── models/
│   └── Employee.js          # Employee schema with auto-increment
├── views/
│   ├── partials/
│   │   ├── header.hbs       # Common header
│   │   ├── footer.hbs       # Common footer
│   │   └── navbar.hbs       # Navigation bar
│   ├── public/
│   │   └── css/
│   │       └── style.css    # Custom styles
│   ├── index.hbs            # Main employee list
│   ├── add.hbs              # Add employee form
│   ├── update.hbs           # Update employee form
│   ├── employee-detail.hbs  # Individual employee details
│   └── about.hbs            # About page
├── uploads/                 # Profile picture storage
├── index.js                 # Main server file
├── dbConnect.js             # Database connection
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## Features in Detail

### 1. Auto-increment Employee IDs
- Uses a Counter collection to track the next available ID
- New employees get clean IDs like 1, 2, 3, etc.
- Maintains uniqueness across the application

### 2. Profile Picture Management
- Upload images during employee creation
- Update profile pictures when editing employees
- Supports JPG, PNG, GIF formats
- 5MB file size limit
- Automatic file naming with timestamps

### 3. Employee Detail Pages
- Click on any employee name to view detailed information
- Shows profile picture prominently
- Displays all employee information in a clean layout
- Navigation buttons for editing and returning to list

### 4. Form Validation
- Required fields validation
- Email format validation
- File type validation for images
- User-friendly error messages

## API Endpoints

- `GET /` - Display all employees
- `GET /add` - Show add employee form
- `POST /add` - Create new employee
- `GET /employee/:id` - Show employee details
- `GET /update/:id` - Show update form
- `POST /update/:id` - Update employee
- `GET /delete/:id` - Delete employee
- `GET /about` - About page

## Database Schema

```javascript
Employee Schema:
{
  employeeId: Number,        // Auto-increment ID
  name: String,              // Employee name
  age: Number,               // Employee age
  salary: Number,            // Employee salary
  email: String,             // Email address
  phone: String,             // Phone number
  desig: String,             // Designation
  city: String,              // City
  profilePicture: String     // Profile picture filename
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Khushi Jain**
- GitHub: [@khushi-jain15](https://github.com/khushi-jain15)
- Live Demo : ([https://crud-management-system.onrender.com/](https://crud-management-system.onrender.com/)

---

**Note**: Make sure to create the `uploads/` directory if it doesn't exist, as it's used to store uploaded profile pictures.
