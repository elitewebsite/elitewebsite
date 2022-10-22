import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Singleproduct = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {

        if (state) {
           
        }
        else {
            navigate('/')
        }
    }, [state])

    console.log(state?.oneproduct)
    return (
        <div><h1>Singleproduct info</h1>
        <h1>{state.oneproduct.product_name}</h1>
        <h1>{state.oneproduct.model_no}</h1>
        
        </div>
    )
}
