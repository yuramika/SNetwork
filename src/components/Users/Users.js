import React, {useState} from "react";
import userPhoto from "../../assets/img/nophoto.jpg";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);


    return (

        <div>
            <div>
                {slicedPages.map(p => {
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
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                   props.unfollow(u.id)
                    }}>unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
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