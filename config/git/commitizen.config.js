module.exports = {
  // Тип коммита
  types: [
    { value: 'feat', name: 'feat:      Adding new feature (MINOR version)' },
    { value: 'fix', name: 'fix:       Bug fix (PATCH version)' },
    { value: 'test', name: 'test:      Adding tests or change tests' },
    {
      value: 'refactor',
      name: 'refactor:  Editing code without fixing bugs or adding new features',
    },
    { value: 'docs', name: 'docs:      Documentation changes' },
    {
      value: 'chore',
      name:
          'chore:     Add / update / customize tools and libraries',
    },
    { value: 'changelog', name: 'changelog: Add / update / changelog' },
    { value: 'release', name: 'release:   New version' },
  ],

  // Скоуп изменений
  scopes: [{name: 'component'}, {name: 'global'}, {name: 'tokens'}],

  // Описание шагов
  messages: {
    type: 'Type of change:',
    scope: 'Scope of change (optional):',
    customScope: 'Enter your scope:',
    subject: 'Summary of changes:\n',
    body: 'Detailed description of changes:\n',
    breaking: 'Description BREAKING CHANGES (only MAJOR version):\n',
    footer: 'Issue number  (Example: LK-101 LK-102):\n',
    confirmCommit: 'Save the resulting commit?'
  },

  // Доп опции
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'test', 'docs', 'chore'],
  allowCustomScopes: true,
  footerPrefix: 'Closes:',
  subjectLimit: 100
}