import React, { Component } from 'react'
import {
    Responsive,
    Grid,
    Image,
    Header,
    Container,
    Icon,
    Button
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setInstagramFeed, setInstagramLoading, setTwitterFeed, setTwitterLoading } from '../actions/landingActions';
import Instafeed from 'instafeed.js';
import { Timeline } from 'react-twitter-widgets';
import InstagramEmbed from 'react-instagram-embed';

const images = require.context('../../public/images', true);

class Landing extends Component {
    state = {
        expandText: false,
        latestInstagramPost: ''
    }

    componentWillMount() {
        // call Instagram API
        var instagramFeed = new Instafeed({
            get: 'user',
            userId: process.env.REACT_APP_INSTAGRAM_USER_ID,
            clientId: process.env.REACT_APP_INSTAGRAM_API_KEY,
            accessToken: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
            // if valid data is returned from Instagram, store data in Redux
            success: (res) => {
                this.setState({ latestInstagramPost: res.data[0].link });
            }
        });
        instagramFeed.run();
        
    }

    expandOrCollapseText = () => {
        if(this.state.expandText == false) {
            this.setState({ expandText: true });
        } else {
            this.setState({ expandText: false });
        }
    }

    expandedNewsText() {
        if(this.state.expandText == true) {
            return <div>
                        <p>
                            “This project is true to me',” said Swigs. “I grew up on the South Side of Atlanta in College Park, I want my music to speak to the sights, sounds and feel of what I grew up around. ‘I hope this EP provides a clear expression of what that authenticity represents.”
                        </p>
                        <p>
                            Consisting of five songs and totaling about 20 minutes long, “Elevated Mindstate” is said to have a vintage Atlanta feel to its contents. Swigs wrote the project from a coming-of-age in the city point of view. After absorbing his surroundings, he recounts his experience in an inspiring fashion. The standout track titled “My City” offers a vibrant salute to the “Old Atlanta.” 
                        </p>
                        <p>
                            With live instrumentation, heavy bass, rhythmic samples and piercing lyrics, “Elevated Mindstate” will have listeners’ heads nodding and their spirits lifted. Another notable track, “Usual Suspects”, gives a voice to oppression. The EP features talent from some of Atlanta's premier artists, containing production by Dopeboi, 5AM, Quiet Earp and the Soul Sun Beats. It also includes vocals by OG Cutty, Ghostnotes (5AM and Quiet Earp) and Mr. Brown, the other half of Super Lario Bros.
                        </p>
                    </div>
        }
    }

    render() {
        return (
            <div>
                {/* Desktop */}
                <Responsive as={Grid} columns='two' minWidth={768}>
                    <Image id="landing-banner" src={images('./zavi_banner_white_logo.jpg')} size='big' />
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
                            <Image id="latest-news-photo" src={images('./elevated_mindstate.jpg')} size='large' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Swigs McLane, a co-member of the rap duo Super Lario Bros, plans the release of his first solo hip-hop/rap EP, “Elevated Mindstate,” this month. The indie EP, which is reminiscent of true Atlanta hip-hop, is set to be released on February 21, 2017. Combining past experiences with encouraging thoughts about the future, Swigs lyrically navigates through the EP with ease. An album release party will be planned with a date to be determined.
                                </p>
                                <div>
                                    <Button 
                                        basic 
                                        color='green'
                                        onClick={this.expandOrCollapseText} 
                                        className="expand-or-collapse-text">
                                        {this.state.expandText == false ? "Read More..." : "Read Less..."}
                                    </Button>
                                    {this.expandedNewsText()}
                                </div>
                            </Container>
                        </Grid.Column>
                        {/* Instagram feed */}
                        <Grid.Column width={6}>
                            <Grid columns="one">
                                {/* gets the latest Instagram post url from the api */}
                                {this.state.latestInstagramPost != '' ? 
                                    <InstagramEmbed
                                    className="instagram-feed"    
                                    url={this.state.latestInstagramPost}
                                        maxWidth={320}
                                        hideCaption={false}
                                        containerTagName='div'
                                        injectScript
                                    />
                                : '' }
                            </Grid>

                            {/* Twitter feed */}
                            <Grid.Row>
                                <Header size='huge' inverted color='grey' id="instagram-header">
                                    Twitter
                                </Header>
                                <hr className="landing-side-panel-dividers"></hr>
                                <Grid.Column id="twitter-feed">
                                    <Timeline 
                                        dataSource = {{sourceType: "profile", screenName: "suavo33"}}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>

                {/* Mobile */}
                <Responsive as={Grid} columns='one' maxWidth={768}>
                    <Image id="landing-banner" src={images('./zavi_banner_mobile.jpg')} size='massive' />
                    <span className="logo-wrapper">
                        <Image src={images('./swigs_mclane_logo.png')} size='big' />
                    </span>
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
                            <Image id="latest-news-photo" src={images('./elevated_mindstate.jpg')} size='big' rounded />
                            <Container text id="latest-news-text">
                                <p>
                                    Swigs McLane, a co-member of the rap duo Super Lario Bros, plans the release of his first solo hip-hop/rap EP, “Elevated Mindstate,” this month. The indie EP, which is reminiscent of true Atlanta hip-hop, is set to be released on February 21, 2017. Combining past experiences with encouraging thoughts about the future, Swigs lyrically navigates through the EP with ease. An album release party will be planned with a date to be determined.
                                </p>
                                <div>
                                    <Button 
                                        basic
                                        color='green'
                                        size='huge'
                                        onClick={this.expandOrCollapseText} 
                                        className="expand-or-collapse-text">
                                        {this.state.expandText == false ? "Read More..." : "Read Less..."}
                                    </Button>
                                    {this.expandedNewsText()}
                                </div>
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
                            {/* {instagramFeed.map((photo, index) => {
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
                            })} */}
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
                        <Timeline 
                            className="twitter-timeline"
                            dataSource = {{sourceType: "profile", screenName: "suavo33"}}
                        />
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
