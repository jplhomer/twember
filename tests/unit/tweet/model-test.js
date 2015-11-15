// import Ember from 'ember';
// import DS from 'ember-data';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tweet', 'Unit | Model | tweet', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

// test('its text is formatted properly', function(assert) {
//   var tweet = this.subject(),
//       store = this.store();
//
//   Ember.run(function() {
//     tweet = store.findRecord('tweet', 663535230649770000);
//   });
//
//   assert.equal(tweet.get('id'), 663535230649770000);
//   assert.ok(tweet instanceof DS.Model);
// });
