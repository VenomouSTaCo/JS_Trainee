// Init Github
const github = new Github();
// Init UI
const ui = new UI();
// Init search input
const searchInput = document.getElementById('searchUser');

// Add Event Listener
searchInput.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        ui.showLoader();
        // Make HTTP request
        github.getUser(userText)
            .then(user => {
                if (user.message === 'Not Found') {
                    // Show alert
                    ui.showAlert(`User ${userText} not found`, 'alert alert-danger');
                    // Clear profile
                    ui.clearProfile();
                    ui.hideLoader();
                } else {
                    // Show profile
                    ui.showProfile(user);
                    ui.clearAlert();
                }
                return user;
            })
            .then(user => github.getRepos(user))
            .then(repos => ui.showRepos(repos))
            .then(() => ui.hideLoader())
            .catch(err => console.log(err));
    } else {
        // Clear profile
        ui.clearProfile();
    }
});