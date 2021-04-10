var shifts = [24,16,8,0];

function ip2long(ip) {
    var longValue = 0;
    ip.split('.').forEach(function(part, i) {longValue += part << shifts[i];});
    return longValue;
}

function long2ip(longValue) {
    return shifts.map(function(shift) {
        return ( longValue & ( 255 << shift ) ) >>> shift;
    }).join('.');
}

exports.ip2long = ip2long;
exports.long2ip = long2ip;
