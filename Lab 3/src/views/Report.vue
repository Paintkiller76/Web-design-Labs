<template>
  <div>
    <p>Ім'я: {{ this.$store.state.quiz.name }}</p>
    <p>Знайомий(а) з: {{ this.$store.state.quiz.os }}</p>
    <p>Основна OS: {{ this.$store.state.quiz.mainOs }}</p>
    <p>Бажання перейти на іншу OS: {{ this.$store.state.quiz.wishOs }}</p>
    <p>Комментар:</p>
    <p style="white-space: pre-line;">{{ this.$store.state.quiz.comm }}</p>
    <br>
    <button @click="home()">Назад</button>
  </div>
</template>

<script>

export default {
  methods: {
    home(){
      this.$router.push({name: "Home"})
    }
  }
}

</script>