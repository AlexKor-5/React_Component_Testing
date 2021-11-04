import React, {useState} from "react"
import "./asyncComp.css"
import {fetchUsers} from "./fetchUsers";

export const url = "https://61810e218bfae60017adfdcd.mockapi.io/users";

export const AsyncComp = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    const handleButtonClick = () => {
        fetchUsers(url)
            .then(data => setUsers(data))
            .catch(e => setError(e))
    }

    const displayUsers = (users) => {
        if (!Array.isArray(users)) return false

        return users.map(item => {
            return <User key={item.id} name={item.name} avatar={item.avatar}/>
        })
    }

    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <button onClick={handleButtonClick}>Obtain Users</button>
            <div className={"users"}>
                {error && <p className={"error"}>Something has just gone wrong! ({error})</p>}
                {!error && displayUsers(users)}
            </div>
        </>
    )
}

const User = ({name, avatar}) => {
    return (
        <div className={"user"}>
            <img src={avatar} alt="imageerror"/>
            <p><b>{name}</b></p>
        </div>
    )
}