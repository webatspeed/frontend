import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {Cache} from "memory-cache";

const cache = new Cache();
const ONE_DAY = 1000 * 60 * 60 * 24;

async function handler(req, res) {

    const madeTooManyRequests = (method, email) => {
        if (method === 'DELETE') {
            return false;
        }

        const key = email + method;
        let numCalls = cache.get(key);
        cache.put(key, ++numCalls, ONE_DAY);
        const callLimit = method === 'POST' ? 1 : 2;
        return numCalls > callLimit;
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

    if (madeTooManyRequests(req.method, data.email) === true) {
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
