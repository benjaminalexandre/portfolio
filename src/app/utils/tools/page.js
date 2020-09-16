export const SIZE = {
  LANDSCAPE: 1024,
  PORTRAIT: 768
}

export const isTabletLandscapeOrientation = () => {
  return window.innerWidth <= SIZE.LANDSCAPE && window.innerWidth > SIZE.PORTRAIT
}

export const isTabletPortraitOrientation = () => {
  return window.innerWidth <= SIZE.PORTRAIT
}

export const isTablet = () => {
  return window.innerWidth <= SIZE.LANDSCAPE
}
