$(document).ready(function () {
  $('#myButton').on('click', function () {
    const $button = $(this);
    const $counterBlock = $('#counterBlock');
    const $newCounterBlock = $('#newCounterBlock');
    const $overlay = $('#overlay');

    $counterBlock.addClass('visible');
    $button.hide();

    let seconds = 0;
    $counterBlock.text(`${seconds} секунд`);

    const interval = setInterval(function () {
      seconds++;
      if (seconds <= 5) {
        $counterBlock.text(
          `${seconds} ${
            seconds === 1 ? 'секунда' : seconds < 5 ? 'секунды' : 'секунд'
          }`
        );
      } else {
        clearInterval(interval);
        $counterBlock.text('Готово');

        setTimeout(function () {
          $counterBlock.addClass('animate');

          setTimeout(function () {
            $newCounterBlock.addClass('visible');
            startNewCounter();
          }, 4000);
        }, 500);
      }
    }, 1000);

    function startNewCounter() {
      let counter = 0;
      const counterInterval = setInterval(function () {
        $newCounterBlock.text(`${counter}`);
        if (counter >= 50) {
          clearInterval(counterInterval);

          setTimeout(function () {
            $overlay.show();
          }, 500);
        }
        counter++;
      }, 100);
    }
  });

  const $body = $('body');
  $('#formButton').on('click', function () {
    $body.addClass('hidden');
  });
  // $('#formButton').on('click', function () {
  //   $('body').children().hide();
  // });
});
