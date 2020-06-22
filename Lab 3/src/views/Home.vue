<template>
  <div>

    <p><h3>Опитування</h3><p>
    <p><h4>Ваше ім'я:</h4><p>
    <input v-model="name" placeholder="введіть ім'я">

    <p><h4>З якими операційними системами ви знайомі?</h4><p>
    
    <div>
      <input type="checkbox" id="Windows" value="Windows" v-model="os">
      <label for="Windows">Windows</label>
      <br>
      <input type="checkbox" id="MacOS" value="MacOS" v-model="os">
      <label for="MacOS">MacOS</label>
      <br>
      <input type="checkbox" id="Linux" value="Linux" v-model="os">
      <label for="Linux">Linux</label>
    </div>

    <p><h4>Яку операційну систему ви вважаєте своєю основною?</h4><p>
    <div>
      <label>Windows</label>
      <input
        type='radio'
        value='Windows'
        v-model='mainOs'
      />
    </div>

    <div>
      <label>MacOS</label>
      <input
        type='radio'
        value='MacOS'
        v-model='mainOs'
      />
    </div>

    <div>
      <label>Linux</label>
      <input
        type='radio'
        value='Linux'
        v-model='mainOs'
      />
    </div>

    <p><h4>Чи бажаєте ви перейти на іншу операційну систему? Якщо так, то чому?</h4><p>
    <div>
      <label>Так</label>
      <input
        type='radio'
        value='Так'
        v-model='wishOs'
      />
    </div>

    <div>
      <label>Ні</label>
      <input
        type='radio'
        value='Ні'
        v-model='wishOs'
      />
    </div>

    <br>
    <textarea v-model="comm" placeholder="Опишіть причину"></textarea>
    <br>
    <button @click="report()">Звіт</button>
  </div>
</template>

<script>
import Model from "../model/model.js"


export default {
  data () {
    return {
      os: this.$store.state.quiz.os,
      mainOs: this.$store.state.quiz.mainOs,
      wishOs: this.$store.state.quiz.wishOs,
      name: this.$store.state.quiz.name, 
      comm: this.$store.state.quiz.comm
    }
  },
  watch: {
    os() {
      this.$store.commit("setQuizData",new Model(this.os, this.mainOs, this.wishOs, this.name, this.comm))
    },
    mainOs() {
      this.$store.commit("setQuizData",new Model(this.os, this.mainOs, this.wishOs, this.name, this.comm))
    },
    wishOs() {
      this.$store.commit("setQuizData",new Model(this.os, this.mainOs, this.wishOs, this.name, this.comm))
    },
    name() {
      this.$store.commit("setQuizData",new Model(this.os, this.mainOs, this.wishOs, this.name, this.comm))
    },
    comm() {
      this.$store.commit("setQuizData",new Model(this.os, this.mainOs, this.wishOs, this.name, this.comm))
    },
  },
  methods: {
    report(){
      this.$router.push({name: "Report"})
    }
  }
}

</script>
