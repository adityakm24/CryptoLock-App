import { NewContract } from "../../contracts/js/NewCont";

import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CRYPTOLOCK-APP-DB");

  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      const x = await NewContract();
      bodyObject.address = [x];
      if (
        (await db
          .collection("users")
          .findOne({ OAddress: req.body.OAddress })) != null
      ) {
        res.json({
          status: 200,
          data: `User Already present`,
        });
      } else {
        let newPost = await db.collection("users").insertOne(bodyObject);
        res.json({
          status: 200,
          data: `Are you sure the given information is correct?`,
        });
      }
      break;
    case "GET":
      if (
        (await db
          .collection("users")
          .findOne({ OAddress: req.body.OAddress })) != null
      ) {
        const allData = await db.collection("users").findOne({ OAddress: req.body.OAddress })).toArray();
        res.json({ status: 200, data: allPosts });
      }
      else {
        res.json({
          status: 400,
          data: `No user present`
        )}
      break;
  }
}