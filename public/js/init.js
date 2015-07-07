(function($){
  $(function(){

    // Choose and apply a random color
    var colors = ['purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'amber', 'orange'];
    var color = colors[Math.floor(Math.random() * colors.length)];

    $('.colorize-text').addClass(color+'-text');
    $('.colorize').addClass(color);

    // Choose and apply a random quote
    var quotes = [
      'Le métro est en retard?',
      'T\'as manqué ton autobus?',
      'Ton ordinateur est brisé?',
      'T\'as perdu ton téléphone?',
      'T\'es fâché?',
      'Pas content?',
      'Ça ne fonctionne pas?'
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    $('.da-quote').text(quote);

    // Hide elements
    $('[data-sr]').css('visibility', 'hidden');

    // Bootstrap scrollReveal.js
    var config = {
      mobile: true
    };

    window.sr = new scrollReveal(config);

    // Bind reload button
    $('.btn-replay').click(function() {
      location.reload();
    });

  });
})(jQuery);
