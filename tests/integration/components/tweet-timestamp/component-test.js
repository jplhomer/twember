import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tweet-timestamp', 'Integration | Component | tweet timestamp', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tweet-timestamp}}`);

  this.set('time', new Date());

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tweet-timestamp time=time}}
      template block text
    {{/tweet-timestamp}}
  `);

  assert.equal(this.$().text().trim(), 'a few seconds ago');
});
