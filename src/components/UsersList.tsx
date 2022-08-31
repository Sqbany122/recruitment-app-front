import React, { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
    email: string,
    full_name: string,
    roles: Array<Role>
}

type Role = {
    name: string
}

const UsersList: React.FC  = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        axios.get<User[]>(
            process.env.REACT_APP_API_URL + "/users"
        ).then(response => {
            setUsers(response.data)
        });
    },[])

    return(
        <div>
            <h1 className="mb-4">Users list</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => (
                        <tr>
                            <th>{key + 1}</th>
                            <th>{user.full_name}</th>
                            <th>{user.email}</th>
                            <th>
                                {user.roles.map(role => (
                                    <span className="role rounded">{role.name}</span>
                                ))}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;