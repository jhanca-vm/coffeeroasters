<section
  class="grid place-items-center rounded-xl bg-cover p-6 sm:justify-start
    sm:p-14 lg:p-21"
>
  <div class="text-center text-default-100 sm:text-left">
    <h1
      class="text-[2.5rem] leading-none sm:w-96 sm:text-5xl lg:w-124
        lg:text-7xl"
    >
      Great coffee made simple.
    </h1>
    <p class="mb-10 mt-6 opacity-80 sm:w-100 lg:mb-14 lg:mt-8">
      Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.
    </p>
    <a
      class="inline-flex h-14 items-center rounded-md bg-primary-200 px-8
        text-lg transition-colors hover:bg-primary-100/80"
      href="/subscribe"
    >
      Create your plan
    </a>
  </div>
</section>

<style lang="postcss">
  section {
    background-color: #191919;
    background-image: url('$lib/assets/coffeepress-sm.jpg');
    height: theme(spacing.125);
  }

  h1,
  a {
    font-family: theme(fontFamily.serif);
    font-weight: 900;
  }

  @media screen(sm) {
    section {
      background-image: url('$lib/assets/coffeepress-md.jpg');
    }
  }

  @media screen(lg) {
    section {
      background-image: url('$lib/assets/coffeepress-lg.jpg');
      height: theme(spacing.150);
    }
  }
</style>
