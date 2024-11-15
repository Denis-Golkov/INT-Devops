from flask import Flask, render_template , request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    user_name = request.form['user_name']
    email = request.form['email']
    textarea = request.form['textarea']

    with open('submitted_text.txt', 'a') as file:
        file.write('user_name: ' + user_name + '\n')
        file.write('email: ' + email + '\n')
        file.write('textarea: ' + textarea + '\n')
    return redirect(url_for('index'))
    
# Configure logging
@app.route('/<filename>')
def static_file(filename):
    return app.send_static_file(filename)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080,)