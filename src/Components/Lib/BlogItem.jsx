import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../../Confiq'
import { Container } from 'reactstrap'

function BlogItem() {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${apiUrl}/blogs/${id}`).then(res => setData(res.data))
  }, [])
 
  useEffect(()=>{
    axios.get(`${apiUrl}/users/${id}`).then(res=>{
      setData({...data, author : res.data.fullname})
    })
  },[data.id])
  return (
    <div>
   <Container>
   <div>
        {
          data.title ?
            <div className='my-4'>
              <div className="img1-wrapper">
                <img src={`${data.img_url}`} alt="img" />
              </div>
              <h1 className='text-center my-4'>{data.title}</h1>
              <p className='text-muted'>{data.author}</p>
              <p className='my-4'>{data.description}</p>
            </div>
            :
            <p>bos</p>
        }
      </div>
   </Container>
    </div>
  )
}

export default BlogItem