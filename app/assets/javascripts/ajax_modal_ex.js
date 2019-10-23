// Extends app/assets/javascripts/blacklight/ajax_modal.js

// We keep all our data in Blacklight.ajaxModal object.
// Create lazily if someone else created first.
if (Blacklight.ajaxModal === undefined) {
  Blacklight.ajaxModal = {};
}

Blacklight.ajaxModal.setup_modal_ex = function() {
  var lastFocusedElement = document.activeElement;

  // Register set aria-hidden="false" on open method
  $("body").on('show.bs.modal', function (){
    lastFocusedElement = document.activeElement;
  });

  // Register set aria-hidden="false" on open method
  $("body").on('shown.bs.modal', function (){
  });

  // Register set aria-hidden="true" on close method
  $("body").on('hide.bs.modal', function (){
  });

  // Register set aria-hidden="true" on close method
  $("body").on('hidden.bs.modal', function (){
    lastFocusedElement.focus();
  });
};

Blacklight.onLoad(function() {
  Blacklight.ajaxModal.setup_modal_ex();
});
