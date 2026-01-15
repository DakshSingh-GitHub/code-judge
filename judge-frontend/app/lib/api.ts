const BASE_URL = "http://localhost:5000";

export async function getProblems() {
  const res = await fetch(`${BASE_URL}/problems`);
  return res.json();
}

export async function getProblemById(id: any) {
  const res = await fetch(`${BASE_URL}/problems/${id}`);
  return res.json();
}
