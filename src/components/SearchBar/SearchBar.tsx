import "./SearchBar.sass"
import {FaSearch} from "react-icons/fa";

type SearchBarProps = {
    query: string;
    setQuery: (value: string) => void;
   };

const SearchBar = ({ query, setQuery }:SearchBarProps) => {

    const handleChange = (value: string) => {
        setQuery(value)
    }

    return (
        //!!!
        <form className="search-bar-wrapper" action="/api/audiences/search" method="GET" onSubmit={(e) => e.preventDefault()} >

            <input
                type="text"
                placeholder="Поиск..."
                name="name"
                autoComplete="off"
                value={query}
                onChange={(e) => handleChange(e.target.value)}
            />

            <button type="submit">
                Применить
            </button>

        </form>
    )
}

export default SearchBar;