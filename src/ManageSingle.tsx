import { useParams } from "react-router-dom";
import { CoreFrame } from "./CoreFrame";
import { useEffect, useState } from "react";
import { Subscription } from "./types";
import { getSubscriptionByHash } from "./network";
import { Hex, encodeFunctionData } from "viem";
import {
  useAccount,
  useNetwork,
  usePrepareSendTransaction,
  useSendTransaction,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { RouterABI } from "./abi";
import { ChainsSettings } from "./constants";

function TerminateButton(props: {
  subscription: Subscription;
}) {
  const { chain } = useNetwork();
  const userAccount = useAccount();
  const { switchNetwork } = useSwitchNetwork();
  const { open } = useWeb3Modal();
  const { config } = usePrepareSendTransaction({
    to: ChainsSettings[
      props.subscription.product.chain.id
    ].routerAddress,
    value: BigInt(0),
    data: encodeFunctionData({
      abi: RouterABI as any,
      functionName: "terminateSubscription",
      args: [
        `0x${props.subscription.subscriptionHash}`,
      ],
    }),
  });
  const sendHook = useSendTransaction(config);
  const waitHook = useWaitForTransaction({
    hash: sendHook.data?.hash,
  });

  if (sendHook.isLoading) {
    return <p>Terminating...</p>;
  }
  if (sendHook.isSuccess) {
    if (waitHook.isLoading) {
      return <p>Waiting for execution...</p>;
    }
    if (waitHook.isSuccess) {
      return (
        <p>
          Success! Terminated the subscription!
        </p>
      );
    }
    if (waitHook.error) {
      return (
        <p>Error: {waitHook.error.message}</p>
      );
    }
  }
  if (sendHook.error) {
    return <p>Error: {sendHook.error.message}</p>;
  }

  if (!chain) {
    return [
      <p style={{ marginBottom: 8 }} key={0}>
        To terminate subscription, connect your
        wallet
      </p>,
      <button onClick={() => open()} key={1}>
        Connect Wallet
      </button>,
    ];
  }

  if (
    chain.id !==
    props.subscription.product.chain.id
  ) {
    if (!switchNetwork) {
      return (
        <p style={{ marginBottom: 8 }} key={0}>
          To terminate subscription, switch to{" "}
          {props.subscription.product.chain.name}{" "}
          chain
        </p>
      );
    }
    return [
      <p key={0} style={{ marginBottom: 8 }}>
        To terminate subscription, switch to{" "}
        {props.subscription.product.chain.name}{" "}
        chain
      </p>,
      <button
        key={1}
        onClick={() =>
          switchNetwork(
            props.subscription.product.chain.id
          )
        }
      >
        Switch chain
      </button>,
    ];
  }

  if (
    userAccount.address! !==
      props.subscription.userAddress &&
    userAccount.address! !==
      props.subscription.product.merchantAddress
  ) {
    return (
      <p>
        Only user (
        {props.subscription.userAddress}) or
        merchant (
        {
          props.subscription.product
            .merchantAddress
        }
        ) can terminate this subscription.
      </p>
    );
  }
  return [
    <p key={0} style={{ marginBottom: 8 }}>
      To terminate subscription, send a
      transaction
    </p>,
    <button
      key={1}
      onClick={() => sendHook.sendTransaction!()}
    >
      Terminate subscription
    </button>,
  ];
}

export function ManageSingle() {
  const { subscriptionHash } = useParams();
  const [subscription, setSubscription] =
    useState<Subscription | null>();

  useEffect(() => {
    (async () => {
      if (!subscriptionHash) return;
      const subscription =
        await getSubscriptionByHash(
          subscriptionHash as Hex
        );
      console.log(
        "Got subsbcription",
        subscription
      );
      setSubscription(subscription);
    })();
  }, [subscriptionHash]);

  if (!subscriptionHash) {
    return (
      <CoreFrame title="Manage subscription">
        <p>
          Please provide subscription id (hash) in
          the url in format /subscription/"id"
        </p>
      </CoreFrame>
    );
  }

  if (subscription === null) {
    return (
      <CoreFrame title="Manage subscription">
        <p>This subscription doesn't exist!</p>
      </CoreFrame>
    );
  }

  if (subscription === undefined) {
    return (
      <CoreFrame title="Manage subscription">
        <p>Loading...</p>
      </CoreFrame>
    );
  }

  const nextPaymentTimestamp =
    subscription.startTs +
    subscription.product.period *
      (subscription.paymentsMade + 1);

  const nextPaymentDate = new Date(
    nextPaymentTimestamp * 1000
  );

  const terminatedBlock = (
    <p>This subscription was terminated!</p>
  );
  const activeBlock = [
    <p key={0} style={{ marginBottom: 8 }}>
      Next payment at{" "}
      {nextPaymentDate.toLocaleDateString()}{" "}
      {nextPaymentDate.toLocaleTimeString()}
    </p>,
    <TerminateButton
      key={1}
      subscription={subscription}
    />,
  ];

  return (
    <CoreFrame
      title="Manage subscription"
      backPath={`/manage/${subscription.userAddress}`}
    >
      <p style={{ marginBottom: 8 }}>
        {subscription.product.productName}
      </p>
      <p style={{ marginBottom: 8 }}>
        {subscription.product.merchantDomain}
      </p>
      <p style={{ marginBottom: 8 }}>
        {subscription.product.humanAmount}{" "}
        {subscription.product.tokenSymbol} /{" "}
        {subscription.product.periodHuman}
      </p>
      <p style={{ marginBottom: 8 }}>
        Blockchain:{" "}
        {subscription.product.chain.name}
      </p>
      {subscription.terminated
        ? terminatedBlock
        : activeBlock}
    </CoreFrame>
  );
}
