import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['block block--status-update'],

  isEmpty: Ember.computed('tweetText', function() {
    return ! this.get('tweetText').length;
  }),

  numRows: 1,

  tweetText: '',

  actions: {
    contractForm() {
      if ( ! this.$('textarea').val().length ) {
        this.set('isExpanded', false);
        this.set('numRows', 1);
      }
    },

    expandForm() {
      this.set('isExpanded', true);
      this.set('numRows', 3);
    },

    textareaDidUpdate( value ) {
      // this.set('isEmpty', !value.length);
    }
  }
});
