// 8️ Module Example (Export / Import Demonstration)

class User {
    constructor(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }
}

module.exports = { User };


