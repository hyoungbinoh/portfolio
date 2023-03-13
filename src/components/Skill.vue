<template>
    <div class="common-container">
        <div 
            v-for="skill in skills"
            :key="skill.index"
            class="skill-wrap"
        >
            <h2 class="common-title">{{ skill.title }}</h2>
            <div class="skill-box">
                <div
                    v-for="list in skill.lists"
                    :key="list" 
                    class="skill-list"
                >
                    <img class="skill-icon" :src="require(`@/assets/img/${list.img}.png`)"/>
                    <span class="skill-name">{{ list.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { ref } from 'vue'

export default {
    name: "Skill",
    setup() {
        const skills = ref([]);

        const getSkill = async() => {
            try {
                const res = await axios.get('https://c0e36c31-e50a-49f7-b76a-c4fca97c9858.mock.pstmn.io/skills')
                skills.value = res.data;
            } catch (err) {
                console.log(err)
            }
        }

        getSkill()

        return{
            skills
        }
    }
}
</script>

<style scoped>
    .skill-wrap {
        margin: 1rem auto 2.5rem auto;
    }
    .skill-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
    .skill-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: .5rem;
    }
    .skill-icon {
        width: 6rem;
        height: 6rem;
    }
    .skill-name {
        color: black;
        font-size: 1rem;
    }
</style>