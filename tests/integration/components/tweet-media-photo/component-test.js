import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tweet-media-photo', 'Integration | Component | tweet media photo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{tweet-media-photo}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('media', {
    "id": 663535229450084400,
    "id_str": "663535229450084354",
    "indices": [
      96,
      119
    ],
    "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
    "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
    "url": "https://t.co/emrdDiUIN3",
    "display_url": "pic.twitter.com/emrdDiUIN3",
    "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
    "type": "photo",
    "sizes": {
      "thumb": {
        "w": 150,
        "h": 150,
        "resize": "crop"
      },
      "small": {
        "w": 340,
        "h": 191,
        "resize": "fit"
      },
      "medium": {
        "w": 600,
        "h": 337,
        "resize": "fit"
      },
      "large": {
        "w": 949,
        "h": 534,
        "resize": "fit"
      }
    }
  });

  // Template block usage:
  this.render(hbs`
    {{#tweet-media-photo media=media}}{{/tweet-media-photo}}
  `);

  assert.equal(this.$().children().find('.block__media').attr('class'), 'block__media block__media--photo');

  // ????
  assert.equal(this.$().find('img')[0], '<img alt="Photo" src="https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg"></img>');
});
