import React, { Component } from 'react'
import {
    Responsive,
    Grid,
    Image,
    Header,
    Container,
    Icon
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setInstagramFeed, setInstagramLoading, setTwitterFeed, setTwitterLoading } from '../actions/landingActions';
import Instafeed from 'instafeed.js';
// import { MagnificPopup } from 'react-magnific-popup';

const images = require.context('../../public/images', true);

class Landing extends Component {

    componentWillMount() {
        // call Instagram API
        var instagramFeed = new Instafeed({
            get: 'user',
            userId: process.env.REACT_APP_INSTAGRAM_USER_ID,
            clientId: process.env.REACT_APP_INSTAGRAM_API_KEY,
            accessToken: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
            // if valid data is returned from Instagram, store data in Redux
            success: (res) => {
                this.props.setInstagramFeed(res.data);
            }
        });
        instagramFeed.run();

        // call Twitter API
        this.props.setTwitterFeed();
    }

    // magnificPopup() {
    //     MagnificPopup.trigger('a', 'open');
    // }

    render() {
        const instagramFeed = this.props.instagramFeed.instagramFeed;
        const twitterFeed = this.props.twitterFeed.twitterFeed;

        return (
            <div>
                {/* Desktop */}
                <Responsive as={Grid} columns='two' minWidth={768}>
                    <Image id="landing-banner" src={images('./zavi_banner.jpg')} size='big' />
                    <Grid.Row centered>
                        <Grid.Column width={10}>
                            <Header size='huge' inverted color='grey' id="latest-news-header">
                                Latest News
                            </Header>
                            <hr className="landing-page-divider"></hr>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header size='huge' inverted color='grey' id="instagram-header">
                                Instagram
                            </Header>
                            <hr className="landing-side-panel-divider"></hr>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns="two">
                        <Grid.Column width={10} as={Responsive} minWidth={768}>
                            <Image id="latest-news-photo" src={images('./red_light.jpg')} size='large' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Container>
                            <hr className="landing-page-divider"></hr>
                            <Image id="latest-news-photo" src={images('./elevated_mindstate.jpg')} size='large' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Swigs McLane, a co-member of the rap duo Super Lario Bros, plans the release of his first solo hip-hop/rap EP, “Elevated Mindstate,” this month. The indie EP, which is reminiscent of true Atlanta hip-hop, is set to be released on February 21, 2017. Combining past experiences with encouraging thoughts about the future, Swigs lyrically navigates through the EP with ease. An album release party will be planned with a date to be determined.
                                </p>
                                <p>
                                    “This project is true to me',” said Swigs. “I grew up on the South Side of Atlanta in College Park, I want my music to speak to the sights, sounds and feel of what I grew up around. ‘I hope this EP provides a clear expression of what that authenticity represents.”
                                </p>
                                <p>
                                    Consisting of five songs and totaling about 20 minutes long, “Elevated Mindstate” is said to have a vintage Atlanta feel to its contents. Swigs wrote the project from a coming-of-age in the city point of view. After absorbing his surroundings, he recounts his experience in an inspiring fashion. The standout track titled “My City” offers a vibrant salute to the “Old Atlanta.” 
                                </p>
                                <p>
                                    With live instrumentation, heavy bass, rhythmic samples and piercing lyrics, “Elevated Mindstate” will have listeners’ heads nodding and their spirits lifted. Another notable track, “Usual Suspects”, gives a voice to oppression. The EP features talent from some of Atlanta's premier artists, containing production by Dopeboi, 5AM, Quiet Earp and the Soul Sun Beats. It also includes vocals by OG Cutty, Ghostnotes (5AM and Quiet Earp) and Mr. Brown, the other half of Super Lario Bros.
                                </p>
                            </Container>
                        </Grid.Column>
                        {/* Instagram feed */}
                        <Grid.Column width={6}>
                            <Grid columns="one" id="instagram-feed">
                                {instagramFeed.map((photo, index) => {
                                    return (
                                        <Grid.Column as={Responsive} minWidth={768} key={index}>
                                            <Image 
                                                as="a"
                                                href={photo.link} 
                                                src={photo.images.low_resolution.url} 
                                                id="instagram-photo"
                                            />
                                            <div className="instagram-photo-stats">
                                                <div className="instagram-photo-likes">
                                                    <Icon id="heart-icon" name="like" />
                                                    {photo.likes.count}
                                                </div>
                                                <div className="instagram-username">{photo.user.username}</div>
                                                {
                                                    photo.caption ? 
                                                        <div className="instagram-photo-caption">{photo.caption.text}</div> : null
                                                }
                                            </div>
                                        </Grid.Column>
                                    )
                                })}
                            </Grid>
                            <hr className="landing-side-panel-dividers"></hr>
                            {/* Twitter feed */}
                            <Grid columns="one" id="twitter-feed">
                                {/* <h3 className="tweets-by-sauvo">
                                    <Icon name="twitter" size="large" />
                                    Tweets by <a href="https://twitter.com/suavo33">@sauvo33</a>
                                </h3>
                                {twitterFeed.map(tweet => {
                                    return (
                                        <Grid.Column as={Responsive} minWidth={768}>
                                            <Image id="tweet-profile-image" src={tweet.user.profile_image_url_https} />
                                            <div className="tweet-text">{tweet.text}</div>
                                        </Grid.Column>
                                    )
                                })} */}

                                <a className="twitter-timeline" href="https://twitter.com/suavo33">Tweets by @suavo33</a>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>

                {/* Mobile */}
                <Responsive as={Grid} columns='one' maxWidth={768}>
                    <Image id="landing-banner" src={images('./zavi_banner.jpg')} size='massive' />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header size='huge' inverted color='grey' id="latest-news-header">
                                Latest News
                            </Header>
                            <hr className="landing-page-divider"></hr>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={16} as={Responsive}>
                            <Image id="latest-news-photo" src={images('./red_light.jpg')} size='big' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Container>
                            <hr className="landing-page-divider"></hr>
                            <Image id="latest-news-photo" src={images('./elevated_mindstate.jpg')} size='big' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Swigs McLane, a co-member of the rap duo Super Lario Bros, plans the release of his first solo hip-hop/rap EP, “Elevated Mindstate,” this month. The indie EP, which is reminiscent of true Atlanta hip-hop, is set to be released on February 21, 2017. Combining past experiences with encouraging thoughts about the future, Swigs lyrically navigates through the EP with ease. An album release party will be planned with a date to be determined.
                                </p>
                                <p>
                                    “This project is true to me',” said Swigs. “I grew up on the South Side of Atlanta in College Park, I want my music to speak to the sights, sounds and feel of what I grew up around. ‘I hope this EP provides a clear expression of what that authenticity represents.”
                                </p>
                                <p>
                                    Consisting of five songs and totaling about 20 minutes long, “Elevated Mindstate” is said to have a vintage Atlanta feel to its contents. Swigs wrote the project from a coming-of-age in the city point of view. After absorbing his surroundings, he recounts his experience in an inspiring fashion. The standout track titled “My City” offers a vibrant salute to the “Old Atlanta.” 
                                </p>
                                <p>
                                    With live instrumentation, heavy bass, rhythmic samples and piercing lyrics, “Elevated Mindstate” will have listeners’ heads nodding and their spirits lifted. Another notable track, “Usual Suspects”, gives a voice to oppression. The EP features talent from some of Atlanta's premier artists, containing production by Dopeboi, 5AM, Quiet Earp and the Soul Sun Beats. It also includes vocals by OG Cutty, Ghostnotes (5AM and Quiet Earp) and Mr. Brown, the other half of Super Lario Bros.
                                </p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header size='huge' inverted color='grey' id="instagram-header">
                                Instagram
                            </Header>
                            <hr className="landing-side-panel-divider"></hr>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Instagram feed */}
                    <Grid.Row>
                        <Grid.Column width={16} id="instagram-feed">
                            {instagramFeed.map((photo, index) => {
                                return (
                                    <Grid.Row as={Responsive} key={index}>
                                        <Image 
                                            as="a"
                                            href={photo.link} 
                                            src={photo.images.low_resolution.url} 
                                            id="instagram-photo"
                                        />
                                        <div className="instagram-photo-stats">
                                            <div className="instagram-photo-likes">
                                                <Icon id="heart-icon" name="like" />
                                                {photo.likes.count}
                                            </div>
                                            <div className="instagram-username">{photo.user.username}</div>
                                            {
                                                photo.caption ? 
                                                    <div className="instagram-photo-caption">{photo.caption.text}</div> : null
                                            }
                                        </div>
                                    </Grid.Row>
                                )
                            })}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header size='huge' inverted color='grey' id="twitter-header">
                                Twitter
                            </Header>
                            <hr className="landing-side-panel-divider"></hr>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Twitter feed */}
                    <Grid columns="one" id="twitter-feed">
                        <a className="twitter-timeline" href="https://twitter.com/suavo33">Tweets by @suavo33</a>
                    </Grid>
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
