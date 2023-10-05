import { useEffect, useState } from "react";
import CategoryLinks from "./CategoryLinks";


const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])


    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-7 bg-orange-400 py-4 rounded-t-lg shadow-2xl">All Categories</h2>

            <div>
                {
                    categories.map(category => <CategoryLinks key={category.id} category={category}></CategoryLinks>)
                }
            </div>
            
        </div>
    );
};

export default LeftNav;