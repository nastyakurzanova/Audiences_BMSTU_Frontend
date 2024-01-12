import "./Styles/Main.sass"
import "./Styles/Reset.sass"
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {BrowserRouter, Route, Routes, Navigate, useLocation} from 'react-router-dom';
import AudiencesPage from "./pages/AudiencesPage/AudiencesPage";
import AudiencesList from "./pages/AudiencesListPage/AudiencesList";
import {Provider} from "react-redux"
import store from "./store/store"
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import {useAuth} from "./hooks/useAuth";
import BookingConstructor from "./components/BookingConstructor/BookingConstructor";
import {QueryClient, QueryClientProvider } from "react-query";

const TopPanelWrapper = () => {
    const {is_authenticated} = useAuth()
    const location = useLocation()

    return (
        <div className="top-panels-wrapper">
            <Breadcrumbs />
            {is_authenticated && location.pathname.includes("audiences") && <BookingConstructor /> }
        </div>
    )
}



function App() {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>

            <Provider store={store}>

            <BrowserRouter basename="/AudiencesBMSTU">

                <div className="App">

                    <div className="wrapper">

                        <Header />

                        <div className={"content-wrapper"}>

                            <TopPanelWrapper />

                            <Routes>

                                <Route path="/" element={<Navigate to="/audiences" replace />} />

                                <Route path="/audiences" element={<AudiencesList />} />

                                <Route path="/audiences/:id" element={<AudiencesPage  />} />

                                <Route path="/booking" element={<BookingsPage />} />

                                <Route path="/booking/draft" element={<BookingPage />} />

                                <Route path="/profile" element={<ProfilePage />} />

                                <Route path="/login" element={<LoginPage />} />

                                <Route path="/register" element={<RegisterPage />} />

                            </Routes>

                        </div>

                    </div>

                </div>

            </BrowserRouter>

        </Provider>

        </QueryClientProvider>
    )
}

export default App
