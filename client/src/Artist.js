import React from 'react'

export default function Artist({ artist, index }) {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-row align-items-center justify-content-around'>
                <small>{ index + 1 }</small>
                <img className='mx-3' src={ artist.images[artist.images.length - 1].url } height='50px'></img>
                <div className='d-flex flex-column'>
                    <h5>{ artist.name }</h5>
                    <small style={{ textTransform: 'capitalize' }}>
                        { 
                            artist.genres.map((genre, index) => (
                                genre + (index == artist.genres.length - 1 ? '' : ', ')
                            )) 
                        }
                    </small>
                </div>
            </div>
            <div>
                <div className='progress ms-3' style={{ width: '100px' }}>
                    <div className='progress-bar' style={{ width: `${artist.popularity}%`, backgroundColor: '#1DB954' }}></div>
                </div>
            </div>
        </li>
    )
}
