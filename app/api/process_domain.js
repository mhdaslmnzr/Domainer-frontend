export default async function handler(req, res) {
    try {
        // Forward the request to the Flask API
        const flaskResponse = await fetch('http://16.170.251.148:8000/process_domain', {
            method: req.method,
            headers: req.headers,
            body: req.body
        });

        // Extract data from Flask API response
        const data = await flaskResponse.json();

        // Set the appropriate status code and send the data back to the client
        res.status(flaskResponse.status).json(data);
    } catch (error) {
        // Handle errors
        console.error('Error proxying request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
