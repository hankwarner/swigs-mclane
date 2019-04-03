import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    List
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMusic } from '../actions/musicActions';

class Music extends Component {
    componentDidMount() {
        this.props.getMusic();
    }

    render() {
        const songs = this.props.music.music;
        return (
            <div>
              <Container text>
                <List>
                    <List.Item>
                        {songs.map(song => (
                            <div>
                                <List.Content>{song.title}</List.Content>
                                <List.Content>{song.album}</List.Content>
                                <List.Content>{song.year}</List.Content>
                            </div>
                        ))}
                    </List.Item>
                </List>
              </Container>
            </div>
        );
    }
}

Music.propTypes = {
    getMusic: PropTypes.func.isRequired,
    music: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    music: state.music
})

export default connect(mapStateToProps, { getMusic })(Music);
