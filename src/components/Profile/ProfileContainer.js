import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authtorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
   componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
   }

    render() {

        return (
            <Profile isOwner={!this.props.match.params.userId}
                     {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />



        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authtorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect

)
(ProfileContainer)