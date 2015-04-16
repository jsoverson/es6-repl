
(function(global, document){

  function create() {
    return document.registerElement(
      'es6-repl',
      {
        prototype: Object.create(
          HTMLElement.prototype, {
            attachedCallback: {
              value: function() {
                this.style.display = 'inline-block';
                var commands = this.textContent.trim().split('\n\n');
                this.innerHTML = '';
                var src = 'http://jsoverson.github.io/es6repl/#__v2:' + commands.map(encodeURIComponent).join('&&');
                var iframe = document.createElement('iframe');
                iframe.src = src;
                iframe.style.border = 0;
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                this.appendChild(iframe);
              }
            }
          }
        )
      }
    );
  }

  if (document.registerElement) {
    global.ES6Repl = create();
  } else {
    var script = document.createElement('script');
    script.onload = function(){
      global.ES6Repl = create();
    };
    script.src = '//cdnjs.cloudflare.com/ajax/libs/document-register-element/0.2.2/document-register-element.js';

    document.head.appendChild(script);
  }

}(this, document));

