import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleSidebar() {
      this.$("#base-sidebar").sidebar("toggle");
    },
    clickedLink(){
      this.$("#base-sidebar").sidebar("hide");
    },
  }
});
