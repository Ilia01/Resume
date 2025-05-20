from flask import Flask, render_template, send_file
import os
from config import Config

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/view-certificate')
def view_certificate():
    certificate_path = os.path.join(app.static_folder, 'certificates', 'certificate.pdf')
    return send_file(
        certificate_path,
        mimetype='application/pdf',
        as_attachment=False
    )

if __name__ == '__main__':
    app.run(debug=Config.DEBUG)