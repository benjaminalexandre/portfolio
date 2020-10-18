import {useState, useLayoutEffect} from 'react'

export const BREAKPOINTS = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1600
}

export const isSizeBetween = (min, max) => {
  return window.innerWidth <= max && window.innerWidth > min
}

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
}
