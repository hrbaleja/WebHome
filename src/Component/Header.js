import React from 'react';
import { AppBar, Toolbar, Typography,IconButton, Box, useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Menu, Home, Work, Build, ShoppingBasket, Info, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'Services', icon: <Work />, path: '/services' },
  { text: 'Solutions', icon: <Build />, path: '/solutions' },
  { text: 'Products', icon: <ShoppingBasket />, path: '/products' },
  { text: 'About Us', icon: <Info />, path: '/about-us' },
  { text: 'Contact Us', icon: <Email />, path: '/contact-us' },
];

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderMenuItems = () => (
    <List sx={{ display: 'flex' }}>
      {menuItems.map(({ text, icon, path }) => (
        <ListItem button key={text} sx={{ minWidth: 90, py: 0, px: 0.2 }} component={Link} to={path}>
         
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  const renderMobileMenu = () => (
    <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem button key={text} component={Link} to={path} onClick={handleDrawerToggle}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HashTag Software Solutions
          </Typography>
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          )}
          {!isSmallScreen && renderMenuItems()}
        </Toolbar>
      </AppBar>
      {isSmallScreen && renderMobileMenu()}
    </Box>
  );
}

export default Header;