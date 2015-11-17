import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['block block--status-update'],

  actions: {
    contractForm() {
      if ( ! this.$('textarea').val().length ) {
        this.set('isExpanded', false);
      }
    },

    expandForm() {
      this.set('isExpanded', true);
    }
  }
});
