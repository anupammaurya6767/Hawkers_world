import Intro from "../components/intro";
import HomeImg from "../components/homeimg";
import Link from "next/link";
import Revie from "../components/review";
import Reviews from "../models/Reviews";
import mongoose from "mongoose";
import cohere from "cohere-ai";
import {useEffect, useState } from "react";
let val=98.36;
export default function Home(Revi) {
const [val, setval] = useState("");

  cohere.init("lKc5LHAV8g35ethqSsoVvp9WERyIT8cXMjQFSSvZ");
(async () => {
  const response = await cohere.classify({
    model: 'large',
    inputs: ["Awesome Product", "UI amazing","Good"],
    examples: [{"text": "The order came 5 days early", "label": "positive"}, {"text": "The item exceeded my expectations", "label": "positive"}, {"text": "I ordered more for my friends", "label": "positive"}, {"text": "I would buy this again", "label": "positive"}, {"text": "I would recommend this to others", "label": "positive"}, {"text": "The package was damaged", "label": "negative"}, {"text": "The order is 5 days late", "label": "negative"}, {"text": "The order was incorrect", "label": "negative"}, {"text": "I want to return my item", "label": "negative"}, {"text": "The item\'s material feels low quality", "label": "negative"}]
  });
   setval(JSON.stringify(response.body.classifications[0].labels.positive.confidence*100))
})();


  return (
    <div>
        <HomeImg />
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-500">
          Lets get <span className="text-green-500"><Link href={"/"}><a>Started</a></Link></span> !!!
        </h1>
        </div>
        <Intro />
        <Revie data = {Revi}/>
        <div className="container px-5 py-4 mx-auto">
    <h1 className='text-gray-600 text-4xl font-bold'>At a time when scoring above<span className="text-green-500"> 90%</span> feels hard, <span className="text-green-500">tECHtHELLA</span> has won the hearts of<span className="text-green-500"> {val}%.</span><br /><br /><t /> -- <span className="text-green-500">by co:here ai</span></h1>
  </div>
    </div>
  )
}


export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }


  let Revi = await Reviews.find();
  return {
    props: { Revi: JSON.parse(JSON.stringify(Revi)) },
  };
}

