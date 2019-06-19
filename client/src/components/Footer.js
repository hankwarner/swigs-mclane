import React, { Component } from 'react';
import {
    Responsive,
    Grid,
    Icon,
    Image   
} from 'semantic-ui-react';

const images = require.context('../../public/images', true);

class Footer extends Component {
    render() {        
        return (
            <div>
                <Grid as={Responsive}>
                    <Grid.Row className="footer">
                        <Grid.Column width={16}>
                            <Image 
                                src={images('./swigs_mclane_logo_white.png')}
                                name="home"
                                onClick={(e, name) => this.handleItemClick(e, name)}
                                size='small' 
                            />
                            <a 
                                href="https://open.spotify.com/artist/2pmvrHTpCslih7BtQ4Y9uc?si=s6rRz8O6SWikcHVqH3xkqw" 
                                className="footer-icon">
                                <Icon name="spotify" inverted />
                            </a>
                            <a 
                                href="https://soundcloud.com/swigsmclane"
                                className="footer-icon">
                                <Icon name="soundcloud" inverted />
                            </a>
                            <a 
                                href="https://itunes.apple.com/us/artist/swigs-mclane/1300061776"
                                className="footer-icon">
                                <Icon name="apple" inverted />
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;
