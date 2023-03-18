// Wagmi Contract Bytecode.
// https://etherscan.io/address/0xfba3912ca04dd458c843e2ee08967fc04f3579c2#code

export const newCont = {
  abi: [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "close",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "finishingTimes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLeaderboardStats",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "hasSolvedChallenge1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "hasSolvedChallenge2",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "isOnLeaderboard",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOpenFlag",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "leaderboard",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "open",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "previousSignature",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "riddleAnswer",
				"type": "string"
			}
		],
		"name": "solveChallenge1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addy",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "riddleAnswer",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "solveChallenge2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "riddleAnswer",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "signer",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "solveChallenge3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "solvedChallenge1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "solvedChallenge2",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userWhoUsedSigner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
,
  bytecode:
    '60806040523480156200001157600080fd5b5062000032620000266200005260201b60201c565b6200005a60201b60201c565b60008060146101000a81548160ff0219169083151502179055506200011e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612906806200012e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806373c9c855116100ad578063bf36839911610071578063bf3683991461031d578063eaeb05a91461034d578063f2fde38b1461037d578063fcfff16f14610399578063fd86eca8146103a357610121565b806373c9c855146102645780638da5cb5b14610294578063912d2c18146102b257806394766d85146102e2578063a078f8b7146102fe57610121565b806326d163f7116100f457806326d163f7146101d25780632cf96fbe146101f05780633138cddc1461022057806343d726d614610250578063715018a61461025a57610121565b80630fc2891314610126578063107302c81461015657806316752f79146101725780631f04713f146101a2575b600080fd5b610140600480360381019061013b919061167b565b6103bf565b60405161014d91906116c3565b60405180910390f35b610170600480360381019061016b9190611743565b610415565b005b61018c6004803603810190610187919061167b565b610512565b60405161019991906116c3565b60405180910390f35b6101bc60048036038101906101b7919061167b565b610532565b6040516101c9919061179f565b60405180910390f35b6101da610565565b6040516101e791906116c3565b60405180910390f35b61020a6004803603810190610205919061167b565b610578565b60405161021791906116c3565b60405180910390f35b61023a6004803603810190610235919061167b565b6105ce565b60405161024791906116c3565b60405180910390f35b6102586105ee565b005b610262610612565b005b61027e6004803603810190610279919061167b565b610626565b60405161028b91906117d3565b60405180910390f35b61029c61063e565b6040516102a9919061179f565b60405180910390f35b6102cc60048036038101906102c7919061167b565b610667565b6040516102d991906116c3565b60405180910390f35b6102fc60048036038101906102f79190611844565b6106b2565b005b6103066108ba565b604051610314929190611a55565b60405180910390f35b61033760048036038101906103329190611ab8565b610a64565b604051610344919061179f565b60405180910390f35b6103676004803603810190610362919061167b565b610aa3565b6040516103749190611b75565b60405180910390f35b6103976004803603810190610392919061167b565b610b43565b005b6103a1610bc6565b005b6103bd60048036038101906103b89190611b97565b610beb565b005b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600060149054906101000a900460ff16610464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045b90611c89565b60405180910390fd5b8181604051602001610477929190611ce8565b604051602081830303815290604052805190602001207f3896ee3a8be6143be3fa1938adbae827fc724b5ff649501e7fd8c0c5352cbafa60001b0361050e5760018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050565b60016020528060005260406000206000915054906101000a900460ff1681565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60026020528060005260406000206000915054906101000a900460ff1681565b6105f66111d9565b60008060146101000a81548160ff021916908315150217905550565b61061a6111d9565b6106246000611257565b565b60046020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b600084846040516020016106c7929190611ce8565b604051602081830303815290604052805190602001209050807f9c611b41c1f90946c2b6ddd04d716f6ec349ac4b4f99612c3e629db39502b94160001b14610744576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073b90611d4d565b60405180910390fd5b61079a6107508261131b565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061134b565b73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610807576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fe90611db9565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156108b2576001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505050505050565b606080600060038054905067ffffffffffffffff8111156108de576108dd611dd9565b5b60405190808252806020026020018201604052801561090c5781602001602082028036833780820191505090505b50905060005b6003805490508110156109cf57600460006003838154811061093757610936611e08565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181106109b0576109af611e08565b5b60200260200101818152505080806109c790611e66565b915050610912565b5060038181805480602002602001604051908101604052809291908181526020018280548015610a5457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a0a575b5050505050915092509250509091565b60038181548110610a7457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056020528060005260406000206000915090508054610ac290611edd565b80601f0160208091040260200160405190810160405280929190818152602001828054610aee90611edd565b8015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b820191906000526020600020905b815481529060010190602001808311610b1e57829003601f168201915b505050505081565b610b4b6111d9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb190611f80565b60405180910390fd5b610bc381611257565b50565b610bce6111d9565b6001600060146101000a81548160ff021916908315150217905550565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190611fec565b60405180910390fd5b60008585604051602001610c6f929190611ce8565b604051602081830303815290604052805190602001209050807f3cd65f6089844a3c6409b0acc491ca0071a5672c2ab2a071f197011e0fc66b6a60001b14610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce390612058565b60405180910390fd5b610d5d7f20a1626365cea00953c957fd02ddc4963990d404232d4e58acb66f46c59d988760001b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061134b565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610dca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc1906120ea565b60405180910390fd5b6000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054610e1690611edd565b905003610ef0578282600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209182610e6b9291906122c1565b5033600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506111d2565b3373ffffffffffffffffffffffffffffffffffffffff16600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb490612403565b60405180910390fd5b8282604051602001610fd0929190612453565b60405160208183030381529060405280519060200120600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405160200161103591906124ef565b604051602081830303815290604052805190602001200361108b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110829061259e565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16801561112357506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b156111d05742600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506003339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505b5050505050565b6111e1611372565b73ffffffffffffffffffffffffffffffffffffffff166111ff61063e565b73ffffffffffffffffffffffffffffffffffffffff1614611255576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124c9061260a565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008160405160200161132e91906126a1565b604051602081830303815290604052805190602001209050919050565b600080600061135a858561137a565b91509150611367816113cb565b819250505092915050565b600033905090565b60008060418351036113bb5760008060006020860151925060408601519150606086015160001a90506113af87828585611531565b945094505050506113c4565b60006002915091505b9250929050565b600060048111156113df576113de6126c7565b5b8160048111156113f2576113f16126c7565b5b031561152e576001600481111561140c5761140b6126c7565b5b81600481111561141f5761141e6126c7565b5b0361145f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145690612742565b60405180910390fd5b60026004811115611473576114726126c7565b5b816004811115611486576114856126c7565b5b036114c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114bd906127ae565b60405180910390fd5b600360048111156114da576114d96126c7565b5b8160048111156114ed576114ec6126c7565b5b0361152d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152490612840565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561156c57600060039150915061160a565b600060018787878760405160008152602001604052604051611591949392919061288b565b6020604051602081039080840390855afa1580156115b3573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036116015760006001925092505061160a565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116488261161d565b9050919050565b6116588161163d565b811461166357600080fd5b50565b6000813590506116758161164f565b92915050565b60006020828403121561169157611690611613565b5b600061169f84828501611666565b91505092915050565b60008115159050919050565b6116bd816116a8565b82525050565b60006020820190506116d860008301846116b4565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611703576117026116de565b5b8235905067ffffffffffffffff8111156117205761171f6116e3565b5b60208301915083600182028301111561173c5761173b6116e8565b5b9250929050565b6000806020838503121561175a57611759611613565b5b600083013567ffffffffffffffff81111561177857611777611618565b5b611784858286016116ed565b92509250509250929050565b6117998161163d565b82525050565b60006020820190506117b46000830184611790565b92915050565b6000819050919050565b6117cd816117ba565b82525050565b60006020820190506117e860008301846117c4565b92915050565b60008083601f840112611804576118036116de565b5b8235905067ffffffffffffffff811115611821576118206116e3565b5b60208301915083600182028301111561183d5761183c6116e8565b5b9250929050565b6000806000806000606086880312156118605761185f611613565b5b600061186e88828901611666565b955050602086013567ffffffffffffffff81111561188f5761188e611618565b5b61189b888289016116ed565b9450945050604086013567ffffffffffffffff8111156118be576118bd611618565b5b6118ca888289016117ee565b92509250509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61190e8161163d565b82525050565b60006119208383611905565b60208301905092915050565b6000602082019050919050565b6000611944826118d9565b61194e81856118e4565b9350611959836118f5565b8060005b8381101561198a5781516119718882611914565b975061197c8361192c565b92505060018101905061195d565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6119cc816117ba565b82525050565b60006119de83836119c3565b60208301905092915050565b6000602082019050919050565b6000611a0282611997565b611a0c81856119a2565b9350611a17836119b3565b8060005b83811015611a48578151611a2f88826119d2565b9750611a3a836119ea565b925050600181019050611a1b565b5085935050505092915050565b60006040820190508181036000830152611a6f8185611939565b90508181036020830152611a8381846119f7565b90509392505050565b611a95816117ba565b8114611aa057600080fd5b50565b600081359050611ab281611a8c565b92915050565b600060208284031215611ace57611acd611613565b5b6000611adc84828501611aa3565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b1f578082015181840152602081019050611b04565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b4782611ae5565b611b518185611af0565b9350611b61818560208601611b01565b611b6a81611b2b565b840191505092915050565b60006020820190508181036000830152611b8f8184611b3c565b905092915050565b600080600080600060608688031215611bb357611bb2611613565b5b600086013567ffffffffffffffff811115611bd157611bd0611618565b5b611bdd888289016116ed565b95509550506020611bf088828901611666565b935050604086013567ffffffffffffffff811115611c1157611c10611618565b5b611c1d888289016117ee565b92509250509295509295909350565b600082825260208201905092915050565b7f426f756e747920697320636c6f73656400000000000000000000000000000000600082015250565b6000611c73601083611c2c565b9150611c7e82611c3d565b602082019050919050565b60006020820190508181036000830152611ca281611c66565b9050919050565b600081905092915050565b82818337600083830152505050565b6000611ccf8385611ca9565b9350611cdc838584611cb4565b82840190509392505050565b6000611cf5828486611cc3565b91508190509392505050565b7f726964646c65206e6f7420736f6c766564207965740000000000000000000000600082015250565b6000611d37601583611c2c565b9150611d4282611d01565b602082019050919050565b60006020820190508181036000830152611d6681611d2a565b9050919050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b6000611da3601183611c2c565b9150611dae82611d6d565b602082019050919050565b60006020820190508181036000830152611dd281611d96565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e71826117ba565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ea357611ea2611e37565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ef557607f821691505b602082108103611f0857611f07611eae565b5b50919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611f6a602683611c2c565b9150611f7582611f0e565b604082019050919050565b60006020820190508181036000830152611f9981611f5d565b9050919050565b7f7369676e65722063616e6e6f74206265207a65726f2061646472657373000000600082015250565b6000611fd6601d83611c2c565b9150611fe182611fa0565b602082019050919050565b6000602082019050818103600083015261200581611fc9565b9050919050565b7f726964646c6520616e7377657220696e636f7272656374000000000000000000600082015250565b6000612042601783611c2c565b915061204d8261200c565b602082019050919050565b6000602082019050818103600083015261207181612035565b9050919050565b7f696e76616c6964207369676e61747572652c206d657373616765206d7573742060008201527f6265207369676e6564206279207369676e657200000000000000000000000000602082015250565b60006120d4603383611c2c565b91506120df82612078565b604082019050919050565b60006020820190508181036000830152612103816120c7565b9050919050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026121777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261213a565b612181868361213a565b95508019841693508086168417925050509392505050565b6000819050919050565b60006121be6121b96121b4846117ba565b612199565b6117ba565b9050919050565b6000819050919050565b6121d8836121a3565b6121ec6121e4826121c5565b848454612147565b825550505050565b600090565b6122016121f4565b61220c8184846121cf565b505050565b5b81811015612230576122256000826121f9565b600181019050612212565b5050565b601f8211156122755761224681612115565b61224f8461212a565b8101602085101561225e578190505b61227261226a8561212a565b830182612211565b50505b505050565b600082821c905092915050565b60006122986000198460080261227a565b1980831691505092915050565b60006122b18383612287565b9150826002028217905092915050565b6122cb838361210a565b67ffffffffffffffff8111156122e4576122e3611dd9565b5b6122ee8254611edd565b6122f9828285612234565b6000601f8311600181146123285760008415612316578287013590505b61232085826122a5565b865550612388565b601f19841661233686612115565b60005b8281101561235e57848901358255600182019150602085019450602081019050612339565b8683101561237b5784890135612377601f891682612287565b8355505b6001600288020188555050505b50505050505050565b7f736f6c7574696f6e20776173207573656420627920736f6d656f6e6520656c7360008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b60006123ed602183611c2c565b91506123f882612391565b604082019050919050565b6000602082019050818103600083015261241c816123e0565b9050919050565b600081905092915050565b600061243a8385612423565b9350612447838584611cb4565b82840190509392505050565b600061246082848661242e565b91508190509392505050565b6000815461247981611edd565b6124838186612423565b9450600182166000811461249e57600181146124b3576124e6565b60ff19831686528115158202860193506124e6565b6124bc85612115565b60005b838110156124de578154818901526001820191506020810190506124bf565b838801955050505b50505092915050565b60006124fb828461246c565b915081905092915050565b7f796f75206861766520616c726561647920757365642074686973207369676e6160008201527f747572652c20747279207375626d697474696e67206120646966666572656e7460208201527f206f6e6500000000000000000000000000000000000000000000000000000000604082015250565b6000612588604483611c2c565b915061259382612506565b606082019050919050565b600060208201905081810360008301526125b78161257b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006125f4602083611c2c565b91506125ff826125be565b602082019050919050565b60006020820190508181036000830152612623816125e7565b9050919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612660601c83611ca9565b915061266b8261262a565b601c82019050919050565b6000819050919050565b6000819050919050565b61269b61269682612676565b612680565b82525050565b60006126ac82612653565b91506126b8828461268a565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061272c601883611c2c565b9150612737826126f6565b602082019050919050565b6000602082019050818103600083015261275b8161271f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000612798601f83611c2c565b91506127a382612762565b602082019050919050565b600060208201905081810360008301526127c78161278b565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061282a602283611c2c565b9150612835826127ce565b604082019050919050565b600060208201905081810360008301526128598161281d565b9050919050565b61286981612676565b82525050565b600060ff82169050919050565b6128858161286f565b82525050565b60006080820190506128a06000830187612860565b6128ad602083018661287c565b6128ba6040830185612860565b6128c76060830184612860565b9594505050505056fea2646970667358221220cb8dbbd7af322bdb3aa25a57e2441869f46a64927b7ee78ae043c3047b1910c364736f6c63430008120033',
} as const
