const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = '𝐐𝐮𝐞𝐞𝐧 𝐏𝐢𝐮';
global.owner = ['919874188403', '917439382677'];
global.premium = ['917439382677'];
global.packname = '𝐐𝐮𝐞𝐞𝐧';
global.author = '𝐏𝐢𝐮';
global.sessionName = 'session';
global.prefa = ['', '!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using Piu-Md commands!`',
    bangc: '`This Group is *Banned* from using Piu-Md Commands!`',
    success: '`✓ Piu is Success`',
    admin: '` This is not for you 👽`',
    botAdmin: '`Piu is not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://whatsapp.com/channel/0029VaFNrVHBfxoBuY2TzH2w'
global.linkGroup = 'https://chat.whatsapp.com/E3PWxdvLc7ZCp1ExOCkEGp'
global.autoswview = process.env.AUTO_STATUS_SEEN || "true",
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.AUTO_ABOUT = true
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
