// Danh sách các link ảnh và tên ảnh
const imageList = [
  { src: "https://via.placeholder.com/300", alt: "Image 1", name: "Image One", link: "https://example.com/image1" },
  { src: "https://via.placeholder.com/400", alt: "Image 2", name: "Image Two", link: "https://example.com/image2" },
  { src: "https://via.placeholder.com/500", alt: "Image 3", name: "Image Three", link: "https://example.com/image3" },
  { src: "https://via.placeholder.com/600", alt: "Image 4", name: "Image Four", link: "https://example.com/image4" },
  { src: "https://via.placeholder.com/700", alt: "Image 5", name: "Image Five", link: "https://example.com/image5" },
  { src: "https://via.placeholder.com/800", alt: "Image 6", name: "Image Six", link: "https://example.com/image6" },
  { src: "https://via.placeholder.com/300", alt: "Image 1", name: "Image One", link: "https://example.com/image1" },
  { src: "https://via.placeholder.com/400", alt: "Image 2", name: "Image Two", link: "https://example.com/image2" },
  { src: "https://via.placeholder.com/500", alt: "Image 3", name: "Image Three", link: "https://example.com/image3" },
  { src: "https://via.placeholder.com/600", alt: "Image 4", name: "Image Four", link: "https://example.com/image4" },
  { src: "https://via.placeholder.com/700", alt: "Image 5", name: "Image Five", link: "https://example.com/image5" },
  { src: "https://via.placeholder.com/800", alt: "Image 6", name: "Image Six", link: "https://example.com/image6" }
];

// Hiển thị tất cả các ảnh từ danh sách trong grid
const imageGrid = document.getElementById("imageGrid");
const fragment = document.createDocumentFragment(); // Tạo một đoạn mã ngắn để chứa tất cả các ảnh trước khi thêm vào grid

imageList.forEach(image => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const anchor = document.createElement("a");
  anchor.href = image.link;
  anchor.target = "_blank"; // Mở liên kết trong tab mới
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  anchor.appendChild(img);
  const name = document.createElement("p");
  name.textContent = image.name;
  anchor.appendChild(name);
  imageContainer.appendChild(anchor);
  fragment.appendChild(imageContainer); // Thêm các ảnh vào đoạn mã ngắn
});

imageGrid.appendChild(fragment); // Thêm tất cả các ảnh vào grid một lần duy nhất
