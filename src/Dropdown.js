import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import List, {ListItem, ListItemText} from '@material/react-list';
import IconButton, {IconToggle} from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-list/dist/list.css';

import '@material/react-icon-button/dist/icon-button.css';

class Dropdown extends Component {
    state = {
        open: false,
        selected: ''
    }

    handleClick(item) {
        this.props.selectItem(item)
        this.setState({
            open: false,
            selected: item.title
        })
    }

    render() {
        const { title, items } = this.props;

        return (
            <div 
                className='mdc-menu-surface--anchor'
                ref={this.setAnchorElement}
            >   
                <TextField label={title}>
                    <Input value={this.state.selected} onClick={() => this.setState({open: true})}/>
                </TextField>
                <MaterialIcon icon='favorite' />
                <MenuSurface
                    open={this.state.open}
                    anchorCorner={Corner.BOTTOM_LEFT}
                    onClose={() => this.setState({open: false})}
                >
                    <List>
                        { items.map((item, key) => (
                            <ListItem key={key} onClick={() => this.handleClick(item)}>
                                <ListItemText primaryText={item.title}/>
                            </ListItem>
                        )) }
                    </List>
                </MenuSurface>
            </div>
        );
    }
}

export default Dropdown;