import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class GuildItem extends Component {
  render() {
    return (
      <div className="Content">
        <Avatar src={this.props.guildAvatar | "DJ EBAN"}/> {/*для примера*/}
        <Typography>{this.props.name | "DJ EBAN"}</Typography> {/*для примера*/}
      </div>
    );
  }
}

export default GuildItem;