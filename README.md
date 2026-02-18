# Portfolio Website

A modern, responsive portfolio website built with React and FastAPI.

## Features

- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI components with Radix UI
- 📧 Contact form with email notifications
- 🖼️ Image gallery and project showcase
- 🔗 Live project links
- ⚡ Fast loading with optimized assets

## Tech Stack

### Frontend
- React 19.0.0
- Tailwind CSS
- Radix UI Components
- Axios for API requests
- CRACO for build configuration

### Backend
- FastAPI (Python)
- SMTP email integration
- CORS middleware
- Uvicorn server

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.7+
- Gmail account with App Password for email functionality

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Setup Frontend:
```bash
cd frontend
npm install
```

3. Setup Backend:
```bash
cd backend
pip install -r requirements.txt
```

4. Configure Email (Optional):
```bash
cd backend
cp email_config_template.py email_config.py
# Edit email_config.py with your actual email credentials
```

### Running the Application

1. Start the backend server:
```bash
cd backend
python simple_server.py
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   └── lib/             # Utility functions
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── backend/                 # FastAPI backend
│   ├── simple_server.py     # Main server file
│   ├── email_config.py      # Email configuration (not in repo)
│   └── requirements.txt     # Backend dependencies
└── README.md               # This file
```

## Contact Form Setup

To enable email functionality:

1. Create a Gmail App Password:
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for the application

2. Update `backend/email_config.py` with your credentials

## Deployment

### Frontend (GitHub Pages)
The frontend can be deployed to GitHub Pages using the build script.

### Backend
The backend can be deployed to platforms like:
- Heroku
- Render
- Railway
- Vercel (for serverless functions)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).