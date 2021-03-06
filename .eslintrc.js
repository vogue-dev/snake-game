// eslint-disable-next-line no-undef
module.exports = {
  root:    true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser:        '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    sourceType:           'module',
    project:              ['./tsconfig.json'], // could be tsconfig.json too
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    es6:     true,
    jest:    true,
  },
  plugins:  ['@typescript-eslint', '@typescript-eslint/tslint', 'prettier'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths:      ['./src'],
      },
    },
  },
  rules: {
    'jsx-quotes':                               ['error', 'prefer-single'],
    'no-multi-spaces':                          'error',
    'no-extra-semi':                            'error',
    'no-empty':                                 'error',
    'no-dupe-keys':                             'error',
    'no-dupe-else-if':                          'error',
    'no-cond-assign':                           'error',
    'space-in-parens':                          ['error', 'always', { exceptions: ['empty'] }],
    'object-curly-spacing':                     ['error', 'always'],
    'no-duplicate-imports':                     'error',
    'operator-linebreak':                       ['error', 'before'],
    'arrow-parens':                             ['error', 'always'],
    'brace-style':                              'error',
    'no-redeclare':                             'error',
    'multiline-ternary':    ['error', 'always-multiline'],
    'key-spacing':          [
      'error',
      {
        singleLine: {
          beforeColon: false,
          mode:        'minimum',
          afterColon:  true,
        },
        multiLine: {
          beforeColon: false,
          afterColon:  true,
          mode:        'minimum',
          align:       'value',
        },
      },
    ],
    '@typescript-eslint/await-thenable':                 ['error'],
    '@typescript-eslint/no-for-in-array':                ['error'],
    '@typescript-eslint/no-misused-promises':            ['error'],
    '@typescript-eslint/no-unnecessary-type-assertion':  ['error'],
    '@typescript-eslint/prefer-includes':                ['error'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    'require-await':                                     ['off'],
    '@typescript-eslint/require-await':                  ['error'],
    '@typescript-eslint/unbound-method':                 ['error'],
    'no-var':                                            'error',
    'prefer-const':                                      ['error'],
    'prefer-rest-params':                                ['error'],
    'prefer-spread':                                     ['error'],
    '@typescript-eslint/naming-convention':              [
      'error',
      {
        'selector': [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        'format':    null,
        'modifiers': ['requiresQuotes'],
      },
    ],
    '@typescript-eslint/indent':                         [
      'error',
      2,
      {
        ObjectExpression: 'first',
        SwitchCase:       1,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter:   'semi',
          requireLast: true,
        },
        singleline: {
          delimiter:   'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-use-before-define':     ['error', { functions: true, classes: true, variables: true }],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes':                   ['error', 'single'],
    '@typescript-eslint/semi':                     ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing':  'error',
    'arrow-body-style':                            'error',
    camelcase:                                     'error',
    'comma-dangle':                                ['error', 'always-multiline'],
    'eol-last':                                    'error',
    eqeqeq:                                        ['error', 'smart'],
    'id-match':                                    'error',
    'max-len':                                     [
      'error',
      {
        code: 130,
      },
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-eval':                          'error',
    'no-trailing-spaces':               'error',
    'no-underscore-dangle':             'error',
    'comma-spacing':                    ['error', { before: false, after: true }],
    'no-unsafe-finally':                'error',
    'space-before-function-paren':      'error',
    'spaced-comment':                   'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'array-bracket-spacing': ['error', 'never'],
          'object-curly-spacing':  ['error', 'always'],
          'one-line':              ['error', 'check-open-brace', 'check-whitespace'],
          'space-in-parens':       ['error', 'always'],
          'padded-blocks':         ['error', 'never'],
          whitespace:              [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-module',
            'check-type',
          ],
        },
      },
    ],
  },
};
