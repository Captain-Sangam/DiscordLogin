// import jwt from "jsonwebtoken";
import { getSession } from "next-auth/react";


const saveSession = async (req, res) => {
  if (req.method == "POST" || req.method == "GET") {
    const session = await getSession({req});
    console.log(session)
    if (session) {
      const { user } = session;
      res.status(200).json({ user });
    }
    else{
        res.status(200).json({ message: "No user found" });
    }
  }
};

export default saveSession;
