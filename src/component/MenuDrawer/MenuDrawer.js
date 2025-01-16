import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
/* import ListItemIcon from '@mui/material/ListItemIcon';
 */ import ListItemText from '@mui/material/ListItemText';
/* import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'; */

export default function MenuDrawer(props) {
  const {
    openDrawer = false,
    toggleDrawer = () => {},
    handleMenuClick = () => {},
    navOptions = ['Home', 'About', 'Contact', 'Celebrity Traning']
  } = props;

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navOptions.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            style={{ borderBottom: '1px solid grey' }}
            onClick={() => handleMenuClick(index)}
          >
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
            <Divider> </Divider>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
