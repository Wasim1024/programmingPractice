// getting the dom elements
const form = document.querySelector('form')
const input = document.querySelector('input')
const profile = document.querySelector('.profile-container')

// adding event listener to the form to handle submisson
form.addEventListener('submit' , async (e) => {
    e.preventDefault()
    const username = input.value.trim();
    if(!username) {
        alert("please eneter a valid username")
        return;
    }
    // now we need a async function to render the profile
    await fetchAndDisplayProfile(username)

})



//creating a async function that handles api call and dom manilpulation

async function fetchAndDisplayProfile(username){
    try {
        profile.innerHTML = '<p>Loading profile ...</p>'

        // define the github url for specfic user
        const apiUrl = `https://api.github.com/users/${username}`;

        // fetch the data from api
        const response = await fetch(apiUrl)
        if(!response.ok){
            throw new Error('User not found')
        }

        const data = await response.json()



        renderProfile(data)
    }
    catch (error) {
        // 3. Handle and display any errors
        profile.innerHTML = `<p class="error">${error.message}</p>`;
        console.error('Error fetching data:', error);
    }

}



function renderProfile(user){
    // Add expanded class to container
    document.querySelector('.container').classList.add('expanded');

    const profileHtml = `
    <div class="profile-card">
    <img src="${user.avatar_url}" alt="${user.login}'s avatar" style="border-radius:50%; width:100px; height:100px;">
        <h2>${user.name || user.login}</h2>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><strong>Following:</strong> ${user.following}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Bio:</strong> ${user.bio || 'No bio available.'}</p>
        <a href="${user.html_url}" target="_blank">View Profile on Github</a>
        </div>`

        profile.innerHTML = profileHtml;

}