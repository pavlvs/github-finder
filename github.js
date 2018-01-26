class GitHub {
    constructor() {
        this.client_id = "bb968a4dacdcf09ff4ef";
        this.client_secret = "95ab9f84f4af83d4a33a42a64b6b0fe739bfadbf";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}