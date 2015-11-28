import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr( 'date' ),
  is_verified: DS.attr( 'boolean' ),
  name: DS.attr( 'string' ),
  profile_image_url_https: DS.attr( 'string' ),
  profile_banner_url: DS.attr( 'string' ),
  screen_name: DS.attr( 'string' ),
  followers_count: DS.attr( 'number' ),
  friends_count: DS.attr( 'number' ),
  statuses_count: DS.attr( 'number' )
});
