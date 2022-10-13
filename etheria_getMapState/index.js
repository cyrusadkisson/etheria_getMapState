// We're using ES6 syntax because the instructions for using AWS Managed Blockchain do
// and if we want to switch from a service like Infura to AMB later, it'll be easier.

import constants from "./constants.js";
import Web3 from 'web3';
import namehash from 'eth-ens-namehash';

//const s3 = new AWS.S3();

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var spreadTimer = process.env.SPREAD_TIMER_IN_MS;
var ensSpreadTimer = 2500; // ens lookups happen after we've gotten the base tile info because we need the owner addresses

export const handler = async (event) => {
	console.log("event=" + JSON.stringify(event));
	console.log("querystring=" + JSON.stringify(event.params.querystring));
	console.log("version=" + event.params.querystring.version);
	console.log("atBlock=" + event.params.querystring.atBlock);

	var web3s = [];
	web3s.push(new Web3(process.env.WEB3_PROVIDER_URL_1));
	web3s.push(new Web3(process.env.WEB3_PROVIDER_URL_2));

	var etherias = [];
	var wrappers = [];
	var exchanges = [];
	var registries = [];
	if (event.params.querystring.version === "0.9") {
		for (var w = 0; w < web3s.length; w++) {
			etherias.push(new web3s[w].eth.Contract(constants.etheriaV0pt9abi, constants.etheriaV0pt9Address));
			wrappers.push(new web3s[w].eth.Contract(constants.wrapperAbiV0pt9, constants.wrapperAddressV0pt9));
			registries.push(new web3s[w].eth.Contract(constants.registryAbi, constants.registryAddress));
		}
	}
	else if (event.params.querystring.version === "1.0") {
		for (var w = 0; w < web3s.length; w++) {
			etherias.push(new web3s[w].eth.Contract(constants.etheriaV1pt0abi, constants.etheriaV1pt0Address));
			wrappers.push(new web3s[w].eth.Contract(constants.wrapperAbiV1pt0, constants.wrapperAddressV1pt0));
			registries.push(new web3s[w].eth.Contract(constants.registryAbi, constants.registryAddress));
		}
	}
	else if (event.params.querystring.version === "1.1") {
		for (var w = 0; w < web3s.length; w++) {
			etherias.push(new web3s[w].eth.Contract(constants.etheriaV1pt1abi, constants.etheriaV1pt1Address));
			exchanges.push(new web3s[w].eth.Contract(constants.exchangeAbi, constants.exchangeAddressV1pt1));
			registries.push(new web3s[w].eth.Contract(constants.registryAbi, constants.registryAddress));
		}
	}
	else if (event.params.querystring.version === "1.2") {
		for (var w = 0; w < web3s.length; w++) {
			etherias.push(new web3s[w].eth.Contract(constants.etheriaV1pt1abi, constants.etheriaV1pt2Address)); // yes, using v1.1 abi. it is identical
			exchanges.push(new web3s[w].eth.Contract(constants.exchangeAbi, constants.exchangeAddressV1pt2));
			registries.push(new web3s[w].eth.Contract(constants.registryAbi, constants.registryAddress));
		}
	}
	else
		reject("no valid version parameter supplied");

	function getOwner(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "getOwner", "value": "0x0000000000000000000000000000000000000000" });
			}
			//			else if (event.params.querystring.version === "0.9" && ((135 <= index && index <= 137) || (168 <= index && index <= 169))) {	// 5 tiles in v0.9 are ultra-bricked (by me). Let's not waste calls on them every 12 minutes forever
			//				resolve({ "index": index, "method": "getOwner", "value": "0xb324459DacD18d463f20bA4fa7E10432F59d4043" });
			//			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					etherias[randomInt].methods.getOwner(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
						resolve({ "index": index, "method": "getOwner", "value": result });
					}).catch(function(caughtError) {
						//						console.log("getOwner(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
						var randomInt2 = getRandomInt(0, web3s.length - 1);
						etherias[randomInt2].methods.getOwner(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
							resolve({ "index": index, "method": "getOwner", "value": result });
						}).catch(function(caughtError) {
							//							console.log("getOwner(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
							reject(caughtError + " (getOwner endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
						});
					});
				}, sleepAmount);
			}
		});
	}

	function getName(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "getName", "value": "" });
			}
			//			else if (event.params.querystring.version === "0.9" && ((135 <= index && index <= 137) || (168 <= index && index <= 169))) {	// 5 tiles in v0.9 are ultra-bricked (by me). Let's not waste calls on them every 12 minutes forever
			//				resolve({ "index": index, "method": "getName", "value": "" });
			//			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					etherias[randomInt].methods.getName(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
						if (result === null)
							result = "";
						resolve({ "index": index, "method": "getName", "value": result });
					}).catch(function(caughtError) {
						//						console.log("getName(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
						var randomInt2 = getRandomInt(0, web3s.length - 1);
						etherias[randomInt2].methods.getName(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
							if (result === null)
								result = "";
							resolve({ "index": index, "method": "getName", "value": result });
						}).catch(function(caughtError) {
							//							console.log("getName(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
							reject(caughtError + " (getName endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
						});
					});
				}, sleepAmount);
			}
		});
	}

	function getStatus(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "getStatus", "value": "" });
			}
			//			else if (event.params.querystring.version === "0.9" && ((135 <= index && index <= 137) || (168 <= index && index <= 169))) {	// 5 tiles in v0.9 are ultra-bricked (by me). Let's not waste calls on them every 12 minutes forever
			//				resolve({ "index": index, "method": "getStatus", "value": "" });
			//			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					etherias[randomInt].methods.getStatus(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
						resolve({ "index": index, "method": "getStatus", "value": result });
					}).catch(function(caughtError) {
						if (index === 798 && (atBlock >= 12864037 || atBlock === "latest") && event.params.querystring.version === "1.2") // there is a single case where I set status bytes directly on tile 419 as a test, which will result in an error if we try to read it as a string here
						{
							console.log("getStatus SPECIAL CASE");
							resolve({ "index": index, "method": "getStatus", "value": "Special case bytes test. This is a canned response. Check chain data for actual value." });
						}
						else {
							//							console.log("getStatus(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
							var randomInt2 = getRandomInt(0, web3s.length - 1);
							etherias[randomInt2].methods.getStatus(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
								resolve({ "index": index, "method": "getStatus", "value": result });
							}).catch(function(caughtError) {
								//								console.log("getStatus(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
								reject(caughtError + " (getStatus endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
							});
						}
					});
				}, sleepAmount);
			}
		});
	}

	function getBlocks(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "getBlocks", "value": [] });
			}
			//			else if (event.params.querystring.version === "0.9" && ((135 <= index && index <= 137) || (168 <= index && index <= 169))) {	// 5 tiles in v0.9 are ultra-bricked (by me). Let's not waste calls on them every 12 minutes forever
			//				resolve({ "index": index, "method": "getBlocks", "value": [] });
			//			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					etherias[randomInt].methods.getBlocks(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
						resolve({ "index": index, "method": "getBlocks", "value": result });
					}).catch(function(caughtError) {
						//						console.log("getBlocks(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
						var randomInt2 = getRandomInt(0, web3s.length - 1);
						etherias[randomInt2].methods.getBlocks(Math.floor(index / 33), index % 33).call(atBlock).then(function(result) {
							resolve({ "index": index, "method": "getBlocks", "value": result });
						}).catch(function(caughtError) {
							//							console.log("getBlocks(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
							reject(caughtError + " (getBlocks endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
						});
					});
				}, sleepAmount);
			}
		});
	}

	function ownerOf(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "ownerOf", "value": "" });
			}
			else if (event.params.querystring.version === "0.9" && atBlock <= 14466017) {
				resolve({ "index": index, "method": "ownerOf", "value": "" });
			}
			else if (event.params.querystring.version === "1.0" && atBlock <= 14466069) {
				resolve({ "index": index, "method": "ownerOf", "value": "" });
			}
			else if (event.params.querystring.version === "1.1" || event.params.querystring.version === "1.2") {
				resolve({ "index": index, "method": "ownerOf", "value": "" });
			}
			//			else if (event.params.querystring.version === "0.9" && ((135 <= index && index <= 137) || (168 <= index && index <= 169))) {	// 5 tiles in v0.9 are ultra-bricked (by me). Let's not waste calls on them every 12 minutes forever
			//				resolve({ "index": index, "method": "ownerOf", "value": "" });
			//			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					wrappers[randomInt].methods.ownerOf(index).call(atBlock).then(function(result) {
						resolve({ "index": index, "method": "ownerOf", "value": result });
					}).catch(function(caughtError) {
						// is this a real error or just an unwrapped tile?
						if (caughtError.toString().indexOf("owner query for nonexistent token") != -1) {
							resolve({ "index": index, "method": "ownerOf", "value": "" });
						}
						else {
							//							console.log("ownerOf(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
							var randomInt2 = getRandomInt(0, web3s.length - 1);
							wrappers[randomInt2].methods.ownerOf(index).call(atBlock).then(function(result) {
								resolve({ "index": index, "method": "ownerOf", "value": result });
							}).catch(function(caughtError) {
								// is this a real error or just an unwrapped tile?
								//								console.log("ownerOf(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
								reject(caughtError + " (ownerOf endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
							});
						}
					});
				}, sleepAmount);
			}
		});
	}

	// NOTE: we resolve numbers in quotes for conversion purposes because they are wei values

	// there is no getBid because bids do not belong to individual tiles, but to bidders

	function getAsk(index, atBlock) {
		return new Promise((resolve, reject) => {
			if (constants.elevations[index] < 125) { // water, just return rather than spending a call to the endpoint
				resolve({ "index": index, "method": "getAsk", "value": "0" });
			}
			else if (event.params.querystring.version === "0.9" || event.params.querystring.version === "1.0") {
				resolve({ "index": index, "method": "getAsk", "value": "0" });
			}
			else if (event.params.querystring.version === "1.1" && atBlock <= 14562572) {
				resolve({ "index": index, "method": "getAsk", "value": "0" });
			}
			else if (event.params.querystring.version === "1.2" && atBlock <= 12977723) {
				resolve({ "index": index, "method": "getAsk", "value": "0" });
			}
			else {
				var sleepAmount = getRandomInt(0, spreadTimer);
				setTimeout(function() {
					var randomInt = getRandomInt(0, web3s.length - 1);
					exchanges[randomInt].methods.getAsk(Math.floor(index / 33), index % 33).call(atBlock).then(function(getAskResult) {
						resolve({ "index": index, "method": "getAsk", "value": getAskResult });
					}).catch(function(caughtError) {
						//						console.log("getAsk(" + index + ") caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
						var randomInt2 = getRandomInt(0, web3s.length - 1);
						exchanges[randomInt2].methods.getAsk(Math.floor(index / 33), index % 33).call(atBlock).then(function(getAskResult) {
							resolve({ "index": index, "method": "getAsk", "value": getAskResult });
						}).catch(function(caughtError) {
							//							console.log("getAsk(" + index + ") caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
							reject(caughtError + " (getAsk endpoints were " + web3s[randomInt].currentProvider.host + ", then " + web3s[randomInt2].currentProvider.host + ")");
						});
					});
				}, sleepAmount);
			}
		});
	}

	// NOTE: no retries on getEnsName
	function getEnsName(address, atBlock) {
		return new Promise((resolve, reject) => {
			var sleepAmount = getRandomInt(0, ensSpreadTimer);
			setTimeout(function() {
				const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
				var normalizedReverseName = namehash.normalize(reverseName);
				var hashedReverseName = namehash.hash(normalizedReverseName);

				registries[getRandomInt(0, web3s.length - 1)].methods.resolver(hashedReverseName).call(atBlock).then(function(result) {
					//					console.log("result=" + result);
					var resolver = new web3s[getRandomInt(0, web3s.length - 1)].eth.Contract(constants.resolverAbi, result);
					resolver.methods.name(hashedReverseName).call(atBlock).then(function(result2) {
						//console.log("successfully reverse-resolved \"" + result2 + "\" on for addr=" + address);
						resolve({ "address": address, "method": "getEnsName", "value": result2 });
					}).catch(function(caughtError) {
						// for some dumb reason, a response with nothing produces an error to catch.
						// so we resolve as if it were successful in responding, but with a null value to indicate nothing found
						resolve({ "address": address, "method": "getEnsName", "value": null });
					});
				}).catch(function(caughtError) {
					// for some dumb reason, a response with nothing produces an error to catch.
					// so we resolve as if it were successful in responding, but with a null value to indicate nothing found
					resolve({ "address": address, "method": "getEnsName", "value": null });
				});
			}, sleepAmount);
		});
	}

	function hex2a(hexx) {
		var hex = hexx.toString();//force conversion
		var str = '';
		for (var i = 0; i < hex.length; i += 2)
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return str;
	}

	return new Promise((resolve, reject) => {

		if (!event.params.querystring) {
			reject(new Error("event.params.querystring is invalid or missing"));
			return;
		}

		if (!
			(
				event.params.querystring.version === "0.9" ||
				event.params.querystring.version === "1.0" ||
				event.params.querystring.version === "1.1" ||
				event.params.querystring.version === "1.2"
			)
		) {
			reject(new Error("Invalid or missing version parameter"));
			return;
		}

		if (!event.params.querystring.atBlock)
			event.params.querystring.atBlock = "latest";

		// initialize map
		var mapToReturn = new Array(1089);
		var m = 0;
		while (m < 1089) {
			mapToReturn[m] = { "index": m, "elevation": constants.elevations[m] };
			m++;
		}
		//console.log("initialized map=" + JSON.stringify(mapToReturn));

		// assemble all the promises
		var promises = [];
		m = 0;
		while (m < 1089) {
			promises.push(getOwner(m, event.params.querystring.atBlock));
			promises.push(getName(m, event.params.querystring.atBlock));
			promises.push(getStatus(m, event.params.querystring.atBlock)); // wasteful
			promises.push(getBlocks(m, event.params.querystring.atBlock)); // wasteful
			promises.push(ownerOf(m, event.params.querystring.atBlock)); // go ahead and call these for all versions as 1.1 and 1.2 could be wrappable someday
			promises.push(getAsk(m, event.params.querystring.atBlock));
			m++;
		}

		// execute them all at once
		var ownersSet = new Set();
		Promise.all(promises).then(function(resultsArray) {
			m = 0;
			while (m < resultsArray.length) {																			// decipher which response is which and place in the mapToReturn
				if (resultsArray[m].method === "getOwner") {
					mapToReturn[resultsArray[m].index].owner = resultsArray[m].value;
					if (resultsArray[m].value !== "0x0000000000000000000000000000000000000000" && resultsArray[m].value !== "0xb324459DacD18d463f20bA4fa7E10432F59d4043")
						ownersSet.add(resultsArray[m].value);
				}
				else if (resultsArray[m].method === "getName") {
					mapToReturn[resultsArray[m].index].nameRaw = resultsArray[m].value;	// these are temporarily the same
					mapToReturn[resultsArray[m].index].name = resultsArray[m].value; 	// "name" will be returned as the ASCII version appended with "(+ build data)" if necessary
				}
				else if (resultsArray[m].method === "getStatus")
					mapToReturn[resultsArray[m].index].status = resultsArray[m].value;
				else if (resultsArray[m].method === "getBlocks")
					mapToReturn[resultsArray[m].index].blocks = resultsArray[m].value;
				else if (resultsArray[m].method === "ownerOf")
					mapToReturn[resultsArray[m].index].ownerOf = resultsArray[m].value;
				else if (resultsArray[m].method === "getAsk")
					mapToReturn[resultsArray[m].index].ask = resultsArray[m].value;
				m++;
			}

			m = 0;
			var newNameUtf8 = "";
			while (m < 1089) {
//				if (m === 641) { // builds are only possible when length is greater than 2 (0x)
//					console.log("for tile index=" + m + ", name and nameRaw are both " + mapToReturn[m].name + " before attempting URI decoding2");
//				}
				try {
					newNameUtf8 = decodeURIComponent(mapToReturn[m].name.replace(/[0-9a-f]{2}/g, '%$&')); //  put a % in front of every pair of hex digits (thus creating a URL encoded string), then let decodeURIComponent handle the details (in particular, it will correctly decode multi-byte UTF-8 characters).
					newNameUtf8 = newNameUtf8.substring(2); // remove Ox
					mapToReturn[m].name = newNameUtf8;	// name was a valid UTF-8 string (also works for "")
//					console.log("for tile index=" + m + ", name was valid UTF-8 (no build detected (yet)) name=" + mapToReturn[m].name);
				} catch (e) {
					console.log("for tile index=" + m + ", name was NOT valid UTF-8 which implies there is a build here. Extracting name portion...");
					// if not valid plain UTF-8, this means it's build data with name data tacked on the front. Let's decode it.
					// we know that there is at least a "00" at the beginning indicating no name.
					var newName = mapToReturn[m].name;
					if (newName.startsWith("0x"))
						newName = newName.substring(2);
					var namePartLength = parseInt(newName.substring(0, 2), 16);
					if (namePartLength === 0) {
						mapToReturn[m].name = " (+ build data)";
					}
					else {
						var namePartHex = newName.substring(2, namePartLength * 2 + 2);
						var namePartAscii = hex2a(namePartHex);
						mapToReturn[m].name = namePartAscii + " (+ build data)";
					}
					console.log("done. name=" + mapToReturn[m].name);
				}
				m++;
			}

			// Now take the ownersSet and look up the ENS name for each address

			var ensPromises = [];
			ownersSet.forEach(function(address) {
				ensPromises.push(getEnsName(address, event.params.querystring.atBlock));
			});

			Promise.all(ensPromises).then(function(resultingArray) {

				var i = 0;
				var m = 0;
				while (i < resultingArray.length) {
					if (resultingArray[i].value !== null) 	// where our ens lookup produced something...
					{
						//console.log("value found " + resultingArray[i].address + ", looping map to insert");
						while (m < 1089) {					// loop the map... 
							if (resultingArray[i].address === mapToReturn[m].owner) 	// and where, in the map, we find an address match...
							{
								console.log("adding " + resultingArray[i].value + " as .ens property on tile " + m);
								mapToReturn[m].ens = resultingArray[i].value;			// add the ens we found for the address to the tile data
								console.log(JSON.stringify(mapToReturn[m], null, 2));
							}
							m++;
						}
					}
					i++;
				}

				// then create the return envelope with metadata 
				// and resolve
				//				var randomInt = getRandomInt(0, web3s.length - 1);
				//				web3s[randomInt].eth.getBlock("latest").then(function(result) {
				web3s[0].eth.getBlock(event.params.querystring.atBlock, false).then(function(gottenBlock) {
					var envelopeToReturn = { "timestamp": gottenBlock.timestamp, "version": event.params.querystring.version, "blockNumber": gottenBlock.number };
					envelopeToReturn.tiles = mapToReturn;
					console.log("resolving envelopeToReturn");
					console.log("timestamp=" + gottenBlock.timestamp);
					console.log("blockNumber=" + gottenBlock.number);
					console.log("version=" + envelopeToReturn.version);
					console.log("tiles.length=" + envelopeToReturn.tiles.length);
					//console.log("envelopeToReturn=" + JSON.stringify(envelopeToReturn, null, 2));
					resolve(envelopeToReturn);
				});
				//				}).catch(function(caughtError) {
				//					console.log("web3.eth.getBlock() caught error=" + caughtError + ". Trying again. (endpoint was" + web3s[randomInt].currentProvider.host + ") ");
				//					var randomInt2 = getRandomInt(0, web3s.length - 1);
				//					web3s[randomInt2].eth.getBlock("latest").then(function(result) {
				//						var envelopeToReturn = { "timestamp": Date.now(), "version": event.params.querystring.version, "blockNumber": result.number };
				//						envelopeToReturn.tiles = mapToReturn;
				//						console.log("resolving envelopeToReturn (2nd try)");
				//						console.log("timestamp=" + envelopeToReturn.timestamp);
				//						console.log("blockNumber=" + envelopeToReturn.blockNumber);
				//						console.log("version=" + envelopeToReturn.version);
				//						console.log("tiles.length=" + envelopeToReturn.tiles.length);
				//						resolve(envelopeToReturn);
				//					}).catch(function(caughtError) {
				//						console.log("web3.eth.getBlock() caught error=" + caughtError + ". Bailing. (endpoint was" + web3s[randomInt2].currentProvider.host + ") ");
				//						reject(caughtError);
				//					});
				//				});


			}).catch(function(err) { console.log("Promise.all(ensPromises) err=" + err); reject(err); });
		}).catch(function(err) { console.log("Promise.all(promises) err=" + err); reject(err); });
	});
};


//handler({
//	"body-json": {},
//	"params": {
//		"path": {},
//		"querystring": {
//			"atBlock": "latest",
//			"version": "0.9"
//		}
//	}
//});
