// Health Check for Monitoring systems

const check = async (req, res) => {
  if (req.method == "POST") {
    res.status(200).json({ message: "I'm up and running" });
  } else if (req.method == "GET") {
    res.status(200).json({ message: "I'm up and running" });
  }
};

export default check;
