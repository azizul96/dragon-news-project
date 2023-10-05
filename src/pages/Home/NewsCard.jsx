import { Link } from "react-router-dom";


const NewsCard = ({singleNews}) => {
    const {_id, thumbnail_url,title,details, } = singleNews
    // total_view, _id, 
    console.log(singleNews,);
    return (
        <div>
            
            <div className=" mb-3  ">
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
                    
                    <Link to={`/news/${_id}`}  className="text-red-500 font-semibold">
                        Read more
                        
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;