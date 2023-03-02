<template>
  <nav class="header-container">
    <router-link class="header-title" to="/">HYOUNGBIN</router-link>
    <ul class="header-wrap">
        <router-link class="header-link" to="/">HOME</router-link>
        <router-link class="header-link" to="/project">PROJECT</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.header-container {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 5rem;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-wrap {
  margin-right: 2rem;
}
.header-link {
  text-decoration: none;
  color: white;
  margin-left: 1rem;
}
.header-title {
  text-decoration: none;
  color: white;
  margin-left: 2rem;
  font-weight: bold;
}
</style>