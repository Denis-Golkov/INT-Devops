from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['GET'])
def calculate():
    try:
        num1 = float(request.args.get('num1'))
        num2 = float(request.args.get('num2'))
        operation = request.args.get('operation')

        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                return jsonify({"error": "Cannot divide by zero"})
            result = num1 / num2
        else:
            return jsonify({"error": "Invalid operation"})

        return jsonify({"result": result})
    except ValueError:
        return jsonify({"error": "Invalid input. Please enter numbers only."})

@app.route('/<filename>')
def static_file(filename):
    return app.send_static_file(filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
