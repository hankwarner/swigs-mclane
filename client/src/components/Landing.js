import React, { Component } from 'react'
import {
    Responsive,
    Grid,
    Image,
    Header
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setInstagramFeed, setInstagramLoading, setTwitterFeed, setTwitterLoading } from '../actions/landingActions';
import keys from '../config/keys';
import Instafeed from 'instafeed.js';

const images = require.context('../../public/images', true);

class Landing extends Component {

    componentWillMount() {
        // call Instagram API
        var instagramFeed = new Instafeed({
            get: 'user',
            userId: keys.instagramUserId,
            clientId: keys.instagramApiKey,
            accessToken: keys.instagramAccessToken,
            // if valid data is returned from Instagram, store data in Redux
            success: (res) => {
                this.props.setInstagramFeed(res.data);
            }
        });
        instagramFeed.run();

        // call Twitter API
        this.props.setTwitterFeed();
    }

    render() {
        const instagramFeed = this.props.instagramFeed.instagramFeed;
        const twitterFeed = this.props.twitterFeed.twitterFeed;

        return (
            <div>
                <Responsive as={Grid} columns='two'>
                    {/* <Image src={images('./my_city.png')} size='big' /> */}
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Header size='huge' inverted color='grey' id="instagram-header">
                                Latest News
                            </Header>
                            <hr className="landing-side-panel-dividers"></hr>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header size='huge' inverted color='grey' id="instagram-header">
                                Instagram
                            </Header>
                            <hr className="landing-side-panel-dividers"></hr>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns="two">
                        <Grid.Column width={10} as={Responsive} minWidth={768}>
                            <Image src={images('./my_city.png')} size='big' />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                            <hr className="landing-side-panel-dividers"></hr>
                            <Image src={images('./my_city.png')} size='big' />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Grid columns="three" id="instagram-feed">
                                {instagramFeed.map((photo, index) => {
                                    return (
                                        <Grid.Column as={Responsive} minWidth={768} key={index}>
                                            <Image href={photo.link} src={photo.images.thumbnail.url} id="instagram-photos" />
                                        </Grid.Column>
                                    )
                                })}
                            </Grid>
                            <hr className="landing-side-panel-dividers"></hr>
                            <Header size='huge' inverted color='grey' id="instagram-header">
                                Twitter
                            </Header>
                            <hr className="landing-side-panel-dividers"></hr>
                            <Grid columns="one" id="instagram-feed">
                                {twitterFeed.map(tweet => {
                                    return (
                                        <Grid.Column as={Responsive} minWidth={768}>
                                            <div>{tweet.text}</div>
                                        </Grid.Column>
                                    )
                                })}
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    instagramFeed: state.landing,
    instagramLoading: state.instagramLoading,
    twitterFeed: state.landing,
    twitterLoading: state.twitterLoading
});

export default connect(mapStateToProps, { setInstagramFeed, setInstagramLoading, setTwitterFeed, setTwitterLoading })(Landing);
