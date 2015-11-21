import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tweet-list/tweet-post', 'Integration | Component | tweet list/tweet post', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tweet-list/tweet-post}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tweet-list/tweet-post}}
      template block text
    {{/tweet-list/tweet-post}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
