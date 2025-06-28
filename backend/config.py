import os

class Config:
    # Use PostgreSQL in production if DATABASE_URL is available, otherwise SQLite
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///journal.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MISTRAL_API_KEY = os.getenv('MISTRAL_API_KEY')
    
    # Production optimizations
    if os.getenv('FLASK_ENV') == 'production':
        DEBUG = False
        TESTING = False
    else:
        DEBUG = True
