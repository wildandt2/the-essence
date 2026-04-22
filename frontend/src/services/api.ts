const BASE_URL = "http://localhost:5000"; // backend kamu

export const getData = async () => {
  const res = await fetch(`${BASE_URL}/api/data`);
  return res.json();
};