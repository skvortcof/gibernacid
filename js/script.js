"use strict";

(function ($) {
  $(function () {
    /**
     * Audio
     */
    var a = audiojs;
    var promiseAudio = new Promise(function (resolve, reject) {
      a.events.ready(function () {
        a.createAll();
        resolve();
      });
    });
    promiseAudio.then(function (value) {
      var play = $('.play');
      play.on('click', function (e) {
        for (var prop in a.instances) {
          a.instances[prop].pause();
        }

        return true;
      });
    });
    $('.slider').bxSlider({
      auto: true
    });
    var links = $('a');
    links.link({
      tabs: true,
      links: false,
      auto: true,
      twitter: false
    });
  });
})(jQuery);
