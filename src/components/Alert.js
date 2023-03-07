import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // iska matlab jab props.alert evaluate hogi ie true hogi tab hi aage vala code run hoga 
    // agar props.alert null hoga toh voh false hoga
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
    </div>
  )
}

export default Alert