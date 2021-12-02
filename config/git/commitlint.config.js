module.exports = {
  rules: {
    // Максимальная длина заголовка 100 символа
    "header-max-length": [2, "always", 100],

    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],

    // Тип не может быть пустым
    "type-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    "type-enum": [
      2,
      "always",
      [
        'feat',
        'fix',
        'test',
        'refactor',
        'docs',
        'chore',
        'changelog',
        'release',
        'style',
        'draft',
        'revert'
      ]
    ],

    // Скоуп не может быть пустым
    "scope-empty": [2, 'never'],

    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

    // Описание не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],

    // Тело коммита должно начинаться с пустой строки
    "body-leading-blank": [2, "always"],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    "footer-leading-blank": [2, "always"],
  }
};