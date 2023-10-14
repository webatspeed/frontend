import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {Cache} from "memory-cache";

const cache = new Cache();
const ONE_DAY = 1000 * 60 * 60 * 24;

async function handler(req, res) {

    const madeTooManyRequests = (method, email, approve) => {
        if (method === 'DELETE') {
            return false;
        }

        const key = email + method + approve;
        let numCalls = cache.get(key);
        cache.put(key, ++numCalls, ONE_DAY);
        return numCalls > 1;
    }

    const methodAllowed = (method) => {
        return ['POST', 'PUT', 'DELETE'].includes(method);
    }

    const emailGiven = (body) => {
        return body.hasOwnProperty('email') === true && typeof body['email'] === 'string' && body['email'].length > 5;
    }

    if (methodAllowed(req.method) === false) {
        return res.status(405).end();
    }

    const data = req.body;
    if (emailGiven(data) === false) {
        return res.status(400).end();
    }

    if (madeTooManyRequests(req.method, data.email, data.approve) === true) {
        return res.status(429).end();
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/subscription', {
        method: req.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res.status(response.status).end();
}

export default handler;
