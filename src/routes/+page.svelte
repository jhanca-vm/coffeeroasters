<script>
  import Hero from './hero.svelte'
  import Products from './products.svelte'
  import Features from './features.svelte'
  import Steps from '$lib/steps.svelte'

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
<section class="my-30 text-center md:my-36 md:text-left lg:my-50 lg:px-21">
  <h2 class="mb-20 text-2xl text-default-200 md:mb-10 lg:mb-20">
    How it works
  </h2>
  <Steps />
  <a class="btn mt-20 md:mt-11 lg:mt-16" href="/subscribe">Create your plan</a>
</section>
