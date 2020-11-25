import React, {useState} from 'react'

const Input = ({submit}) => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [address, setAddress]=useState("")
    const [birthday, setBirthday]=useState("")
    const [comment, setComment]=useState("")

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            <br />
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <br />
            <button onClick={() => {submit(name, email, address, birthday, comment)} }>送信</button>
        </>
    )
}

export default Input
