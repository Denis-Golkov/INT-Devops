from flask import Flask, render_template, request, jsonify

# Initialize Flask app
app = Flask(__name__)

@app.route('/get_Temp')
def get_Temp():
    temp = request.args.get('temp')
    try:
        temp = float(temp)  # Convert input to float
        fahrenheit = temp * 1.8 + 32
        return jsonify({'Temperature in Fahrenheit': f'{fahrenheit}°F'})
    except ValueError:
        return jsonify({'status_code': 'FAILED', 'error': 'Invalid temperature input'})

@app.route('/')
def index():
    return render_template('index.html')

# Configure logging
@app.route('/<filename>')
def static_file(filename):
    return app.send_static_file(filename)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)