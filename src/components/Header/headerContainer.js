import React from "react";
import Header from "./header";
import {logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {


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

export default connect(mapStateToProps, {logout}) (HeaderContainer);