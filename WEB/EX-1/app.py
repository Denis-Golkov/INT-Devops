from flask import Flask, render_template
from datetime import datetime


# Initialize Flask app
app = Flask(__name__)

@app.route('/get_time')
def get_time():
    time_now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return {'time': time_now}

# Configure logging
@app.route('/<filename>')
def static_file(filename):
    return app.send_static_file(filename)

@app.route('/')
def index():
    return render_template('index.html')

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)