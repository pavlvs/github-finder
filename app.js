const github = new GitHub;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event lstener

searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not found") {
                    // show an alert message
                } else {
                    // show the profile
                }
            })
    } else {
        // clear the profile
    }
});