export async function getRandomNumber() {
    const res = await fetch('/random-number');
    if (res.ok) {
        return await res.text();
    } else {
        throw new Error('Request failed');
    }
}