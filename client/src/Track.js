import React from 'react'
import { formatSongLength } from './helpers/format'

export default function Track({ track, index }) {
    const songLength = formatSongLength(track.duration_ms)

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-row align-items-center justify-content-around'>
                <small>{ index + 1 }</small>
                <img className='mx-3' src={ track.album.images[track.album.images.length - 1].url } height='50px'></img>
                <div className='d-flex flex-column'>
                    <h5>{ track.name }</h5>
                    <small>
                        { 
                            track.artists.map((artist, index) => (
                                artist.name + (index == track.artists.length - 1 ? '' : ', ')
                            )) 
                        }
                    </small>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-around'>
                <small>{ track.album.name }</small>
                <small className='ms-3'>{ songLength }</small>
            </div>
        </li>
    )
}
