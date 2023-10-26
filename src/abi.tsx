export const RouterABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "defaultInitiator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newInitiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldInitiator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "changedBy",
        type: "address",
      },
    ],
    name: "InitiatorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "paymentNumber",
        type: "uint256",
      },
    ],
    name: "PaymentMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "productHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "freeTrialLength",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paymentPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "productMetadata",
        type: "bytes32",
      },
    ],
    name: "ProductCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "productHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "subscriptionMetadata",
        type: "bytes32",
      },
    ],
    name: "SubscriptionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "terminatedBy",
        type: "address",
      },
    ],
    name: "SubscriptionTerminated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDefaultInitiator",
        type: "address",
      },
    ],
    name: "changeDefaultInitiator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "changeFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        internalType: "address",
        name: "newInitiator",
        type: "address",
      },
    ],
    name: "changeInitiator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claimCompensation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claimFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "productMetadata",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "freeTrialLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPeriod",
        type: "uint256",
      },
    ],
    name: "createProductIfDoesntExist",
    outputs: [
      {
        internalType: "bytes32",
        name: "productHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "earnedFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "compensation",
        type: "uint256",
      },
    ],
    name: "makePayment",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "merchantSettings",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "productNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "freeTrialLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPeriod",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "productMetadata",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "productMetadata",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "freeTrialLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPeriod",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "subscriptionMetadata",
        type: "bytes32",
      },
    ],
    name: "setupEnvironmentAndStartSubscription",
    outputs: [
      {
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "productHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "subscriptionMetadata",
        type: "bytes32",
      },
    ],
    name: "startSubscription",
    outputs: [
      {
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "subscriptions",
    outputs: [
      {
        internalType: "bytes32",
        name: "productHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentsMade",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "terminated",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "subscriptionMetadata",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
      },
    ],
    name: "terminateSubscription",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "txCompensations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
