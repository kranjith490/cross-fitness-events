import { useState } from 'react';
import { Box } from '@mui/material';
import logo from '../../Assets/images/beatcrossfit_logo.png';
/* import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuDrawer from '../MenuDrawer/MenuDrawer'; */
import { useNavigate } from 'react-router-dom';

const navOptions = ['Home'];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();

  //const [openDrawer, setOpenDrawer] = useState(false);

  /*  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }; */

  const handleNavgation = (index) => {
    setSelectedTab(index);
    if (index === 0) navigate('/');
  };

  /* const handleMenuClick = (index) => {
    handleNavgation(index);
    setOpenDrawer(!openDrawer);
  }; */

  return (
    <div
      style={{
        height: '10%',
        width: '100%',
        background: 'linear-gradient(135deg, #000000, #434343)',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: 1000,
        padding: '5px 0',
        paddingLeft: '15px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img width={'135px'} src={logo} alt="cross fit logo" />
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: '16px',
          fontWeight: 'bold',
          alignItems: 'center',
          zIndex: '100'
        }}
      >
        {navOptions.map((option, index) => {
          return (
            <Box
              key={`nav-option-${index}`}
              sx={{
                marginRight: '30px',
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
                /* display: 'block',
                '@media (max-width: 600px)': {
                  display: 'none' // Hide on mobile screens
                }, */
                color: selectedTab === index ? '#26BDBE' : '#9f9f9f',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2a8a8b'
                }
              }}
              onClick={() => {
                handleNavgation(index);
              }}
            >
              {option}
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
