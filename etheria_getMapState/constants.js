const elevations = [116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,
	108, 116, 114, 119, 120, 127, 107, 115, 96, 105, 89, 116, 151, 132, 145, 120, 108, 110, 99, 120, 93, 118, 106, 115, 146, 133, 140, 119, 95, 106, 118, 116, 116, 116, 117,
	119, 122, 130, 139, 126, 114, 104, 95, 105, 116, 132, 149, 137, 125, 115, 105, 115, 125, 122, 120, 117, 115, 132, 150, 136, 122, 109, 97, 106, 116, 116, 111, 119, 109, 125,
	114, 130, 110, 113, 93, 105, 96, 116, 151, 137, 159, 129, 151, 119, 144, 129, 114, 122, 113, 114, 99, 135, 129, 125, 110, 109, 91, 116, 116, 119, 122, 125, 129, 125, 121, 117,
	113, 114, 115, 116, 117, 121, 125, 129, 134, 134, 134, 134, 134, 129, 124, 119, 114, 117, 121, 125, 129, 125, 122, 119, 116, 116, 87, 103, 139, 125, 97, 119, 109, 112, 132, 119,
	120, 120, 121, 135, 127, 138, 119, 126, 148, 133, 105, 108, 85, 113, 142, 126, 138, 125, 132, 115, 118, 116, 116, 100, 85, 103, 121, 119, 118, 114, 111, 117, 123, 123, 124, 134,
	145, 144, 143, 130, 118, 125, 133, 112, 92, 102, 113, 122, 132, 126, 121, 114, 108, 112, 116, 116, 124, 99, 97, 117, 119, 114, 114, 110, 110, 121, 149, 127, 159, 143, 179, 148,
	107, 130, 126, 133, 93, 107, 115, 113, 111, 122, 138, 117, 121, 111, 108, 116, 116, 115, 114, 113, 113, 112, 111, 110, 110, 115, 120, 125, 131, 136, 142, 147, 153, 148, 143, 138,
	133, 128, 123, 118, 113, 113, 113, 113, 114, 114, 115, 115, 116, 116, 107, 101, 93, 113, 85, 108, 98, 115, 147, 132, 117, 128, 129, 158, 133, 157, 181, 146, 172, 141, 107, 125,
	148, 118, 131, 119, 116, 120, 100, 117, 93, 116, 116, 102, 89, 101, 113, 109, 106, 113, 120, 132, 144, 134, 125, 150, 175, 168, 162, 156, 150, 149, 149, 138, 127, 125, 123, 124,
	125, 125, 126, 122, 119, 117, 116, 116, 119, 101, 114, 113, 106, 114, 123, 125, 160, 134, 114, 122, 169, 160, 153, 166, 144, 159, 183, 157, 115, 138, 104, 128, 102, 130, 134, 132,
	151, 123, 129, 116, 116, 115, 114, 113, 113, 117, 122, 126, 131, 128, 125, 122, 119, 132, 145, 158, 171, 169, 168, 167, 166, 157, 149, 141, 133, 134, 135, 136, 138, 132, 127, 121,
	116, 116, 120, 129, 139, 118, 151, 131, 116, 136, 165, 138, 147, 132, 104, 133, 170, 175, 216, 184, 192, 167, 178, 136, 138, 138, 117, 135, 114, 137, 113, 139, 146, 116, 116, 130,
	145, 134, 123, 131, 140, 141, 142, 147, 152, 148, 145, 133, 122, 151, 180, 190, 200, 184, 168, 145, 123, 133, 143, 139, 135, 135, 136, 144, 152, 134, 116, 116, 119, 135, 146, 128,
	147, 141, 154, 147, 184, 157, 173, 158, 124, 151, 174, 185, 195, 190, 197, 169, 154, 142, 169, 148, 148, 139, 121, 135, 129, 138, 100, 116, 116, 120, 125, 129, 134, 138, 143, 148,
	153, 157, 162, 166, 171, 175, 180, 185, 190, 185, 180, 175, 171, 166, 162, 157, 153, 148, 143, 138, 134, 129, 125, 120, 116, 116, 91, 121, 142, 123, 117, 128, 155, 150, 139, 156,
	200, 175, 200, 178, 174, 185, 157, 181, 206, 173, 150, 143, 128, 144, 151, 130, 129, 122, 97, 105, 88, 116, 116, 117, 118, 115, 112, 113, 114, 131, 148, 149, 150, 164, 179, 177,
	176, 178, 180, 181, 183, 179, 175, 150, 125, 130, 136, 127, 118, 114, 110, 98, 86, 101, 116, 116, 118, 110, 110, 101, 92, 115, 143, 145, 136, 157, 143, 183, 180, 177, 216, 175,
	141, 179, 201, 177, 148, 137, 158, 128, 121, 110, 123, 98, 110, 93, 122, 116, 116, 109, 103, 96, 90, 103, 116, 129, 143, 154, 165, 176, 187, 183, 179, 175, 171, 173, 175, 177,
	179, 164, 149, 134, 120, 111, 103, 95, 87, 94, 101, 108, 116, 116, 126, 111, 103, 98, 100, 123, 120, 140, 169, 156, 199, 176, 208, 168, 166, 166, 166, 174, 139, 164, 127, 131, 114,
	112, 126, 100, 97, 90, 90, 95, 117, 116, 116, 117, 119, 113, 107, 118, 130, 134, 138, 142, 147, 156, 165, 161, 158, 160, 162, 167, 173, 161, 149, 131, 113, 108, 104, 101, 98, 96, 94,
	92, 90, 103, 116, 116, 139, 119, 110, 116, 99, 129, 134, 136, 109, 142, 119, 154, 154, 153, 156, 157, 158, 154, 132, 134, 98, 108, 100, 96, 98, 96, 117, 98, 92, 99, 130, 116, 116, 118,
	120, 122, 125, 127, 129, 131, 134, 136, 138, 140, 143, 145, 148, 150, 153, 144, 136, 128, 120, 112, 104, 96, 88, 91, 95, 98, 102, 105, 109, 112, 116, 116, 93, 105, 108, 114, 122,
	116, 110, 131, 104, 119, 101, 136, 108, 144, 147, 148, 167, 136, 132, 118, 102, 117, 99, 91, 108, 107, 117, 108, 88, 105, 116, 116, 116, 103, 91, 97, 103, 103, 103, 116, 129, 114,
	100, 115, 130, 135, 140, 141, 143, 139, 136, 126, 117, 123, 130, 112, 95, 107, 120, 117, 115, 108, 102, 109, 116, 116, 99, 95, 108, 92, 112, 103, 100, 127, 93, 110, 90, 124, 150,
	133, 166, 138, 152, 130, 133, 115, 143, 119, 123, 98, 115, 117, 108, 121, 99, 112, 94, 116, 116, 107, 99, 90, 82, 92, 103, 114, 125, 123, 121, 119, 118, 122, 126, 130, 134, 129, 124,
	119, 114, 111, 108, 105, 102, 108, 115, 121, 128, 125, 122, 119, 116, 116, 97, 101, 75, 90, 88, 95, 83, 122, 105, 109, 115, 117, 126, 115, 141, 129, 129, 128, 122, 114, 112, 120, 112,
	105, 92, 119, 98, 125, 122, 123, 143, 116, 116, 109, 103, 101, 99, 93, 87, 103, 120, 108, 97, 107, 117, 110, 104, 114, 125, 129, 133, 124, 115, 124, 133, 121, 109, 116, 124, 123, 122, 123,
	125, 120, 116, 116, 87, 109, 101, 107, 121, 101, 95, 118, 114, 106, 87, 116, 111, 110, 96, 120, 107, 124, 96, 115, 127, 124, 94, 112, 108, 120, 112, 119, 146, 120, 110, 116, 116, 116, 116,
	116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116
];

const etheriaV0pt9Address = "0xe468d26721b703d224d05563cb64746a7a40e1f4";
const etheriaV0pt9abi = [
	{ "constant": true, "inputs": [], "name": "getWhatHappened", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "_b32", "type": "bytes32" }, { "name": "byteindex", "type": "uint8" }], "name": "getUint8FromByte32", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_s", "type": "string" }], "name": "setStatus", "outputs": [], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "makeOffer", "outputs": [], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOfferers", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "index", "type": "uint256" }, { "name": "_block", "type": "int8[5]" }], "name": "editBlock", "outputs": [], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_n", "type": "string" }], "name": "setName", "outputs": [], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "farmTile", "outputs": [], "type": "function" },

	// modified to return bytes
	{
		"constant": true,
		"inputs": [{
			"name": "col",
			"type": "uint8"
		},
		{
			"name": "row",
			"type": "uint8"
		}
		],
		"name": "getName",
		"outputs": [{
			"name": "",
			"type": "bytes"
		}],
		"type": "function"
	},

	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "i", "type": "uint8" }], "name": "acceptOffer", "outputs": [], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "i", "type": "uint8" }], "name": "rejectOffer", "outputs": [], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOffers", "outputs": [{ "name": "", "type": "uint256[]" }], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getStatus", "outputs": [{ "name": "", "type": "string" }], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "retractOffer", "outputs": [], "type": "function" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getBlocks", "outputs": [{ "name": "", "type": "int8[5][]" }], "type": "function" }, { "inputs": [], "type": "constructor" }
];

const etheriaV1pt0Address = "0xe414716f017b5c1457bf98e985bccb135dff81f2";
const etheriaV1pt0abi = [
	{ "constant": false, "inputs": [], "name": "setLocked", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [], "name": "getWhatHappened", "outputs": [{ "name": "", "type": "uint8" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [], "name": "getLocked", "outputs": [{ "name": "", "type": "bool" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [{ "name": "_b32", "type": "bytes32" }, { "name": "byteindex", "type": "uint8" }], "name": "getUint8FromByte32", "outputs": [{ "name": "", "type": "uint8" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_s", "type": "string" }], "name": "setStatus", "outputs": [], " type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "makeOffer", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOfferers", "outputs": [{ "name": "", "type": "address[]" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "i", "type": "uint8" }, { "name": "amt", "type": "uint256" }], "name": "deleteOffer", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getLastFarm", "outputs": [{ "name": "", "type": "uint256" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "index", "type": "uint256" }, { "name": "_block", "type": "int8[5]" }], "name": "editBlock", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_n", "type": "string" }], "name": "setName", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "farmTile", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "i", "type": "uint8" }, { "name": "amt", "type": "uint256" }], "name": "acceptOffer", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },

	// modified to return bytes
	{
		"constant": true,
		"inputs": [{
			"name": "col",
			"type": "uint8"
		}, {
			"name": "row",
			"type": "uint8"
		}],
		"name": "getName",
		"outputs": [{
			"name": "",
			"type": "bytes"
		}],
		"type": "function",
		"payable": false,
		"stateMutability": "view"
	},

	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOffers", "outputs": [{ "name": "", "type": "uint256[]" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getStatus", "outputs": [{ "name": "", "type": "string" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getBlocks", "outputs": [{ "name": "", "type": "int8[5][]" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "inputs": [], "type": "constructor", "payable": true, "stateMutability": "payable" },
	{ "anonymous": false, "inputs": [{ "indexed": false, "name": "col", "type": "uint8" }, { "indexed": false, "name": "row", "type": "uint8" }], "name": "TileChanged", "type": "event" },
	{ "type": "fallback", "payable": true, "stateMutability": "payable" }
];

const etheriaV1pt1Address = "0x169332ae7d143e4b5c6baedb2fef77bfbddb4011";
const etheriaV1pt1abi = [
	{ "constant": false, "inputs": [], "name": "setLocked", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [], "name": "getWhatHappened", "outputs": [{ "name": "", "type": "string" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [], "name": "getLocked", "outputs": [{ "name": "", "type": "bool" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "buyTile", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_s", "type": "string" }], "name": "setStatus", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "newowner", "type": "address" }], "name": "setOwner", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getLastFarm", "outputs": [{ "name": "", "type": "uint256" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "index", "type": "uint256" }, { "name": "_block", "type": "int8[5]" }], "name": "editBlock", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "blocktype", "type": "int8" }], "name": "farmTile", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": false, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }, { "name": "_n", "type": "string" }], "name": "setName", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },

	// modified to return bytes
	{
		"constant": true,
		"inputs": [{
			"name": "col",
			"type": "uint8"
		}, {
			"name": "row",
			"type": "uint8"
		}],
		"name": "getName",
		"outputs": [{
			"name": "",
			"type": "bytes"
		}],
		"type": "function",
		"payable": false,
		"stateMutability": "view"
	},

	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getStatus", "outputs": [{ "name": "", "type": "string" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "constant": false, "inputs": [], "name": "empty", "outputs": [], "type": "function", "payable": true, "stateMutability": "payable" },
	{ "constant": true, "inputs": [{ "name": "col", "type": "uint8" }, { "name": "row", "type": "uint8" }], "name": "getBlocks", "outputs": [{ "name": "", "type": "int8[5][]" }], "type": "function", "payable": false, "stateMutability": "view" },
	{ "inputs": [], "type": "constructor", "payable": true, "stateMutability": "payable" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "col", "type": "uint8" }, { "indexed": false, "name": "row", "type": "uint8" }], "name": "TileChanged", "type": "event" },
	{ "type": "fallback", "payable": true, "stateMutability": "payable" }
];

const etheriaV1pt2Address = "0xB21f8684f23Dbb1008508B4DE91a0aaEDEbdB7E4";

const wrapperAddressV0pt9 = "0x4b1705c75fde41e35e454ddd14e5d0a0eac06280";
const wrapperAbiV0pt9 = [
	{ "inputs": [], "stateMutability": "payable", "type": "constructor" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "NameSet", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "offer", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "offerer", "type": "address" }], "name": "OfferRejected", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "OfferRetracted", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "status", "type": "string" }], "name": "StatusSet", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "Unwrapped", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "WrapFinished", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "WrapStarted", "type": "event" },
	{ "inputs": [], "name": "_baseTokenExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_baseTokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_etheria", "outputs": [{ "internalType": "contract Etheria", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_etheriaAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "acceptOfferViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "empty", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "finishWrap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "getWrapInitializer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "makeOfferViaWrapper", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "rejectOfferViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "string", "name": "__baseTokenURI", "type": "string" }], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }, { "internalType": "string", "name": "_n", "type": "string" }], "name": "setNameViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }, { "internalType": "string", "name": "_n", "type": "string" }], "name": "setStatusViaWrapper", "outputs": [], "stateMutability": "payable", "type": "function" },
	{ "inputs": [{ "internalType": "string", "name": "__baseTokenExtension", "type": "string" }], "name": "setTokenExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "wrapInitializers", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "stateMutability": "payable", "type": "receive" }
];

const wrapperAddressV1pt0 = "0x629a493a94b611138d4bee231f94f5c08ab6570a";
const wrapperAbiV1pt0 = [
	{ "inputs": [], "stateMutability": "payable", "type": "constructor" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "NameSet", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "offer", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "offerer", "type": "address" }], "name": "OfferRejected", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "OfferRetracted", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "status", "type": "string" }], "name": "StatusSet", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "Unwrapped", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "WrapFinished", "type": "event" },
	{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_locationID", "type": "uint256" }], "name": "WrapStarted", "type": "event" },
	{ "inputs": [], "name": "_baseTokenExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_baseTokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_etheria", "outputs": [{ "internalType": "contract Etheria", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "_etheriaAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "acceptOfferViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "empty", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "finishWrap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "getWrapInitializer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "makeOfferViaWrapper", "outputs": [], "stateMutability": "payable", "type": "function" },
	{ "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }], "name": "rejectOfferViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "string", "name": "__baseTokenURI", "type": "string" }], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }, { "internalType": "string", "name": "_n", "type": "string" }], "name": "setNameViaWrapper", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint8", "name": "col", "type": "uint8" }, { "internalType": "uint8", "name": "row", "type": "uint8" }, { "internalType": "string", "name": "_n", "type": "string" }], "name": "setStatusViaWrapper", "outputs": [], "stateMutability": "payable", "type": "function" },
	{ "inputs": [{ "internalType": "string", "name": "__baseTokenExtension", "type": "string" }], "name": "setTokenExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
	{ "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "wrapInitializers", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
	{ "stateMutability": "payable", "type": "receive" }
];

const exchangeAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"index","type":"uint16"}],"name":"AskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"index","type":"uint16"}],"name":"AskRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":true,"internalType":"uint16","name":"index","type":"uint16"},{"indexed":false,"internalType":"uint128","name":"amount","type":"uint128"},{"indexed":false,"internalType":"uint8","name":"minCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minWat","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxWat","type":"uint8"}],"name":"BidAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bidder","type":"address"},
{"indexed":true,"internalType":"uint128","name":"amount","type":"uint128"},{"indexed":false,"internalType":"uint8","name":"minCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minWat","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxWat","type":"uint8"}],"name":"BidCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":true,"internalType":"uint128","name":"amount","type":"uint128"},{"indexed":false,"internalType":"uint8","name":"minCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxCol","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxRow","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxEle","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"minWat","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"maxWat","type":"uint8"}],"name":"BidCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},
{"indexed":true,"internalType":"address","name":"pendingOwner","type":"address"}],"name":"OwnershipTransferInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"destination","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawalProcessed","type":"event"},{"inputs":[{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"minAmount","type":"uint256"}],"name":"acceptBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"askFor","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bidOf","outputs":[{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"uint8","name":"minCol","type":"uint8"},{"internalType":"uint8","name":"maxCol","type":"uint8"},{"internalType":"uint8","name":"minRow","type":"uint8"},{"internalType":"uint8","name":"maxRow","type":"uint8"},{"internalType":"uint8","name":"minEle","type":"uint8"},
{"internalType":"uint8","name":"maxEle","type":"uint8"},{"internalType":"uint8","name":"minWat","type":"uint8"},{"internalType":"uint8","name":"maxWat","type":"uint8"},{"internalType":"uint64","name":"biddersIndex","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bidders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"etheria","outputs":[{"internalType":"contract Etheria","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"feeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"col","type":"uint8"},
{"internalType":"uint8","name":"row","type":"uint8"}],"name":"getAsk","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBidders","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"minCol","type":"uint8"},{"internalType":"uint8","name":"maxCol","type":"uint8"},{"internalType":"uint8","name":"minRow","type":"uint8"},{"internalType":"uint8","name":"maxRow","type":"uint8"},{"internalType":"uint8","name":"minEle","type":"uint8"},{"internalType":"uint8","name":"maxEle","type":"uint8"},{"internalType":"uint8","name":"minWat","type":"uint8"},{"internalType":"uint8","name":"maxWat","type":"uint8"}],"name":"makeBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mapElevationRetriever","outputs":[{"internalType":"contract MapElevationRetriever","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"minBid","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingWithdrawalOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"}],"name":"removeAsk","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"},{"internalType":"uint128","name":"price","type":"uint128"}],"name":"setAsk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFeeRate","type":"uint256"}],"name":"setFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"newMinBid","type":"uint128"}],"name":"setMinBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"destination","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const exchangeAddressV1pt1 = "0x341db17810769e7470b22d75127c37eec44f8179";
const exchangeAddressV1pt2 = "0x111B76DBBe885D05793DE91254554F0a781D15db";

var registryAbi = [{ "inputs": [{ "internalType": "contract ENS", "name": "_old", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "label", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }], "name": "NewOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "resolver", "type": "address" }], "name": "NewResolver", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "uint64", "name": "ttl", "type": "uint64" }], "name": "NewTTL", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "old", "outputs": [{ "internalType": "contract ENS", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "recordExists", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "resolver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }], "name": "setOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "resolver", "type": "address" }, { "internalType": "uint64", "name": "ttl", "type": "uint64" }], "name": "setRecord", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "address", "name": "resolver", "type": "address" }], "name": "setResolver", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes32", "name": "label", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }], "name": "setSubnodeOwner", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes32", "name": "label", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "resolver", "type": "address" }, { "internalType": "uint64", "name": "ttl", "type": "uint64" }], "name": "setSubnodeRecord", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "uint64", "name": "ttl", "type": "uint64" }], "name": "setTTL", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "ttl", "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }], "payable": false, "stateMutability": "view", "type": "function" }]
var resolverAbi = [{ "inputs": [{ "internalType": "contract ENS", "name": "ensAddr", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [], "name": "ens", "outputs": [{ "internalType": "contract ENS", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "string", "name": "_name", "type": "string" }], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

const registryAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
// resolver address is different from name to name and is set dynamically

export default {
	elevations,
	etheriaV0pt9abi,
	etheriaV1pt0abi,
	etheriaV1pt1abi, 		// v1.2 uses this as well
	etheriaV0pt9Address,
	etheriaV1pt0Address,
	etheriaV1pt1Address,
	etheriaV1pt2Address,
	
	wrapperAbiV0pt9,		// these are not identical abis
	wrapperAddressV0pt9,
	wrapperAbiV1pt0,		// these are not identical abis
	wrapperAddressV1pt0,
	
	exchangeAbi,			// both use this
	exchangeAddressV1pt1,
	exchangeAddressV1pt2,
	
	registryAbi,
	resolverAbi,
	registryAddress
}
