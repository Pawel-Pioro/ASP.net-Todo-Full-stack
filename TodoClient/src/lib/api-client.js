const BASE_URL = "http://localhost:5062/api"

export default async function api(path, options = {}) {
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {
            ...options.headers,
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json().catch(() => null)

    return {
        ok: res.ok,
        status: res.status,
        data
    }
}