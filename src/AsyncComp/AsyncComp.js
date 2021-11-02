import React, {useEffect, useState} from "react"

export const AsyncComp = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://61810e218bfae60017adfdcd.mockapi.io/users')
            .then(response => response.json())
            .then(json => console.log(JSON.stringify(json, undefined, 2)))
    }, [])


    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </>
    )
}