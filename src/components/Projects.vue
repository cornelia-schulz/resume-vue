<template>
    <article class='projects'>
        <h2>Projects</h2>
        <b-card no-body>
            <b-tabs card>
                <b-tab  v-for='(data, index) in projects' :key='index' title='title'>
                    <b-row>
                        <b-col>
                            <img src='' alt=''/>
                        </b-col>
                        <b-col>
                            {{data.title}}<br/>
                            {{data.year}}<br/>
                            {{data.description}}
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
      {'title': 'Localisation Blog',
        'year': '2018',
        'description': 'Technologies: React with Gatsby, HTML, CSS, JavaScript. A personal blog about localisation.',
        'image': '../assets/images/snake.jpg',
        'github': ''
      },
      {'title': 'Photolocations',
        'year': '2018',
        'description': 'Technologies: React, Redux, Express, Knex, Node, HTML, CSS, JavaScript. A personal project to find perfect photography locations.',
        'image': '../assets/images/snake.jpg',
        'github': ''
      },
      {'title': 'Snake',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. My version of the popular game Snake.',
        'image': '../assets/images/snake.jpg',
        'github': ''
      },
      {'title': 'Minesweeper',
        'year': '2018',
        'description': 'Technologies: HTML, CSS, JavaScript. This is an Auckland version of the popular game Minesweeper.',
        'image': '../assets/images/minesweeper.png',
        'github': ''
      },
      {'title': 'Photography Website',
        'year': '2014-2018',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, PHP. This is my own personal photography website. The aim was to exhibit my photographs in various categories which each come with a lightbox to enlarge the images.',
        'image': '../assets/images/cornelia-schulz-photography.png',
        'github': ''
      },
      {'title': 'Frogger',
        'year': '2014',
        'description': 'Technologies: HTML, CSS, JavaScript, jQuery, Canvas, OOP. This is my version of the classic arcade game Frogger. Collect jewels and keys to get through the gates to hamster as many points as you can.',
        'image': '../assets/images/frogger.png',
        'github': ''
      },
    ]
    }
  }
}
</script>