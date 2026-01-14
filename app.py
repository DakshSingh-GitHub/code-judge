import json
from flask import Flask, request, jsonify, render_template
from runner import run_code_multiple
import os

app = Flask(__name__)

PROBLEMS_DIR = "problems"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json(force=True)

    problem_id = data.get("problem_id", "")
    code = data.get("code", "")

    if not code: 
        return jsonify({"error": "No code provided"}), 400
    
    if not problem_id:
        return jsonify({"error": "No problem provided"}), 400

    problem_path = os.path.join(PROBLEMS_DIR, f"{problem_id}.json")
    if not os.path.exists(problem_path):
        return jsonify({"error": "Problem not found"})
    
    with open(problem_path, "r") as f:
        problem = json.load(f)

    judge_mode = problem.get("judge_mode", "ALL")

    test_cases = (
        problem.get("sample_test_cases", []) +
        problem.get("custom_test_cases", [])
    )

    result = run_code_multiple(
        code = code,
        test_cases = test_cases,
        mode = judge_mode
    )

    visible_results = []
    for idx, tc_result in enumerate(result["test_case_results"]):
        if idx < len(problem.get("sample_test_cases", [])):
            visible_results.append(tc_result)
        else:
            visible_results.append({
                "test_case": tc_result["test_case"],
                "status": tc_result["status"]
            })
    
    return jsonify({
        "problem_id": problem_id,
        "final_status": result["final_status"],
        "summary": result["summary"],
        "test_case_results": visible_results
    })
            


if __name__ == "__main__":
    app.run(debug=True)
