import React, { Component } from 'react';
import {
    Grid,
    Loader,
    Image,
    Icon,
    Card,
    Header,
    List,
    Responsive
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
                    <hr className="music-headers"></hr>
                    <Grid.Row id="song-cards" centered columns={3}>
                        {songs.map((song) => {
                            return (
                                <Grid.Column id="singles-grid" key={song._id}>
                                    <div className="singles-cards">
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
                            )
                        })}
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row centered>
                        <Header as='h1' inverted color='grey' id="header">
                            Albums
                        </Header>
                    </Grid.Row>
                    <hr className="music-headers"></hr>
                    {albums.map(album => {
                        return (
                            <Grid.Row columns={2} key={album._id}>
                                <Grid.Column id="album-image" width={8}>
                                    <Image src={images(album.albumCoverUrl)} rounded />
                                </Grid.Column>
                                <Grid.Column width={8} id="album-content">
                                    <List divided id="track-list" verticalAlign='middle'>
                                        {album.songs.map((song, index) => {
                                            return (
                                                <List.Item key={index} id="track">
                                                    <List.Content>
                                                        <List.Header as="h1" id="track-title">{song.title}</List.Header> 
                                                    </List.Content>
                                                    <List.Content as={Responsive} minWidth={768} id="media-icons" floated='right'>
                                                        <a href={song.spotifyUrl}><List.Icon id="single-icon" name='spotify' size='large' verticalAlign='middle' /></a>
                                                        <a href={song.appleMusicUrl}><List.Icon name='apple' size='large' verticalAlign='middle' /></a>
                                                        <a href={song.soundcloudUrl}><List.Icon id="single-icon" name='soundcloud' size='large' verticalAlign='middle' /></a>
                                                    </List.Content>
                                                    
                                                    <List.Content as={Responsive} maxWidth={767} id="media-icons" floated='right'>
                                                        <a href={song.spotifyUrl}><List.Icon id="single-icon" name='spotify' size='huge' verticalAlign='middle' /></a>
                                                        <a href={song.appleMusicUrl}><List.Icon id="single-icon" name='apple' size='huge' verticalAlign='middle' /></a>
                                                        <a href={song.soundcloudUrl}><List.Icon id="single-icon" name='soundcloud' size='huge' verticalAlign='middle' /></a>
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
});

export default connect(mapStateToProps, { getMusic, getAlbums })(Music);
