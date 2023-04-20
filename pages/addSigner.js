import {
  useConnectModal,
  useAccountModal,
  useChainModal,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider, useNetwork } from "wagmi";
import Link from "next/link";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongo";

import { useEffect, useState } from "react";
import useIsMounted from "./hooks/useIsMounted";

export default function addSigner({ data }) {
  const account = useAccount();
  const router = useRouter();
    const mounted = useIsMounted();
    const { chain, chains } = useNetwork();
      const [OAddress, setOAddress] = useState("");

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.

    // API endpoint where we send form data.
    const endpoint = "/api/NewWallet";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify({
        OWChainName: OWChainName,
        OAddress: OAddress,
        PWallName: PWallName,
        OWName: OWName,
      }),
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if ((result.status = 200)) {
      alert(result.data);
      console.log(result.data);
      router.push({
        pathname: "/user-dashboard",
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Cryptolock - Dashboard</title>
        <meta name="description" content="Cryptolock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <div className="topnav-right">
          <ConnectButton chainStatus="name" />
        </div>
      </div>
      {mounted && account.isConnected && (
        <div>
          `Account ${account.address} is now connected!`
          <form onSubmit={handleSubmit} className="signup">
            <label htmlFor="OAddress">Address</label>
            <input
              type="text"
              id="OAddress"
              name="OAddress"
              value={OAddress}
              onChange={(e) => setOAddress(e.target.value)}
              required
              disabled
            />

            <button type="submit">Submit</button>
          </form>
          <ul>
            {data.map((data, index) => (
              <div key={index}>
                <h2>{data.address}</h2>
                <br />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export async function getServerSideProps() {
    try {
        console.log("Hi");
    const client = await clientPromise;
    const db = client.db("CRYPTOLOCK-APP-DB");

    const data = await db.collection("users").find({}).sort({ metacritic: -1 }).limit(1000).toArray();
    console.log(data)
    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
        console.error(e);
        return { props: { ok: false, reason: "some error description for your own consumption, not for client side" } }
  }
}
