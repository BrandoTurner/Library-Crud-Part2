import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/books">Items</NavLink>
            <NavLink to="/create-books">Create Items</NavLink>
        </nav>
    )
}

export default Nav