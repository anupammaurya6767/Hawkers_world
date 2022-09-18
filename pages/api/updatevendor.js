import Vendor from "../../models/Vendor";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = Vendor.findOneAndUpdate({
            firstName: req.body[i].firstName,
            phone: req.body[i].phone,
            pincode: req.body[i].pincode,
            password: req.body[i].password
      });

      await b.save();
      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);