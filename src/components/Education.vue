<template>
    <article class='education'>
        <h2>Education</h2>
        <b-row>
            <b-col>
                {{school}} - {{title}} <br/>
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