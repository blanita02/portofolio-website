import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';
import { useStyles } from './styles';

//TODO: Implement NavDrawer properly

const NavDrawer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawerContainer}
      anchor={'top'}
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <Box>
        <Button
          className={classes.closeDrawerButtonContainer}
          onClick={() => setIsModalOpen(false)}
        >
          X
        </Button>
      </Box>
    </Drawer>
  );
};
export default NavDrawer;
