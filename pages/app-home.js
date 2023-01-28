import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider } from "wagmi";
import Link from "next/link";
import  {useRouter}  from "next/router";

export default function DashboardNew() {
  const account = useAccount();
  const router = useRouter();

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
        <title>Cryptolock - Dashboard</title>
        <meta name="description" content="Cryptolock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="create-wallet">
        <h1>Create Safe</h1>
        <p>
          Create a new Safe that is controlled by one or multiple owners. You
          will be required to pay a network fee for creating your new Safe.
        </p>
        <br></br>
        <button
          type="button"
          className="button-create"
          onClick={() => router.push("create-new-wallet")}
        >
          + Create New Safe
        </button>
      </div>
    </div>
  );
}
