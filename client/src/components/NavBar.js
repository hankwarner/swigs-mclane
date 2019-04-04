import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Responsive,
    Visibility,
    Segment,
    Container,
    Menu,
    Button,
    Sidebar,
    Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMenuItems } from '../actions/menuActions';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopNavBar extends Component {
    state = {};

    componentDidMount() {
        this.props.getMenuItems();
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const menuItems = this.props.menuItems;
        
        return (
            <div>
                <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility
                        once={false}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 50, padding: '1em 0em' }}
                            vertical
                        >
                            <Menu
                                fixed='top'
                                inverted
                                size='large'
                            >
                                <Container>
                                    {menuItems.map(menuItem =>
                                        <a href={menuItem}><Menu.Item name={menuItem} active={this.state.activeItem === menuItem} onClick={this.handleItemClick} /></a>
                                    )}
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>
                </Responsive>
            </div>
        );
    }
}

class MobileNavBar extends Component {
    state = {}

    componentDidMount() {
        this.props.getMenuItems();
    }
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { sidebarOpened } = this.state
      const menuItems = this.props.menuItems;
      const { activeItem } = this.state
  
      return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='overlay'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={sidebarOpened}
            >
                {menuItems.map(menuItem =>
                    <a href={menuItem}><Menu.Item name={menuItem} active={this.state.activeItem === menuItem} onClick={this.handleItemClick} /></a>
                )}
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 200, padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={this.handleToggle}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
      );
    }
}

DesktopNavBar.propTypes = {
    getMenuItems: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired
}

MobileNavBar.propTypes = {
    getMenuItems: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    menuItems: state.menu.menuItems
})

export default connect(mapStateToProps, { getMenuItems })(DesktopNavBar);

const MobileNavigationBar = connect(mapStateToProps, { getMenuItems })(MobileNavBar);
export { MobileNavigationBar }
