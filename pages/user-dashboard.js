import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useIsMounted from "./hooks/useIsMounted";

import YOUR_CONTRACT_ABI from "./build/YourContract.json" assert { type: "json" };
import bytecode from "./build/YourContract";

const { ethers } = require("ethers");


const contractFactory = new ethers.ContractFactory(YOUR_CONTRACT_ABI, bytecode);

async function deployContract() {
  console.log("Hi!");
  const contract = await contractFactory.deploy();
  console.log(`Contract deployed! Address: ${contract.address}`);
}

export default function DashboardNew() {
  const router = useRouter();
  const account = useAccount();
  const mounted = useIsMounted();
  const { chain, chains } = useNetwork();

  const [OAddress, setOAddress] = useState("");

  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <div className="topnav-right">
          <ConnectButton chainStatus="name" />
        </div>
      </div>
      {mounted ? (
        <div>
          {account.isConnected && (
            <div>
              <div className="sidenav">
                <a> </a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="main">
                <h2> `Account ${account.address} is now connected!`</h2>
                <button onClick={deployContract}>Deploy</button>
                <p></p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
