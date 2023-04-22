import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import jarilogo from 'public/jarilogo.png'
import Image from 'next/image';
// import styles from '../styles/globals.module.css';




const pages = ['Home', 'Products', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   //  reset the state variables to null.
  // This is used to hide the menu when the user clicks outside the menu
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 

  // When the user clicks the corresponding button, the 
  // state variable is set to the clicked button's event target. 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color:'#D4AF37'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#D4AF37', 
              textDecoration: 'none',
              backgroundColor: '#D4AF37'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image src={jarilogo} alt="Jari Logo" width={150} height={120} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
    
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
              }
              
  export default ResponsiveAppBar;
             
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// // import Logo from "./Logo";
// import jarilogo from '/public/jarilogo.png'
// import NavItem from "./NavItem";

// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "About Us", href: "/about" },
//   { text: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [navActive, setNavActive] = useState(null);
//   const [activeIdx, setActiveIdx] = useState(-1);

//   return (
//     <header>
//       <nav className={`nav`}>
//         <Link href={"/"}>
        
//         <Image
//       src={jarilogo}
//       alt="Picture of the author"
//       width="350px"
//       height="300px"
//     />
         
//         </Link>
//         <div
//           onClick={() => setNavActive(!navActive)}
//           className={`nav__menu-bar`}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`nav__menu ${navActive ? "active" : ""}`}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(false);
//               }}
//               key={menu.text}
//             >
//               <NavItem active={activeIdx === idx} {...menu} />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

