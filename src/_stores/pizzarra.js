import { writable } from 'svelte/store'

// export const pizzarra = writable([])
const createPizzarra = () => {
  const { subscribe, set, update } = writable([])
  return {
    subscribe,
    reset: () => set([]),
    pushPizzarra: (actual, letra) => {
      set(actual.push(letra))
    },
  }
}

export const pizzarra = createPizzarra()
