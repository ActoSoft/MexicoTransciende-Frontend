module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
			4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'react/jsx-uses-vars': [2],
        'react/prop-types': 0,
        'no-console': 0,
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'linebreak-style': 0,
        'space-infix-ops': 'error',
        'no-mixed-spaces-and-tabs': 0,
        'no-cond-assign': [
            'error',
            'always'
        ],
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'no-extra-parens': 'error',
        'no-irregular-whitespace': 'error',
        'no-template-curly-in-string': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-equals-spacing': [2, 'always'],
        'react/jsx-curly-spacing': [2, {'when': 'always', 'spacing': {
            'objectLiterals': 'never'
          }}],
        "react/jsx-closing-bracket-location": [2, "tag-aligned"]
    }
}