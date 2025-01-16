import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import logo from '../../Assets/images/beatcrossfit_logo.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

const navOptions = [];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleNavgation = (index) => {
    setSelectedTab(index);
  };

  const handleMenuClick = (index) => {
    handleNavgation(index);
    setOpenDrawer(!openDrawer);
  };

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
        <Box
          sx={{
            /* display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, */
            marginRight: '15px', // Show only on mobile and small tabs
            display: 'none'
          }}
        >
          <IconButton
            style={{ color: 'white' }}
            onClick={() => {
              toggleDrawer();
            }}
          >
            <MenuOpenIcon />{' '}
          </IconButton>
          <MenuDrawer
            navOptions={navOptions}
            openDrawer={openDrawer}
            toggleDrawer={toggleDrawer}
            handleMenuClick={handleMenuClick}
          />
        </Box>
        {navOptions.map((option, index) => {
          return (
            <Box
              key={`nav-option-${index}`}
              sx={{
                marginRight: '20px',
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
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
