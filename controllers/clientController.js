import Client from "../schemas/Clients.js";

// Get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createClient = async (req, res) => {
  const client = new Client({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
