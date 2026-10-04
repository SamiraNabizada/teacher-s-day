/* =========================================
   GET ELEMENTS
========================================= */

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseScreen = document.getElementById("surpriseScreen");

const messageSection = document.getElementById("messageSection");

const confettiContainer = document.getElementById("confetti");

const playBtn = document.getElementById("playBtn");

const myAudio = document.getElementById("myAudio");


/* =========================================
   SURPRISE BUTTON
========================================= */

surpriseBtn.addEventListener("click", () => {

    // صفحه اول مخفی شود
    surpriseScreen.style.display = "none";

    // صفحه پیام تبریک نمایش داده شود
    messageSection.classList.add("show");

    // اجرای افکت کنفتی
    createConfetti();

    // آهنگ از اول شروع شود
    myAudio.currentTime = 0;

    // پخش خودکار آهنگ
    myAudio.play()
        .then(() => {

            // دکمه به حالت Pause برود
            playBtn.innerHTML = "❚❚";

        })
        .catch((error) => {

            // اگر مرورگر اجازه پخش خودکار نداد
            console.log("Audio could not play:", error);

            playBtn.innerHTML = "▶";

        });

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💻",
        "❤️",
        "⭐",
        "</>",
        "{}",
        "CSS",
        "JS",
        "HTML"
    ];


    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");


        // انتخاب تصادفی یک علامت
        const randomSymbol =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.innerHTML = randomSymbol;


        // موقعیت افقی تصادفی
        confetti.style.left =
            Math.random() * 100 + "%";


        // سرعت سقوط تصادفی
        confetti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";


        // تأخیر تصادفی
        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        // اندازه تصادفی
        confetti.style.fontSize =
            (Math.random() * 12 + 10) + "px";


        // اضافه کردن به صفحه
        confettiContainer.appendChild(confetti);


        // حذف بعد از پایان انیمیشن
        setTimeout(() => {

            confetti.remove();

        }, 6500);

    }

}


/* =========================================
   PLAY / PAUSE BUTTON
========================================= */

playBtn.addEventListener("click", () => {

    if (myAudio.paused) {

        // پخش آهنگ
        myAudio.play()
            .then(() => {

                playBtn.innerHTML = "❚❚";

            })
            .catch((error) => {

                console.log(
                    "Audio could not play:",
                    error
                );

            });

    } else {

        // توقف آهنگ
        myAudio.pause();

        playBtn.innerHTML = "▶";

    }

});


/* =========================================
   WHEN AUDIO ENDS
========================================= */

myAudio.addEventListener("ended", () => {

    // وقتی آهنگ تمام شد
    playBtn.innerHTML = "▶";

    // دوباره از اول تنظیم شود
    myAudio.currentTime = 0;

});


/* =========================================
   AUDIO ERROR
========================================= */

myAudio.addEventListener("error", () => {

    console.log(
        "مشکلی در پیدا کردن فایل آهنگ وجود دارد."
    );

    console.log(
        "مطمئن شوید teacher-day-song.mp3 کنار index.html است."
    );

});