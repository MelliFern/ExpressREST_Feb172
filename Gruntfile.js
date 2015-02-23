'use strict';
module.exports=function(grunt){
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-simple-mocha');
   grunt.initConfig({
  jshint:{
   dev:{
     options:{
    node:true, 
    globals:{
     describe:true, 
     it:true,
     before:true,
     beforeEach:true, 
     after:true
    
    } 

    },
      src:['Gruntfile.js','lib/**/*.js','test/**/*.js','app.js']
    }
  },

  simplemocha:{
      all:{  src:['test/**/*.js'] }   
  
    }    


   });

   grunt.registerTask('test',['jshint:dev','simplemocha:all']);

};
