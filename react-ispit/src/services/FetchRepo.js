export default function FetchRepo(input) {
    return fetch(`https://api.github.com/users/${input}/repos`)
        .then(response => {
                return response.json();
        })
}