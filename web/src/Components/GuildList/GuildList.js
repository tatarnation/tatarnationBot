import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import GuildItem from '../GuildItem/GuildItem';

class GuildItem extends Component {
  render() {
    return (
      <div className="GuildList">
        {
            this.props.guilds.map((guild)=>{
                return(
                    <GuildItem guild/> 
                )
            })
        }
      </div>
    );
  }
}

export default GuildItem;