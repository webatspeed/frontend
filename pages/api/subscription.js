import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

async function handler(req, res) {
    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        const url = process.env.NEXT_PUBLIC_API_URL + '/v1/subscription';
        const data = req.body;
        const response = await fetch(url, {
            method: req.method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        res.status(response.status).end();
    }
}

export default handler;