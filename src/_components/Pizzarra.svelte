<script>
  import { pizzarra } from '../_stores/pizzarra'
  import Fa from 'svelte-fa'
  import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
  $: frase = $pizzarra.join('')
  $: console.log('dentro de pizzarra', $pizzarra.join(''))
</script>

<div class="pizzarra">
  {frase}
</div>
