const ColorInput = document.querySelector("#input-color");
const WidthInput = document.querySelector("#input-width");
const HeightInput = document.querySelector("#input-height");
const SubmitInput = document.querySelector("#submit");
const RectangleOutput = document.querySelector("#RectanglePlace");

SubmitInput.addEventListener("click", () => {
    const color = ColorInput.value.trim();
    const width = Number(WidthInput.value);
    const height = Number(HeightInput.value);

    // Kiểm tra giá trị nhập
    if (!color || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        alert("Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc!");
        return;
    }

    // Tạo hình chữ nhật
    RectangleOutput.innerHTML = `
    <div class="rectangle-container" 
        style="
                background-color: ${color}; 
                width: ${width}px; 
                height: ${height}px;
                border-radius: 8px;   
            "
    >
        <!-- Hiển thị chiều rộng -->
        <div class="rectangle-width">${width}px</div>

        <!-- Màu -->
            <p style="color: white; text-align: center; margin: 0; line-height: ${height}px;">${color}</p>

        <!-- Hiển thị chiều cao -->
        <div class="rectangle-height">${height}px</div>
    </div>
    `;


    // Xóa hình chữ nhật khi click
    const RectangleFinished = document.querySelector(".rectangle-container");
    RectangleFinished.addEventListener("click", () => {
        ColorInput.value = "";
        WidthInput.value = "";
        HeightInput.value = "";
        RectangleOutput.innerHTML = "";
    });
});


