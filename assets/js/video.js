function showVideo(videoId) {
    var videoSource = document.getElementById('video-source');
    var videoPlayer = document.getElementById('video-player');
    var videoIframe = document.getElementById('video-iframe');
    var videoSrc = '';

    switch (videoId) {
        case 'aVideo':
            videoSrc = 'https://www.youtube.com/embed/Hr64FVXLaH0';
            break;
        case 'bVideo':
            videoSrc = 'https://www.youtube.com/embed/SMB1LUcl2b4';
            break;
        case 'cVideo':
            videoSrc = 'https://www.youtube.com/embed/_4WU5cUsKyg';
            break;
        case 'departmentVideo1':
            videoSrc = 'https://www.youtube.com/embed/esvxDlJm_o8';
            break;
        case 'departmentVideo2':
            videoSrc = 'https://www.youtube.com/embed/--MC4JzI5po';
            break;
        case 'departmentVideo3':
            videoSrc = 'https://www.youtube.com/embed/PvMr6-YjHaw';
            break;
        case 'departmentVideo4':
            videoSrc = 'https://www.youtube.com/embed/In2Bm1PmIAs';
            break;
        case 'departmentVideo5':
            videoSrc = 'https://www.youtube.com/embed/sG-Wi44EWys';
            break;
        case 'ddayVideo1':
            videoSrc = 'https://www.youtube.com/embed/bwXS3SqYcjI';
            break;
        case 'ddayVideo2':
            videoSrc = 'https://www.youtube.com/embed/7gdKj7hMFoc';
            break;
        case 'ddayVideo3':
            videoSrc = 'https://www.youtube.com/embed/7arPdviS5Q4';
            break;
        case 'cuteVideo1':
            videoSrc = 'https://www.youtube.com/embed/dhoLsNVZzNE';
            break;
        case 'cuteVideo2':
            videoSrc = 'https://www.youtube.com/embed/C-wGjEveMYU';
            break;
        case 'cuteVideo3':
            videoSrc = 'https://www.youtube.com/embed/QocInK6LPYc';
            break;
        case 'cuteVideo4':
            videoSrc = 'https://www.youtube.com/embed/jXDs19JFGUg';
            break;
        default:
            videoSrc = '';
    }

    if (videoSrc.includes('youtube.com')) {
        videoPlayer.style.display = 'none';
        videoIframe.style.display = 'block';
        videoIframe.src = videoSrc;
    } else {
        videoIframe.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoSource.src = videoSrc;
        videoPlayer.load();
    }
}

// 初始化，顯示前導片
showVideo('aVideo');

function toggleButtons(buttonGroupId) {
    var buttonGroups = ['department-buttons', 'dday-buttons', 'cute-buttons'];
    buttonGroups.forEach(function (id) {
        var element = document.getElementById(id);
        if (id === buttonGroupId) {
            element.style.display = element.style.display === 'none' ? 'flex' : 'none';
        } else {
            element.style.display = 'none';
        }
    });
}
