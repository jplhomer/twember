import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tweets'],

  sortedTweets: Ember.computed.sort('tweets', 'tweetSorting'),

  tweetSorting: ['created_at:desc'],

  tagName: 'ul'
});
