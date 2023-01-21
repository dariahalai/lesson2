import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () =>{
    return (
        <nav>
            <ul>
            <li><NavItem to='/'>Home</NavItem></li>
            <li><NavItem to='events' >Events</NavItem></li>
            <li><NavItem to='search' >Search</NavItem></li>
            </ul>
        </nav>
    )
};

const NavItem = styled(NavLink)`
color: black;
&.active{
    color: red;
}
`
export default Navigation;