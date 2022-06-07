import React from "react";
import Header from "./header";
import * as axios from "axios";
import state from "../../Redux/state";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
         if (response.data.resultCode === 0) {
             debugger;
             let {email,id,login} = response.data.data;
             this.props.setAuthUserData(email,id,login);
         }
        })
    }

    render () {
    return ( <Header {...this.props}/>)
}

}
const mapStateToProps = (state) => {
    return ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);