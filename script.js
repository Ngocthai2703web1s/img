// Dữ liệu ảnh
const imageList = [
  { src: "https://via.placeholder.com/300", alt: "Image 1", name: "Image One", link: "https://example.com/image1" },
  { src: "https://via.placeholder.com/400", alt: "Image 2", name: "Image Two", link: "https://example.com/image2" },
  { src: "https://via.placeholder.com/500", alt: "Image 3", name: "Image Three", link: "https://example.com/image3" },
  { src: "https://via.placeholder.com/600", alt: "Image 4", name: "Image Four", link: "https://example.com/image4" },
  { src: "https://via.placeholder.com/700", alt: "Image 5", name: "Image Five", link: "https://example.com/image5" },
  { src: "https://via.placeholder.com/800", alt: "Image 6", name: "Image Six", link: "https://example.com/image6" }
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
