import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    const { state } = useLocation()
    useEffect(() => {

        if (state) {
          
        }
        else {
            navigate('/')
        }
    }, [])
    return (
        <div>
            {
                state?.products?.map((val, idx) => {
                    return (
                        <div>
                            <img src={val.images[0]} alt="dfdfdf" />
                            <Link to="/productinfo" state={{ oneproduct: val }}><h3>{val.product_name}</h3></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products