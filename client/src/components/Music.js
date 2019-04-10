import React, { Component } from 'react';
import {
    Grid,
    Loader,
    Image,
    Icon,
    Card,
    Header
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMusic } from '../actions/musicActions';
import { getAlbums } from '../actions/albumActions';

const images = require.context('../../public/images', true)

class Music extends Component {
    componentWillMount() {
        this.props.getMusic();
        this.props.getAlbums();
    }

    render() {
        const songs = this.props.music.music;
        const albums = this.props.albums.albums;

        return (
            <div>
                <Grid>
                    <Grid.Row centered>
                        <Header as='h1' inverted color='grey' id="header">
                            Singles
                        </Header>
                    </Grid.Row>
                    <hr></hr>
                    <Grid.Row centered columns={3}>
                        {songs.map((song) => (
                            <Grid.Column>
                                <div className="singles">
                                    <Card>
                                        <Image href={song.soundcloudUrl} src={images(song.albumCoverUrl)} />
                                        <Card.Content>
                                            <Card.Header>{song.title}</Card.Header>
                                            <Card.Meta>{song.artist}</Card.Meta>
                                            <Card.Description>{song.album}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a href={song.soundcloudUrl}><Icon name='soundcloud' />Listen on Soundcloud</a>
                                        </Card.Content>
                                    </Card>
                                </div>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                    <Grid.Row centered>
                        <Header as='h1' inverted color='grey' id="header">
                            Albums
                        </Header>
                    </Grid.Row>
                    <hr></hr>
                    <Grid.Row centered columns={3}>
                        {albums.map((album) => (
                            <Grid.Column>
                                <div className="singles">
                                    <Card>
                                        <Image href={album.soundcloudUrl} src={images(album.albumCoverUrl)} />
                                        <Card.Content>
                                            <Card.Header>{album.title}</Card.Header>
                                            <Card.Meta>{album.artist}</Card.Meta>
                                            <Card.Description>{album.songs}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a href={album.soundcloudUrl}><Icon name='soundcloud' />Listen on Soundcloud</a>
                                        </Card.Content>
                                    </Card>
                                </div>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
                {this.props.loading ? <Loader active inline='centered' /> : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    music: state.music,
    albums: state.albums,
    loading: state.loading
})

export default connect(mapStateToProps, { getMusic, getAlbums })(Music);
