document.addEventListener("DOMContentLoaded", function () {
    var intersectionObserverEnabled = true;
    var lastScrollTop = 0;

    setupIntersectionObserver();
    setupScrollListener();
    setupButtonClickListener();
    setupSignUpBlur();
    setupVideoObserver();
    setupReturnToTopButton();

    // 設置 Intersection Observer 相關功能
    function setupIntersectionObserver() {
        var options = { threshold: 0.3 };
        var observer = new IntersectionObserver(handleIntersect, options);
        var sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));
    }

    // 處理元素進入視口事件
    function handleIntersect(entries, observer) {
        if (!intersectionObserverEnabled) return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                var isScrollingDown = currentScrollTop > lastScrollTop;
                lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
                window.scrollTo({
                    top: entry.target.offsetTop - (window.innerHeight / 2) + (entry.target.clientHeight / 2),
                    behavior: 'smooth'
                });
            }
        });
    }


    // 設置滾動事件監聽器相關功能
    function setupScrollListener() {
        var aboutOffsetTop = $('#about').first().offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > aboutOffsetTop) {
                $('.navbar').addClass('scrolled');
                $('.navbar-brand').addClass('scrolled');
                $('.nav-link.dropdown-toggle').addClass('scrolled');
                $('.navbar-light .navbar-nav .nav-link.active').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
                $('.navbar-brand').removeClass('scrolled');
                $('.nav-link.dropdown-toggle').removeClass('scrolled');
                $('.navbar-light .navbar-nav .nav-link.active').removeClass('scrolled');
            }
        });
    }

    // 設置返回頂部按鈕點擊事件相關功能
    function setupButtonClickListener() {
        $('.botton-v').click(function () {
            intersectionObserverEnabled = false; // 禁用 Intersection Observer

            var windowHeight = $(window).height(); // 窗口高度
            var aboutOffsetTop = $('#about').first().offset().top; // 獲取 #about 元素顶部距离文档顶部的偏移量
            var aboutHeight = $('#about').first().outerHeight(); // 获取 #about 元素的高度

            var scrollToPosition = aboutOffsetTop - (windowHeight / 2) + (aboutHeight / 2); // 計算滾動到的位置

            $('html, body').animate({ scrollTop: scrollToPosition }, 'fast', function () {
                setTimeout(() => intersectionObserverEnabled = true, 1000); // 延迟恢复 Intersection Observer
            });
            return false;
        });
    }

    // 設置註冊表單元素焦點事件相關功能
    function setupSignUpBlur() {
        document.getElementById('sign-up').addEventListener('focus', function () {
            this.blur();
        });
    }

    // 設置視頻播放 Observer 相關功能
    function setupVideoObserver() {
        var videoOptions = { threshold: 0.5 };
        var videoObserver = new IntersectionObserver(handleVideoIntersect, videoOptions);
        var aboutTrailerSection = document.querySelector('#about-trailer');
        if (aboutTrailerSection) {
            videoObserver.observe(aboutTrailerSection);
        }
    }

    // 處理視頻元素進入視口事件
    function handleVideoIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var video = entry.target.querySelector('video');
                if (video) {
                    var src = video.getAttribute('data-src');
                    if (src) {
                        video.src = src; // 設置視頻源
                        video.play(); // 播放視頻
                    }
                }
                observer.unobserve(entry.target); // 停止觀察一旦播放了視頻
            }
        });
    }

   

    // 設置返回頂部按鈕相關功能
    function setupReturnToTopButton() {
        var btn = $('#button-rtt');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            // 禁用 Intersection Observer
            intersectionObserverEnabled = false;

            // 執行滾動動畫
            $('html, body').animate({ scrollTop: 0 }, '300', function () {
                // 在動畫完成後，再次啟用 Intersection Observer
                setTimeout(function () {
                    intersectionObserverEnabled = true;
                }, 1000); // 延遲一秒再啟用，根據實際需求調整時間
            });
        });
    }
});

