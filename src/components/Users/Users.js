import React from "react";
import userPhoto from "../../assets/img/nophoto.jpg";
import styles from "./users.module.css";

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
                return <span onClick={() => { props.onPageChanged(p); }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small === null ? userPhoto : u.photos.small} className={styles.userPhoto} />
                    </div>
                    <div>{u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
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