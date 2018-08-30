<template>
    <article class='courses'>
        <h2>Courses & Certificates</h2>
        <ul>
            <li v-for='(data, index) in courses' :key='index' >
                {{data.course}} - {{data.school}} <br/>
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
      {'course': 'ITIL FOundation',
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