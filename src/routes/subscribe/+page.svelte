<script>
  import Steps from '$lib/steps.svelte'
</script>

<svelte:head>
  <title>Create a plan - Coffeeroasters</title>
  <meta
    name="description"
    content={'Build a subscription plan that best fits your needs. We offer ' +
      'an assortment of the best artisan coffees from around the globe ' +
      'delivered fresh to your door.'}
  />
</svelte:head>

<section
  class="-mx-6 my-30 rounded-xl bg-default-350 px-6 py-20 text-default-100
    md:-mx-10 md:my-36 md:px-10 md:py-24 lg:mx-0 lg:my-50 lg:px-21 lg:py-25"
>
  <Steps dark />
</section>
