import { NavLink } from "react-router-dom";

const CategoryLinks = ({category}) => {
    return (
        <div>
            <div className=" bg-cyan-700 rounded-lg text-white mb-3 shadow-lg">
                <NavLink key={category.id} className="block text-center p-5">{category.name}</NavLink>
            </div>
        </div>
    );
};

export default CategoryLinks;