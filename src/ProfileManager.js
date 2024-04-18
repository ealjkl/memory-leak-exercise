const EventEmitter = require("events");

class ProfileManager extends EventEmitter {
  constructor() {
    super();
    this.profiles = new Map();
  }

  addProfile(userID) {
    this.profiles.set(userID, { created: false });
    this.emit("profileAdded", userID);
  }
}

module.exports = ProfileManager;
