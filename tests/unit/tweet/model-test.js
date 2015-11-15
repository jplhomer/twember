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
//   assert.expect(2);
//
//   var tweet = this.subject({
//     text: 'Disturbance in Australian detention centre after death of asylum seeker https://t.co/66b34xPQj2 https://t.co/emrdDiUIN3',
//     "entities": {
//       "hashtags": [],
//       "symbols": [],
//       "user_mentions": [],
//       "urls": [
//         {
//           "url": "https://t.co/66b34xPQj2",
//           "expanded_url": "http://on.mash.to/1QcZEla",
//           "display_url": "on.mash.to/1QcZEla",
//           "indices": [
//             72,
//             95
//           ]
//         }
//       ],
//       "media": [
//         {
//           "id": 663535229450084400,
//           "id_str": "663535229450084354",
//           "indices": [
//             96,
//             119
//           ],
//           "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
//           "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
//           "url": "https://t.co/emrdDiUIN3",
//           "display_url": "pic.twitter.com/emrdDiUIN3",
//           "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
//           "type": "photo",
//           "sizes": {
//             "thumb": {
//               "w": 150,
//               "h": 150,
//               "resize": "crop"
//             },
//             "small": {
//               "w": 340,
//               "h": 191,
//               "resize": "fit"
//             },
//             "medium": {
//               "w": 600,
//               "h": 337,
//               "resize": "fit"
//             },
//             "large": {
//               "w": 949,
//               "h": 534,
//               "resize": "fit"
//             }
//           }
//         }
//       ]
//     }
//   });
//
//   // Make sure t.co links are removed
//   assert.ok(tweet.get('formattedText').indexOf('t.co') === -1);
// });
