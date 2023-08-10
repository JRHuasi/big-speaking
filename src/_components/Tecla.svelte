<script>
  import { pizzarra } from '../_stores/pizzarra'
  import Fa from 'svelte-fa'
  import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

  import { sound } from 'svelte-sound'
  import a from '/letras/a.mp3'
  import b from '/letras/b.mp3'
  import c from '/letras/c.mp3'
  import d from '/letras/d.mp3'
  import e from '/letras/e.mp3'
  import f from '/letras/f.mp3'
  import g from '/letras/g.mp3'
  import h from '/letras/h.mp3'
  import i from '/letras/i.mp3'
  import j from '/letras/j.mp3'
  import k from '/letras/k.mp3'
  import l from '/letras/l.mp3'
  import m from '/letras/m.mp3'
  import n from '/letras/n.mp3'
  import o from '/letras/o.mp3'
  import p from '/letras/p.mp3'
  import q from '/letras/q.mp3'
  import r from '/letras/r.mp3'
  import s from '/letras/s.mp3'
  import t from '/letras/t.mp3'
  import u from '/letras/u.mp3'
  import v from '/letras/v.mp3'
  import w from '/letras/w.mp3'
  import x from '/letras/x.mp3'
  import y from '/letras/y.mp3'
  import z from '/letras/z.mp3'
  import space from '/letras/space.mp3'
  import del from '/letras/delete.mp3'
  import emo from '/letras/emo.mp3'
  import end from '/letras/end.mp3'
  // import snodiY from '/letras/y.mp3'

  const sounds = []

  for (let ii = 0; ii < 26; ii++) {
    sounds.push(a)
    sounds.push(b)
    sounds.push(c)
    sounds.push(d)
    sounds.push(e)
    sounds.push(f)
    sounds.push(g)
    sounds.push(h)
    sounds.push(i)
    sounds.push(j)
    sounds.push(k)
    sounds.push(l)
    sounds.push(m)
    sounds.push(n)
    sounds.push(o)
    sounds.push(p)
    sounds.push(q)
    sounds.push(r)
    sounds.push(s)
    sounds.push(t)
    sounds.push(u)
    sounds.push(v)
    sounds.push(w)
    sounds.push(x)
    sounds.push(y)
    sounds.push(z)
  }

  export let letra, key
  console.log(key)

  const appendTecla = (noletra = '') => {
    console.log({ noletra }, { letra })
    if (noletra == '' && noletra != 'del') {
      pizzarra.pushPizzarra($pizzarra, letra)
      // console.log({ letra })
      // let frase = $pizzarra.push(letra)
      // console.log({ frase })
      // console.log('pizzarra', $pizzarra.join(''))
      // // const texto = frase.join('')
      // // console.log(texto, $pizzarra)
    } else if (noletra == 'space') {
      pizzarra.pushPizzarra(' ')
      console.log('SPACE')
    } else {
      console.log('DELETE')
    }
  }
</script>

{#if letra != 'space' && letra != 'del' && letra != 'emo' && letra != 'end'}
  <button class="letra" use:sound={{ src: sounds[key], events: ['click'] }} on:click={() => appendTecla()}>
    {letra}
  </button>
{:else if letra == 'space'}
  <button class="letra" use:sound={{ src: space, events: ['click'] }} on:click={() => appendTecla('space')}>
    SPACE
  </button>
  <!-- {:else if letra == 'emo'}
  <button class="letra" use:sound={{ src: emo, events: ['click'] }}>
    <img src="/imagenes/emoji.png" alt="" />
  </button> -->
{:else if letra == 'end'}
  <button class="letra" use:sound={{ src: end, events: ['click'] }}> END </button>
{:else if letra == 'del'}
  <button class="letra" use:sound={{ src: del, events: ['click'] }} on:click={() => appendTecla('del')}>
    <Fa icon={faArrowAltCircleLeft} />
  </button>
{/if}
