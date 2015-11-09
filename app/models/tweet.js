import DS from 'ember-data';

export default DS.Model.extend({
  avatar: DS.attr( 'string' ),
  screen_name: DS.attr( 'string' ),
  text: DS.attr( 'string' ),
  date: DS.attr( 'string' )
});
