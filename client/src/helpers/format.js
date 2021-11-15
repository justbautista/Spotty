const formatSongLength = (songLength) => {
    let minutes = Math.floor(songLength / 60000);
    let seconds = ((songLength % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export {
    formatSongLength
}