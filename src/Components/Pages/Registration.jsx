import React, { useState } from 'react'
import { Form, Input, Label } from 'reactstrap'
import { errorText } from '../../Utils/errorContent'
import { apiUrl, toast_config } from '../../Confiq'
import { toast } from 'react-toastify'
import axios from 'axios'


function Registration() {

    const [registerErrors, setRegisterErrors] = useState({})

    function RegisterValidate(data) {
        const errors = {
            fullname: "",
            email: "",
            nickname: "",
            username: ""
        }
        if (!data.email.trim()) {
            errors.email = errorText.required("Email")
        }
        if (!data.fullname) {
            errors.fullname = errorText.required("Fullname")
        }
        if (!data.nickname) {
            errors.nickname = errorText.required("Nickname")
        }
        if (!data.username) {
            errors.username = errorText.required("username")
        }
        return errors
    }

    function Register(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }

        const errors = RegisterValidate(data)
        setRegisterErrors(errors)

        if (Object.values(errors).filter(string => string).length) {
            toast.error("Please filled in the boxes", toast_config)
            return
        }
        axios.post(`${apiUrl}.users`,{
            fullname : data.fullname,
            email: data.email,
            nickname: data.nickname,
            username:data.username
        }).then(res=>{
            toast.success("Registration complete", toast_config)
            e.target.reset()
        })
    }
    return (
        <div>
            <Form
                onSubmit={e => Register(e)}
            >
                <div className='my-2'>
                    <Label htmlFor='fullname'><b>Enter your fullname</b></Label>
                    <Input
                        name='fullname'
                        type='text'
                        id='fullname'
                        className='w-50'
                        placeholder='Enter your fullname'
                    />
                    {
                        registerErrors.fullname &&
                        <p className='mt-2 text-danger fw-bold'>{registerErrors.fullname}</p>
                    }
                </div>
                <div className='my-4'>
                    <Label htmlFor='username'><b>Enter your username</b></Label>
                    <Input
                        name='username'
                        type='text'
                        id='username'
                        className='w-50'
                        placeholder='Enter your username'
                    />
                    {
                        registerErrors.username &&
                        <p className='mt-2 text-danger fw-bold'>{registerErrors.username}</p>
                    }
                </div>

                <div className='my-2'>
                    <Label htmlFor='email'><b>Enter your email</b></Label>
                    <Input
                        name='email'
                        type='email'
                        id='email'
                        className='w-50'
                        placeholder='Enter your email'
                        
                    />
                    {
                        registerErrors.email &&
                        <p className='mt-2 text-danger fw-bold'>{registerErrors.email}</p>
                    }
                    <div/>
                    <div className='mt-4'>
                        <Label htmlFor='nickname'><b>Enter your nickname</b></Label>
                        <Input
                            name='nickname'
                            type='text'
                            id='nickname'
                            className='w-50'
                            placeholder='Enter your nickname'
                        />
                        {
                        registerErrors.nickname &&
                        <p className='mt-2 text-danger fw-bold'>{registerErrors.nickname}</p>
                    }
                    </div>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'
                >Register</button>

            </Form>

        </div>
    )
}

export default Registration