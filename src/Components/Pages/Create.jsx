import React, { useEffect, useState } from 'react'
import {
    Container,
    Form,
    Input,
    Label,
    Row
} from 'reactstrap'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl, toast_config } from '../../Confiq'
import { errorText } from '../../Utils/errorContent'
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2";
import { toast } from 'react-toastify'

function Create() {
    const [userList, setUserList] = useState([])
    const [validationErrors, setValidationErrors] = useState({})
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        axios.get(`${apiUrl}/users`).then(res => setUserList(res.data))
    }, [])

    function validate(data) {
        const errors = {
            user_id: "",
            title: "",
            img_url: "",
            description: ""
        }
        if (!data.user_id) {
            errors.user_id = errorText.required("Author")
        }
        if (!data.title) {
            errors.title = errorText.required("Title")
        }
        if (!data.img_url) {
            errors.img_url = errorText.required("Image url")
        }
        if (!data.description) {
            errors.description = errorText.required("Description")
        }

        return errors

    }

    function handleCreate(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }

        const errors = validate(data)
        setValidationErrors(errors)

        if (Object.values(errors).filter(string => string).length) {
            Swal.fire('Please fill in the boxes')
            // toast.error("Please fill in the boxes", toast_config)
            return
        }


        axios.post(`${apiUrl}/blogs`, {
            title: data.title,
            description: data.description,
            img_url: data.img_url,
            user_id: Number(data.user_id)
        }).then(res => {
            toast.success("Uğurlu əməliyyat", toast_config)
            e.target.reset()
            setSelectedValue("")

        })

    }



    return (
        <div className="my-5">
            <Container>
                <Row>
                    <div className="col-md-6">
                        <div>
                            <Form onSubmit={e => handleCreate(e)}>
                                <div className="form-group mb-4">
                                    <Label htmlFor='author'>Author</Label>
                                    <Select
                                        value={selectedValue}
                                        onChange={selectedOption => setSelectedValue(selectedOption) }
                                        isClearable
                                        name='user_id'
                                        id='author'
                                        options={userList}
                                        getOptionValue={option => option.id}
                                        getOptionLabel={option => option.fullname}
                                        className={`${validationErrors.user_id ? "border border-danger" : ""}`}
                                    />
                                    {
                                        validationErrors.user_id &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.user_id} </p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='title'>Title</Label>
                                    <Input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter title'
                                        className={`${validationErrors.title ? "border border-danger" : ""}`}
                                    />
                                    {
                                        validationErrors.title &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.title} </p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='img_url'>Image url</Label>
                                    <Input
                                        type='text'
                                        id='img_url'
                                        name='img_url'
                                        placeholder='Enter image url'
                                        className={`${validationErrors.img_url ? "border border-danger" : ""}`}
                                    />
                                    {
                                        validationErrors.img_url &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.img_url} </p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='description'>Description</Label>
                                    <Input
                                        className={`${validationErrors.description ? "border border-danger" : ""}`}
                                        type='textarea'
                                        id='description'
                                        name='description'
                                        placeholder='Enter blog description'
                                        rows={5}
                                    />
                                    {
                                        validationErrors.description &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.description} </p>
                                    }
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Create