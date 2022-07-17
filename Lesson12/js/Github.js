class Github {
    constructor() {
        this.client_id = 'fbe1ebd67fa1bd88c21c';
        this.client_secret = 'fe276d98f31c353d47cf5b5d527402bbb79b50bc';
    }

    // Get user by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .then(err => reject(err));
        })
    }

    // Get repos by user
    getRepos(user) {
        return new Promise((resolve, reject) => {
            if (!user.login) {
                reject('User not found');
            }
            fetch(`https://api.github.com/users/${user.login}/repos?per_page=5&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .then(err => reject(err));
        })
    }
}