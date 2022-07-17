class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.searchContainer = document.querySelector('.searchContainer');
        this.loader = document.querySelector('.loader');
    }

    // Display alert message
    showAlert(message = '', className = 'alert alert-info') {
        // Clear any alert
        this.clearAlert();

        // Create template
        const alert = `<div class="${className}">${message}</div>`

        this.searchContainer.insertAdjacentHTML('afterbegin', alert);

        // Hide alert after 3s
        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Display profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card  card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"></a>
                </div>
                <div class="col-md-9">
                    <div class="user-info-header">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog ? user.blog : 'N/A'}</li>
                        <li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    //Display repos
    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
                    <div class="card card-body mb-2">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-success">Forks: ${repo.forms_count ? repo.forms_count : 'N/A'}</span>
                            </div>
                        </div>
                    </div>
            `
        });
        document.getElementById('repos').innerHTML = output;
    }

    showLoader() {
        this.loader.style.display = 'block';
    }

    hideLoader() {
        setTimeout(() => this.loader.style.display = 'none', 300);
    }
}