$(document).ready(function(){
      jQuery('.clickableImg img').on("click", function () {
        var clickedPicSrc = $(this).prop('src');
        var clickedPicAlt = $(this).prop('alt');
        var captionText = document.getElementById("caption");
        clickedPicSrc = clickedPicSrc.slice(-1000,-13)+"L"+clickedPicSrc.slice(-13);
        captionText.innerHTML = clickedPicAlt;
        $('#myModal img').prop('src', clickedPicSrc);
        $('#myModal img').prop('alt', clickedPicAlt);
        $('#myModal').css("display", "block");
})});

if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
}
