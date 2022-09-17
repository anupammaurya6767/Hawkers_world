import Intro from "../components/intro";
import HomeImg from "../components/homeimg";
import Link from "next/link";
export default function Home() {

  
  
  return (
    <div>
        <HomeImg />
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-500">
          Let's get <span className="text-green-500"><Link href={"/"}><a>Started</a></Link></span> !!!
        </h1>
        </div>
        <Intro />
        
    </div>
  )
}
