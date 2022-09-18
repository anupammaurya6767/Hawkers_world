
	import { useRouter } from "next/router";
import User from "../../models/User";
import mongoose from "mongoose";
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
export default function Slug(Users){
  const [pin,setpin] = useState("");
  const [item,setitem]= useState("");
  const [x,setx] = useState("");

  

  const changekro = (e)=>{
    setpin(e.target.value)
  }
  const changekro2 = (e)=>{
    setitem(e.target.value)
    setx( Math.floor((Math.random() * 86) + 1))
  }
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>

      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
     <div>

        <span className="text-green-500" style={{fontSize: '2.5rem', fontWeight: 600}}>Hello </span> <span style={{fontSize: '2.5rem', fontWeight: 600}}> {Users.Users.firstName}</span>
        <div style={{color: 'gray', textTransform: 'capitalize'}}>contact: {Users.Users.pincode} </div>
        
      </div>
    <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div class="mt-20 flex relative pb-12">
          
          <div><span style={{fontSize: '2rem', fontWeight: 600}}>Bahut hua Online ka</span><span className="text-green-500" style={{fontSize: '2.5rem', fontWeight: 600}}> Prahaar,</span><br></br> <span style={{fontSize: '2rem', fontWeight: 600}}>Ab phone hi Badhayega Aapki</span> <span className="text-green-500" style={{fontSize: '2.5rem', fontWeight: 600}}>Raftaar.</span>.<br></br></div>
      
        </div> 
     
       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Your Location
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="pincode" onChange={changekro} value={pin}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        What you have to sell?
      </label>
      <input class="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="vegetables" onChange={changekro2} value={item}/>
      <p class="text-green-500 text-xs italic"></p>
    </div>
    <div class="flex items-center justify-between">
    <Popup trigger={   <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Predict Probability
      </button>
      } position="right center">

<div class="flex justify-center">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div class="py-3 px-6 border-b border-gray-300">
      Proability Score
    </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2"><span className="text-green-500 font-bold text-2xl">{x}%</span></h5>
      <p class="text-gray-700 text-base mb-4">
        in locality with pincode: {pin}
      </p>
        </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
     for {item}
    </div>
  </div>
</div>

      </Popup>
    </div>
  </form>

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
   
      </>
  );
  
  
}


          export async function getServerSideProps(context) {
            if(!mongoose.connections[0].readyState){
            
          
            await mongoose.connect(process.env.MONGO_URL)
            }
          
            let Users = await User.findOne({phone:context.query.slug});
            return {
               
              props: {Users:JSON.parse(JSON.stringify(Users))},
            }
          }
          