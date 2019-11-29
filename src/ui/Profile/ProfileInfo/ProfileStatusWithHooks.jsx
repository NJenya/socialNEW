import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [ editMode, setEditMode ] = useState(false)
  let [ status, setStatus ] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return <div>
    <div>
      {!editMode &&
      <div>
        <span onClick={activateEditMode}>{status ||' ---------'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input
          autoFocus={true}
          onChange={onStatusChange}
          onBlur={deactivateEditMode}
          value={status}
        />
      </div>
      }
    </div>
  </div>
}

export default ProfileStatusWithHooks;
