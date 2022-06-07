import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import Videos from "./components/Videos/Videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { updateNewPostText } from "./Redux/state";
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
