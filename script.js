document.getElementById('submitBtn').addEventListener('click', function () {
   const username = document.getElementById('githubUsername').value
   renderGithubProfile(username)
})

function renderGithubProfile(username) {
   fetch(`https://api.github.com/users/${username}`)
      .then(data => data.json())
      .then(data => {
         document.querySelector('.container').style.visibility = 'visible'
         document.getElementById('username').textContent = data.login
         document.getElementById('username').addEventListener('click', function () {
            window.open(`https://github.com/${data.login}`, '_blank')
         })
         document.getElementById('reponum').textContent = data.public_repos
         document.getElementById('followers').textContent = data.followers
         document.getElementById('following').textContent = data.following
         document.getElementById('dateJoined').textContent = new Date(data.created_at).toLocaleDateString()
         document.getElementById('avatar').src = data.avatar_url
      })
}
