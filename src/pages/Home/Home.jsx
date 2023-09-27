
import Cards from "../../components/Cards/Cards";

import { useState } from "react";
import { useEffect } from "react";


const Home = () => {
    const [cards, setCards] =  useState();
    // console.log(cardFromData);
    useEffect(()=>{
        fetch('/cards.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const j = form.searchValue.value;
        console.log(j);
        const targetTitle = cards.filter(card => card.title.toLowerCase()==j.toLowerCase());
        console.log(targetTitle);
        setCards(targetTitle);
    }

    return (
        <div>
          
            <div className="">
                <div className="hero min-h-screen w-[400px] md:w-[600px] lg:w-[1300px] mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/Kh3wVQj/banner.jpg)'}}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="text-center text-black">
                    <div className="w-[300px] md:max-w-md lg:w-[600px] mx-auto">
                    <h1 className="mb-5 text-2xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex items-center">
                        <form onSubmit={handleSearch} className="join w-[200px] md:w-[300px] lg:w-[500px]">
                            <input className="input input-bordered join-item w-[350px]" name="searchValue" placeholder="Search here...." />
                            <input className="btn join-item bg-red-600 text-white" value="Search" type="submit"/>
                        </form>
                  
                </div> 
                </div>
                    </div>
                
                </div>
            </div>
           
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;