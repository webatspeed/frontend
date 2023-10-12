import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

async function handler(req, res) {
    const url = process.env.NEXT_PUBLIC_API_URL + '/v1/subscription';
    const data = req.body;

    if (req.method === 'POST') {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        res.status(response.status).end();
    }
}

export default handler;