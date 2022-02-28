import React,{useState,useEffect} from 'react'
import { NavBarContainer,NavBar,NavBarLogo,NavBarMenu,NavBarIcon,NavBarLink,NavBarButton } from './NavBarElements'
import { FaBity,FaBuffer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBars = () => {
    const[click,setClick]=useState(false);
    const[button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const ShowButton=()=>{
        if(window.innerWidth<=950){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() => {
        ShowButton()
    }, [])
    window.addEventListener('resize', ShowButton)
    const links=[
        {
            title:'home',
            link:'/',
        },
        {
            title:'pricing',
            link:'pricing',
        },
        {
            title:'projects',
            link:'projects',
        },
        {
            title:'contact',
            link:'contact',
        },
    ];



  return (
    <NavBar>
        <NavBarContainer>

            <NavBarLogo smooth={true} duration={1000}>
                <h2>
                a
                <nav>
            <FaBity/>
            </nav>
            d
            </h2>
            </NavBarLogo>

            <NavBarIcon  onClick={handleClick}>
            {click?<FaBity/> : <FaBuffer/>}
            </NavBarIcon>

            <NavBarMenu onClick={handleClick} click={click}>
{links.map((item,index)=>(
    <NavBarLink key={index} smooth={true} duration={2000} onClick={handleClick} to={item.link} >{item.title}</NavBarLink>
))}
            </NavBarMenu>

           
        </NavBarContainer>
    </NavBar>
  )
}

export default NavBars