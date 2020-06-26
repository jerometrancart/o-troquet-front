import React, { Component } from 'react';
import Modali, { useModali } from 'modali';
import { Dropdown, Menu, Sidebar, List, Image } from 'semantic-ui-react';
import './style.scss';
import { Link, useHistory, Redirect } from 'react-router-dom';
// import Friendlist from 'src/components/Friendlist';

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary vertical>
        <Link to="/account">
          <Menu.Item
            name='Infos joueur'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/settings">
          <Menu.Item
            name='Parametres'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to ='/logout'>
          <Menu.Item
                name='Deconnexion'
                active={activeItem === 'settings'}
                onClick={this.handleItemClick}
              />
        </Link>
        <Menu.Item
          name='Parametres'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
          />


        <List>
        <List.Item>
      <Image avatar src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
        </List>
      {/* <Friendlist /> */}
      </Menu>
    );
  }
}

