const URL = 'https://api.github.com/users/Neox63';

export const getGithubPic = async () => {
    try {
        const response = await fetch(URL);
        const json = await response.json();

        return json.avatar_url;

    } catch (ex) {
        console.log(`Error : ${ex}`);
    }
}