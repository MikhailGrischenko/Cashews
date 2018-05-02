<template>
  <div class="day">
    <span class="week-day">{{ getActualWeekDay(date) }}</span>
    <span class="lesson-data">{{ transfomFormatDate(date) }}</span>
    <!-- <div>{{ LessonsOfTheDay }}</div>
    <div>{{ lessonsTheacherDay() }}</div> -->
    <div class="lessons-day">
      <div id="v-for-QuantityTheacherDay()" :key class="theacher">
        <SheduleThecherDay
          v-for="lesson in GetLessonsTheacher()"
          v-bind:key="lesson.id"
          v-if="TheacheridInDay[key] === lessonsTheacher[key].theacherid"
          v-bind:lesson="lesson"
        ></SheduleThecherDay>
      </div>
    </div>
  </div>
</template>

<script>
import SheduleThecherDay from '@/components/Schedule/SheduleThecherDay'
import DBlessons from '@/db/db-lessons'
export default {
  name: 'ScheduleDay',
  components: {
    DBlessons,
    SheduleThecherDay
  },
  DBlessons: 'DBlessons',
  SheduleThecherDay: 'SheduleThecherDay',
  props: [
    'date',
    'LessonsOfTheDay'
  ],
  methods: {
    getActualWeekDay: function (date) {
      var weekDay = new Date(this.date)
      var WeekDayNumber = weekDay.getDay()
      var StringWeekDayNumber = String(WeekDayNumber)
      var actualWeekDay = null
      switch (StringWeekDayNumber) {
        case '1':
          actualWeekDay = 'понедельник'
          break
        case '2':
          actualWeekDay = 'вторник'
          break
        case '3':
          actualWeekDay = 'среда'
          break
        case '4':
          actualWeekDay = 'четверг'
          break
        case '5':
          actualWeekDay = 'пятница'
          break
        case '6':
          actualWeekDay = 'суббота'
          break
        case '0':
          actualWeekDay = 'воскресенье'
          break
        default:
          actualWeekDay = 'упс... ошибка'
      }
      /* console.log('actualWeekDay >', actualWeekDay)
      console.log('StringWeekDayNumber >', StringWeekDayNumber) */
      return actualWeekDay
    },
    transfomFormatDate: function (date) {
      var massivDate = this.date.split(', ')
      var dd = massivDate.slice(2, 3)
      var mm = massivDate.slice(1, 2)
      var yyyy = massivDate.slice(0, 1)
      var formatDate = dd + '.' + mm + '.' + yyyy
      return formatDate
    }
  },
  data () {
    LessonsTheacher: {}
  },
  computed: {
    GetLessonsTheacher: function () {
      var LessonsTheacher = {}
      console.log('DBlessons >', DBlessons)
      console.log('LessonsOfTheDay >', this.LessonsOfTheDay)
      for (var key1 in this.LessonsOfTheDay) {
        for (var key2 in DBlessons) {
          if (DBlessons[key2].id === this.LessonsOfTheDay[key1].lessonid) {
            LessonsTheacher[key2] = DBlessons[key1]
          }
        }
      }
      return LessonsTheacher
    },
    GetTheacheridInDay: function () {
      console.log('LessonsTheacher >', this.LessonsTheacher)
      var TheacheridInDay = {}
      for (var i in this.LessonsTheacher) {
        var str = this.LessonsTheacher[i].theacherid
        TheacheridInDay[str] = str
      }
      return TheacheridInDay
    },
    GetQuantityTheacherDay: function () {
      var QuantityTheacherDay = 0
      for (var j in this.TheacheridInDay) {
        QuantityTheacherDay++
      }
      console.log('TheacheridInDay >', this.TheacheridInDay)
      console.log('QuantityTheacherDay >', QuantityTheacherDay)
      return QuantityTheacherDay
    }
  }
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
        border: 1px solid green;
    }
</style>
