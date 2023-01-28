import { useRouter } from "next/router";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import { useIsMounted } from "./hooks/useIsMounted";

export default function CreateNewWallet() {
  const account = useAccount();
  const router = useRouter();
  const mounted = useIsMounted();
  const { chain, chains } = useNetwork();
  
 

  const [OWChainName, setOWChainName] = useState("");
  const [OAddress, setOAddress] = useState("");
  const [PWallName, setPWallName] = useState("");
  const [OWName, setOWName] = useState("");

 useEffect(() => {
   // Update the document title using the browser API
   if (account.isConnected) { setOAddress(account.address); setOWChainName(chain.name)};
 });

  
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
    /*
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`${result.data}`) 
        if (result) {
          router.push({
            pathname: "/user-dashboard",
            query: { user: JSONdata },
          });
        }  
  }*/
  };


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
      <ConnectButton />
      <br />
      {mounted ? (
        <div>
          {account.isConnected && (
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

              <label htmlFor="OWChainName">Chain Name</label>
              <input
                type="text"
                id="OWChainName"
                name="OWChainName"
                value={chain.name}
                onChange={(e) => setOWChainName(e.target.value)}
                required
                disabled
              />

              <label htmlFor="PWallName">Name</label>
              <input
                type="text"
                id="PWallName"
                name="PWallName"
                value={PWallName}
                onChange={(e) => setPWallName(e.currentTarget.value)}
                required
              />

              <label htmlFor="OWName">Owner Name</label>
              <input
                type="text"
                id="OWName"
                name="OWName"
                value={OWName}
                onChange={(e) => setOWName(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ) : null}
    </div>
  );
}
