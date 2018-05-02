<template>
    <div class="lesson">Lesson</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<!--
        <div class="week-lesson__tilte">
            <p>lessonTitle</p>
            <p class="group-number">{{ groupId }}</p>
        </div>
        <div class="week-lesson__body">
            <p class="room">{{ getRoomName() }}</p>
            <p class="teacher">{{ theacherId }}</p>
            <p class="time">{{ lessonTime }}</p>
        </div>
    </div>
<script>
import DBrooms from '@/db/db-rooms'
import DBtheachers from '@/db/db-theachers'
export default {
  name: 'ScheduleLesson',
  DBrooms: 'DBrooms',
  DBtheachers: 'DBtheachers',
  components: {
    DBrooms,
    DBtheachers
  },
  props: {
    groupId: {
      type: String,
      dafault () { return 'П' }
    },
    lessonTime: {
      type: String,
      dafault () { return '20:00' }
    },
    roomId: {
      type: String,
      dafault () { return '0' }
    },
    theacherId: {
      type: String,
      dafault () { return 'АК' }
    }
  },
  computed: {
    getRoomName: function () {
      var RoomName = ''
      console.log('.DBrooms', DBrooms)
      console.log('roomId', roomId)
      for (var key in DBrooms) {
        if (DBrooms[id] === roomId) {
          RoomName = DBrooms[title]
          console.log('RoomName', RoomName)
        }
      }
      return RoomName
    }
  }
}
</script> -->
