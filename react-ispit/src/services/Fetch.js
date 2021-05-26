export default function Fetch(input) {
    return fetch(`https://api.github.com/users/${input}`)
        .then(response => {
            if (response.status === 200)
                return response.json();
            if (response.status === 404)
                throw new Error('No such user!');
            throw new Error('Ooops, Server error!');
        })
}
