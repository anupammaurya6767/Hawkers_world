import Link from "next/link";

const Footer = ({ props }) => {
  return (
    <footer
      style={{ color: props.currTheme.titleCol }}
      class="text-gray-600 body-font"
    >
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href={"/"}>
            <a
              style={{ color: props.currTheme.titleCol }}
              class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
               <svg
                xmlns="file:///D:/CODING%20VENTURE/hack2skill%20manav%20rachna/Untitled%20design.svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> 
              <span
                class="ml-3 text-xl"
                style={{ color: props.currTheme.titleCol }}
              >
                <span className="text-3xl text-orange-500">H</span>awkers
                <span className="text-3xl text-orange-500">W</span>orld
              </span>
            </a>
          </Link>
          <p
            class="mt-2 text-sm text-gray-500"
            style={{ color: props.currTheme.titleCol }}
          >
 Empowering your long-lived Trust,<br />
with Technology and Love.
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div
            class="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ color: props.currTheme.titleCol }}
          >
            <h2
              style={{ color: props.currTheme.titleCol }}
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
            >
              ABOUT US
            </h2>
            <nav
              class="list-none mb-10"
              style={{ color: props.currTheme.titleCol }}
            >
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Meet the team
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                  
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                  
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              style={{ color: props.currTheme.titleCol }}
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
            >
              REVIEWS
            </h2>
            
            <nav class="list-none mb-10">
            <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/reviews"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Rate your Vendor
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Vendor Reviews
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Consumer Reviews
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          <div
            class="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ color: props.currTheme.titleCol }}
          >
            <h2
              style={{ color: props.currTheme.titleCol }}
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
            >
              SERVICES
            </h2>
            <nav
              class="list-none mb-10"
              style={{ color: props.currTheme.titleCol }}
            >
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    For Vendor
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    For Consumer
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                  
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              style={{ color: props.currTheme.titleCol }}
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
            >
              SOCIALS
            </h2>
            <nav class="list-none mb-10">
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Github
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Whatsapp
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    LinkedIn
                  </a>
                </Link>
              </li>
              <li style={{ color: props.currTheme.titleCol }}>
                <Link href={"/"}>
                  <a
                    style={{ color: props.currTheme.titleCol }}
                    class="text-gray-600 hover:text-gray-800"
                  >
                    Instagram
                  </a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: props.currTheme.bgcolor }}
        class="bg-gray-100"
      >
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            ?? 2022 Hawkers World ???
            <Link href={"/"}>
              <a
                style={{ color: props.currTheme.titleCol }}
                href=""
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @Hawkers World
              </a>
            </Link>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={"/"}>
              <a
                style={{ color: props.currTheme.titleCol }}
                class="text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a
                style={{ color: props.currTheme.titleCol }}
                class="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a
                style={{ color: props.currTheme.titleCol }}
                class="ml-3 text-gray-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a
                style={{ color: props.currTheme.titleCol }}
                class="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
