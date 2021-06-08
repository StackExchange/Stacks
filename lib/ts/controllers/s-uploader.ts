(function(){
  Stacks.application.register("s-uploader", class extends Stacks.StacksController {
      static targets = ["input"];

      add(evt: Event) {
          var controller = this;
          console.log(this, evt, 'add happened');
      }

  });
})();
