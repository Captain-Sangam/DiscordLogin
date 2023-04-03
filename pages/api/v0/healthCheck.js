// Health Check for Monitoring systems

export default async (req, res) => {
  if (req.method == "POST") {
    res.status(200).json({ message: "I'm up and running" });
  } else if (req.method == "GET") {
    res.status(200).json({ message: "I'm up and running" });
  }
};
