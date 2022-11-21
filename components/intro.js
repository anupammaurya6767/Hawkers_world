import Link from "next/link";
import { motion } from "framer-motion"
const Intro = () => {
  const transition = {duration:2,type:'spring'};
    return (
      <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/hawker.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Join as a Hawker</h2>
            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScp4V8R0-_KK9yCJd7H5hSIbNuGXwRJ1N3kv1A55OaiPqHciw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" class="text-orange-500 inline-flex items-center mt-3">Join now
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/seller.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Join as a Seller </h2>
            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScjpByEdg8H5J2MAR3CwttoTjXm47CtWXWdYDjCFzc2pvAkYg/viewform?vc=0&c=0&w=1&flr=0" target="_blank" class="text-orange-500 inline-flex items-center mt-3">Join now
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="sponsor.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Join as a Sponsor</h2>
            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAD-3U8o75MvNZH3YRTRwdjM6vCm5ti7A6KHgyqyoPEfJNSg/viewform?vc=0&c=0&w=1&flr=0" target="_blank" class="text-orange-500 inline-flex items-center mt-3">Join now
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Intro;