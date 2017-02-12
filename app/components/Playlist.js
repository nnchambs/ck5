// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
import { getSongTags, createSongObject } from 'electron-audio-conversion'

export default class Playlist extends Component {
  constructor() {
    super()

  }

  sendFileToStore(){
    this.props.openFile(this.props.audioIndex);
  }
  
  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  componentWillReceiveProps(nextProps){

  }

  playSong(source, index){
    this.props.playSong(this.props.audioIndex, source, index)
  }

  render() {
    let playlist;
    if(this.props.playlist.length !== 0){
      playlist = this.props.playlist.map((song, i) => {
        return <li className={styles.songitem} key={i} onClick={() => { this.playSong(song.filePath, i) }}>{song.title}</li>
      })
    }
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}>Add File</button>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>Add Folder</button>
        <ol className={styles.songlist}>{ playlist }</ol>
      </div>
    );
  }
}
