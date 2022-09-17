import Link from "next/link";

const Intro = () => {

    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="/customer.jpeg" />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-600 mt-6 mb-3">Are you a <span className="text-green-500"> Consumer?</span></h2>
              <p class="leading-relaxed text-base">Ordering stuff is Easy without making you pocket Squeezy.<br/> Sign up now to know how...</p>
              <Link href={"/signup"}><button class="flex text-2xl mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Sign Up</button></Link>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="/vendor.jpeg" />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-600 mt-6 mb-3">Are you a <span className="text-green-500"> Vendor?</span></h2>
              <p class="leading-relaxed text-base">bahut hua online ka prahaar, ab phone hi badhayega aapki raftaar.<br/> Abhi sign up krein..</p>
              <Link href={"/signup"}><button class="flex text-2xl mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Intro;