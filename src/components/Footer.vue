<template>
  <div class="footer-container">
    <div class="footer-wrap">
        <p class="footer-info">본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
        <p class="footer-info">© {{ year }} HYOUNGBIN OH All Rights Reserved. </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Footer",
    setup () {
        const date = new Date
        const year = date.getFullYear()
        return {
            year
        }
    }
}
</script>

<style scoped>
.footer-container {
    position: relative;
    background-color: #282828;
    width: 100%;
    height: 6rem;
}
.footer-wrap {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
}
.footer-info {
    color: white;
    font-size: .8rem;
    word-break: keep-all;
}
</style>