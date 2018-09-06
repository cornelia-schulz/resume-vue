<template>
    <article class='courses'>
        <h2>Courses & Certificates</h2>
        <ul>
            <li v-for='(data, index) in courses' :key='index' >
                <span class='title'>{{data.course}} - {{data.school}}</span> <br/>
                {{data.year}}
            </li>
        </ul>
    </article>
    
</template>

<script>
export default {
  name: 'Education',
  data() {
    return{
    courses: [
      {'course': 'Web Development Bootcamp',
        'school': 'Enspiral Dev Academy',
        'year': '2018'
      },
      {'course': 'ITIL Foundation',
        'school': 'Axelos',
        'year': '2017'
      },
      {'course': 'Front-end Developer Nanodegree',
        'school': 'Udacity',
        'year': '2014'
      },
      {'course': 'Programming for Everybody',
        'school': 'Coursera',
        'year': '2014'
      },
      {'course': 'HTML, CSS, JavaScript, jQuery',
        'school': 'Codecademy',
        'year': '2014'
      },
      {'course': 'Prince2 Foundation & Practicioner',
        'school': 'APMG',
        'year': '2013'
      },
    ]
    }
  }
}
</script>

<style>
.courses {
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  padding-top: 5px;
  padding-bottom: 10px;
}
</style>