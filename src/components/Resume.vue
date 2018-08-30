<template>
  <div id="resume">
    <Header />
    <div class="container">
        <work-experience msg="Welcome to Your Vue.js App"/>
        <projects />
        <education />
        <courses />
    </div>
    <Footer />
  </div>
</template>

<script>
import WorkExperience from './WorkExperience.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Education from './Education.vue'
import Projects from './Projects.vue'
import Courses from './Courses.vue'

export default {
  name: 'app',
  components: {
    WorkExperience,
    Header,
    Footer,
    Projects,
    Education,
    Courses
  }
}
</script>