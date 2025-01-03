var timeOut = 2000;
        var slideIndex = 0;
        var autoOn = true;

        autoSlides();

        function autoSlides() {
            timeOut = timeOut - 20;

            if (autoOn == true && timeOut < 0) {
                showSlides();
            }
            setTimeout(autoSlides, 20);
        }

        function prevSlide() {

            timeOut = 2000;

            var slides = document.getElementsByClassName("swiper-slide");
            

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex--;

            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            if (slideIndex == 0) {
                slideIndex = 3
            }
            slides[slideIndex - 1].style.display = "block";
        }

        function showSlides() {

            timeOut = 2000;

            var slides = document.getElementsByClassName("swiper-slide");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
        }



