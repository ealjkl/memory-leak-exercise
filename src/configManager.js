const EventEmitter = require('events');
const logger = require('./logger');

class ConfigManager extends EventEmitter {
  constructor() {
    super();
    this.config = {};
  }

  loadConfig() {
    logger.log("Loading configuration... bip boop ... loading");
    // Load configuration and trigger configuration loaded event
    this.emit('configLoaded');
  }

  getConfig() {
    return this.config;
  }
}

const configManager = new ConfigManager();
module.exports = configManager;