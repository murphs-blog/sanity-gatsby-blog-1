export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d137ff19c9b738389910997',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-1-studio',
                  apiId: 'cd410c0c-d43d-44e0-b468-4a202f3ddea7'
                },
                {
                  buildHookId: '5d137ff16b38fb9b9e1d3ca5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-1',
                  apiId: 'b5e9def8-4db8-4c1e-bdab-e2f05f24479f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/murphs-blog/sanity-gatsby-blog-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
