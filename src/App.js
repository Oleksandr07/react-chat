import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import TextField from 'material-ui/TextField';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 300px)',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sidebar: {
    height: 'calc(100vh - 84px)',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 300,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: 260,
  },
  list: {
    height: 'calc(100% - 56px)',
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit *9,
    right: theme.spacing.unit * 2,
  },
  paperInfoBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: theme.spacing.unit * 2,
    transform: 'translate(-50%, -50%)',
  },
  typographyH1: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '2.125rem',
    fontWeight: 400,
    marginBottom: '0.35em',
  },
  messageAdd: {
    position: 'absolute',
    background: '#fff',
    left: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 2,
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
    padding: theme.spacing.unit * 2,
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.sidebar}>
        <div className={classes.toolbar}>
          <TextField
            id="search"
            type="search"
            className={classes.textField}
            placeholder="Search chats..."
            margin="normal"
          />
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>

        <BottomNavigation
          onChange={this.handleChange}
          showLabels
          className={classes.bottomNavigation}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>

        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              React chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Paper className={classes.paperInfoBox} elevation={4}>
            <Typography variant="headline" component="h1" className={classes.typographyH1}>
              Start messaging…
            </Typography>
            <Typography component="p">
              Use <b>Global</b> to explore communities around here.
            </Typography>
            <Typography component="p">
              Use <b>Recents</b> to see your recent conversations.
            </Typography>
          </Paper>

          <TextField
            type="text"
            className={classes.messageAdd}
            placeholder="Type your message..."
            margin="normal"
          />

        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
