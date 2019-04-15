import React, { Component } from 'react'
import {
    Responsive,
    Grid,
    Container,
    Image,
    Header
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setInstagramFeed, setInstagramLoading } from '../actions/landingActions';
import instagramKeys from '../config/keys';
import Instafeed from 'instafeed.js';

const images = require.context('../../public/images', true);

class Landing extends Component {

    componentWillMount() {
        var feed = new Instafeed({
            get: 'user',
            userId: instagramKeys.userId,
            clientId: instagramKeys.instagramApiKey,
            accessToken: instagramKeys.accessToken,
            // if valid data is returned from Instagram, store data in Redux store
            success: (res) => {
                this.props.setInstagramFeed(res.data);
            }
        });
        feed.run();
    }

    render() {
        const instagramFeed = this.props.instagramFeed.instagramFeed;

        return (
            <div>
                <Responsive as={Grid}>
                    {/* <Image src={images('./my_city.png')} size='big' /> */}
                    <Grid.Row centered>
                        <Header size='huge' inverted color='grey' id="instagram-header">
                            Instagram
                        </Header>
                    </Grid.Row>
                    <hr className="landing-side-panel-dividers"></hr>
                    <Grid.Row columns={2} id="instagram-feed">
                        {instagramFeed.map(photo => {
                            return (
                                <div key={photo.id}>
                                    <Grid.Column as={Responsive} minWidth={768}>
                                        <Image href={photo.link} src={photo.images.thumbnail.url} id="instagram-photos" />
                                    </Grid.Column>
                                    <Grid.Column as={Responsive} maxWidth={767}>
                                        <Image size='medium' href={photo.link} src={photo.images.standard_resolution.url} id="instagram-photos" />
                                    </Grid.Column>
                                </div>
                            )
                        })}
                    </Grid.Row>
                </Responsive>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    instagramFeed: state.landing,
    loading: state.loading
});

export default connect(mapStateToProps, { setInstagramFeed, setInstagramLoading })(Landing);
