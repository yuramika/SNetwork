import React from "react";
import userPhoto from "../../assets/img/nophoto.jpg";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/navbar";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p);
                    }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small === null ? userPhoto : u.photos.small} className={styles.userPhoto}/>
                        </NavLink>
                </div>
                <div>{u.followed ?
                    <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ },{withCredentials: true, headers: {"API-KEY": "16261bde-371d-4124-a4b4-7357cae3e186"}}).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }

                        })

                    }}>unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ },{withCredentials: true, headers: {"API-KEY": "16261bde-371d-4124-a4b4-7357cae3e186"}}).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }

                        })
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
    )
}

export default Users;