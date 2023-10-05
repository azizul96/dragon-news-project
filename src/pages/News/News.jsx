import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";

const News = () => {
    const {id, thumbnail_url, title, details} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                
                <div className="col-span-3">
                <h2>news details</h2>
                <h3>{id}</h3>
                    {/* <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="w-full h-52 px-5" src={thumbnail_url} alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                            </Link>
                            
                                {
                                    details.length > 200 ? 
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.slice(0,200)}</p>
                                    :
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                                }
                            
                            <Link to={`/news/${id}`}  className="text-red-500 font-semibold">
                                Read more
                                
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
            
        </div>
    );
};

export default News;