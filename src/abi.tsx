export const RouterABI = [
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
        name: "subscriptionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "merchantDomain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32",
      },
      {
        indexed: false,
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
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paymentPeriod",
        type: "uint256",
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
    ],
    name: "SubscriptionTerminated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "subscriptionHash",
        type: "bytes32",
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
        name: "merchant",
        type: "address",
      },
      {
        internalType: "string",
        name: "merchantDomain",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "nonce",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        internalType: "string",
        name: "merchantDomain",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "nonce",
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
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPeriod",
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
];
