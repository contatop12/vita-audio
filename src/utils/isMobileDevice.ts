export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false

  const ua = navigator.userAgent
  const isMobileUa = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua)
  const isTouchPrimary = window.matchMedia("(hover: none) and (pointer: coarse)").matches

  return isMobileUa || isTouchPrimary
}
