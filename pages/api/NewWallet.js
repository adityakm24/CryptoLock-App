/*
export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", req);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.OwnerAddress || !body.OwnerWalletName || !body.OwnerName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Empty fields" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `Are you sure the given information is correct?` });
}
*/

import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CRYPTOLOCK-APP-DB");
  console.log("called");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      console.log(req.body.OAddress);
      if (db.collection("users").find({ OAddress: req.body.OAddress })) {
        res.json({
          status: 200,
          data: `User Already present`,
        });
      } else {
        let newPost = await db.collection("users").insertOne(bodyObject);
        res.json({
          status: 400,
          data: `Are you sure the given information is correct?`,
        });
      }
      break;
    /*
    case "GET":
      const posts = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
    */
  }
}


/*
export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", req);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.OwnerAddress || !body.OwnerWalletName || !body.OwnerName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Empty fields" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `Are you sure the given information is correct?` });
}


import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  console.log("hi");
  const client = await clientPromise;
  const db = client.db("CRYPTOLOCK-APP-DB");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      if (db.findOne({ OAddress: { $exists: true } })) {
        console.log("Error");
        res.json({
          status: 100,
          data: `Duplicate Entry`,
        });
      } else {
        let newPost = await db.collection("users").insertOne(bodyObject);
        console.log("Success!");
        res.json({
          status: 200,
          data: `Are you sure the given information is correct?`,
        });
        break;
      }
    /*
    case "GET":
      const posts = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  
  }
}

*/