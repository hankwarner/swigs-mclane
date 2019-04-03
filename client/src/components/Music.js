import React, { Component } from 'react';
import {
    Container,
    List
} from 'semantic-ui-react';

class Music extends Component {
    state = {
        songs: [
            {
                title: "Red Light",
                album: "Red Light",
                year: 2018
            }, {
                title: "My City",
                album: "Elevated Mindstate",
                year: 2017
            }
        ]
    }

    render() {
        const { songs } = this.state;

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

export default Music;
