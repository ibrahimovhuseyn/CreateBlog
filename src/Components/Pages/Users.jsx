import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import { Alert, Table } from 'reactstrap'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${apiUrl}/users`).then(res => setUsers(res.data))
  }, [])
  console.log(users);
  return (
    <div>
      {
        !users.length?
        <Alert>Məlumat yoxdur</Alert>
        :
        <>
        <Table hover>
      <thead>
      <th>No</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Nickname</th>
      </thead>
          <tbody>
            


            {
              users.map((item, index)=>(
                
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.nickname}</td>
                </tr>
              ))
            }
          </tbody>

        </Table>
        </>
      }
    </div>
  )
}

export default Users