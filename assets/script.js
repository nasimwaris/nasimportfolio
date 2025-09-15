$(document).ready(function () {

    // Menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll behavior and scrollspy
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scrollspy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


    //popup
    function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = 'toast'; // hide after 3 seconds
  }, 3000);
}

    // ✅ Initialize EmailJS (Replace with your actual public key)
    emailjs.init("CvdEVK0gzMa-MQ4Q6"); // Replace with real public key from EmailJS

    // ✅ Send form data to EmailJS
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        emailjs.sendForm('service_z0x5amn', 'template_z8qcz1s', this)
            .then(function (response) {
                console.log('Email sent!', response.status, response.text);
                showToast("✅ Message sent successfully!");
               $('#contact-form')[0].reset();

            }, function (error) {
                console.error('Email failed...', error);
                showToast("❌ Failed to send message. Please try again.", 'error');

            });
    });

}); // End of document.ready


// 🔄 Page title change on tab switch
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Nasim Waris";
        $("#favicon").attr("href", "assets/images/NASIM image.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/NASIM image.png");
    }
});

// ✍️ Typed.js typing effect
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "Full-Stack developer", "Java developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// 🌀 Tilt.js 3D effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// 🔒 Disable Developer Tools (basic protection)
document.onkeydown = function (e) {
    if (
        e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    ) {
        return false;
    }
};

// 👀 ScrollReveal animations
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Reveal sections
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

srtop.reveal('.education .box', { interval: 200 });

srtop.reveal('.project .box', { interval: 200 });

srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
