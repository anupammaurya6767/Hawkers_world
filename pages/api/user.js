import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = new User({
            firstName: req.body[i].firstName,
            email: req.body[i].email,
            address: req.body[i].address,
            pincode: req.body[i].pincode,
            password: req.body[i].password,
            isuser: req.body[i].isuser
      });

      await b.save();
      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);