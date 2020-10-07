import React from 'react'
import { Link } from 'react-router-dom'
// import { Breadcrumb } from 'react-bootstrap'
import './breadcrumbs.scss'

const Breadcrumbs = ({ id, category, ...props }) => {
    return (
        <ul className="breadcrumbs__container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Category</Link></li>
            <li>{category}</li>
        </ul>
    )
}

export default Breadcrumbs
