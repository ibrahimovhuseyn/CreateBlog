import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import axios from 'axios'
import { apiUrl } from '../../Confiq'
import { Container, Row, Spinner } from 'reactstrap'
import BlogCard from '../Lib/BlogCard'
import Header from '../Header/Header'

function Home() {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    axios.get(`${apiUrl}/blogs`).then(res => {
      setList(res.data)
      setIsLoading(false)
    })
  }, [])


  return (
    <div>
      <Header/>
      <div className="py-4">
        {
          !isLoading ?
            <Container>
              <Row>
                {
                  list.map(item => (
                    <div
                      key={item.id}
                      className='col-md-12'
                    >
                      <BlogCard
                      item = {item}
                        blog_id={item.id}
                        title={item.title}
                        description={item.description}
                        img_url={item.img_url}
                        user_id={item.user_id}
                      />

                    </div>
                  ))
                }
              </Row>
            </Container>
            :
            <div className="text-center">
              <Spinner>
                Loading...
              </Spinner>
            </div>
        }
      </div>


    </div>
  )
}

export default Home