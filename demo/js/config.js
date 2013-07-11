'use strict';

var device_id = "RPI000000006f257df2";
var server_url = "http://m2m.eclipse.org/m3da/clients";

appmodule.factory('config', function() {
	var config = {
	    serverURL: "http://edge.m2mop.net",
	    applicationName: "greenhouse",
	    temperaturePath: "greenhouse.data.temperature",
	    luminosityPath: "greenhouse.data.luminosity",
	    humidityPath: "greenhouse.data.humidity",
	    roofPath: "greenhouse.data.open",
	    roofCmd: "greenhouse.data.toggleRoof"
	};
	return config;
    });