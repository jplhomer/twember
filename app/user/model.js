import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr( 'date' ),
  isVerified: DS.attr( 'boolean' ),
  name: DS.attr( 'string' ),
  profileImageUrlHttps: DS.attr( 'string' ),
  profileBannerUrl: DS.attr( 'string' ),
  screenName: DS.attr( 'string' ),
  followersCount: DS.attr( 'number' ),
  friendsCount: DS.attr( 'number' ),
  statusesCount: DS.attr( 'number' )
});
