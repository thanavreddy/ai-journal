# AI Journal App Deployment Guide

## Backend Deployment (Render)

### Prerequisites
1. Create a [Render](https://render.com) account
2. Get your Mistral API key from [Mistral AI](https://console.mistral.ai/)

### Steps to Deploy Backend

1. **Connect Repository**
   - Go to Render Dashboard
   - Click "New Web Service"a
   - Connect your GitHub repository

2. **Configure Environment Variables**
   - Add `MISTRAL_API_KEY` with your actual API key
   - Add `FLASK_ENV=production`

3. **Deploy**
   - Render will use the `render.yaml` configuration
   - The backend will be available at: `https://your-app-name.onrender.com`

## Frontend Deployment (Netlify)

### Steps to Deploy Frontend

1. **Update API Configuration**
   - Update the backend URL in your frontend code to point to your deployed Render service

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy

## Alternative: Complete Render Deployment

If you prefer to deploy both frontend and backend on Render:

1. Backend: Follow the steps above
2. Frontend: Create a new Static Site service on Render
   - Build command: `npm run build`
   - Publish directory: `dist`

## Environment Variables Needed

### Backend (Render)
- `MISTRAL_API_KEY`: Your Mistral AI API key
- `FLASK_ENV`: production
- `DATABASE_URL`: (automatically set by Render if using their database)

### Frontend
- Update the API base URL to your deployed backend URL

## Database

The current setup uses SQLite. For production, consider:
1. Using Render's PostgreSQL database (recommended)
2. Or keep SQLite for simplicity (works for small apps)

## SSL/HTTPS

Both Render and Netlify provide free SSL certificates automatically.
