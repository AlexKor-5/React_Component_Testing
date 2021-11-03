import React, {useEffect, useState} from "react"
import "./asyncComp.css"

export const AsyncComp = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://61810e218bfae60017adfdcd.mockapi.io/users')
            .then(response => response.json())
            .then(json => setUsers(json))
            .catch(e => {
                console.log("error = ", e)
                setError(e)
            })
    }, [])

    const displayUsers = (users) => {
        if (!Array.isArray(users)) return false

        return users.map(item => {
            return <User key={item.id} name={item.name} avatar={item.avatar}/>
        })
    }

    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <div className={"users"}>
                {error && <p className={"error"}>Something has just gone wrong! ({error})</p>}
                {displayUsers(users)}
            </div>
        </>
    )
}

const User = ({name, avatar}) => {
    return (
        <div className={"user"}>
            <img src={avatar} alt="error"/>
            <p><b>{name}</b></p>
        </div>
    )
}