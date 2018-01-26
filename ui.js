class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // show the user's profile
    showProfile(user) {
        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid">
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Public Followers: ${user.followers}</span>
                    
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
        `;
    }

    clearProfile() {
        // clear the div profile
        this.profile.innerHTML = '';
    }

    showAlert(message, classname) {
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add classes
        div.className = classname;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.search-container');
        // get searchbox
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        // check if there is one already
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}
