<template>
    <article class='education'>
        <h2>Education</h2>
        <b-row class='education-text'>
            <b-col>
                <span class='title'>{{school}} - {{title}}</span> <br/>
                {{time}}<br/>
                {{majors}}
            </b-col>
            <b-col>
                {{location}}
            </b-col>
        </b-row>
    </article>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return{
 
      school: 'Martin-Luther-University',
        title: 'Masters',
        time: '1996 - 2001',
        location: 'Halle (Saale), Germany',
        majors: 'Majors: Japanese Studies, Hispanic Studies'
    }
  }
}
</script>

<style>
.education {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #0D1321;
}

.title {
  color: #748CAB;
  font-size: 1.2rem;
}

.education-text {
    padding-left: 10px;
}
</style>