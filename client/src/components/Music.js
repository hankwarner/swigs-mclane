import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    Container,
    List,
    Loader,
    Divider,
    Image
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMusic } from '../actions/musicActions';

const images = require.context('../../public/images', true)

class Music extends Component {
    componentWillMount() {
        this.props.getMusic();
    }

    render() {
        const songs = this.props.music.music;

        return (
            <div>
              <Container text>
                <List>
                    <List.Item>
                        {songs.map((song) => (
                            <div>
                                <List.Content>
                                    <Image src={images(song.albumCoverUrl)} size='medium' />
                                </List.Content>
                                <Divider hidden />
                                <List.Content>{song.artist}</List.Content>
                                <List.Content>{song.title}</List.Content>
                                <List.Content>{song.album}</List.Content>
                                <List.Content>{song.year}</List.Content>
                            </div>
                        ))}
                        {this.props.loading ? <Loader active inline='centered' /> : null }
                    </List.Item>
                </List>
              </Container>
            </div>
        );
    }
}

// Music.propTypes = {
//     getMusic: PropTypes.func.isRequired,
//     music: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    music: state.music,
    loading: state.loading
})

export default connect(mapStateToProps, { getMusic })(Music);
