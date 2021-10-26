function getGitHubProfileInfos() {
    const url = "https://api.github.com/users/lucasywamoto"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userAvatar.src = data.avatar_url
        userURL.href = data.html_url
    })
}

getGitHubProfileInfos()