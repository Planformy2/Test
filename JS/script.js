function changeImage(direction) {
    var mainImage = document.querySelector('.cards_main_img');
    var leftImage = document.querySelector('.cards_left_img');
    var rightImage = document.querySelector('.cards_rigth_img');

    var mainImagePath = mainImage.src;
    var leftImagePath = leftImage.src;
    var rightImagePath = rightImage.src;

    if (direction === 'left') {
        mainImage.src = leftImagePath;
        leftImage.src = rightImagePath;
        rightImage.src = mainImagePath;
    } else if (direction === 'right') {
        mainImage.src = rightImagePath;
        leftImage.src = mainImagePath;
        rightImage.src = leftImagePath;
    }
}