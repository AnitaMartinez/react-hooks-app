import React from 'react'
import PropTypes from 'prop-types'

const UserTable = props => {
    const { users, onDeleteUser, onEditUser } = props

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                    <button
                        className="button muted-button"
                        onClick={() => onEditUser(user)}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDeleteUser(user)}
                        className="button muted-button"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={3}>No users</td>
                </tr>
            )}
    </tbody>
        </table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    onEditUser: PropTypes.func.isRequired,
}

export default UserTable