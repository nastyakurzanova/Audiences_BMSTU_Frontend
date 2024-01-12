import "./styles/main.sass"
import "./styles/reset.sass"
import { useState } from 'react'
import Header from "./components/Header/Header";
import {Audiences} from "./utils/types";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import AudiencesPage from "./pages/AudiencesPage/AudiencesPage";
import AudiencesList from "./pages/AudiencesList/AudiencesList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {

    const [selectedAudiences, setSelectedAudiences] = useState<Audiences | undefined>(undefined)

    return (
        <BrowserRouter basename="/audiences">

            <div className="App">

                <div className="wrapper">

                    <Header />

                    <div className="content-wrapper">

                        <Breadcrumbs selectedAudiences={selectedAudiences!} setSelectedAudiences={setSelectedAudiences}/>

                        <Routes>

                            <Route path="/" element={<Navigate to="/audiences" replace />} />

                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path="/audiences" element={<AudiencesList />} />

                            <Route path="/audiences/:id" element={<AudiencesPage selectedAudiences={selectedAudiences} setSelectedAudiences={setSelectedAudiences} />} />

                        </Routes>

                    </div>

                </div>

            </div>

        </BrowserRouter>
    )
}

export default App
