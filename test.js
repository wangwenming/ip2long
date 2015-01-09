var expect = require("chai").expect;

describe("ip2long", function() {

    var ipUtil = require('./');
    var ip2long = ipUtil.ip2long;
    var long2ip = ipUtil.long2ip;

    /*
    it("should bail if not passed an string", function() {
        expect(function() { ip2long(123); }).to.throw(TypeError);
    });
    */

    it("should return long format of string value IP", function() {
        expect(ip2long('127.0.0.1')).to.equal(2130706433);
    });

    it("should return string format of long value IP", function() {
        expect(long2ip(2130706433)).to.equal('127.0.0.1');
    });
});