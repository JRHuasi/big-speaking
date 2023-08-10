<script>
  import { sound } from 'svelte-sound'
  import Y from '/letras/y.mp3'
</script>

<button use:sound={{ src: Y, events: ['click'] }}> Click Me!! </button>
