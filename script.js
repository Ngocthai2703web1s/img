// Dữ liệu ảnh
const images = [
    { src: 'image1.jpg', name: 'Image 1', link: 'https://via.placeholder.com/300' },
    { src: 'image2.jpg', name: 'Image 2', link: 'https://via.placeholder.com/400' },
    { src: 'image3.jpg', name: 'Image 3', link: 'https://via.placeholder.com/500' },
    { src: 'image4.jpg', name: 'Image 4', link: 'https://via.placeholder.com/600' },
    { src: 'image5.jpg', name: 'Image 5', link: 'https://via.placeholder.com/700' },
    { src: 'image6.jpg', name: 'Image 6', link: 'https://via.placeholder.com/800' },
    { src: 'image7.jpg', name: 'Image 7', link: 'https://via.placeholder.com/900' },
    { src: 'image8.jpg', name: 'Image 8', link: 'https://via.placeholder.com/300' },
    { src: 'image9.jpg', name: 'Image 9', link: 'https://via.placeholder.com/300' }
];

// Lựa chọn ngẫu nhiên 3 ảnh từ list
function getRandomImages(images, num) {
    const randomImages = [];
    const cloneImages = [...images];
    
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * cloneImages.length);
        randomImages.push(cloneImages[randomIndex]);
        cloneImages.splice(randomIndex, 1);
    }

    return randomImages;
}

// Cập nhật src và thông tin ảnh trong khung
function updateImages() {
    const selectedImages = getRandomImages(images, 3);
    const imageGrid = document.getElementById('imageGrid');
    
    imageGrid.innerHTML = ''; // Xóa các ảnh cũ
    
    selectedImages.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.setAttribute('data-name', image.name);
        imgElement.addEventListener('click', function() {
            window.open(image.link, '_blank');
        });
        
        imageItem.appendChild(imgElement);
        imageGrid.appendChild(imageItem);
    });
}

// Khởi tạo
updateImages();
