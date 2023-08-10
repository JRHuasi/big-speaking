<script>
  import { getAlphabet } from '../_tools/funciones'
  import Tecla from './Tecla.svelte'

  const alfabeto = getAlphabet()
</script>

<div class="teclado">
  <!-- <Fa icon={faUser}/> -->
  {#each alfabeto as letra, key}
    {#if letra != 'z' && letra != 'y'}
      <Tecla {letra} {key} />
    {/if}
  {/each}
</div>
<div class="barra">
  <!-- <button class="letra space">SP</button> -->
  <Tecla letra="space" key="27" />
  <Tecla letra="y" key="24" />
  <Tecla letra="z" key="25" />
  <!-- <Tecla letra="emo" key="28" /> -->
  <Tecla letra="end" key="28" />
  <Tecla letra="del" key="29" />
</div>
