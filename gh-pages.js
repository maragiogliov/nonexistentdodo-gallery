var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/nonexistentdodo/nonexistentdodo-gallery.git', // Update to point to your repository  
        user: {
            name: 'nonexistentdodo', // update to use your name
            email: 'nonexistentdodo@protonmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    })