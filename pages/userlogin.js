import Link from "next/link";
import { useState } from "react";

const UserSignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const changekro2 = (e) => {
    setemail(e.target.value);
  };
  const changekro4 = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setemail("");

    setpassword("");
  };
  return (
    <div class="relative min-h-screen bg-orange-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
      <div class="p-4 sm:p-8 flex-1 ">
        <div class="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
          <div class="relative h-auto">
            <svg
              class="absolute -top-20 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div class="absolute bottom-5 right-2">
              <Link href={"/"}>
                <a class="block transition hover:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 stroke-current text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div class="px-10 mt-10 pt-4 pb-8 rounded-3xl shadow-xl">
            <div class="mx-auto text-center">
              <h1 class="text-4xl text-gray-800">Log in</h1>
              <p class="mt-4">How do you want to sign in ?</p>
            </div>
            <div class="flex items-center justify-around mt-6">
              <div class="w-14 h-14 text-center rounded-full bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600">
                <Link href={"/"}>
                  <a class="block mt-4">
                    <i class="fab fa-facebook-f fa-lg "></i>
                  </a>
                </Link>
              </div>
              <div class="w-14 h-14 text-center rounded-full bg-red-500 text-white saturate-100 transition-all hover:bg-red-600">
                <Link href={"/"}>
                  <a class="block mt-4">
                    <i class="fab fa-google fa-lg"></i>
                  </a>
                </Link>
              </div>
              <div class="w-14 h-14 text-center rounded-full bg-indigo-500 text-white saturate-100 transition-all hover:bg-indigo-600">
                <Link href={"/"}>
                  <a class="block mt-4">
                    <i class="fab fa-twitch fa-lg"></i>
                  </a>
                </Link>
              </div>
              <div class="w-14 h-14 text-center rounded-full bg-orange-500 text-white saturate-100 transition-all hover:bg-orange-600">
                <Link href={"/"}>
                  <a class="block mt-4">
                    <i class="fab fa-line fa-lg"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div class="flex items-center my-6 ">
              <hr class="flex-1" />
              <span class="px-4 text-sm text-gray-400">Or countinue with</span>
              <hr class="flex-1" />
            </div>
            <form
              action=""
              method="POST"
              onSubmit={handleSubmit}
              className="mt-5"
            >
              <div class="relative">
                <input
                  value={email}
                  onChange={changekro2}
                  id="email"
                  type="email"
                  name="email"
                  class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-orange-600"
                  placeholder="Password"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm"
                >
                  E-mail
                </label>
              </div>
              <div class="mt-10 relative">
                <input
                  value={password}
                  onChange={changekro4}
                  id="password"
                  type="password"
                  name="password"
                  class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-orange-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <Link href={`/consumer/${email}`}><button
                type="submit"
                class="w-full mt-14 py-4 text-lg text-white font-semibold text-center rounded-full bg-orange-500 transition-all hover:bg-orange-600 focus:outline-none"
              >
                Sign in
              </button>
              </Link>
              <p class="text-center text-sm text-gray-400 mt-4">
                Dont Have an account ?
                <Link href={"/"}>
                  <a class="font-semibold text-orange-600 hover:underline">
                    Sign Up
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;