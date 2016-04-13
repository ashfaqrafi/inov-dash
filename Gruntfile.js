module.exports = function(grunt){

	grunt.initConfig({
	sass: {
		dist: {
		  files: {
			'css/main.css': 'scss/main.scss'
		  }
		}
	  },
    autoprefixer: {
        options: {
          // autoprefixed options
            browsers: ['last 5 versions', 'Safari >= 5.0']
        },
        dist: {
          //  targeted files
            files: {
                'css/main.css': 'css/main.css'
            }
        }
      },
	  watch: {
		  css: {
			files: ['scss/**/*.scss'],
			tasks: ['sass'],
			options: {
			  livereload: true,
			},
		  },

          /*autoprefix: {
            files: ['css/main.css'],
			tasks: ['autoprefixer'],
          }*/
		},


		    uglify: {
		      options: {
		        manage: false,
		        preserveComments: 'all'
		      },
		      my_target:{
		        files:[{
		          expand: true,
		          cwd: 'js/',
		          src: '**/*.js',
		          dest: 'js',
		        }]
		      }
		    },

		    cssmin:{
		      my_target: {
		        files:[{
		          expand: true,
		          cwd: 'css/',
		          src: ['*.css','!*.min.css'],
		          dest: 'css/',
		          ext: '.min.css'
		        }]
		      }
		    }

	});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-autoprefixer');
// grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['sass','autoprefixer','uglify', 'cssmin']);

};
