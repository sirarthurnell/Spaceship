loader = (function(){

    var imagesLoaded = 0,
        totalImages = 0,
        callbck;

    function init(callback){
        callbck = callback;
    }

    function updateDonwloadedImagesCount(){
        imagesLoaded++;
        if(imagesLoaded >= totalImages){
            callbck();
        }
    }

    return {
        init: init,
        downLoadImage: function(url){

            totalImages++;

            var image = new Image();
            image.onload = updateDonwloadedImagesCount;
            image.src = url;
            return image;

        }
    }

})();