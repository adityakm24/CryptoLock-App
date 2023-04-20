const { ethers } = require("ethers");

const NewContract = async () => {
    console.log("inside")
    const provider = new ethers.providers.JsonRpcProvider(
      "https://eth-goerli.g.alchemy.com/v2/-gilIAlMeouvUeUX7rFQF0_uzuNI6FNs"
    );

    const walletName = new ethers.Wallet(
        "64643818b1de49c45762099d7ccb0da338308e02291989f2d40126b25a33619b",
        provider
    );

    const byteCode =
        "0x608060405234801561001057600080fd5b50604051610a67380380610a6783398101604081905261002f916100d9565b61003833610062565b600591909155600680546001600160401b0319166001600160401b03909216919091179055610116565b600180546001600160a01b031916905561008681610089602090811b61051c17901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100ec57600080fd5b825160208401519092506001600160401b038116811461010b57600080fd5b809150509250929050565b610942806101256000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063893376b41161008c578063b99ef1fa11610066578063b99ef1fa146101d1578063cbff75cb146101fc578063e30c39781461021c578063f2fde38b1461022d57600080fd5b8063893376b4146101795780638da5cb5b1461018c5780639d8c74c9146101b157600080fd5b8063659a1026116100c8578063659a10261461013357806369ebff4914610156578063715018a61461016957806379ba50971461017157600080fd5b80631d80009a146100ef5780631f83d7bc1461010b57806359ada08e14610120575b600080fd5b6100f860055481565b6040519081526020015b60405180910390f35b61011e610119366004610619565b610240565b005b61011e61012e36600461064a565b61026c565b6101466101413660046106cb565b610279565b6040519015158152602001610102565b61011e61016436600461071f565b6102dc565b61011e610306565b61011e61031a565b61011e61018736600461075c565b610399565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610102565b6100f86101bf3660046107f3565b60026020526000908152604090205481565b6100f86101df366004610824565b805160208183018101805160048252928201919093012091525481565b6100f861020a3660046107f3565b60036020526000908152604090205481565b6001546001600160a01b0316610199565b61011e61023b3660046107f3565b6104ab565b61024861056c565b6006805467ffffffffffffffff191667ffffffffffffffff92909216919091179055565b61027461056c565b600555565b600554604080516001600160a01b03841660208201526000926102d49287928792910160408051601f1981840301815282825280516020918201209083015201604051602081830303815290604052805190602001206105c6565b949350505050565b6102e461056c565b6001600160a01b03909116600090815260026020526040902060ff9091169055565b61030e61056c565b6103186000610600565b565b60015433906001600160a01b0316811461038d5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084015b60405180910390fd5b61039681610600565b50565b60065467ffffffffffffffff9081164290911610156103cb5760405163e4b1f8f760e01b815260040160405180910390fd5b6103d6848433610279565b1580156103f3575033600090815260026020526040902054600114155b8061040d5750336000908152600360205260409020546001145b1561042d576040516311241e5360e21b8152336004820152602401610384565b6004828260405161043f9291906108d5565b90815260200160405180910390206000815461045a906108e5565b90915550336000818152600360209081526040918290206001905590519182527ff5b08346e1e6b0b55d07ce94e81fcb198d47fbbecfea3b9a476f454c86761ec4910160405180910390a150505050565b6104b361056c565b600180546001600160a01b0383166001600160a01b031990911681179091556104e46000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146103185760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b600083156105f8578360051b8501855b803580851160051b948552602094851852604060002093018181106105d65750505b501492915050565b600180546001600160a01b03191690556103968161051c565b60006020828403121561062b57600080fd5b813567ffffffffffffffff8116811461064357600080fd5b9392505050565b60006020828403121561065c57600080fd5b5035919050565b60008083601f84011261067557600080fd5b50813567ffffffffffffffff81111561068d57600080fd5b6020830191508360208260051b85010111156106a857600080fd5b9250929050565b80356001600160a01b03811681146106c657600080fd5b919050565b6000806000604084860312156106e057600080fd5b833567ffffffffffffffff8111156106f757600080fd5b61070386828701610663565b90945092506107169050602085016106af565b90509250925092565b6000806040838503121561073257600080fd5b61073b836106af565b9150602083013560ff8116811461075157600080fd5b809150509250929050565b6000806000806040858703121561077257600080fd5b843567ffffffffffffffff8082111561078a57600080fd5b61079688838901610663565b909650945060208701359150808211156107af57600080fd5b818701915087601f8301126107c357600080fd5b8135818111156107d257600080fd5b8860208285010111156107e457600080fd5b95989497505060200194505050565b60006020828403121561080557600080fd5b610643826106af565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561083657600080fd5b813567ffffffffffffffff8082111561084e57600080fd5b818401915084601f83011261086257600080fd5b8135818111156108745761087461080e565b604051601f8201601f19908116603f0116810190838211818310171561089c5761089c61080e565b816040528281528760208487010111156108b557600080fd5b826020860160208301376000928101602001929092525095945050505050565b8183823760009101908152919050565b60006001820161090557634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212200a3417ecb898c6da0fabf651cadf53a3844963115bc10da239b13c83a5c17a2064736f6c6343000812003330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    const abi = [
        {
            inputs: [
                { internalType: "bytes32", name: "_rootHash", type: "bytes32" },
                { internalType: "uint64", name: "_timeToStart", type: "uint64" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        { inputs: [], name: "NotStart", type: "error" },
        {
            inputs: [{ internalType: "address", name: "_caller", type: "address" }],
            name: "invalidVoter",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferStarted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "voter",
                    type: "address",
                },
            ],
            name: "Vote",
            type: "event",
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isVoted",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "rootHash",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "singleAddress",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "bytes32", name: "_rootHash", type: "bytes32" }],
            name: "updateRootHash",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "_addy", type: "address" },
                { internalType: "uint8", name: "_value", type: "uint8" },
            ],
            name: "updateSingle",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "uint64", name: "_timeToStart", type: "uint64" },
            ],
            name: "updateTimeStamp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
                { internalType: "address", name: "_addy", type: "address" },
            ],
            name: "verify",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
                { internalType: "string", name: "candidate", type: "string" },
            ],
            name: "vote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "string", name: "", type: "string" }],
            name: "votes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
    ];

    const contractFactory = new ethers.ContractFactory(abi, byteCode, walletName);
   
    const contract = await contractFactory.deploy(
        ethers.utils.formatBytes32String("0"),
        0
    );
     await contract.deployTransaction.wait();
    console.log("before return")

    return contract.address;
}

module.exports = { NewContract };

