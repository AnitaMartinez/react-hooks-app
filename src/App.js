import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const usersData = [
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Craig', username: 'siliconeidolon' },
  { id: 3, name: 'Ben', username: 'benisphere' },
]

const App = () => {

  const [users, setUsers ] = useState(usersData)

  // When editing a user
  const initialFormState = { id: null, name: '', username: '' }
  const [editingMode, setEditingMode] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = user => {
    const updatedUsers = users.filter(({id}) => id !== user.id)
    setUsers(updatedUsers)
  }

  const editRow = user => {
    setEditingMode(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (idOfUserToUpdate, userToUpdate) => {
    setEditingMode(false)
    const updatedUsers = users.map((user) => user.id === idOfUserToUpdate ? userToUpdate : user)
    setUsers(updatedUsers)
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editingMode ? (
              <EditUserForm
                editingMode={editingMode}
                setEditing={setEditingMode}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            ) : (
              <div>
              <h2>Add user</h2>
              <AddUserForm onAddUser={addUser} editingMode={editingMode}  />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            onDeleteUser={deleteUser}
            onEditUser={editRow}
          />
        </div>
      </div>
    </div>
  )
}

export default App