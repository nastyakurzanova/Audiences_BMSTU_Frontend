import "./AudiencesList.sass"
import SearchBar from "./SearchBar/SearchBar";
import {useEffect} from "react";
import AudiencesCard from "./AudiencesCard/AudiencesCard";
import {useAudiencesFilters} from "../../hooks/useAudiencesFilters";
import {Audiences, Response} from "../../Types";
import axios from "axios";

const AudiencesList = () => {

    const { audiences, setAudiences, query } = useAudiencesFilters();
    // console.log(audiences);
    const searchAudiences= async () => {

        const response:Response = await axios(`http://localhost:8000/api/audiences/search?&name=${query}`, {
            method: "GET"
        })
        setAudiences(response.data["info"])
        // setAudiences(response.data)
        // console.log("audiences1");
        // console.log(audiences);

        // console.log("response.data");
        // console.log(response.data);

        // setAudiences([...audiences])
        // console.log("audiences2");
        // console.log(audiences);
    }

    useEffect(() => {
        searchAudiences()
    }, [query])
    console.log("audiences",audiences);
    // const cards = spares.map(spae  => (
    //     <SpareCard spare={spare} key={spare.id} />
    // ))
    // const audiencesArray = Object.values(audiences);

    
    const cards = audiences.map((audience: Audiences)=> (
        <AudiencesCard audiences={audience} key={audience.id}
         />
     ));
    
        
    // const cards = audiences.map(Audiences  => (
    //     <AudiencesCard audiences={audiences} key={audiences.id} />
    // ))

    console.log("cards", cards);

    return (
        <div className="cards-list-wrapper">

            <div className="top">

                <h2>Поиск аудиторий</h2>

                <SearchBar />

            </div>

            <div className="bottom">

                { cards }

            </div>

        </div>
    )
}

export default AudiencesList;