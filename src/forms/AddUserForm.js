import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddUserForm = props => {

    const initialFormState = {name: '', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value } = event.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = event => {
        const {onAddUser} =  props

        event.preventDefault()
        if(!user.name || !user.username) return
        onAddUser(user)
        setUser(initialFormState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="name">Name</label>
            <input
                onChange={handleInputChange}
                type="text"
                name="name" value={user.name}
            />
            <label id="username">Username</label>
            <input
                onChange={handleInputChange}
                type="text"
                name="username"
                value={user.username}
            />
            <button>Add new user</button>
        </form>
    )
}


AddUserForm.propTypes = {
    onAddUser: PropTypes.func.isRequired,
}

export default AddUserForm