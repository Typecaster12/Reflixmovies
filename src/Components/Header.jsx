/* eslint-disable no-unused-vars */
// import { getRequest } from "../API/ApiInstance"

//will contain input and heading;
const Header = ({ inputVal, setInputVal, page, setPage, setValue, setMoviesData }) => {

    //handleClick;
    const handleClick = () => {
        setMoviesData({}); //empty previous search so that only fresh search will get, not old+fresh..
        setValue(inputVal);
        setPage(1); //for new search set to page number 1;
    }

    return (
        <>
            <div className="header-container">
                <h2 className="header-heading">Re-Flix | Your Movie App</h2>

                <div className="inp-container">
                    <input type="text" placeholder="Search Here..." className="search-input" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                    <button className="search-btn" onClick={handleClick}>Search</button>
                </div>
            </div>

        </>
    )
}

export default Header
