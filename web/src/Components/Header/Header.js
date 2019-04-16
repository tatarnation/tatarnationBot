import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import fetch from 'node-fetch';

// import grey from '@material-ui/core/colors/grey';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <header>
            <AppBar position="static">
              <ToolBar>
                <Grid container alignContent='center' alignItems='center'>
                    <Grid item>
                        <Typography variant="title" color="inherit">
                            TATARNATIONBOT
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                            
                    </Grid>
                    <Grid item>                 
                        <Typography variant="headline" color="inherit">
                              <a href="https://discordapp.com/api/oauth2/authorize?client_id=566306786404204554&redirect_uri=http%3A%2F%2Fryuunosuke.info&response_type=code&scope=identify%20email%20guilds">
                                  login with discord
                              </a>
                        </Typography>
                    </Grid>
                </Grid>
              </ToolBar>
            </AppBar>
        </header>
      </div>
    );
  }
}

export default Header;