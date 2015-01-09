var multipliers = [0x1000000, 0x10000, 0x100, 1];

function ip2long(ip) {
    var longValue = 0;
    ip.split('.').forEach(function(part, i) {longValue += part * multipliers[i];});
    return longValue;
}

function long2ip(longValue) {
    return multipliers.map(function(multiplier) {
        return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
    }).join('.');
}

exports.ip2long = ip2long;
exports.long2ip = long2ip;