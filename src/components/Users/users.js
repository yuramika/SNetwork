import React from "react";
import userPhoto from "../../assets/img/nophoto.jpg";
import styles from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
 constructor(props) {
     super(props);
 }
    componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
}

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                     <img src={u.photos.small === null ? userPhoto : u.photos.small} className={styles.userPhoto}/>
                   </div>
                   <div>{u.followed ?
                       <button onClick={() => {
                           this.props.unfollow(u.id)
                       }}>unfollow</button>
                       : <button onClick={() => {
                           this.props.follow(u.id)
                       }}>follow</button>}</div>
               </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users