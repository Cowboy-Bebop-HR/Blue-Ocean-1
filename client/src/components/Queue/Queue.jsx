import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Track from './Track.jsx';

export default function Queue ({ queue, username, token }) {

  // songInfo = {
  //   name: 'Celebrity',
  //   artist: 'IU',
  //   imageUrl: "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff",
  //   audioUrl: "https://open.spotify.com/track/5nCwjUUsmBuNZKn9Xu10Os"
  // }

  // useEffect (() => {
  // setSongList([...songList, songInfo])
  // }, [songInfo])

  return (
    <Container className='Queue'>
      <QueueContainer>
        {queue.map((item, index) => (
          <Track track={item} key={index} username={username} token={token} />
        ))}
      </QueueContainer>
    </Container>
  )
}

const Container = styled.div`
width: 270px;
height: 900px;
border: 1px solid;
border-radius: 20px;
`

const QueueContainer = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: auto;
margin: 10px;
`