import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"

const Review = () => {

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [msg, setmsg] = useState("");
  const value = false;
  const changekro2 = (e) => {
    setemail(e.target.value);
  };
  const changekro4 = (e) => {
    setname(e.target.value);
  };
  const changekro3 = (e) => {
    setmsg(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = [
      {
        firstName: name,
        msg: msg,
        email: email,
      },
    ];

    const data2 = [
      {
        msg: msg,
      },
    ];

    const JSONdata = JSON.stringify(data);
    const JSONdata2 = JSON.stringify(data2);
    const endpoint = "/api/reviews";
    const endpoint2 = "/api/revi";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const options2 = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata2,
    };

    const response = await fetch(endpoint, options);
    const response2 = await fetch(endpoint2, options2);

    const result = await response.json();
    if (result.success === "success") {
      toast.success("Submitted Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Some error occurred. Try Again!,", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      value = false;
    }

    setemail("");

    setname("");
    setmsg("");
  };
const transition = {duration:2,type:'spring'};
  return (
    <section class="text-gray-600 body-font relative">
        <form action="" method="POST" onSubmit={handleSubmit}>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Rate Your Vendor ????
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            
              <div  class="p-2 w-1/2">
                <motion.div initial = {{x:-50}}
  whileInView = {{x:-2}}
  transition = {transition}  class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Vendor Number
                  </label>
                  <input
                  value={name}
                  onChange={changekro4}
                    type="number"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </div>
              <motion.div initial = {{x:50}}
  whileInView = {{x:-1}}
  transition = {transition} class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                   Your  Email
                  </label>
                  <input
                  value={email}
                  onChange={changekro2}
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              <motion.div initial = {{y:50}}
  whileInView = {{y:2}}
  transition = {transition} class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Your Experience
                  </label>
                  <textarea
                  value={msg}
                  onChange={changekro3}
                    id="message"
                    name="msg"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </motion.div>
              <motion.div initial = {{y:50}}
  whileInView = {{y:2}}
  transition = {transition} class="p-2 w-full">
                <button class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                  Submit
                </button>
              </motion.div>
          </div>
        </div>
        {value ? (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        ) : (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}
      </div>
      </form>
    </section>
  );
};

export default Review;
