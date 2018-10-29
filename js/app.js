(function ($) {
  $(function () {

    /**
     * Audio
     */
    let a = audiojs;

    let promiseAudio = new Promise(function (resolve, reject) {
      a.events.ready(function () {
        a.createAll();
        resolve();
      });
    });

    promiseAudio.then(function (value) {
      let play = $('.play');

      play.on('click', function (e) {
        for (let prop in a.instances) {
          a.instances[prop].pause();
        }

        return true;
      });

    });

    $('.slider').bxSlider({
      auto: true
    });

  });
})(jQuery);