import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import brandlogo from '../../../assests/home/b1.png';
import ResponsiveDialog from '../alert';
import axiosInstance from '../../../api';
import { userImageBASE_URL } from '../../../api';
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
import profileImageNofemale from "../../../assests/home/profileImageNofemale.jpg";
import profileImageNomale from "../../../assests/home/profileImageNomale.jpg";
import { useNavigate } from 'react-router-dom';
// const login = localStorage.getItem('login');



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [profileUserId, setprofileUserId] = useState('');
  const [profileUserImage, setprofileUserImage] = useState('');
  const [gender, setprofileUsergender] = useState('');
  const [imageLoading, setImageLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isProfileIconClicked, setIsProfileIconClicked] = useState(true);
  const [login, setLogin] = useState();
  const navigate = useNavigate();
  const [fullDeviceWidth, setFullDeviceWidth] = useState(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setFullDeviceWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    if (fullDeviceWidth && fullDeviceWidth > 720) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

  }, [fullDeviceWidth]);




  useEffect(() => {
    // Check if the user is logged in (e.g., in your main entry point or a route component)
    const isLoggedIn = localStorage.getItem('api_token');

    if (isLoggedIn) {
      setLogin(true);
      // User is logged in, perform any necessary actions
    } else {
      // User is not logged in, redirect to the login page or show a login prompt
      setLogin(false);
    }
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  const handleLogout = () => {
    setAnchorEl(null);
    // Handle logout logic
    setDialogOpen(true);
  };

  useEffect(() => {
    axiosInstance.get('/validToken')
      .then(response => {

        const data = response.data; // Extract the JSON response
        console.log(data);
        // Access the values one by one
        const activeUserWithImagesAndDetails = data.activeUserWithImagesAndDetails;
        const userId = activeUserWithImagesAndDetails.user_id;
        const profilePic = activeUserWithImagesAndDetails.profilePic;
        const gender = activeUserWithImagesAndDetails.details.gender;
        setprofileUsergender(gender);
        setprofileUserImage(profilePic);
        setprofileUserId(userId);
        setImageLoading(false);
      })
      .catch(error => {
        // localStorage.removeItem('login');
        // localStorage.removeItem('api_token');
        // navigate(`/login`);
        console.error('Error:', error);
      });

  }, []);

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
    setIsProfileIconClicked(false);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsProfileIconClicked(true);
    setAnchorEl(null);
  };

  return (



    <nav className={isMobile && isOpen ? 'navbar gradiantLightGoldBg fullScreenNavForMobile' : 'navbar gradiantLightGoldBg '}>

      <div className="navbar-container">

        <div>
          <Link to="/">
            <img className="navLogo" src={brandlogo} alt="logo" />
          </Link>
        </div>

        <div className='mobileNavItem'>
          {isOpen ? (<FaTimes className="navIcon" onClick={toggleMenu} />) : (<FaBars className="navIcon" onClick={toggleMenu} />)}
        </div>

        <div className='navLinks notMobileNavItem'>

          <Link
            to="/browse"
            className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
            style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
          >
            <span className="relative p-3">
              Explore
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </Link>
          <Link
            to="/about"
            className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
            style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
          >
            <span className="relative p-3">
              About
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </Link>
          <Link
            to="/contact"
            className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
            style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
          >
            <span className="relative p-3">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </Link>

        </div>

        {login === true ? (
          <div className="logoutAndUser notMobileNavItem" >
            <ResponsiveDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              contentText="Are you sure you want to logout? Logging out will end your current session."
              contentTitle="Logout Confirmation"
              actionButtonLabel="Logout"
              onActionButtonClick={logout}
              className="padding50"
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
                <Avatar sx={{ width: 36, height: 36 }} className={!isProfileIconClicked ? 'clickedIconButton' : ''}>
                  <div className="userProfileImage " >
                    {imageLoading && (
                      <div className="imageLoadingPlaceholder">
                        <FaUser className="userIcon" />
                      </div>
                    )}
                    <img
                      src={profileUserImage ? userImageBASE_URL + profileUserImage : gender == 'male'
                        ? profileImageNomale
                        : profileImageNofemale}
                      alt="User Profile"
                      style={{ display: imageLoading ? 'none' : 'block' }}

                    />
                  </div>
                </Avatar>
                <div className="onlineStatusIndicator"></div>
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
              <Link to={"/userProfile/" + profileUserId} ><MenuItem onClick={handleClose}>
                <Avatar sx={{ width: 36, height: 36 }} className={!isProfileIconClicked ? 'clickedIconButton' : ''}>
                  <div className="userProfileImage " >
                    {imageLoading && (
                      <div className="imageLoadingPlaceholder">
                        <FaUser className="userIcon" />
                      </div>
                    )}
                    <img
                      src={profileUserImage ? userImageBASE_URL + profileUserImage : gender == 'male'
                        ? profileImageNomale
                        : profileImageNofemale}
                      alt="User Profile"
                      style={{ display: imageLoading ? 'none' : 'block' }}

                    />
                  </div>
                </Avatar> Profile
              </MenuItem></Link>

              <Divider />


              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="navBtns notMobileNavItem">
            <Link
              to="/login"
              className="navBtn"

            >
              Login
            </Link>

            <Link
              to="/register"
              className="navBtn"
            >
              Register
            </Link>
          </div>
        )}

      </div>

      {isMobile && isOpen ? (
        <div className='navMobileItems'>

          <div className='navLinksForMobile'>

            <Link
              to="/browse"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                Explore
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link
              to="/about"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                About
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link
              to="/contact"
              className="ml-4 text-xl text-yellow-600 hover:text-yellow-500 relative group"
              style={{ fontFamily: 'Dancing Script, cursive', marginRight: '10px' }}
            >
              <span className="relative p-3">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>

          </div>

          {login === true ? (
            <div className="logoutAndUser" >
              <ResponsiveDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                contentText="Are you sure you want to logout? Logging out will end your current session."
                contentTitle="Logout Confirmation"
                actionButtonLabel="Logout"
                onActionButtonClick={logout}
                className="padding50"
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
                  <Avatar sx={{ width: 36, height: 36 }} className={!isProfileIconClicked ? 'clickedIconButton' : ''}>
                    <div className="userProfileImage " >
                      {imageLoading && (
                        <div className="imageLoadingPlaceholder">
                          <FaUser className="userIcon" />
                        </div>
                      )}
                      <img
                        src={profileUserImage ? userImageBASE_URL + profileUserImage : gender == 'male'
                          ? profileImageNomale
                          : profileImageNofemale}
                        alt="User Profile"
                        style={{ display: imageLoading ? 'none' : 'block' }}

                      />
                    </div>
                  </Avatar>
                  <div className="onlineStatusIndicator"></div>
                </IconButton>
              </Tooltip>
              <Menu className="menuForMobile"
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
                <Link to={"/userProfile/" + profileUserId} ><MenuItem onClick={handleClose}>
                  <Avatar sx={{ width: 36, height: 36 }} className={!isProfileIconClicked ? 'clickedIconButton' : ''}>
                    <div className="userProfileImage " >
                      {imageLoading && (
                        <div className="imageLoadingPlaceholder">
                          <FaUser className="userIcon" />
                        </div>
                      )}
                      <img
                        src={profileUserImage ? userImageBASE_URL + profileUserImage : gender == 'male'
                          ? profileImageNomale
                          : profileImageNofemale}
                        alt="User Profile"
                        style={{ display: imageLoading ? 'none' : 'block' }}

                      />
                    </div>
                  </Avatar> Profile
                </MenuItem></Link>

                <Divider />


                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="navBtns">
              <Link
                to="/login"
                className="navBtn"

              >
                Login
              </Link>

              <Link
                to="/register"
                className="navBtn"
              >
                Register
              </Link>
            </div>
          )}


        </div>
      ) : (
        <></>
      )}

    </nav>
  );
};

export default Navbar;
