export function getAlphabet() {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
  return alphabet
}

export function playSound() {
  const audio = new Audio('path/to/sound.mp3')
  audio.play()
}
