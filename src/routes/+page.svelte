<script>
  import Hero from './hero.svelte'
  import Products from './products.svelte'
  import Features from './features.svelte'

  export let data
</script>

<svelte:head>
  <title>Coffeeroasters</title>
  <meta
    name="description"
    content={'Start your mornings with the world’s best coffees. Try our ' +
      'expertly curated artisan coffees from our best roasters delivered ' +
      'directly to your door, at your schedule.'}
  />
</svelte:head>

<Hero />
<Products data={data.products} />
<Features data={data.features} />
