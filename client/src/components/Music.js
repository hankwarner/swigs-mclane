import React, { Component } from 'react';
import {
    Grid,
    Loader,
    Image,
    Icon,
    Card,
    Header,
    List,
    Container
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
                </Grid>
                <Grid>
                    <Grid.Row centered>
                        <Header as='h1' inverted color='grey' id="header">
                            Albums
                        </Header>
                    </Grid.Row>
                    <hr></hr>
                    {albums.map(album => {
                        return (
                            <Grid.Row columns={2}>
                                <Grid.Column width={8}>
                                    <Image href={album.soundcloudUrl} src={images(album.albumCoverUrl)} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <List divided verticalAlign='middle'>
                                        {album.songs.map(song => {
                                            return (
                                                <List.Item>
                                                    <List.Content>
                                                        <List.Header>{song}</List.Header>
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                            </Grid.Row> 
                        )
                    })}
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
