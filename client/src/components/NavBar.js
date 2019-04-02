import React, { Component } from 'react';
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

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopNavBar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { fixed } = this.state;
        const { activeItem } = this.state;

        return (
            <div>
              <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 75, padding: '1em 0em' }}
                            vertical
                        >
                            <Menu
                                fixed='top'
                                inverted
                                pointing={!fixed}
                                secondary={!fixed}
                                size='large'
                            >
                                <Container>
                                    <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
                                    <Menu.Item name='media' active={activeItem === 'media'} onClick={this.handleItemClick} />
                                    <Menu.Item name='music' active={activeItem === 'music'} onClick={this.handleItemClick} />
                                    <Menu.Item name='video' active={activeItem === 'video'} onClick={this.handleItemClick} />
                                    <Menu.Item name='merch' active={activeItem === 'merch'} onClick={this.handleItemClick} />
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted={!fixed}>
                                            Log in
                                        </Button>
                                        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                    </Menu.Item>
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>
                </Responsive>
            </div>
        )
    }
}

class MobileNavBar extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { sidebarOpened } = this.state
      const { activeItem } = this.state
  
      return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='media' active={activeItem === 'media'} onClick={this.handleItemClick} />
                <Menu.Item name='music' active={activeItem === 'music'} onClick={this.handleItemClick} />
                <Menu.Item name='video' active={activeItem === 'video'} onClick={this.handleItemClick} />
                <Menu.Item name='merch' active={activeItem === 'merch'} onClick={this.handleItemClick} />
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
                            <Menu.Item position='right'>
                                <Button inverted>
                                    Log in
                                </Button>
                                <Button inverted style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
      )
    }
  }

export {
    DesktopNavBar,
    MobileNavBar
}
