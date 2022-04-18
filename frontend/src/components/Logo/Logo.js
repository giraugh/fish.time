import logoImage from '/public/logo.svg'

const fishOuchUrl = new URL('/public/audio/fish-ouch.mp3', import.meta.url)

const Logo = () =>
  <img src={logoImage} alt={'Fish Time Logo'} onClick={() => new Audio(fishOuchUrl).play()} />

export default Logo

