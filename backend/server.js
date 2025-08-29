// import express from "express";
// import cors from "cors";
// import { MongoClient } from "mongodb";

// const app = express();
// const PORT = 8080;

// app.use(cors());
// app.use(express.json());

// const uri = "mongodb+srv://nestnicsupplies:4Iexl7kPONgHVPzz@cluster1.mdwpzua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// const client = new MongoClient(uri);

// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, company, service, budget, message } = req.body;
//     await client.connect();
//     const db = client.db("NestnicWeb");
//     const collection = db.collection("form");

//     await collection.insertOne({
//       name,
//       email,
//       company,
//       service,
//       budget,
//       message,
//       createdAt: new Date(),
//     });

//     res.status(200).json({ success: true, msg: "Contact saved" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Backend running at http://localhost:${PORT}`);
// });



// import express from "express";
// import cors from "cors";
// import { MongoClient } from "mongodb";

// const app = express();
// const PORT = 8080;

// app.use(cors());
// app.use(express.json());

// const uri =
//   "mongodb+srv://nestnicsupplies:4Iexl7kPONgHVPzz@cluster1.mdwpzua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// const client = new MongoClient(uri);

// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, company, service, budget, message } = req.body;
//     await client.connect();
//     const db = client.db("NestnicWeb");
//     const collection = db.collection("form");

//     await collection.insertOne({
//       name,
//       email,
//       company,
//       service,
//       budget,
//       message,
//       status: "not served", // 👈 added default status
//       createdAt: new Date(),
//     });

//     res.status(200).json({ success: true, msg: "Contact saved" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Backend running at http://localhost:${PORT}`);
// });




// import express from "express";
// import cors from "cors";
// import { MongoClient } from "mongodb";

// const app = express();
// const PORT = 8080;

// app.use(cors());
// app.use(express.json());

// const uri =
//   "mongodb+srv://nestnicsupplies:4Iexl7kPONgHVPzz@cluster1.mdwpzua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// const client = new MongoClient(uri);

// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, company, service, budget, message } = req.body;
//     await client.connect();
//     const db = client.db("NestnicWeb");
//     const collection = db.collection("form");

//     await collection.insertOne({
//       name,
//       email,
//       company,
//       service,
//       budget,
//       message,
//       status: "not served", // default
//       createdAt: new Date(),
//     });

//     res.status(200).json({ success: true, msg: "Contact saved" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// // 🚀 NEW ENDPOINT: Fetch all contact form entries
// app.get("/contacts", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db("NestnicWeb");
//     const collection = db.collection("form");

//     const contacts = await collection.find().sort({ createdAt: -1 }).toArray(); // latest first

//     res.status(200).json({ success: true, data: contacts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Backend running at http://localhost:${PORT}`);
// });










import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://nestnicsupplies:4Iexl7kPONgHVPzz@cluster1.mdwpzua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const client = new MongoClient(uri);

// 📩 Save new contact
app.post("/contact", async (req, res) => {
  try {
    const { name, email, company, service, budget, message } = req.body;
    await client.connect();
    const db = client.db("NestnicWeb");
    const collection = db.collection("form");

    await collection.insertOne({
      name,
      email,
      company,
      service,
      budget,
      message,
      status: "not served", // default
      createdAt: new Date(),
    });

    res.status(200).json({ success: true, msg: "Contact saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// 📤 Fetch all contacts
app.get("/contacts", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("NestnicWeb");
    const collection = db.collection("form");

    const contacts = await collection.find().sort({ createdAt: -1 }).toArray();

    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Update status to "served"
app.patch("/contacts/:id/serve", async (req, res) => {
  try {
    const { id } = req.params;
    await client.connect();
    const db = client.db("NestnicWeb");
    const collection = db.collection("form");

    const result = await collection.updateOne(
      { _id: new ObjectId(id), status: "not served" },
      { $set: { status: "served" } }
    );

    if (result.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        msg: "Already served or not found",
      });
    }

    res.status(200).json({ success: true, msg: "Marked as served" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
