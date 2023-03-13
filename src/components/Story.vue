<template>
  <div class="story-container">
    <div class="story-wrap">
      <p class="story">안녕하세요!</p> 
      <p class="story">기회를 놓치지 않는 프론트엔드 엔지니어 오형빈입니다.</p>
      <p class="story">3년간 영상제작자로 일하다가</p> 
      <p class="story">개발자로서 새로운 도전을 하고자 합니다.</p>
      <p class="story">매 순간 순간을 기회라고 생각하며</p>
      <p class="story">고객이 만족할 수 있는 웹페이지를 제작하는</p>
      <p class="story">프론트엔드 엔지니어가 되도록 하겠습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story'
}
</script>

<style scoped>
.story-container {
  position: relative;
  width: 100%;
  height: 35rem;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 
}
.story-wrap {
  position: absolute;
  width: 50%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  text-align: left;
}
.story {
  color: black;
  word-break: keep-all;
  font-size: 1.2rem;
  margin-top: 0.8rem;
}
@media screen and (max-width: 27rem){
  .story{
    font-size: 1rem;
  }
}
</style>