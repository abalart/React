
import { color } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../Nav/Nav.css'

export const Nav = ({ categories }) => {
    return (
        <nav className='nav main container'>
            {categories.map((category) => {
                return <NavLink   key={category.id} to={category.route} style={styles.links}>{category.title}</NavLink>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
        textDecoration: 'none',
        color:'#f44336'
    }
}