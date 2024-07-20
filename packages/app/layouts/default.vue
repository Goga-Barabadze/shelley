<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <header>
        <div id="header"></div>
    </header>

    <aside class="side-bar side-bar-left">
        <div id="left-aside"></div>

        <div class="p-8">
          <div class="bg-gray-100 hover:cursor-text p-2 rounded-md border-solid border-gray-300 border-[0.5px]">
            Find a claim...
          </div>

          <div class="h-[1px] bg-gray-300 w-full mt-7 mb-7"></div>

          <NuxtLink
            to="/"
            :class="{ 'bg-[#F0F0F0]': route.name === 'index' }"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/claim/something"
            :class="{ 'bg-[#F0F0F0]': route.name === 'claim-uuid' }"
          >
            Explore
          </NuxtLink>

          <NuxtLink
            to="/peer-review"
            :class="{ 'bg-[#F0F0F0]': route.name === 'peer-review' }"
          >
            Peer Review
          </NuxtLink>

          <NuxtLink
            to="/new"
            :class="{ 'bg-[#F0F0F0]': route.name === 'new' }"
          >
            <!-- TODO: Add local meetups -->
            New
          </NuxtLink>

          <NuxtLink
            to="/personality"
            :class="{ 'bg-[#F0F0F0]': route.name === 'personality' }"
          >
            Personality
          </NuxtLink>
        </div>
    </aside>

    <article>
        <div id="article"></div>

        <slot></slot>
    </article>

    <aside class="side-bar side-bar-right">
        <div id="right-aside"></div>
    </aside>

    <footer></footer>
</template>

<style lang="scss">
header {
  height: 75px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fcfcfc;
}

.side-bar {
  position: fixed;
  top: 75px;
  bottom: 50px;

  width: 20%;
  height: 100%;

  background-color: #fcfcfc;
}

@media (max-width:1000px)  {
  .side-bar {
    display: none;

    width: 0;
  }

  article {
    width: 100%;

    left: 0 !important;
    right: 0 !important;
  }
}

.side-bar-left {
  left: 0;

  a {
    display: block;
    color: black;
    text-decoration: none;
    padding: 6px;
    border-radius: 5px;
  }

  a:hover {
    text-decoration: underline;
  }
}

.side-bar-right {
  right: 0;
}

article {
  position: fixed;

  top: 75px;
  bottom: 50px;
  left: 20%;
  right: 20%;

  .div {
    padding: 24px;
  }

  overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
}

footer {
  height: 50px;
  width: 100%;
  
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #fcfcfc;
}


.table-of-content {
  padding: 16px;

  width: 80%;

  div {
    padding: 6px;
    margin: 1px;
    padding-left: 8px;
    cursor: pointer;
  }

  div:hover {
    text-decoration-line: underline;
  }

  .visible-toc-item {
    background: rgb(240, 240, 240);
    border-radius: 5px;
  }
}
</style>