<template>
  <div class="lesson-teacher">
    <div>{{ lesson }}</div>
    <ScheduleLesson
      v-for="les in lesson"
      v-bind:key="les.id"
      v-bind:lessontime="les.lessontime"
      v-bind:theacherid="les.theacherid"
      v-bind:roomid="les.roomid"
      v-bind:groupid="les.groupid"
    ></ScheduleLesson>
  </div>
</template>

<script>
import ScheduleLesson from '@/components/Schedule/ScheduleLesson'
export default {
  name: 'ScheduleThescherDay',
  components: {
    ScheduleLesson
  },
  ScheduleLesson: 'ScheduleLesson',
  lesson: 'lesson',
  props: [
    'lesson'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    height: 4rem;
    background-color: bisque;
}
aside {
    width: 8rem;
    height: 20rem;
    background-color: bisque;
}
h2 {
    font-size: 1em;
}
main {
    display: flex;
}
.page {
    padding: 1em;
}
.week {
    border: 1px solid grey;
    display: flex;
}
    p {
        margin: 0;
        font-size: 0.9rem;
    }
    .lesson {
        border: 1px solid grey;
        padding: 0.5rem;
        margin: 0.5rem;
    }
    .week-lesson__tilte {
        display: flex;
        justify-content: space-between;
    }
    .week-lesson__body {
        display: flex;
    }
    .room {
        font-size: 0.6rem;
        color: grey;
    }
    .time {
        font-size: 0.6rem;
        color: grey;
    }
    .teacher {
        font-size: 0.7rem;
        color: grey;
        padding: 0 0.2rem;
    }
    .day {
        display: flex;
        flex-direction: column;
    }
    .lessons-day {
        display: flex;
    }
    .week-day {
        padding: 0;
        font-weight: 400;
        font-size: 0.6rem;
        color: #888888;
    }
    .lesson-data {
        padding: 0.2rem 0.4rem;
        font-size: 0.7rem;
        color: #666666;
    }
    .day {
        width: 600px;
        margin: 0 auto;
        border: 1px solid red;
    }
</style>

<!--
    computed: {
        getActualDate: function() {
            return getDate() + getMonth() + getFullYear()
            }
    }
-->
