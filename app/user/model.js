import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr( 'date' ),
  isVerified: DS.attr( 'boolean' ),
  name: DS.attr( 'string' ),
  profileImageUrlHttps: DS.attr( 'string' ),
  screenName: DS.attr( 'string' )
});
