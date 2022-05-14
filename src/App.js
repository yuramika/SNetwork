import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import Videos from "./components/Videos/Videos";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./Redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.appState.messagePage.dialogsData} MessageData={props.appState.messagePage.MessageData}/>}/>
                        <Route path='/profile' element={<Profile PostData={props.appState.profilePage.PostData} addPost={props.addPost} newTextPost={props.appState.profilePage.newTextPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/photos' element={<Photos/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/videos' element={<Videos/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
