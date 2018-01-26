const github = new GitHub;
// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event lstener

searchUser.addEventListener('keyup', e => {
    // console.log('yep');
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            
            if (data.profile.message === 'Not Found') {
                // show an alert message
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // clear the user profile
        ui.clearProfile();
    }
});