var debug = require("debug")("test-debug");

(function(){
	debug("hello","abc","xyz");
	debug("My name is khan", "Your name is also khan");
}());