<template>
  <div class="collacton-of-day">
    <ScheduleDay
      v-for="LessonsOfTheDay in getLessonOfDay(date1)"
      v-bind:key="LessonsOfTheDay.id"
      v-bind:date="date1"
      v-bind:LessonsOfTheDay="LessonsOfTheDay.lesson"
    ></ScheduleDay>
  </div>
</template>

<script>
import ScheduleDay from '@/components/Schedule/ScheduleDay'
import DBday from '@/db/db-day'
export default {
  name: 'ScheduleCollectionOfDay',
  components: {
    ScheduleDay,
    DBday
  },
  ScheduleDay: 'ScheduleDay',
  DBday: 'DBday',
  methods: {
    getActualDate: function () {
      var date = new Date()
      var actualDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
      console.log('actualdate >', actualDate)
      return actualDate
    },
    getLessonOfDay: function (criterion) {
      var LessonsOfDay = {}
      /* console.log('DBday >', DBday) */
      for (var key in DBday) {
        if (DBday[key].date === criterion) {
          LessonsOfDay[key] = DBday[key]
          /* console.log('LessonsOfDay >', LessonsOfDay)
          console.log('date >', LessonsOfDay[key].date) */
        }
      }
      return LessonsOfDay
    }
  },
  data: function () {
    return {
      date1: '2018, 04, 16',
      date2: '2018, 04, 17',
      date3: '2018, 04, 18'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
