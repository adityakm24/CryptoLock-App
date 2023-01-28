import { ConnectButton, useChainModal } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider } from "wagmi";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import  useIsMounted  from "./hooks/useIsMounted";


export default function Home() {
  const account = useAccount();

  const router = useRouter();
  const mounted = useIsMounted();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Cryptolock</title>
        <meta name="description" content="Cryptolock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectButton chainStatus="name" />
      <div>
        {mounted
          ? account.isConnected &&
            `Account ${account.address} is now connected!`
          : null}
        <br></br>

        <button type="button" onClick={() => router.push("/create-new-wallet")}>
          Click me
        </button>
      </div>
    </div>
  );
}
