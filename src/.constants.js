module.exports = Object.freeze({
  TOKEN: '1082221331:AAEF5XuMkmfIpFdVcQHFRsvcIw0b-DBUvDs',
  ARIA_SECRET: 'mwa',
  ARIA_DOWNLOAD_LOCATION: '/app',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1kfCKERILGR3aXyibIZkwb3wF4NhKevr1',
  SUDO_USERS: [591530116],
  AUTHORIZED_CHATS: [],
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['a@gmail.com', 'b@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
    COMMANDS_USE_BOT_NAME: {
      ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
      NAME: "@nameOf_bot"
    }
});
