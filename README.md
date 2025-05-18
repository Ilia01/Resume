# flask-cv-site

This project is a simple web application built using Flask to host a CV/resume website for a junior backend developer.

## Project Structure

```
flask-cv-site
├── src
│   ├── app.py                # Entry point of the Flask application
│   ├── static
│   │   ├── css
│   │   │   └── style.css     # CSS styles for the web application
│   │   └── js
│   │       └── main.js       # JavaScript functionality for the web application
│   └── templates
│       ├── base.html         # Base HTML template
│       ├── index.html        # Main page of the resume website
│       ├── experience.html    # Work experience section
│       ├── skills.html       # Skills section
│       ├── education.html     # Educational background section
│       └── contact.html       # Contact information section
├── requirements.txt           # Dependencies for the Flask application
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flask-cv-site
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the application:
   ```
   python src/app.py
   ```

4. Open your web browser and navigate to `http://127.0.0.1:5000` to view the resume website.

## Usage

This web application serves as a personal CV/resume website, showcasing the skills, experience, and education of a junior backend developer. Visitors can navigate through different sections using the provided links.