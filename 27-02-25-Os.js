const os = require('os');
const fs = require('fs');
const path = require('path');
const { uptime } = require('process');

function getSystemInfo(){
    const systemInfo = {
        os: {
            type: os.type(),
            platform: os.platform(),
            arch: os.arch(),
        },

        cpu: {
            model: os.cpus()[0].model,
            cores: os.cpus().length,
        },

        memory: {
            totalGB: (os.totalmem() / 1e9).toFixed(2),
            freeGB: (os.freemem() / 1e9).toFixed(2),
        },

        uptime: {
            seconds: os.uptime(),
            hours: (os.uptime() / 3600).toFixed(2),
        },
        user: os.userInfo(),
        network: os.networkInterfaces(),
    };
    return systemInfo;
}

const systemData = getSystemInfo()

const jsonData = JSON.stringify(systemData, null, 4);

const filePath = path.join(__dirname, 'system-info.json');

fs.writeFileSync(filePath, jsonData);

console.log(`System info saved to: $(filePath)`);