import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr( 'string' ),
  created_at: DS.attr( 'date' ),
  entities: DS.attr(),

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
      for (var i = 0; i < entities.media.length; i++) {
        formattedText = formattedText.replace(entities.media[i].url, '');
      }
    }

    return formattedText;
  })
});
