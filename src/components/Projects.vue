<template>
    <article class='projects'>
        <h2>Projects</h2>
        <b-card no-body>
            <b-tabs card >
                <b-tab class='project-tab'  v-for='(data, index) in projects' :key='index' v-bind:title="(index + 1).toString()">
                    <b-row id='project-row'>
                        <b-col class='project-pane'>
                            <img class='project-img' v-bind:alt=data.title :src="getImgUrl(data.image)" />
                        </b-col>
                        <b-col class='project-pane'>
                            <h3>{{data.title}}</h3>
                            <p>{{data.year}}</p>
                            <p>{{data.description}}</p>
                            <p><a v-bind:href='data.github' target='_blank'>Click here to look at the {{data.title}} Github repository</a></p>
                        </b-col>
                    </b-row>
                </b-tab>
            </b-tabs>
        </b-card>
    </article>
    
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return{
      baseUrl: process.env.PUBLIC_PATH,
    projects: [
      {'title': 'Lost in Translation',
        'year': '2018',
        'description': 'Technologies: React with Gatsby, HTML, CSS, JavaScript. A personal blog about localisation.',
        'image': 'lost-in-translation',
        'github': 'https://github.com/cornelia-schulz/lost-in-translation',
        'website': '' 
      },
      {'title': 'Photolocations',
        'year': '2018',
        'description': 'Technologies: React, Redux, Express, Knex, Node, HTML, CSS, JavaScript. A personal project to find perfect photography locations.',
        'image': 'photolocations',
        'github': 'https://github.com/cornelia-schulz/photolocations',
        'website': ''
      },
      {'title': 'Snake',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. My version of the popular game Snake.',
        'image': 'snake',
        'github': 'https://github.com/cornelia-schulz/snake',
        'website': 'https://cornelia-schulz.github.io/snake/'
      },
      {'title': 'Minesweeper',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. This is an Auckland version of the popular game Minesweeper.',
        'image': 'minesweeper',
        'github': 'https://github.com/cornelia-schulz/minesweeper',
        'website': 'https://cornelia-schulz.github.io/minesweeper/'
      },
      {'title': 'Photography Website',
        'year': '2014-2018',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, PHP. This is my own personal photography website. The aim was to exhibit my photographs in various categories which each come with a lightbox to enlarge the images.',
        'image': 'cornelia-schulz-photography',
        'github': 'https://github.com/cornelia-schulz/cornelia-schulz-photography',
        'website': ''
      },
      {'title': 'Frogger',
        'year': '2014',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, Canvas, OOP. This is my version of the classic arcade game Frogger. Collect jewels and keys to get through the gates to hamster as many points as you can.',
        'image': 'frogger',
        'github': 'https://github.com/cornelia-schulz/frogger',
        'website': ''
      },
    ]
    }
  },
  methods: {
    getImgUrl(img) {
      var images = require.context('../assets/images', false, /\.png$/)
      return images('./' + img + ".png")
    }
  }
}
</script>

<style>
.projects {
  padding-top: 20px;
  padding-bottom: 20px;
}

.projects .card {
  border: none;
  color: #F0EBD8;
  background: transparent;
}

.card-header {
  background-color: #0D1321 !important;
}

.projects .card-header:first-child {
  border-top-right-radius: 20px;
  border-top-left-radius: 38px;
}

.nav-item {
  background-color: #1D2D44;
}

.tab-content {
  background-color: #1D2D44;
  border-bottom-right-radius: 110px;
  border-bottom-left-radius: 18px;
}

.nav-item {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0;
}

.nav-tabs .nav-link.active {
  background-color: #748CAB !important;
  color: #0D1321 !important;
}

.project-img {
  width: 100%;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .project-tab {
    padding: 2px;
  }
  #project-row {
    display: block;
  }
  .project-pane {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .nav-link {
    padding: 11px;
    margin: 0;
  }
  .nav-item {
    margin-left: 5px;
    margin-right: 5px;
  }
}

</style>