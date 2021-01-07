const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'view name please',
    validate: notEmpty('name')
  },
  {
    type: 'input',
    name: 'title',
    message: 'title',
    validate: notEmpty('title')
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    },
    {
      name: '<script>',
      value: 'script',
      checked: true
    },
    {
      name: 'style',
      value: 'style',
      checked: true
    }
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'View require at least a <script> or <template> tag.'
      }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{name}}'
    const title = '{{title}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/{{dashCase name}}/index.vue`,
        templateFile: 'plop-templates/table-and-detail/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      },
      {
        type: 'add',
        path: `src/views/{{dashCase name}}/create.vue`,
        templateFile: 'plop-templates/table-and-detail/create.hbs',
        data: {
          name: name
        }
      },
      {
        type: 'add',
        path: `src/views/{{dashCase name}}/edit.vue`,
        templateFile: 'plop-templates/table-and-detail/edit.hbs',
        data: {
          name: name
        }
      },
      {
        type: 'add',
        path: `src/views/{{dashCase name}}/route.xtx`,
        templateFile: 'plop-templates/table-and-detail/route.hbs',
        data: {
          name: name,
          title: title
        }
      },
      {
        type: 'add',
        path: `src/views/{{ dashCase name }}/components/{{ properCase name }}Detail.vue`,
        templateFile: 'plop-templates/table-and-detail/detail.hbs',
        data: {
          name: name,
          title: title
        }
      }
    ]

    return actions
  }
}
