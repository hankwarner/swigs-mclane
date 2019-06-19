import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Responsive,
    Visibility,
    Segment,
    Container,
    Menu,
    Icon,
    Image
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMenuItems, setActiveMenuItem } from '../actions/menuActions';

const images = require.context('../../public/images', true);

class NavigationBar extends Component {
    state = {
        sidebarOpened: false
    };

    componentWillMount() {
        this.props.getMenuItems();
    }

    handleItemClick = (e, { name }) => {
        this.props.setActiveMenuItem(name);
        this.setState({ sidebarOpened: false });
    }

    handleSidebarToggle = () => {
        if (this.state.sidebarOpened === false) return this.setState({ sidebarOpened: true });
        if (this.state.sidebarOpened === true) return this.setState({ sidebarOpened: false });
    }

    render() {
        const menuItems = this.props.menuItems;
        
        return (
            <div>
                <Responsive minWidth={768}>
                    <Visibility once={false}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 50, padding: '1em 0em' }}
                            vertical >
                            <Menu fixed='top' inverted size='large'>
                                <Container>
                                    {menuItems.map((menuItem, index) =>
                                        <Link to={`/${menuItem}`} key={index}>
                                            <Menu.Item active={this.props.activeItem === menuItem} name={menuItem} onClick={(e, name) => this.handleItemClick(e, name)} />
                                        </Link>
                                    )}
                                </Container>
                                <Menu.Item position="right">
                                    <Image 
                                        as={Link} 
                                        to="home" 
                                        src={images('./swigs_mclane_logo_white.png')}
                                        name="home"
                                        onClick={(e, name) => this.handleItemClick(e, name)}
                                        size='tiny' 
                                    />
                                </Menu.Item>
                                <Menu.Item href="https://itunes.apple.com/us/artist/swigs-mclane/1300061776" position="right">
                                    <Icon name='apple' />
                                </Menu.Item>
                                <Menu.Item href="https://soundcloud.com/swigsmclane" position="right">
                                    <Icon name='soundcloud' />
                                </Menu.Item>
                                <Menu.Item href="https://open.spotify.com/artist/2pmvrHTpCslih7BtQ4Y9uc?si=s6rRz8O6SWikcHVqH3xkqw" position="right">
                                    <Icon name='spotify' />
                                </Menu.Item>
                            </Menu>
                        </Segment>
                    </Visibility>
                </Responsive>

                <Responsive maxWidth={767}>
                    <nav className="mobile-navigation-bar">
                        <Icon 
                            id="menu-bars-icon"
                            name="bars" 
                            size="big" 
                            inverted 
                            onClick={this.handleSidebarToggle} />
                    </nav>
                    {/* display mobile menu on sidebar icon click */}
                    {this.state.sidebarOpened === true ?  
                        <Container as={Menu} id="navigation-drawer-mobile">
                            {menuItems.map((menuItem, index) =>
                                <Link to={`/${menuItem}`} key={index}>
                                    <Menu.Item 
                                        id="navigation-item-mobile"
                                        active={this.props.activeItem === menuItem} 
                                        name={menuItem} 
                                        onClick={(e, name) => this.handleItemClick(e, name)} />
                                </Link>
                            )}
                        </Container>
                    : null}
                </Responsive>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.menu.menuItems,
    activeItem: state.menu.activeItem
})

export default connect(mapStateToProps, { getMenuItems, setActiveMenuItem })(NavigationBar);
