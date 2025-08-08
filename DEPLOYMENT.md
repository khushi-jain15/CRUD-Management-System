# Deployment Guide

## 🚀 Deploy to Render (Recommended)

### Step 1: Set up MongoDB Atlas (Free Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user with password
5. Get your connection string

### Step 2: Deploy to Render

1. **Sign up for Render**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `khushi-jain15/CRUD-Management-System`

3. **Configure the service**
   - **Name**: `crud-management-system`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Add Environment Variables**
   - Click on "Environment" tab
   - Add these variables:
     ```
     MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/crud_example
     PORT=10000
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

### Step 3: Access Your Application

- Your app will be available at: `https://your-app-name.onrender.com`

## 🚀 Deploy to Railway

### Step 1: Set up Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project
4. Connect your GitHub repository

### Step 2: Add Environment Variables

1. Go to "Variables" tab
2. Add:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/crud_example
   PORT=3000
   ```

### Step 3: Deploy

1. Railway will automatically detect it's a Node.js app
2. It will install dependencies and start the app
3. Your app will be available at the provided URL

## 🚀 Deploy to Heroku

### Step 1: Install Heroku CLI

```bash
# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Or use npm
npm install -g heroku
```

### Step 2: Login and Deploy

```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Add MongoDB addon (if using Heroku's MongoDB)
heroku addons:create mongolab:sandbox

# Or set your own MongoDB URI
heroku config:set MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/crud_example

# Deploy
git push heroku main
```

## 🔧 Environment Variables

Create a `.env` file locally for development:

```env
MONGODB_URI=mongodb://localhost:27017/crud_example
PORT=3000
```

For production, set these in your hosting platform's environment variables.

## 📝 Important Notes

1. **MongoDB Atlas**: Use MongoDB Atlas for production database
2. **File Uploads**: The `uploads/` folder won't persist on free tiers
3. **Environment Variables**: Always use environment variables for sensitive data
4. **Port**: Most platforms set their own PORT environment variable

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails**: Check if all dependencies are in `package.json`
2. **Database connection fails**: Verify MongoDB URI is correct
3. **File uploads don't work**: Free tiers don't persist file uploads
4. **Port issues**: Make sure to use `process.env.PORT`

### For File Uploads in Production:

Consider using cloud storage like:
- AWS S3
- Cloudinary
- Firebase Storage

## 📞 Support

If you encounter issues:
1. Check the deployment platform's logs
2. Verify environment variables are set correctly
3. Ensure MongoDB Atlas is accessible from your deployment platform
