<template>
  <div class="main-container">
    <div class="main-wrapper">
      <p class="main-slogan">Frontend Engineer Who Seize An Opportunity</p>
      <h1 class="main-title">Hyoungbin's Portfolio</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url('../assets/img/background.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
}

.main-wrapper {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-slogan {
  font-size: 1.5rem;
  color: black;
  border-right: 3px solid black;
  margin: auto;
  width: 30.5rem;
  animation: blink 0.5s infinite, typing 3s steps(46);
  white-space: nowrap;
  overflow: hidden;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  0%{
    width: 0;
  }

  100% {
    width: 30.5rem;
  }
}

.main-title {
  font-size: 4rem;
  font-weight: bold;
  word-break: keep-all;
  margin: 1.5rem auto;
  color: black;
}

@media screen and (max-width: 48rem){
  .main-slogan{
    font-size: 1rem;
    width: 20.3rem;
  }

  @keyframes typing {
    0%{
      width: 0;
    }

    100% {
      width: 20.3rem;
    }
  }

  .main-title {
    font-size: 3rem;
    margin: .3rem;
  }
}
@media screen and (max-width: 27rem){
  .main-slogan{
    font-size: 0.8rem;
    width: 16.3rem;
  }

  @keyframes typing {
    0%{
      width: 0;
    }

    100% {
      width: 16.3rem;
    }
  }
}
</style>
