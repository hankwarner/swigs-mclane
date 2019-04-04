import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Responsive,
    Visibility,
    Segment,
    Container,
    Menu,
    Sidebar,
    Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMenuItems, setActiveMenuItem } from '../actions/menuActions';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopNavBar extends Component {
    state = {};

    componentWillMount() {
        this.props.getMenuItems();
    }

    handleItemClick = (e, { name }) => {
        this.props.setActiveMenuItem(name);
    }

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
                                        <Link to={`/${menuItem}`}><Menu.Item active={this.props.activeItem === menuItem} name={menuItem} onClick={(e, name) => this.handleItemClick(e, name)} /></Link>
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

class MobileNavBar extends DesktopNavBar {
    state = {}

    componentDidMount() {
        this.props.getMenuItems();
    }
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { sidebarOpened } = this.state
      const menuItems = this.props.menuItems;
  
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
                    <Link to={`/${menuItem}`}><Menu.Item active={this.props.activeItem === menuItem} name={menuItem} onClick={(e, name) => this.handleItemClick(e, name)} /></Link>
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

// DesktopNavBar.propTypes = {
//     getMenuItems: PropTypes.func.isRequired,
//     menuItems: PropTypes.array,
//     activeItem: PropTypes.string
// }

// MobileNavBar.propTypes = {
//     getMenuItems: PropTypes.func.isRequired,
//     menuItems: PropTypes.array,
//     activeItem: PropTypes.string
// }

const mapStateToProps = (state) => ({
    menuItems: state.menu.menuItems,
    activeItem: state.menu.activeItem
})

export default connect(mapStateToProps, { getMenuItems, setActiveMenuItem })(DesktopNavBar);

const MobileNavigationBar = connect(mapStateToProps, { getMenuItems, setActiveMenuItem })(MobileNavBar);
export { MobileNavigationBar }
