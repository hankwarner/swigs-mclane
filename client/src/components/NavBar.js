import React, { Component } from 'react';
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
                                    {menuItems.map((menuItem, index) =>
                                        <Link to={`/${menuItem}`} key={index}>
                                            <Menu.Item active={this.props.activeItem === menuItem} name={menuItem} onClick={(e, name) => this.handleItemClick(e, name)} />
                                        </Link>
                                    )}
                                </Container>
                                <Menu.Item as="a" href="https://itunes.apple.com/us/artist/swigs-mclane/1300061776" position="right">
                                    <Icon name='apple' />
                                </Menu.Item>
                                <Menu.Item as="a" href="https://soundcloud.com/swigsmclane" position="right">
                                    <Icon name='soundcloud' />
                                </Menu.Item>
                                <Menu.Item as="a" href="https://open.spotify.com/artist/2pmvrHTpCslih7BtQ4Y9uc?si=s6rRz8O6SWikcHVqH3xkqw" position="right">
                                    <Icon name='spotify' />
                                </Menu.Item>
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
                {menuItems.map((menuItem,index) =>
                    <Link to={`/${menuItem}`} key={index}>
                        <Menu.Item active={this.props.activeItem === menuItem} name={menuItem} onClick={(e, name) => this.handleItemClick(e, name)} />
                    </Link>
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
                            <Menu.Item as="a" href="https://itunes.apple.com/us/artist/swigs-mclane/1300061776" position="right">
                                <Icon name='apple' />
                            </Menu.Item>
                            <Menu.Item as="a" href="https://soundcloud.com/swigsmclane" position="right">
                                <Icon name='soundcloud' />
                            </Menu.Item>
                            <Menu.Item href="https://open.spotify.com/artist/2pmvrHTpCslih7BtQ4Y9uc?si=s6rRz8O6SWikcHVqH3xkqw" position="right">
                                <Icon name='spotify' />
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
      );
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.menu.menuItems,
    activeItem: state.menu.activeItem
})

export default connect(mapStateToProps, { getMenuItems, setActiveMenuItem })(DesktopNavBar);

const MobileNavigationBar = connect(mapStateToProps, { getMenuItems, setActiveMenuItem })(MobileNavBar);
export { MobileNavigationBar }
