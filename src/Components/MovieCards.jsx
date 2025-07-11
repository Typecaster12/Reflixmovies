import { useEffect, useState } from "react";
import { getRequest } from "../API/ApiInstance";
import Header from "./Header";

const MovieCards = () => {
    const [moviesData, setMoviesData] = useState({});
    const [inputVal, setInputVal] = useState("");
    //finally value will be stored in this state;
    //initially the we get avengers movie, 
    const [value, setValue] = useState('avengers');
    //for more pages;
    const [page, setPage] = useState(1);

    //get the movie when page loads;
    const dataRequest = async (value, page) => {
        try {
            const res = await getRequest(value, page);
            //make sure we get the data;
            if (res.data.Search) {
                //if we are on first page then fetch the 1st page's data;
                //else add the new page's data into olderone;
                setMoviesData((prev) =>
                    page === 1 ? res.data.Search : [...prev, ...res.data.Search]
                );
            }
        } catch (error) {
            console.log("Some Error Occured while fetching the data", error);
        }
    }

    //useEffect
    useEffect(() => {
        dataRequest(value, page);
    }, [value, page]);


    return (
        <>
            <Header inputVal={inputVal} setInputVal={setInputVal} value={value} setValue={setValue} page={page} setPage={setPage} setMoviesData={setMoviesData} />

            <div className="cards-container">
                <ul className="movies-list">
                    {moviesData?.length > 0 && moviesData.map((curEle, index) => (
                        <li className="movie-card" key={index}>
                            <img src={curEle.Poster} alt="movie-poster" className="movie-poster" />
                            <h3 className="movie-title">Title: {curEle.Title}</h3>
                            <p className="movie-year">Year: {curEle.Year}</p>
                        </li>
                    ))}
                </ul>

                {moviesData?.length > 0 && (
                    <div style={{ textAlign: "center", margin: "2rem 0" }}>
                        <button className="load-more-btn" onClick={() => setPage((p) => p + 1)}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default MovieCards;