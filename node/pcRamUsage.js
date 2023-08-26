const os = require('os');

setInterval(()=> {
    const {arch, platform , totalmem,  freemem, hostname, version, uptime, type} = os;
    const tRam = totalmem/1024/1024;
    const fRam = freemem/1024/1024;
    const usage = (fRam/tRam)*100;
    const time = new Date(uptime * 1000).toISOString().substr(11, 8);
     
    const stats = {
        OS: platform(),
        Arch: arch(),
        Name: hostname(),
        Version: version(),
        Uptime: `${time}`,
        Type: type(),
        TotalMEM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)}%`
    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);

