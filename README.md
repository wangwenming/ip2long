#ip2long and long2ip, only support IPv4

#示例
```
var ipUtils = require('ip2long');
var ip2long = ipUtils.ip2long;
var long2ip = ipUtils.long2ip;

ip2long('127.0.0.1'); // 2130706433
long2ip(2130706433);  // 127.0.0.1
```

[![Build Status](https://travis-ci.org/wangwenming/ip2long.svg)](https://travis-ci.org/wangwenming/ip2long)

