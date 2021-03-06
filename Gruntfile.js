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
        createDirectories: true
      },

      main: {
        files: {
          './': ['public/**', '!public/images/**']
        }
      },

      images: {
        files: {
          './': ['public/images/**']
        }
      },
    }
  });
};
