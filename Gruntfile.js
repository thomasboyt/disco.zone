module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    secret: grunt.file.readJSON('secret.json'),

    sftp: {
      options: {
        path: '<%= secret.path %>',
        host: '<%= secret.host %>',
        username: '<%= secret.username %>',
        agent: process.env.SSH_AUTH_SOCK,
        showProgress: true,
        srcBasePath: 'public/',
        createDirectories: false
      },

      main: {
        files: {
          './': ['public/**']
        }
      }
    }
  });

  grunt.registerTask('deploy', ['sftp']);

};
