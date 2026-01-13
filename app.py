from flask import Flask, request, jsonify
from runner import run_code

app = Flask(__name__)

@app.route('/submit', methodd=['POST'])
def Submit():
    data = request.json
    code = data.get("code", "")

    if not code:
        return jsonify({ "error": "no code provided" })
    
    result = run_code(code)
    return jsonify({ "result": result })

if __name__ == '__main__':
    app.run(debug=True)
