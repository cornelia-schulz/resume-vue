<template>
  <article class='workexperience'>
    <h2>Work Experience</h2>
    <ul>
      <li v-for='(data, index) in work' :key='index'>
        <span class = 'title'>{{data.title}} - {{data.company}}</span> <br/>
        {{data.time}}<br/>
        {{data.description}}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return{
    work: [
      {'title': 'Localisation Coordinator',
        'company': 'Fraedom Company Ltd',
        'time': 'Aug 2017 - ongoing',
        'location': 'Auckland, NZ',
        'description': 'Management of the localisation process within Fraedom'
      },
      {'title': 'Software Developer - Localisation',
        'company': 'Fisher & Paykel Healthcare',
        'time': 'May 2015 - Aug 2017',
        'location': 'Auckland, NZ',
        'description': 'Overall management of the software localisation process within Obstructive Sleep Apnoea (OSA) division'
      },
      {'title': 'Freelance Translator',
        'company': 'Self-employed',
        'time': 'Oct 2013 - May 2015',
        'location': 'Auckland, NZ',
        'description': 'I worked as an English to German freelance translator for a number of companies and agencies worldwide in the following areas: (1)Travel & Tourism (2)Technical documentation (3)Marketing documents (brochures, leaflets, etc) (4)General. My main specialities are Technical Documentation and Travel and Tourism due to having worked and trained in these areas extensively throughout the last 8 years.'
      },
      {'title': 'Localisation Executive',
        'company': 'Skyscanner Ltd',
        'time': 'Dec 2011 - Oct 2013',
        'location': 'Edinburgh, UK',
        'description': 'My main role at Skyscanner involved working with the localisation and internationalisation side of the company. The role is split between working with many different parts of the company to improve the process and quality of localisation resources, and managing distributed localisation teams to handle the nearly 40 languages and cultures they offer on the website.'
      }
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workexperience {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #0D1321;
}

.title {
  color: #748CAB;
  font-size: 1.2rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding-top: 5px;
  padding-bottom: 10px;
}
a {
  color: #42b983;
}
</style>
