import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tweet-media', 'Integration | Component | tweet media', {
  integration: true
});

test('it renders', function(assert) {
  // assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tweet-media}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tweet-media}}
      template block text
    {{/tweet-media}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
