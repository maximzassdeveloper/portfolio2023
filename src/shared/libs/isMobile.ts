export function isMobile() {
  return !!matchMedia('(pointer:coarse)').matches
}
