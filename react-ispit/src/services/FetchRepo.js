export default async function FetchRepo(input) {
    const response = await fetch(`https://api.github.com/users/${input}/repos`);
        return await response.json();
}