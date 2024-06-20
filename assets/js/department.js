document.addEventListener('DOMContentLoaded', function() {
    // 鼠标移入各个部门
    document.querySelectorAll('.category').forEach(function(category) {
        category.addEventListener('mouseenter', function() {
            // 所有图片设置透明度为50%
            document.querySelectorAll('.image').forEach(function(img) {
                img.style.opacity = '0.5';
            });
            // 当前部门图片设置为不透明
            var imageId = this.id + '-image';
            document.getElementById(imageId).style.opacity = '1';
        });
    });

    // 点击各个部门显示能量值图片
    document.querySelectorAll('.category').forEach(function(category) {
        category.addEventListener('click', function() {
            // 先隐藏所有能量值图片
            document.querySelectorAll('.energy-image').forEach(function(img) {
                img.style.display = 'none';
            });
            // 显示点击的部门对应的能量值图片
            var energyId = this.id + '-energy';
            document.getElementById(energyId).style.display = 'block';
        });
    });
});
