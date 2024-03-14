export default async function handler(req, res) {
    const url = 'http://16.170.251.148:8000/process_domain'; // Replace with your Flask API URL
    const response = await fetch(url, {
        method: req.method,
        headers: req.headers,
        body: req.body
    });

    const data = await response.json();

    res.status(response.status).json(data);
}
