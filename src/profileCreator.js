const ProfileManager = require("./ProfileManager");
const logger = require("./logger");
const db = require("./database");

const profileManager = new ProfileManager();

profileManager.on("profileAdded", (userID) => {
  profileManager.on("profileCreated", () => {
    if (profileManager.profiles.get(userID).created === false) {
      logger.log(`Profile created for user ${userID}`);
      profileManager.profiles.get(userID).created = true;
      db.updateProfile(userID, { created: true }); // Update database
    }
  });
});

function createProfile(userID) {
  logger.log(`Creating profile for user ${userID}`);
  db.saveProfile(userID); // Simulate saving to a database
  profileManager.addProfile(userID);
}

module.exports = {
  createProfile,
  profileManager,
};
