import { useState, useEffect } from 'react'
import { getInfo } from './helpers/getInfo'
import UsersList from './components/UsersList'
import UsersInfo from './components/UsersInfo'
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [visible, setInvisible] = useState(false)

  useEffect(() => {
    getInfo().then(val => setUsers(val))
    
  }, [])

  const showInfo = (id) => {
    const filterUser = users.filter( user => {
      if(id === user.id){
        return [{
          name: user.name,
          email: user.email,
          phone: user.phone
        }]
      }
      return false
    })
    setUsers(filterUser)
    setInvisible(true)
  }

  return (
    <div className='container'>
      <div className='container-1'>
        <UsersList users={users} showInfo={showInfo} />
      </div>
      <div className='container-2'>
        <UsersInfo users={users} visible={visible} />
      </div>
    </div>
  );
}

export default App;
