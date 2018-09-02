<template>
    <article class='projects'>
        <h2>Projects</h2>
        <b-card no-body>
            <b-tabs card>
                <b-tab  v-for='(data, index) in projects' :key='index' v-bind:title=data.title>
                    <b-row>
                        <b-col>
                            <img v-bind:src="data.image"  v-bind:alt=data.title />
                        </b-col>
                        <b-col>
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
    projects: [
      {'title': 'Lost in Translation',
        'year': '2018',
        'description': 'Technologies: React with Gatsby, HTML, CSS, JavaScript. A personal blog about localisation.',
        'image': '../assets/images/snake.jpg',
        'github': 'https://github.com/cornelia-schulz/lost-in-translation'
      },
      {'title': 'Photolocations',
        'year': '2018',
        'description': 'Technologies: React, Redux, Express, Knex, Node, HTML, CSS, JavaScript. A personal project to find perfect photography locations.',
        'image': '../assets/images/snake.jpg',
        'github': 'https://github.com/cornelia-schulz/photolocations'
      },
      {'title': 'Snake',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. My version of the popular game Snake.',
        'image': '../assets/images/snake.jpg',
        'github': 'https://github.com/cornelia-schulz/snake'
      },
      {'title': 'Minesweeper',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. This is an Auckland version of the popular game Minesweeper.',
        'image': '../assets/images/minesweeper.png',
        'github': 'https://github.com/cornelia-schulz/minesweeper'
      },
      {'title': 'Photography Website',
        'year': '2014-2018',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, PHP. This is my own personal photography website. The aim was to exhibit my photographs in various categories which each come with a lightbox to enlarge the images.',
        'image': '../assets/images/cornelia-schulz-photography.png',
        'github': 'https://github.com/cornelia-schulz/cornelia-schulz-photography'
      },
      {'title': 'Frogger',
        'year': '2014',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, Canvas, OOP. This is my version of the classic arcade game Frogger. Collect jewels and keys to get through the gates to hamster as many points as you can.',
        'image': '../assets/images/frogger.png',
        'github': 'https://github.com/cornelia-schulz/frogger'
      },
    ]
    }
  }
}
</script>

<style>
.projects {
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  -webkit-box-shadow: 10px 13px 25px -11px rgba(52,9,51,0.74);
  -moz-box-shadow: 10px 13px 25px -11px rgba(52,9,51,0.74);
  box-shadow: 10px 13px 25px -11px rgba(52,9,51,0.74);
  color: #F0EBD8;
}

.card-header {
  background-color: #0D1321 !important;
}

.tab-content, .nav-item {
  background-color: #1D2D44;
}

.nav-item {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0;
}

.nav-tabs .nav-link.active {
  background-color: #F0EBD8 !important;
}


</style>