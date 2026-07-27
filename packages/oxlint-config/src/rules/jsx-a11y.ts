import type { DummyRuleMap } from 'oxlint';

/**
 * jsx-a11y rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const jsxA11yRules = {
  'jsx-a11y/alt-text': [
    'warn',
    {
      'area': [],
      'img': [],
      'input[type="image"]': [],
      'object': [],
    },
  ],
  'jsx-a11y/anchor-ambiguous-text': [
    'off',
    {
      words: ['click here', 'here', 'link', 'a link', 'learn more'],
    },
  ],
  'jsx-a11y/anchor-has-content': 'warn',
  'jsx-a11y/anchor-is-valid': [
    'warn',
    {
      components: [],
      specialLink: [],
    },
  ],
  'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
  'jsx-a11y/aria-props': 'warn',
  'jsx-a11y/aria-proptypes': 'warn',
  'jsx-a11y/aria-role': [
    'warn',
    {
      allowedInvalidRoles: [],
      ignoreNonDOM: false,
    },
  ],
  'jsx-a11y/aria-unsupported-elements': 'warn',
  'jsx-a11y/autocomplete-valid': [
    'warn',
    {
      inputComponents: ['input'],
    },
  ],
  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/control-has-associated-label': [
    'warn',
    {
      controlComponents: [],
      depth: 2,
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      labelAttributes: [],
    },
  ],
  'jsx-a11y/heading-has-content': 'warn',
  'jsx-a11y/html-has-lang': 'warn',
  'jsx-a11y/iframe-has-title': 'warn',
  'jsx-a11y/img-redundant-alt': [
    'warn',
    {
      components: ['img'],
      words: ['image', 'photo', 'picture'],
    },
  ],
  'jsx-a11y/interactive-supports-focus': [
    'warn',
    {
      tabbable: [
        'button',
        'checkbox',
        'link',
        'searchbox',
        'spinbutton',
        'switch',
        'textbox',
      ],
    },
  ],
  'jsx-a11y/label-has-associated-control': [
    'warn',
    {
      assert: 'either',
      controlComponents: [],
      depth: 2,
      labelAttributes: ['alt', 'aria-label', 'aria-labelledby'],
      labelComponents: ['label'],
    },
  ],
  'jsx-a11y/lang': 'warn',
  'jsx-a11y/media-has-caption': [
    'warn',
    {
      audio: ['audio'],
      track: ['track'],
      video: ['video'],
    },
  ],
  'jsx-a11y/mouse-events-have-key-events': [
    'warn',
    {
      hoverInHandlers: ['onMouseOver'],
      hoverOutHandlers: ['onMouseOut'],
    },
  ],
  'jsx-a11y/no-access-key': 'warn',
  'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
  'jsx-a11y/no-autofocus': [
    'warn',
    {
      ignoreNonDOM: false,
    },
  ],
  'jsx-a11y/no-distracting-elements': 'warn',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
  'jsx-a11y/no-noninteractive-element-interactions': [
    'warn',
    {
      handlers: [
        'onError',
        'onLoad',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
        'onFocus',
        'onBlur',
        'onClick',
        'onContextMenu',
        'onDblClick',
        'onDoubleClick',
        'onDrag',
        'onDragEnd',
        'onDragEnter',
        'onDragExit',
        'onDragLeave',
        'onDragOver',
        'onDragStart',
        'onDrop',
        'onMouseDown',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseOut',
        'onMouseOver',
        'onMouseUp',
      ],
    },
  ],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
  'jsx-a11y/no-noninteractive-tabindex': [
    'warn',
    {
      allowExpressionValues: true,
      roles: ['tabpanel'],
      tags: [],
    },
  ],
  'jsx-a11y/no-redundant-roles': 'warn',
  'jsx-a11y/no-static-element-interactions': [
    'warn',
    {
      allowExpressionValues: false,
    },
  ],
  'jsx-a11y/prefer-tag-over-role': 'warn',
  'jsx-a11y/role-has-required-aria-props': 'warn',
  'jsx-a11y/role-supports-aria-props': 'warn',
  'jsx-a11y/scope': 'warn',
  'jsx-a11y/tabindex-no-positive': 'warn',
} satisfies DummyRuleMap;
