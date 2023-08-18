<script>
  import '@fontsource-variable/fraunces'
  import '@fontsource/barlow'
  import { fade } from 'svelte/transition'
  import logo from '$lib/assets/logo.webp'
  import menu from '$lib/assets/icons/menu.svg'
  import close from '$lib/assets/icons/close.svg'
  import '../app.css'

  let menuIsHidden = true
</script>

<header
  class="top-0 flex items-center justify-between bg-default-100 pb-10 pt-8
    sm:pb-13 sm:pt-10 lg:py-11"
  class:sticky={!menuIsHidden}
>
  <a class="w-41 sm:w-[14.75rem]" href="/">
    <img src={logo} alt="Coffeeroasters" width="237" height="27" />
  </a>
  <button class="sm:hidden" on:click={() => (menuIsHidden = !menuIsHidden)}>
    {#if menuIsHidden}
      <img class="w-4" src={menu} alt="Open Menu" width="16" height="15" />
    {:else}
      <img
        in:fade={{ duration: 300 }}
        class="w-3.5"
        src={close}
        alt="Close Menu"
        width="14"
        height="13"
      />
    {/if}
  </button>
  <nav
    class="fixed inset-x-0 bottom-0 top-22.5 animate-fade-down bg-gradient-to-b
      from-default-100 from-40% to-default-100/50 animate-duration-300
      sm:static sm:block sm:animate-none"
    class:hidden={menuIsHidden}
  >
    <ul
      class="grid gap-y-8 px-6 py-10 text-center font-serif text-2xl font-black
        sm:flex sm:gap-x-8 sm:p-0 sm:font-sans sm:text-xs sm:font-bold
        sm:uppercase sm:tracking-widest sm:text-default-200"
    >
      <li>
        <a class="transition-colors hover:text-default-300" href="/about">
          About Us
        </a>
      </li>
      <li>
        <a class="transition-colors hover:text-default-300" href="/subscribe">
          Create Your Plan
        </a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
