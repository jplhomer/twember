import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  text: DS.attr( 'string' ),
  created_at: DS.attr( 'date' ),
  entities: DS.attr(),
  user: DS.attr(),

  /**
   * Print out a formatted text version of the tweet
   * @param  {string} 'text'     The original text
   * @param  {object} 'entities' Any entities like media or URLs
   * @return {string}            Formatted text for tweet
   */
  formattedText: Ember.computed('text', 'entities', function() {
    let formattedText = this.get('text'),
        entities = this.get('entities');

    // Replace links with pretty versions
    if ( entities.urls ) {
      for (var i = 0; i < entities.urls.length; i++) {
        formattedText = formattedText.replace(entities.urls[i].url, `<a href="${entities.urls[i].url}">${entities.urls[i].display_url}</a>`);
      }
    }

    // Remove media URLs
    if ( entities.media ) {
      for (var a = 0; a < entities.media.length; a++) {
        formattedText = formattedText.replace(entities.media[a].url, '');
      }
    }

    return formattedText;
  })
});
