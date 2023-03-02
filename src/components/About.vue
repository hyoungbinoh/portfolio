<template>
  <div class="common-container">
    <div class="about-wrap">
        <h2 class="common-title">About</h2>
        <div class="about-box">
            <div
                v-for="about in abouts"
                :key="about.id" 
                class="about-list"
            >
                <font-awesome-icon class="about-icon" :icon="about.icon" />
                <div>
                    <p class="education-title">{{ about.title }}</p>
                    <p class="about-text">{{ about.detail }}</p>
                </div>
            </div>
            <div class="about-list">
                <font-awesome-icon class="about-icon" icon="fa-brands fa-github" />
                <div>
                    <p class="education-title">깃허브</p>
                    <a class="about-text" href="https://github.com/hyoungbinoh">https://github.com/hyoungbinoh</a>
                </div>
            </div>           
            </div>
            <h2 class="common-title">Study</h2>
            <div class="education-box">
                <div 
                v-for="education in educations" 
                :key="education.id"
                class="education-list"
                >
                    <p>
                        <span class="education-title" >&#x2705; {{ education.title }}</span>
                        <span class="education-period">({{ education.period }})</span>
                    </p>
                    <p 
                    v-for="detail in education.details"
                    :key="detail"
                    class="education-detail"
                    >&#x1F449; {{ detail }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data () {
        return{
            abouts:[
                {   
                    id: 1,
                    icon: 'fa-solid fa-user',
                    title: '이름',
                    detail: '오형빈'
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-calendar',
                    title: '생년월일',
                    detail: '1992.05.16'
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-graduation-cap',
                    title: '최종학력',
                    detail: '한성대학교'
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-envelope',
                    title: '이메일',
                    detail: 'ovtw500@gmail.com'
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-phone',
                    title: '전화번호',
                    detail: '010-5161-2761'
                }
            ],
            educations:[
                {
                    id: 1,
                    title: '훈훈한 Javascript ',
                    period: '2023.02 -',
                    details: ['교육기관: 인프런 X 코드캠프', '사용기술: HTML, CSS, JavaScript'] 
                },
                {
                    id: 2,
                    title: '프로젝트로 배우는 React.js ',
                    period: '2023.01 - 2023.01',
                    details: ['교육기관: 인프런', '사용기술: React.js, Redux Toolkit, Bootstrap'] 
                },
                {
                    id: 3,
                    title: '프로젝트로 배우는 vue.js ',
                    period: '2022.10 - 2023.01',
                    details: ['교육기관: 인프런', '사용기술: Vue.js, Vuex, Bootstrap'] 
                },
                {
                    id: 4,
                    title: '리액트 기초반 ',
                    period: '2022.8 - 2022.09',
                    details: ['교육기관: 스파르타 코딩클럽', '사용기술: React.js, React Redux , Styled-Components'] 
                },
                {
                    id: 5,
                    title: '비개발자를 위한, 웹개발 종합반 ',
                    period: '2022.3 - 2022.04',
                    details: ['교육기관: 스파르타 코딩클럽', '사용기술: HTML, CSS, JavaScript, jQuery, Python, Flask'] 
                },
            ]
        }
    }
}
</script>

<style scoped>
.about-wrap {
    margin: 1rem 1rem 2.5rem 1rem;
}
.about-box {
    width: 80%;
    margin: 0 auto 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
    justify-content: center;
}
.about-list {
    text-align: left;
    width: 20rem;
    margin: 1rem;
    display: flex;
    align-items: center;
}
.about-icon {
    font-size: 3rem;
    margin-right: 1rem;
    color:black;
}
.education-box{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
    justify-content: center;
}
.education-list {
    text-align: left;
    width: 30rem;
    margin: 1rem;
}
.about-text{
    text-decoration: none;
    color: black;
    font-size: 1rem;
}
.education-title {
    font-size: 1rem;
    font-weight: bold;
    color: black;
}
.education-period {
    font-size: 0.8rem;
    color: gray;
}
.education-detail {
    font-size: 1rem;
    color: black;
    text-indent: 1rem;
    word-break: keep-all;
}
@media screen and (max-width: 27rem){
  .education-box{
    grid-template-columns: repeat(auto-fit, minmax(18rem, max-content));
  }
  .education-list {
    width: 18rem;
}
}
</style>