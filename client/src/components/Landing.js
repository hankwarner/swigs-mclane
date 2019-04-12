import React, { Component } from 'react'
import {
    Responsive,
    Grid,
    Container,
    Image
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
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            {instagramFeed.map(photo => {
                                return (
                                    <Image as="a" href={photo.link} src={photo.images.thumbnail.url} />
                                )
                            })}
                        </Grid.Column>
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
