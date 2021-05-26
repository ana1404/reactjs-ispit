export default async function Fetch(input) {
    const response = await fetch(`https://api.github.com/users/${input}`);
    if (response.status === 200)
        return response.json();
    if (response.status === 404)
        throw new Error('No such user!');
    throw new Error('Ooops, Server error!');
}
