import React from 'react'
import { ThemeProvider } from 'styled-components'
import Video from '../Video'
import Playlist from './Playlist'
import StyledWbnPlayer from '../styles/StyledWbnPlayer'

const nightTheme = {
  bgcolor: '#353535',
  bgColorItem: '#414141',
  bgColorItemActive: '#405c63',
  bgColorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff'
}

const lightTheme = {
  bgcolor: '#fff',
  bgColorItem: '#fff',
  bgColorItemActive: '#80a7b1',
  bgColorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535'
}

const WbnPlayer = props => {
  const nightModeCallback = () => {}

  const endCallback = () => {}

  const progressCallback = () => {}

  return (
    <ThemeProvider theme={state.nightMode ? nightTheme : lightTheme}>
      {state.videos !== null ? (
        <StyledWbnPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledWbnPlayer>
      ) : null}
    </ThemeProvider>
  )
}

export default WbnPlayer
