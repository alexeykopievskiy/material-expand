import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import Button from '@material/react-button';

import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-text-field/dist/text-field.css';

class Dropdown extends Component {
    state = {
        open: false
    }

    setAnchorElement = (element) => {
        if (this.state.anchorElement) {
          return;
        }
        this.setState({anchorElement: element});
      }

    render() {
        console.log(this.props, 'props')
        const { title, items } = this.props;

        return (
            
            <div className='mdc-menu-surface--anchor'
                ref={this.setAnchorElement}
            >
                <TextField label={title}>
                    <Input onClick={() => this.setState({open: true})}/>
                </TextField>

                <MenuSurface
                open={this.state.open}
                anchorCorner={Corner.BOTTOM_LEFT}
                onClose={() => this.setState({open: false})}
                anchorElement={this.state.anchorElement}
                >
                <img
                    style={{maxWidth: '20vw', maxHeight: '20vh'}}
                    src='http://images.my.photo.url' />
                </MenuSurface>
            </div>
        );
    }
}

export default Dropdown;