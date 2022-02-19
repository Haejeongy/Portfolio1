function setMenu(_menu) {
  var filterButtons = document.querySelectorAll('.sidebar__nav-item');
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector(".sidebar__nav-item."+_menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

function showVideoClips() {
  var videoList = document.querySelector('.video-list');
  videos.forEach(function(video) {
    var videoNode = document.querySelector(".video-item[hidden]").cloneNode(true);
    videoNode.querySelector(".thumbnail").src = './imgs/' + video.thumbnail_src;
    videoNode.querySelector(".profile").src = './imgs/' + video.profile_src;
    videoNode.querySelector(".title").innerHTML = video.title;
    videoNode.querySelector(".author").innerHTML = video.author;
    videoNode.querySelector(".stat").innerHTML = video.stat;
    videoNode.hidden = false;
    videoList.appendChild(videoNode);
  })
}

function init() {
  showVideoClips();
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});