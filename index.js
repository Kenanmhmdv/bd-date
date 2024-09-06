function countdownToTarget() {
  var targetDate = new Date("2024-09-08T00:00:00").getTime();

  var interval = setInterval(function () {
    var now = new Date().getTime();

    var timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval);
      console.log("Vaxt tamamlandı!");
      return;
    }

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    console.clear();

    console.log(
      days +
        " gün " +
        hours +
        " saat " +
        minutes +
        " dəqiqə " +
        seconds +
        " saniyə qalıb."
    );
  }, 1000);
}

countdownToTarget();
