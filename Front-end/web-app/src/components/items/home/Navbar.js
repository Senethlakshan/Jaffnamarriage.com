import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import brandlogo from '../../../assests/home/b1.jpeg';
import ResponsiveDialog from '../alert';
import axiosInstance from '../../../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// const login = localStorage.getItem('login');

const login = localStorage.getItem('login');


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLogout = () => {
    setAnchorEl(null);
    // Handle logout logic
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    // Optionally, you can perform any additional logic after closing the dialog
    // For example, you can navigate to another page or execute specific actions
  };

  const logout = () => {

    // Make a POST request to the logout endpoint
    axiosInstance.get('/logout')
      .then(response => {
        // Handle the response
        console.log(response.data); // Assuming the response contains a 'message' field
        // Handle logout logic
        toast.success('Logout successful');
        localStorage.removeItem('login');
        localStorage.removeItem('api_token');
        handleCloseDialog();
        window.location.href = '/';
      })
      .catch(error => {
        // Handle the error
        console.error(error);

        // Perform any error handling or display error messages to the user
      });


  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <nav className="maxFullDeviveWidth bg-gray-900" >
      <div className=""  style={{ paddingLeft: '120px', paddingRight:'30px'}}>
        <div className="flex items-center justify-between h-16 " >
          <div className=" items-center" style={{ flex: 1}}>
            <Link
              to="/"
              className="text-yellow-600 text-lg font-bold"
            >
              <img src={brandlogo} alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex" style={{ flex: 1}}>
            <Link
              to="/browse"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                Explore
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link
              to="/about"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                About
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link
              to="/contact"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>

          <div className="md:hidden" >
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          <div className="hidden md:flex" >
            {login === 'true' ? (

              <div className="logoutAndUser">
                <ResponsiveDialog
                  open={dialogOpen}
                  onClose={handleCloseDialog}
                  contentText="Are you sure you want to logout? Logging out will end your current session."
                  contentTitle="Logout Confirmation"
                  actionButtonLabel="Logout"
                  onActionButtonClick={logout}
                />
                <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 35, height: 35 }} >  <div className="userPofileImg"><img src="https://randomuser.me/api/portraits/med/men/23.jpg" alt="user profile" /></div></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
              </div>

            ) : (
              <>
                <Link
                  to="/login"
                  className="ml-4 text-xl bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-1 px-4 rounded transition-all hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-600 transform-gpu hover:scale-110"
                  style={{ fontFamily: 'Berkshire Swash, cursive' }}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="ml-4 text-xl bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-1 px-4 rounded transition-all hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-600 transform-gpu hover:scale-110"
                  style={{ fontFamily: 'Berkshire Swash, cursive' }}
                >
                  Register
                </Link>
              </>
            )}



            {/* additinal button style  */}

            {/* <Link to="/login">
              <div class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-4 border-yellow-800 rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-yellow-600 to-yellow-800 group-hover:translate-x-0 ease">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white text-xl transition-all duration-300 transform group-hover:translate-x-full ease"
                  style={{ fontFamily: 'Berkshire Swash, cursive' }}
                >Login</span>
                <span class="relative invisible">Button Text</span>
              </div>
            </Link>
            <Link to="/register">
              <div class=" ml-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-4 border-yellow-800 rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-yellow-600 to-yellow-800 group-hover:translate-x-0 ease">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white text-xl transition-all duration-300 transform group-hover:translate-x-full ease"
                  style={{ fontFamily: 'Berkshire Swash, cursive' }}
                >Register</span>
                <span class="relative invisible">Button Text</span>
              </div>
            </Link> */}



          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-2 py-2 px-4 bg-gray-700">

              <Link
                to="/browse"
                className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
                style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
              >
                <span className="relative">
                  Explore
                </span>
              </Link>
              <Link
                to="/about"
                className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
                style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
              >
                <span className="relative">
                  About
                </span>
              </Link>
              <Link
                to="/contact"
                className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
                style={{ fontFamily: 'Berkshire Swash, cursive', marginRight: '10px' }}
              >
                <span className="relative">
                  Contact
                </span>
              </Link>

              {/* logo and register button responsive */}

              {login === 'true' ? (

                <div className="logoutAndUserSmall">
                  <button
                    className="ml-4 text-xl bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-1 px-4 rounded transition-all hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-600 transform-gpu hover:scale-110"
                    style={{ fontFamily: 'Berkshire Swash, cursive' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                  <ResponsiveDialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    contentText="Are you sure you want to logout? Logging out will end your current session."
                    contentTitle="Logout Confirmation"
                    actionButtonLabel="Logout"
                    onActionButtonClick={logout}
                  />

                  <div className="userPofileImg">

                    <img src="https://randomuser.me/api/portraits/med/men/23.jpg" alt="user profile" />
                  </div>
                </div>

              ) : (
                <>
                  <Link to="/login" className="mt-2 text-xl bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-1 px-4 rounded transition-all hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-600 transform-gpu hover:scale-110 text-white mb-2"
                    style={{ fontFamily: 'Berkshire Swash, cursive' }}
                  >

                    Login
                  </Link>
                  <Link to="/register" className=" text-xl bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-1 px-4 rounded transition-all hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-600 transform-gpu hover:scale-110 text-white mb-2"
                    style={{ fontFamily: 'Berkshire Swash, cursive' }}
                  >
                    Register
                  </Link>
                </>
              )}

            </div>
          </div>
        )}
      </div>
    </nav>

  );
};

export default Navbar;
