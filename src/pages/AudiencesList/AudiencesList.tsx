import "./AudiencesList.sass"
import SearchBar from "../../components/SearchBar/SearchBar";
import {useEffect, useState} from "react";
import AudiencesCard from "./AudiencesCard/AudiencesCard";
import {iAudiencesMock, requestTime} from "../../utils/consts";
import {Audiences} from "../../utils/types";

const AudiencesList = () => {

    const [Audiences, setAudiences] = useState<Audiences[]>([]);

    const [query, setQuery] = useState<string>("");

    const [isMock, setIsMock] = useState<boolean>(false);

    const searchAudiences = async () => {

        try {
//!!!
            const response = await fetch(`http://localhost:8000/api/audiences/search?&query=${query}`, {
                method: "GET",
                signal: AbortSignal.timeout(requestTime)
            })

            if (!response.ok){
                createMock();
                return;
            }

            const raw = await response.json()
            const Audiences: Audiences[] = raw["info"]

            setAudiences(Audiences)
            setIsMock(false)

        } catch (e) {

            createMock()

        }
    }

    const createMock = () => {

        setIsMock(true);
        setAudiences(iAudiencesMock)

    }

    useEffect(() => {
        searchAudiences()
    }, [query])

    const cards = Audiences.map(audiences  => (
        <AudiencesCard audiences={audiences} key={audiences.id} isMock={isMock}/>
    ))

    return (
        <div className="cards-list-wrapper">

            <div className="top">

                <h2>Поиск аудиторий</h2>

                <SearchBar query={query} setQuery={setQuery} />

            </div>

            <div className="bottom">

                { cards }

            </div>

        </div>
    )
}

export default AudiencesList;