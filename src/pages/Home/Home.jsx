import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";


// const Home = ({cards}) => {
const Home = () => {
    const cards=useLoaderData()
    //
// const [searchItem,setSearchItem]=useState('')
// const [filterdItem,setFilterdItem]=useState(cards)

// const filterItems = () =>{
//     const filtered=cards.filter((card)=> card.category.toLowerCase().includes(searchItem.toLowerCase()))
//     setFilterdItem(filtered)


    // 
    return (
        <div>
            {/* <Banner searchItem={searchItem} setSearchItem={setSearchItem} filterItems={filterItems}> */}
            <Banner>
            
            </Banner>
            {/* <Cards cards={filterdItem}></Cards> */}
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;