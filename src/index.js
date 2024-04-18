const { createProfile, profileManager } = require("./profileCreator");
const configManager = require("./configManager");

configManager.on("configLoaded", () => {
  for (let i = 0; i < 1_000_000; i++) {
    createProfile(i);
  }

  setInterval(() => {
    profileManager.emit("profileCreated");
  }, 1000);
});

configManager.loadConfig();
