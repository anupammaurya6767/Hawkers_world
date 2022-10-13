import { useRouter } from "next/router";
import User from "../../models/User";
// import User from "../../models/User";
import Link from "next/link";
import mongoose from "mongoose";
import { Box, Stack } from "@mui/material";

export default function Slug(Users) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div>
            <span
              className="text-green-500"
              style={{ fontSize: "2.5rem", fontWeight: 600 }}
            >
              Hello
            </span>{" "}
            <span style={{ fontSize: "2.5rem", fontWeight: 600 }}>
              {" "}
              {Users.Users.firstName}
            </span>
            <div style={{ color: "gray", textTransform: "capitalize" }}>
              {Users.Users.address}{" "}
            </div>
          </div>
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="mt-20 flex relative pb-12">
                <div><span className="text-gray-600 text-5xl font-bold">Welcome to </span> <span
              className="text-green-500"
              style={{ fontSize: "2.6rem", fontWeight: 600 }}
            >tECHtHELLA!</span><br></br>
            
              <span className="text-gray-600 text-3xl ">You can take a look at the</span><span
              className="text-green-500"
              style={{ fontSize: "2rem", fontWeight: 500 }}
            > vendor list</span> <span className="text-gray-600 text-3xl ">below who are providing different</span><span
            className="text-green-500"
            style={{ fontSize: "2rem", fontWeight: 500 }}
          > services/products.</span></div>
              </div>
            </div>

            <iframe
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 lg:mt-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
              width="800"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
      
      <div className="text-center">
        <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      <Link href="/payment">Upgrade to Premium Model Now?</Link>
    </button>

      </div>

      <div className="container px-5 py-4 mx-auto">
        <h1 className="text-gray-600 text-4xl font-bold">
          <span className="text-green-500">Star Rated Vendors</span> near you
        </h1>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/review.jpeg"
                />
                <p class="leading-relaxed">
                  5 star rated <br />
                  Deals in Vegetables
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Ashok
                </h2>
                <p class="text-gray-500"></p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/review2.jpeg"
                />
                <p class="leading-relaxed">
                  4.8 star rated
                  <br />
                  Deals in fruits and vegetables
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sunita
                </h2>
                <p class="text-gray-500"></p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/review3.jpeg"
                />
                <p class="leading-relaxed">
                  4.6 star rated
                  <br />
                  Scrap Dealer
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sandeep
                </h2>
                <p class="text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }

  let Users = await User.findOne({ email: context.query.slug });
  return {
    props: { Users: JSON.parse(JSON.stringify(Users)) },
  };
}
