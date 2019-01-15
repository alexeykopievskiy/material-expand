import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import List, {ListItem, ListItemText} from '@material/react-list';
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-list/dist/list.css';
import '@material/react-icon-button/dist/icon-button.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selected: '',
            anchorElement: null,
        }

        this.handleSelectClick = this.handleSelectClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    setAnchorElement = (element) => {
        if (this.state.anchorElement) {
            return;
        }
        this.setState({anchorElement: element});
    }

    handleElementClick(item) {
        this.props.selectItem(item)
        this.setState({
            open: false,
            selected: item.title
        })
    }

    handleSelectClick() {
        this.setState({open: true})
    }

    handleCancelClick() {
        this.setState({selected: ''})
    }

    render() {
        const { title, items } = this.props;

        return (
            <div 
                className='mdc-menu-surface--anchor'
                ref={this.setAnchorElement}
            >   
                <TextField label={title}>
                    <Input 
                        value={this.state.selected} 
                        onClick={this.handleSelectClick}/>
                </TextField>
                { this.state.open ? 
                    <IconButton onClick={this.handleSelectClick}>
                        <MaterialIcon icon='expand_less' />
                    </IconButton>
                    : this.state.selected.length ?
                        <IconButton onClick={this.handleCancelClick}>
                            <MaterialIcon icon='cancel' />
                        </IconButton>
                        :
                        <IconButton onClick={this.handleSelectClick}>
                            <MaterialIcon icon='expand_more' />
                        </IconButton>    
                }
                <MenuSurface
                    open={this.state.open}
                    anchorCorner={Corner.BOTTOM_LEFT}
                    onClose={() => this.setState({open: false})}
                    anchorElement={this.state.anchorElement}
                >
                    <List>
                        { items.map((item, key) => (
                            <ListItem key={key} onClick={() => this.handleElementClick(item)}>
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