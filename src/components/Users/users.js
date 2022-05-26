import React from "react";
import styles from "./users.module.css"

let users = (props) => {
    if (props.users.length === 0) {
props.setUsers([{
    id: 1,
    photoUrl: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/maax/products/651978/shirt-1530794391-e5d4ac85c3f28f6d78808a24ac28d86b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
    followed: true,
    fullName: 'Yura',
    status: 'react',
    location: {city: 'SPB', country: 'Russia'}
},
    {
        id: 2,
        photoUrl: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/maax/products/651978/shirt-1530794391-e5d4ac85c3f28f6d78808a24ac28d86b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
        followed: false,
        fullName: 'Valera',
        status: 'lol',
        location: {city: 'MSK', country: 'Russia'}
    },
    {
        id: 3,
        photoUrl: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/maax/products/651978/shirt-1530794391-e5d4ac85c3f28f6d78808a24ac28d86b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
        followed: true,
        fullName: 'Andew',
        status: 'gl',
        location: {city: 'USA', country: 'New York'}
    }])}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                     <img src={u.photoUrl} className={styles.userPhoto}/>
                   </div>
                   <div>{u.followed ?
                       <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                       : <button onClick={() => {props.follow(u.id)}}>follow</button>}</div>
               </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default users;