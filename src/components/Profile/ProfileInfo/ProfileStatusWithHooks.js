import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

   const activateEditMode = () => {
       setEditMode(true)
   }
   const deactivateEditMode = () => {
       setEditMode(false)
       props.updateStatus(status)
   }
  const  onStatusChange = (e) => {
      setStatus(e.currentTarget.value)

  }
    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "добавить статус"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>

    )
}

export default ProfileStatusWithHooks;
