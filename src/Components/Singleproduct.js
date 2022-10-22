import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Iframe from 'react-iframe'
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



    return (
        <div><h1>Singleproduct info</h1>
            <h1>{state.oneproduct.product_name}</h1>
            <h1>{state.oneproduct.model_no}</h1>
            <h1>{state.oneproduct.youtube}</h1>
            <iframe width="420" height="315" frameborder="0" allowfullscreen
                src={`https://www.youtube.com/embed/${state.oneproduct.youtube.split('=')[1]}`}>
            </iframe>

        </div >
    )
}
