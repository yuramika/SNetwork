import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Commons/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/nophoto.jpg"
import ProfileDataForm from "./ProfileDataForm";




const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


  return (
        <div className={classes.content}> MAIN CONTENT
            <img src="https://papik.pro/uploads/posts/2021-09/1630753300_25-papik-pro-p-korgi-anime-risunok-29.jpg"/>
            <div className={classes.DescriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {editMode ? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=> {setEditMode(true)}}/>}


            </div>
        </div>
        )

}
export default ProfileInfo;

const ProfileData = (props) => {
     return (
         <div>
             {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div> }
             <div><b>Full name:</b>{props.profile.fullName}</div>
             <div><b>Looking for a job:</b> {props.profile.loockingForAJob ?  "yes" :  "no"}</div>
             <div>
                 <b>My prof skill:</b>{props.profile.lookingForAJobDescription}
             </div>
             <div><b>About me:</b>{props.profile.aboutMe}</div>

             <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
         })}
         </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle} : {contactValue}
        </div>
    )
}




