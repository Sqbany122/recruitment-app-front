import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { stringify } from 'querystring';

type IState = {
    roles: string[];
};

type User = {
    email: string,
    fullName: string,
    roles: Array<string[]>
}

type Error = {
    errors: string[]
}

type GetAddUsersResponse = {
    data: User[];
};

const AddUsers: React.FC = () => {
    const [roles, setRoles] = useState<IState>({
        roles: []
    }) 

    const navigate = useNavigate()

    const definedRoles = [
        'author',
        'editor',
        'subscriber',
        'administrator'
    ]

    async function addUser(email: string, fullName: string, roles: Array<string>) {
        const data = await axios.post<GetAddUsersResponse>(
            process.env.REACT_APP_API_URL + "/add-user",
            { email: email, fullName: fullName, roles: roles }
        ).then(response => {
            navigate('/users-list')
        }).catch(error => {
            const errors = error.response.data.errors;
            console.log(errors)
        });
    
        return data;
    }

    const handleCheckboxChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        
        if(target.checked){
            setRoles({ roles: [...roles.roles, target.value]})
        } else {
            setRoles({ roles: roles.roles.filter(role => {
                return role !== target.value
            }) })
        }
    }

    const handleSubmitAddUser = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            fullName: { value: string };
        };

        addUser(
            target.email.value, 
            target.fullName.value, 
            roles.roles
        )
    }

    return(
        <div>
            <h1>Add users</h1>
            <form className="mt-4" onSubmit={handleSubmitAddUser}>
                <div className="form-group mb-3">
                    <input className="form-control w-25" type="text" name="email" placeholder="Email" />
                </div>
                <div className="form-group mb-3">
                    <input className="form-control w-25" type="text" name="fullName" placeholder="Full name" />
                </div>
                {definedRoles.map(role => (
                    <div className="form-group mb-2">
                        <input className="form-check-input" type="checkbox" name="roles" value={role} onChange={handleCheckboxChange} />
                        <label>{role.charAt(0).toUpperCase() + role.slice(1)}</label>
                    </div>
                ))}
                <button className="btn btn-primary mt-3" type="submit">Add user</button>
            </form>
        </div>
    )
}

export default AddUsers;