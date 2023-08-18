import MarkWebber from "../images/avatar-mark-webber.webp"
import AngelaGray from "../images/avatar-angela-gray.webp"
import JacobThompson from "../images/avatar-jacob-thompson.webp"
import AnnaKim from "../images/avatar-anna-kim.webp"
import KimberlySmith from "../images/avatar-kimberly-smith.webp"
import NathanPeterson from "../images/avatar-nathan-peterson.webp"
import RizkyHasanuddin from "../images/avatar-rizky-hasanuddin.webp"
import Chess from '../images/image-chess.webp'
import {useState} from "react";
export default function main(){
    let[show,setShow] = useState(false);
    const [count, setCount] = useState(0);
    const [user,setUser] = useState({
        inputText : "",
    })

    const [submittedTexts, setSubmittedTexts] = useState([]);

    function handleChange(e){
        const {name,value} = e.target
        setUser(prevUser => {
            return{
                ...prevUser,
                [name] : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.inputText.trim() !== "") { // Only add non-empty texts to the array
            setSubmittedTexts(prevTexts => [...prevTexts, user.inputText]);
            setUser({ inputText: "" }); // Clear the input field after submission
            setShow(true)
            setCount(prevCount => prevCount + 1);
        }
    }

 return(
     <>
         <div className='w-full flex flex-col justify-center'>
             <div className='flex flex-col items-center'>
                 <main className="font-JakartaSans w-full sm:max-w-2xl">
                     <div className="h-screen mx-4 pb-4 sm:max-w-2xl">
                         <div className="flex justify-between mt-3">
                             <div>
                                 <span className="text-blue-900 font-extrabold">Notifications</span>
                                 <span className="bg-blue-900 px-3 py-1 rounded-md text-white">{count}</span>
                             </div>
                             <span className="text-gray-600 cursor-pointer hover:text-blue-800">Mark as all read</span>
                         </div>

                         {/*Notifications*/}
                         <div className="bg-gray-100 text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                             <img src={MarkWebber} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Mark Webber </span>
                                 <span>reacted to your recent post</span>
                                 <span className="text-gray-500 font-medium cursor-pointer hover:text-blue-800 hover:font-medium"> My First Tournament Today!</span>
                                 <span className="text-red-500">●</span>
                                 <span className="block">1m ago</span>
                             </div>
                         </div>

                         <div className="bg-gray-100 text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                             <img src={AngelaGray} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Angela Gray</span>
                                 <span> followed you</span>
                                 <span className="text-red-500">●</span>
                                 <span className="block">5m ago</span>
                             </div>
                         </div>

                         <div className="bg-gray-100 text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                             <img src={JacobThompson} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Jacob Thompson</span>
                                 <span> has joined your group</span>
                                 <span className="text-blue-800 font-semibold cursor-pointer"> Chess Club</span>
                                 <span className="text-red-500">●</span>
                                 <span className="block">10m ago</span>
                             </div>
                         </div>

                         <div className=" text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                             <img src={KimberlySmith} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Rizky Hasanuddin</span>
                                 <span> sent you a private message</span>
                                 <span className="block">5days ago</span>
                                 <div className="mr-3 border border-gray-300 p-4 mt-2 rounded-md cursor-pointer hover:bg-indigo-50">
                                     {/* eslint-disable-next-line react/no-unescaped-entities */}
                                     Hello, thanks for setting up the Chess Club.I've been a member  of a few week nows and I'm having already lots of fun and improving my games
                                 </div>
                             </div>
                         </div>

                         <div className="text-gray-500 mt-3 px-3 py-3 ">
                             <div className="grid grid-cols-10">
                                 <div className="col-span-2">
                                     <img src={NathanPeterson} alt="" className="h-12"/>
                                 </div>
                                 <div className="col-span-7 text-left sm:-ml-10 md:-ml-16">
                                     <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Kimberly Smith</span>
                                     <span> commented on your photo</span>
                                     <span className="block">1week ago</span>
                                 </div>
                                 <div className="pr-1">
                                     <img src={Chess} className="cursor-pointer"/>
                                 </div>
                             </div>

                         </div>

                         <div className="text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                             <img src={RizkyHasanuddin} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Nathan Peterson</span>
                                 <span> reacted to your recent post</span>
                                 <span className="text-gray-800 font-medium cursor-pointer hover:text-blue-800"> 5 end-game strategies to increase your win rate</span>
                                 <span className="block">2 weeks ago</span>
                             </div>
                         </div>

                         <div className="text-gray-500 mt-3 mb-6 rounded-lg pl-3 py-3 flex">
                             <img src={AnnaKim} alt="" className="h-12 w-12"/>
                             <div className="pl-3 text-left mr-3">
                                 <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Anna Kim</span>
                                 <span> left the group</span>
                                 <span className="text-blue-800 font-semibold cursor-pointer"> Chess Club</span>
                                 <span className="block">2 weeks ago</span>
                             </div>
                         </div>

                         {show?
                             <div className=" text-gray-500 mt-3 rounded-lg pl-3 py-3 flex">
                                 <img src={KimberlySmith} alt="" className="h-12 w-12"/>
                                 <div className="pl-3 text-left mr-3">
                                     <span className="text-black font-bold cursor-pointer hover:text-blue-800 hover:font-bold">Aung Myo Myat</span>
                                     <span> sent you a private message</span>
                                     <span className="block">5days ago</span>
                                     <div className="mr-3 border border-gray-300 p-4 mt-2 rounded-md cursor-pointer hover:bg-indigo-50">
                                         {submittedTexts.length > 0 && (
                                             submittedTexts.map((text, index) => (
                                                 <p key={index}>{text}</p>
                                             ))
                                         )}
                                     </div>
                                 </div>
                             </div> : ""
                         }

                         {show && (
                             <div>
                                 <p>Submitted Texts: {submittedTexts.join(", ")}</p>
                                 <p>Count: {count}</p>
                             </div>
                         )}

                         <div className='mb-8'>
                             <form action="" onSubmit={handleSubmit}>
                             <div>
                                 <input type="text" placeholder='Enter Text' onChange={handleChange} name='inputText' className='border-2 border-black mr-3 rounded-md py-1 px-3'/>
                                 <button className="px-6 py-1 bg-blue-800 rounded-md text-white">Send Message</button>
                             </div>
                             </form>

                         </div>
                     </div>
                 </main>
             </div>
         </div>

     </>
 )
}