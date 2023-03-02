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
                    <img class="skill-icon" :src="list.img"/>
                    <span class="skill-name">{{ list.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skill",
    data () {
        return{
            skills:[{
                title: 'Skills',
                index: 0,
                lists: [
                {id:1, name: "HTML5", img: require("@/assets/img/html.png")},
                {id:2, name: "CSS3", img: require("@/assets/img/css.png")},
                {id:3, name: "JavaScript", img: require("@/assets/img/javascript.png")},
                {id:4, name: "jQuery", img: require("@/assets/img/jquery.png")},
                {id:5, name: "React", img: require("@/assets/img/react.png")},
                {id:6, name: "Vue.js", img: require("@/assets/img/vue.png")},
                {id:7, name: "Python", img: require("@/assets/img/python.png")},
                {id:8, name: "Flask", img: require("@/assets/img/flask.png")},
                {id:9, name: "MongoDB", img: require("@/assets/img/mongodb.png")},
                {id:9, name: "Git", img: require("@/assets/img/git.png")},
                ]
            },{
                title: 'Tools',
                index: 1,
                lists: [
                {id:1, name: "VSCode", img: require("@/assets/img/vscode.png")},
                {id:2, name: "GitHub", img: require("@/assets/img/github.png")},
                {id:3, name: "Pycharm", img: require("@/assets/img/pycharm.png")},
                {id:4, name: "Photoshop", img: require("@/assets/img/photoshop.png")},
                {id:5, name: "Illustrator", img: require("@/assets/img/illustrator.png")},
                {id:6, name: "Promiere Pro", img: require("@/assets/img/premierepro.png")},
                {id:7, name: "After Effects", img: require("@/assets/img/aftereffects.png")},
            ]
            }]
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