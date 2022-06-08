import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/navbar";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import Videos from "./components/Videos/Videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";
const App = () => {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/profile' element={<ProfileContainer />} />
                        <Route path='/photos' element={<Photos />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/videos' element={<Videos />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
