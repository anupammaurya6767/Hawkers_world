import {useRouter}  from "next/router";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import {
  AccountBox,
  Leaderboard,
  Forum,
  Timeline,
  SupportAgent
} from "@mui/icons-material";

function Profile() {
  return <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
     
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Pawan Singh</h2>
            <div class="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Email@abc.com</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Customer Id: #44dd3e</p>
          <p class="leading-relaxed text-lg mb-4">Credit Score: 50</p>
          <p class="leading-relaxed text-lg mb-4">Address: 348 bawana land</p>
        </div>
      </div>
    </div>
  </div>
</section>
}

function LeaderboardResults() {
 return (<div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
            Top 3 Vendors
          </h1>
        </div>
        <div class="flex flex-wrap -m-4 justify-center">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Alper Kamu
                </h2>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/201x201"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Holden Caulfield
                </h2>
                <p class="mb-4">
                  DIY tote bag ronut adaptogen squid fanny pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/202x202"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Atticus Finch
                </h2>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
            Top 3 Consumers
          </h1>
        </div>
        <div class="flex flex-wrap -m-4 justify-center">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Jack Daniels
                </h2>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/201x201"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Tom Hofstader
                </h2>
                <p class="mb-4">
                  DIY tote bag ronut adaptogen squid fanny pack vaporware.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/202x202"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Brett Lee
                </h2>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>)
}

function Tracking(){
  return (
    <div className="h-full flex flex-col items-center justify-center">
       <iframe src=
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                    width="800"
                    height="500"
                    frameborder="0"
                    style={{border: 0}}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
            </iframe>
    </div>
  )
}

function App() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <Stack direction="row" gap={5}>
      <Stack gap={2} ml={1} color="gray" height="90vh" justifyContent="center">

        <Link href="/dashboard/a" >
        
        <Stack  direction="row" gap={1} alignItems="center">
          <AccountBox />
          <Typography variant="div" component="div" fontSize="1rem">
            My Profile
          </Typography>
        </Stack>
        </Link>


<Link href="/dashboard/leaderboard">

        <Stack  direction="row" gap={1} alignItems="center">
          <Leaderboard />
          <Typography variant="div" component="div" fontSize="1rem">
            Leaderboard
          </Typography>
        </Stack>
</Link>


<Link href="/dashboard/forum">
        <Stack  direction="row" gap={1} alignItems="center">
          <Forum />
          <Typography variant="div" component="div" fontSize="1rem">
            D2V
          </Typography>
        </Stack>
</Link>


<Link href="/dashboard/timeline">
        <Stack  direction="row" gap={1} alignItems="center">
          <Timeline />
          <Typography variant="div" component="div" fontSize="1rem">
            Tracking
          </Typography>
        </Stack>
</Link>


<Link href="/dashboard/support">

        <Stack direction="row" gap={1} alignItems="center">
          <SupportAgent  />
          <Typography variant="div" component="div" fontSize="1rem">
            Support
          </Typography>
        </Stack>
</Link>
      </Stack>
      <Stack
        sx={{
          bgcolor: "#f3f4f6", flex: 1, transform: "translateY(2rem)",
          borderTopLeftRadius: "3rem",

        }}
      >
        {slug === 'a' && <Profile/>}
        {slug === 'leaderboard' && <LeaderboardResults/>}
        {slug === 'timeline' && <Tracking/>}
      </Stack>
    </Stack>
  );
}

export default App;