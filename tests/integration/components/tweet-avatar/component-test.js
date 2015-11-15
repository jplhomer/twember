import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tweet-avatar', 'Integration | Component | tweet avatar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{tweet-avatar}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('user', {
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png',
    name: 'Josh'
  });

  // Template block usage:
  this.render(hbs`
    {{#tweet-avatar user=user}}{{/tweet-avatar}}
  `);

  assert.equal(this.$().children().html().trim(), '<img src="https://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png" alt="Josh\'s Profile Photo">');
});
