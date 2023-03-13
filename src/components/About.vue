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
                    <a class="about-text about-link" href="https://github.com/hyoungbinoh">https://github.com/hyoungbinoh</a>
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
import axios from 'axios'
import { ref } from 'vue'

export default {
    name: 'About',
    setup() {
        const abouts = ref([]);
        const educations = ref([]);

        const getAbout = async() => {
            try {
                const res = await axios.get('https://c0e36c31-e50a-49f7-b76a-c4fca97c9858.mock.pstmn.io/abouts')
                abouts.value = res.data;
            } catch (err) {
                console.log(err)
            }
        }

        getAbout()

        const getEducation = async() => {
            try {
                const res = await axios.get('https://c0e36c31-e50a-49f7-b76a-c4fca97c9858.mock.pstmn.io/educations')
                educations.value = res.data;
            } catch (err) {
                console.log(err)
            }
        }

        getEducation()

        return {
            abouts,
            educations
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
    margin-top: 1.2rem;
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
    margin-top: 1.2rem;
}
.education-list {
    text-align: left;
    width: 30rem;
    margin: 1rem;
}
.about-text {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    margin-top: 0.5rem;
}
.about-link {
    display: inline-block;
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
    margin-top: 0.8rem;
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