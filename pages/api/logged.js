import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider } from "wagmi";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function dashboard() {
  const router = useRouter();
  const data = router.query;
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

      <div>
        <h2>
          Name: <span style={{ color: "red" }}>{data}</span>
        </h2>
      </div>
    </div>
  );
}
