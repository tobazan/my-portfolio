const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/my-portfolio',
    {
        branch: 'master',
        repo: 'https://github.com/tobazan/my-portfolio.git',
        user: {
            name: '<tobazan>',
            email: 'bazanme90@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)