import React from 'react'

export default function Alert(props) {
    const capitlize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
            <strong>{capitlize(props.alertText.type)}</strong> {props.alertText.msg};
        </div>
    )
}
