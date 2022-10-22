import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Series = () => {
  const { mainlight } = useParams()

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://elitebackend.vercel.app/admincrud/getall?mainlight=${mainlight}`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [mainlight])

  return (
    <>
      <div>
        <h1> {mainlight} </h1>
        <div className="d-flex flex-row">

          {
            data?.map((value, index) => {
              return (
                <div className="">
                  <img src={value.url} alt="Iamge" className='img-fluid' />
                  <h3>
                    <Link to="/products" state={{ products: value.products }}>
                      {value.series}
                    </Link>
                  </h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Series