import React, { Component } from 'react';
import { Dropdown, Menu, Sidebar } from 'semantic-ui-react';

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary vertical>
        <Menu.Item
          name='Infos joueur'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Parametres'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
        <Dropdown item text='Friend'>
          <Dropdown.Menu>
            <Dropdown.Header>En Ligne</Dropdown.Header>
            <Dropdown.Item>Cariboo</Dropdown.Item>
            <Dropdown.Item>Lorem</Dropdown.Item>
            <Dropdown.Item>Ipsum</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}
