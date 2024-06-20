$(document).ready(function () {
    // Function to handle horizontal scroll
    $('#photo').on('wheel', function (event) {
        event.preventDefault();
        if (event.originalEvent.deltaY > 0) {
            // Scroll right
            this.scrollLeft += 100;
        } else {
            // Scroll left
            this.scrollLeft -= 100;
        }
    });
});

$(document).ready(function () {
    var photoWidth = $('#photo')[0].scrollWidth;
    var enableScroll = false;

    $(window).scroll(function () {
        var scrollLeft = $('#photo')[0].scrollLeft;
        var photoWidth = $('#photo')[0].scrollWidth;
        var viewportWidth = $(window).width();

        if (!enableScroll && scrollLeft + viewportWidth / 2 > photoWidth / 2) {
            $('#photo').on('wheel', scrollHandler);
            enableScroll = true;
        } else if (enableScroll && scrollLeft + viewportWidth / 2 <= photoWidth / 2) {
            $('#photo').off('wheel', scrollHandler);
            enableScroll = false;
        }
    });

    function scrollHandler(event) {
        var photoWidth = $('#photo')[0].scrollWidth;
        var viewportWidth = $(window).width();
        var scrollLeft = $('#photo')[0].scrollLeft;

        event.preventDefault();
        if (event.originalEvent.deltaY > 0 && scrollLeft + viewportWidth < photoWidth) {
            $('#photo')[0].scrollLeft += 100;
        } else if (event.originalEvent.deltaY < 0 && scrollLeft > 0) {
            $('#photo')[0].scrollLeft -= 100;
        }
    }
});

// 獲取所有具有 'grid-container' class 的元素
const gridContainers = document.getElementsByClassName('grid-container');

// 要生成的方格數量
const numberOfSquares = 143; // 修改這裡的數量

// 使用迴圈為每個 grid-container 生成方格並插入到其中
Array.from(gridContainers).forEach(gridContainer => {
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div'); // 創建 div 元素
    square.classList.add('square'); // 添加方格的 CSS 類
    gridContainer.appendChild(square); // 將方格添加到容器中
  }
});