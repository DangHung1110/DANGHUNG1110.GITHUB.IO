const riotIcon = document.querySelector(".riot_game");

riotIcon.addEventListener("click", function () {
    const popup = document.createElement("div");
    popup.id = "riotPopup";
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100vw"
    popup.style.height = "370px"
    popup.style.background = "white";
    popup.style.padding = "20px";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    popup.style.zIndex = "1000";
    popup.style.borderRadius = "10px";

    popup.innerHTML = `
        <div class="popupIcon">
        <div class="Icon">
            <svg with="75" height="25" class="riot_game" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.93 165">
                <path d="M98.77.33 0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05 1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 37.91 37.91 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0 0 12.69 13.27 39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42Zm-28.43-29.7 8.22-27.65h3.1l8.26 27.65Zm278.58-37.76a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84 2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15V90.6h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55v2.93Zm2.39-1.68.82 1.68h-1.11l-.75-1.68ZM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0 1 12.75-13.14 38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3H212v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14Z"></path>
            </svg>  
            <svg with="10" height="10" viewBox="0 0 8 5">
                <path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z"></path>
            </svg>    
        </div>
            <button class="buttonClose">
                <svg with="20" height="20" viewBox="0 0 32 32"><title>applicationSwitcher2DesktopClose</title><path d="M0 12C0 5.373 5.373 0 12 0h8c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-8C5.373 32 0 26.627 0 20v-8Z" fill="#BABABA" fill-opacity=".2"></path><path d="m20.667 12.274-.94-.94L16 15.061l-3.726-3.727-.94.94 3.726 3.727-3.726 3.726.94.94L16 16.941l3.727 3.726.94-.94-3.727-3.726 3.727-3.727Z" fill="#0A0A0A"></path></svg>
            </button>
        </div>
        <div class="popupElement">
            <div class="popupElementContent">
                    <div class="lienminh">
                        <div class="popuptrochoi">trò chơi</div>
                        <div class="popuplienminh">liên minh huyền thoại</div>
                        <div class="tocchien">lmht: tốc chiến</div>    
                        <div class="popupTFT">đấu trường chân lí</div>
                        <div class="valorant">valorant</div>
                        <div class="runeterra">huyền thoại runeterra</div>
                    </div>
                    <div class="forgeAndEsports">
                        <div class="forge">
                            <div class="popupForge">forge</div>
                            <div class="conv">conv/rgence</div>
                            <div class="ruined">ruined king</div>
                            <div class="song">song of nunu</div>
                            <div class="riotForge">trò chơi của riot forge</div>
                        </div>
                        <div class="popupEsports">
                            <div class="popupE">esports</div>
                            <div class="lolEsports">lol esports</div>
                            <div class="ValEsports">valorant esports</div>
                        </div>    
                    </div>
                    <div class="giaitriAndKinhdoanh">
                        <div class="giaitri">
                            <div class="popupGiaitri">giải trí</div>
                            <div class="popupArcane">arcane</div>
                            <div class="popupuniver">vũ trụ</div>
                            <div class="music">riot games music</div>
                        </div>
                        <div class="kinhdoanh">
                            <div class="popupKinhdoanh">kinh doanh</div>
                            <div class="popupRiotGames">riot games</div>
                            <div class="popupSP">hỗ trợ riot</div>    
                        </div>
                    </div>
            </div>
            <div class="popupElementImg">
                <div class="popupElementImgContent">
                    <div class="ImageContainer"></div>
                    <div class="default">
                        <div class="default1">
                            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47bb9b281d270d8335092a72cb1dd09493bc8216-660x428.jpg??&amp;format=pjpg&amp;quality=85" alt="Tejo - chuyên gia đạn đạo kỳ cựu người Colombia - sẽ gia nhập dàn đặc vụ VALORANT trong Mùa 2025 // Phần 1" title="Tejo - chuyên gia đạn đạo kỳ cựu người Colombia - sẽ gia nhập dàn đặc vụ VALORANT trong Mùa 2025 // Phần 1"> 
                            <p>Tejo - chuyên gia đạn đạo kỳ cựu người Colombia - sẽ gia nhập đặc vụ VALORANT trong Mùa 2025 // Phần 1</p>
                        </div>
                        <div class="default2">
                            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/e0965a6fb2f7b8b260d2c7c95803902d039185ad-660x428.jpg??&amp;format=pjpg&amp;quality=85" alt="Tái hiện trận chiến Arcane bạn thích nhất trong mùa mới của ĐTCL." title="Tái hiện trận chiến Arcane bạn thích nhất trong mùa mới của ĐTCL.">
                            <p>Tái hiện trận chiến Arcane bạn thích nhất trong mùa mới của ĐTCL.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    const buttonClose = popup.querySelector(".buttonClose");
    buttonClose.addEventListener("click", function () {
        popup.remove(); 
    });

    const ChooseIn4 = popup.querySelectorAll(".popuplienminh, .tocchien, .popupTFT,.valorant, .runeterra, .conv ,.ruined, .song, .riotForge, .lolEsports, .ValEsports ,.popupArcane, .popupuniver,.music,.popupRiotGames, .popupSP");
    const In4Image = {
    "popuplienminh": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/9f6c08831b0d22c4c929fc50ada08d29650f1917-1280x721.jpg"
    },

    "tocchien": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/a0d4a04e8059f9e9426b8a8ed7a2b0174886e754-1320x743.jpg"
    },

    "popupTFT": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/fce3ba7a937c6d491fc3653458c83d5e5f36c0ef-1920x1080.jpg"
    },

    "valorant": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/c9ab2357a330dc4f3b745292783b219442ff24a6-1920x1080.jpg"
    },

    "runeterra": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/95f244060cf64373f7b30e9db7edbbd41f705f04-1920x1080.jpg"
    },

    "conv": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/96d6ec42a3be4ed02195fb31816bb2f188c5121d-1320x743.jpg"
    },

    "ruined": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/904be9b7fb2dc287fc1a8f30f0421134eed3a35d-1320x743.jpg"
    },

    "song": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8b0fd50a7bbd02b24bc2c5df278b1a556cf0cecf-1320x743.jpg"
    },

    "riotForge": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/887a22f93dff0593674b4df1a267b840f85b01e7-1320x743.jpg"
    },

    "lolEsports": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8459546a9d8a91074ef7f4ef8e43ebd561d30396-1920x1080.jpg"
    },

    "ValEsports": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/46e6f7f8295ccf1ffa2480d7f0c1b9926204c08f-1920x1080.jpg"
    },

    "popupArcane": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/70361f54e9202cccae3852adebdc567246d83179-1320x743.jpg"
    },

    "popupuniver": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/ada5282be4b3fa4225027ac9170014db245deb58-1320x743.jpg"
    },

    "music": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/73a9ef5885cacca97a8589c4263d324c290cf536-1320x743.jpg"
    },

    "popupRiotGames": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/92cb46a6c9e197cda4523d98c0ae54b93775ff4d-1320x743.jpg"
    },

    "popupSP": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/1d1c0b2d99b5da39e0eb5ae4b136c5c3a604e30c-1320x743.jpg"
    },
}

const divIMG = popup.querySelector(".ImageContainer");

ChooseIn4.forEach(div => {
    div.addEventListener("mouseenter", function () {
        const key = this.classList[0];  
        if (In4Image[key]) {
            divIMG.innerHTML = `
                <img src="${In4Image[key].src}" alt="${key}">            
            `;
        }
    });

    div.addEventListener("mouseleave", function () {
        divIMG.innerHTML = ''; 
    });
});
});

const right = document.querySelector(".author-right");

const images = {
    "Assassin": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png",
        name: "AKALI",
        description: "Sát Thủ Đơn Độc"
    },
    "Gladiators": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png",
        name: "GAREN",
        description: "Sức Mạnh Của Demacia"
    },
    "magician": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png",
        name: "LUX",
        description: "Pháp Sư Ánh Sáng"
    },
    "Gunner": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png",
        name: "JINX",
        description: "Khẩu Pháo Nổi Loạn"
    },
    "Support": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png",
        name: "THRESH",
        description: "Kẻ Cai Ngục Xiềng Xích"
    },
    "SpBlows": {
        src: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png",
        name: "LEONA",
        description: "Bình Minh Rực Rỡ"
    }
};

const characters = document.querySelectorAll(".Assassin, .Gladiators, .magician, .Gunner, .Support, .SpBlows");
document.querySelector(".Assassin").classList.add("active");

characters.forEach(div => {
    div.addEventListener("click", function () {
        characters.forEach(d => d.classList.remove("active"));

        this.classList.add("active");

        const key = this.classList[0]; 
        if (images[key]) {
            right.innerHTML = `
                <div class="image-container">
                    <img src="${images[key].src}" alt="${images[key].name}">
                    <div class="image-title">${images[key].name}</div>
                    <div class="image-description">${images[key].description}</div>
                </div>
            `;
        }
    });
});

const Game = document.querySelectorAll(".map5, .aram, .tft");
const divVideo = document.querySelector(".div-right");

const video = {
    "map5": {
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
        title: "CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT",
        description: "Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy."
    },
    "aram": {
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
        title: "TẤT CẢ NGẪU NHIÊN, CHỈ ĐI ĐƯỜNG GIỮA",
        description: "Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn."
    },
    "tft": {
        src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",
        title: "MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ",
        description: "Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng."
    }
};

const ChooseGame = document.querySelectorAll(".map5, .aram, .tft");
document.querySelector(".map5").classList.add("active");

ChooseGame.forEach(div => {
    div.addEventListener("click", function () {
        ChooseGame.forEach(d => d.classList.remove("active"));

        this.classList.add("active");

        const key = this.classList[0]; 
        if (video[key]) {
            divVideo.innerHTML = `
                <div class="video-container">
                    <div class="video-border1">
                        <div class="video-border2">
                            <video autoplay loop playsinline controls>
                                <source src="${video[key].src}" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <h2>${video[key].title}</h2>
                    <p>${video[key].description}</p>
                </div>
            `;
        }
    });
});

const choingay = document.querySelector(".play-now");
choingay.addEventListener("click", function () {
    const divPlay = document.createElement("div");
    divPlay.className = "DivPlay";
    divPlay.style.position = "fixed";
    divPlay.style.top = "0";
    divPlay.style.left = "0";
    divPlay.style.width = "100vw"
    divPlay.style.height = "100vh"
    divPlay.style.background = "white";
    divPlay.style.padding = "20px";
    divPlay.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    divPlay.style.zIndex = "1000";

    divPlay.innerHTML=`
        <div class="Play">
            <div class="play-close">
                <button class="play-close-button">
                    <svg width="20" height="20" viewBox="0 0 32 32"><title>applicationSwitcher2DesktopClose</title><path d="M0 12C0 5.373 5.373 0 12 0h8c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-8C5.373 32 0 26.627 0 20v-8Z" fill="#BABABA" fill-opacity=".2"></path><path d="m20.667 12.274-.94-.94L16 15.061l-3.726-3.727-.94.94 3.726 3.727-3.726 3.726.94.94L16 16.941l3.727 3.726.94-.94-3.727-3.726 3.727-3.727Z" fill="#0A0A0A"></path></svg>
                </button>
            </div>
            <h1>chuẩn bị sẵn sàng để chơi</h1>
            <div class="play-container">
                <div class="play-right">
                    <p>Tôi không có tài khoản Riot</p> 
                    <a href="https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=9JDXqADDdGtseSz1g4ViQtqJgNUFtx5cn2e0GeWFxbg&locale=vi_VN&method=riot_identity_signup&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3D9JDXqADDdGtseSz1g4ViQtqJgNUFtx5cn2e0GeWFxbg%26code_challenge_method%3DS256%26locale%3Dvi_VN%26prompt%3Dsignup%26redirect_uri%3Dhttps%3A%2F%2Fxsso.leagueoflegends.com%2Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26show_region%3Dtrue%26state%3D9df82e3e456ea1f34872465bd8%26uri%3Dhttps%3A%2F%2Fsignup.leagueoflegends.com%2Fvi-vn%2Fsignup%2Fredownload%3Fpage_referrer%253Dindex&show_region=true">
                        <button class="play-right-button">TẠO TÀI KHOẢN</button>
                    </a>  
                </div>
                <div class="play-left">
                    <p>Tôi có tài khoản Riot</p>
                    <a href="https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=RANufGxbCl2tlUSPor3yo8O3iogzMOwbWmcHXUgBVL8&locale=vi_VN&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3DRANufGxbCl2tlUSPor3yo8O3iogzMOwbWmcHXUgBVL8%26code_challenge_method%3DS256%26locale%3Dvi_VN%26redirect_uri%3Dhttps%253A%252F%252Fxsso.leagueoflegends.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3D157a759b91057d2f14f48d85c9%26uri%3Dhttps%253A%252F%252Fleagueoflegends.com%252Fvi-vn&security_profile=low">
                        <button class="play-left-button">ĐĂNG NHẬP</button>
                    </a>
                </div>
            </div>
        </div>
    `
    document.body.appendChild(divPlay);    
    const playclose = divPlay.querySelector(".play-close-button");
    playclose.addEventListener("click", function () {
        divPlay.remove(); 
    });
});

const searchInput = document.querySelector(".search-input");  
const searchIcon = document.querySelector(".icon__search");
const closeBtnInput = document.querySelector(".close-btn-input");

let isExpanded = false;

function toggleSearch() {
  if (isExpanded) {
    shrinkSearch();
  } else {
    expandSearch();
  }
}

function expandSearch() {
  searchIcon.style.right = "10px"
  searchInput.style.left = "10px";   
  searchInput.style.width = "200px";
  searchInput.style.paddingLeft = "45px";
  searchIcon.style.right = "390px";
  closeBtnInput.style.display = "block";
  isExpanded = true;
}

function shrinkSearch() {
  searchInput.style.left = "200px";   
  searchInput.style.width = "40px";
  searchInput.style.paddingLeft = "0";
  searchIcon.style.right = "210px";
  closeBtnInput.style.display = "none";
  isExpanded = false;
}

searchInput.addEventListener("click", expandSearch);
searchIcon.addEventListener("click", toggleSearch);
closeBtnInput.addEventListener("click", shrinkSearch);

const menu = document.querySelector(".menu-reponsive");
menu.addEventListener("click", function() {
    const divmenu = document.createElement("div");
    divmenu.className = "DivMenu";
    divmenu.style.position = "fixed";
    divmenu.style.top = "0";
    divmenu.style.right = "0";
    divmenu.style.width = "400px"
    divmenu.style.height = "700px"
    divmenu.style.background = "white";
    divmenu.style.padding = "20px";
    divmenu.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    divmenu.style.zIndex = "1000";

    document.body.appendChild(divmenu);
    
    divmenu.innerHTML=`
        <div class="menuNavbar">
            <div class="menuIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="32" viewBox="0 0 85 32" fill="none" class="league"><g clip-path="url(#clip0)"><path d="M59.7261 17.2695V31.749H56.5229L49.6035 22.34V31.749H46.5347V18.6228L45.8335 17.2695H49.801L56.6573 26.8087V17.2695H59.7261Z" fill="#C28F2C"></path> <path d="M27.8345 31.9991C28.8909 32.0048 29.8667 31.8267 30.7619 31.467C31.6582 31.1072 32.4307 30.6082 33.0828 29.9721C33.7337 29.336 34.2444 28.5811 34.6148 27.7098C34.8813 27.0828 35.0531 26.4205 35.1314 25.7238C35.1618 25.4532 35.2143 24.3614 35.1582 23.7025H27.8649L26.5665 26.3131H31.7704C31.5694 27.1376 31.1148 27.8171 30.409 28.3287C29.7019 28.8415 28.8559 29.095 27.8707 29.0904C27.2373 29.087 26.646 28.9637 26.0979 28.7204C25.5498 28.4772 25.073 28.1483 24.6675 27.7338C24.2608 27.3192 23.9441 26.8327 23.7139 26.2743C23.4848 25.7158 23.3715 25.1197 23.375 24.487C23.3785 23.8544 23.4977 23.2594 23.7326 22.7032C23.9675 22.1471 24.29 21.664 24.7014 21.2529C25.1116 20.8418 25.5884 20.522 26.1318 20.2902C26.6752 20.0595 27.263 19.9453 27.8976 19.9476C28.7565 19.9522 29.515 20.1417 30.1752 20.5163C30.8355 20.8909 31.3462 21.4299 31.7085 22.1334L34.588 20.7858C33.9885 19.6141 33.1026 18.6948 31.9305 18.0279C30.7584 17.3621 29.4261 17.0252 27.9338 17.0172C26.8774 17.0115 25.877 17.2034 24.9328 17.5905C23.9874 17.9776 23.1646 18.5098 22.4646 19.1882C21.7646 19.8654 21.2072 20.6579 20.7947 21.5635C20.381 22.4691 20.173 23.4387 20.1671 24.4699C20.1613 25.5011 20.3576 26.473 20.7538 27.3832C21.1511 28.2933 21.6922 29.0904 22.3782 29.7745C23.0641 30.4586 23.8752 30.9999 24.8089 31.3962C25.7415 31.7924 26.7512 31.9934 27.8345 31.9991Z" fill="#C28F2C"></path> <path d="M3.90672 17.2686H0L0.737403 18.7657V30.2542L0 31.7503H8.9657L9.77906 28.917H3.90672V17.2686Z" fill="#C28F2C"></path> <path d="M10.8613 31.7503H19.6003V28.9181H14.0423V25.7411H18.3394L19.1177 23.0185H14.0423V20.0893H19.6003V17.2686H10.8613V31.7503Z" fill="#C28F2C"></path> <path d="M36.2681 31.7503H45.007V28.9181H39.4491V25.7411H43.7473L44.5244 23.0185H39.4491V20.0893H45.007V17.2686H36.2681V31.7503Z" fill="#C28F2C"></path> <path d="M41.8662 14.9822C42.9227 14.9879 43.8985 14.8098 44.7936 14.45C45.69 14.0903 46.4624 13.5912 47.1145 12.9551C47.7654 12.3191 48.2761 11.5642 48.6466 10.6928C48.913 10.0659 49.0848 9.40352 49.1631 8.7069C49.1935 8.43625 49.2461 7.3445 49.19 6.68556H41.8966L40.5983 9.29503H45.8022C45.6011 10.1196 45.1466 10.799 44.4407 11.3107C43.7337 11.8234 42.8876 12.0769 41.9024 12.0724C41.269 12.069 40.6777 11.9456 40.1296 11.7024C39.5816 11.4591 39.1048 11.1302 38.6992 10.7157C38.2926 10.3011 37.9759 9.81464 37.7456 9.25621C37.5166 8.69777 37.4032 8.10164 37.4067 7.46897C37.4102 6.83631 37.5294 6.24132 37.7643 5.68517C37.9992 5.12901 38.3218 4.64595 38.7331 4.23483C39.1433 3.82371 39.6201 3.50395 40.1635 3.27212C40.7069 3.04144 41.2948 2.92724 41.9293 2.92952C42.7883 2.93409 43.5467 3.12366 44.207 3.49824C44.8673 3.87281 45.3779 4.41184 45.7402 5.11531L48.6197 3.76775C48.0202 2.59606 47.1344 1.67675 45.9623 1.00982C44.7901 0.344031 43.4579 0.00714122 41.9656 -0.000852784C40.9091 -0.00656279 39.9088 0.185293 38.9645 0.572432C38.0191 0.95957 37.1964 1.49174 36.4964 2.17009C35.7964 2.8473 35.2389 3.63985 34.8264 4.54545C34.4127 5.45106 34.2047 6.42062 34.1989 7.45184C34.193 8.48307 34.3893 9.45491 34.7855 10.3651C35.1828 11.2753 35.7239 12.0724 36.4099 12.7564C37.0959 13.4405 37.9069 13.9818 38.8406 14.3781C39.7732 14.7766 40.7817 14.9776 41.8662 14.9822Z" fill="#C28F2C"></path> <path d="M3.90672 0.252441H0L0.737403 1.7496V13.2381L0 14.7342H8.9657L9.77906 11.8997H3.90672V0.252441Z" fill="#C28F2C"></path> <path d="M10.8613 14.7342H19.6003V11.9008H14.0423V8.72494H18.3394L19.1177 6.00241H14.0423V3.07318H19.6003V0.252441H10.8613V14.7342Z" fill="#C28F2C"></path> <path d="M63.5688 14.7342H72.3067V11.9008H66.7498V8.72494H71.0469L71.824 6.00241H66.7498V3.07318H72.3067V0.252441H63.5688V14.7342Z" fill="#C28F2C"></path> <path d="M29.397 0.252441H24.8779L25.8338 2.09906L20.6147 14.7353H23.8659L24.9737 11.91H30.8519L31.9913 14.7353H35.3055L29.397 0.252441ZM26.0594 9.14063L27.9677 4.27457L29.8013 9.14063H26.0594Z" fill="#C28F2C"></path> <path d="M80.6094 4.23486V10.7477H82.2466V8.54591H83.9365L84.3455 7.11385H82.2466V5.71033H84.647V4.23486H80.6094Z" fill="#C28F2C"></path> <path d="M76.5625 4.10547C74.6553 4.10547 73.1045 5.62433 73.1045 7.4915C73.1045 9.35867 74.6553 10.8775 76.5625 10.8775C78.4697 10.8775 80.0204 9.35867 80.0204 7.4915C80.0204 5.62433 78.4685 4.10547 76.5625 4.10547ZM76.5625 9.30614C75.5423 9.30614 74.7125 8.49189 74.7125 7.4915C74.7125 6.49111 75.5423 5.67686 76.5625 5.67686C77.5827 5.67686 78.4124 6.49111 78.4124 7.4915C78.4124 8.49189 77.5827 9.30614 76.5625 9.30614Z" fill="#C28F2C"></path> <path d="M56.2401 14.9854C55.3099 14.9854 54.4778 14.8438 53.7451 14.5617C53.0124 14.2796 52.3918 13.8765 51.8847 13.3523C51.3775 12.8293 50.986 12.1955 50.7114 11.4509C50.4367 10.7075 50.2988 9.88065 50.2988 8.97161V0.252441H53.5125V8.80717C53.5125 9.78586 53.7451 10.5567 54.2102 11.122C54.6753 11.6873 55.352 11.9694 56.2401 11.9694C57.1283 11.9694 57.8049 11.6873 58.27 11.122C58.7351 10.5567 58.9677 9.78586 58.9677 8.80717V0.252441H62.1814V8.97276C62.1814 9.88179 62.0435 10.7086 61.7689 11.452C61.4943 12.1955 61.1028 12.8293 60.5956 13.3535C60.0884 13.8776 59.4679 14.2796 58.7351 14.5628C58.0012 14.8438 57.1703 14.9854 56.2401 14.9854Z" fill="#C28F2C"></path> <path d="M80.8372 23.1624L78.8365 22.7866C77.9367 22.6176 77.4412 22.1243 77.4412 21.3968C77.4412 20.4056 78.4813 19.8129 79.4863 19.8129C79.8287 19.8129 81.5325 19.8997 81.8831 21.5601L84.6399 20.2446C84.2332 19.0637 83.0155 17.0161 79.4664 17.0161C76.6045 17.0161 74.2754 19.0706 74.2754 21.5955C74.2754 23.7368 75.7408 25.307 78.1938 25.7958L80.1956 26.191C81.1843 26.3839 81.7745 26.9333 81.7745 27.6596C81.7745 28.5994 80.9599 29.1704 79.6487 29.1841C78.0582 29.2001 76.7727 28.0444 76.5741 26.907L73.9248 28.3516C74.5325 30.285 76.4046 32.0026 79.6289 32.0026C81.6576 32.0026 82.9104 31.2363 83.6034 30.5934C84.4927 29.77 85.0022 28.636 85.0022 27.4826C84.9999 25.3036 83.4047 23.6489 80.8372 23.1624Z" fill="#C28F2C"></path> <path d="M73.0452 21.6891C72.6514 20.8086 72.1138 20.0457 71.4325 19.3982C70.7501 18.7519 69.9519 18.2425 69.038 17.8702C68.123 17.4979 66.8211 17.2661 66.1258 17.2661H61.1147V31.7467H66.1165C67.1437 31.7467 68.1148 31.5651 69.0298 31.1951C69.9449 30.824 70.743 30.3158 71.4267 29.6705C72.1092 29.0242 72.6491 28.2624 73.0429 27.382C73.4379 26.5026 73.6354 25.5536 73.6366 24.5361C73.6354 23.5186 73.4391 22.5696 73.0452 21.6891ZM70.0454 26.2251C69.8198 26.7481 69.5137 27.2015 69.1268 27.5864C68.7389 27.9712 68.2784 28.2773 67.7432 28.5034C67.208 28.7295 66.6377 28.8426 66.0335 28.8426H64.2817V20.2205H66.0393C66.6447 20.2205 67.2138 20.3347 67.749 20.5619C68.2831 20.7892 68.7435 21.0952 69.1315 21.4801C69.5183 21.8661 69.8233 22.3229 70.0489 22.8528C70.2733 23.3827 70.3866 23.9434 70.3854 24.5338C70.3843 25.1402 70.2709 25.7032 70.0454 26.2251Z" fill="#C28F2C"></path></g> <defs><clippath id="clip0"><rect width="85" height="32" fill="white"></rect></clippath></defs></svg>
            </div>
            <div class="menuClose">
                <svg viewBox="0 0 48 48"><title>burgerNavClose</title><path d="M125.6 119.08a18 18 0 0 1 18-18h12a18 18 0 0 1 18 18v12a18 18 0 0 1-18 18h-12a18 18 0 0 1-18-18Z" transform="translate(-125.6 -101.08)" style="fill:gray;fill-opacity:.2"></path><path d="m156.6 119.49-1.41-1.41-5.59 5.59-5.6-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59Z" transform="translate(-125.6 -101.08)" style="fill:#fcfcfc"></path></svg>
            </div>
        </div>
        <div class="menuInput">
            <i class="fa-solid fa-magnifying-glass iconleft"></i>
            <input type="text" />
            <i class="fa-solid fa-x iconright"></i>
        </div>
        <div class="menuMenu">
            <div class="menuGame">trò chơi</div>
            <div class="menuGeneral">tướng</div>
            <div class="menuInformation">
                <p>tin tức</p>
                <svg viewBox="0 0 5 9"><title>subMenuRight</title><path d="m1.707 7.793 2.586-2.586a1 1 0 0 0 0-1.414L1.707 1.207C1.077.577 0 1.023 0 1.914v5.172c0 .89 1.077 1.337 1.707.707Z" fill="#7E7E7E"></path></svg>
            </div>
            <div class="menuUpadate">chi tiết cập nhật</div>
            <div class="menuEsports">
                <p>esports</p>
                <svg width="7" height="7" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg>
            </div>
            <div class="menuUniver">
                <p>vũ trụ</p>
                <svg width="7" height="7" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg>
            </div>
            <div class="menuSP">
                <p>hỗ trợ</p>
                <svg width="7" height="7" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg>
            </div>
        </div>
        <div class="menuPlayNow">chơi ngay</div>
    `
    const menuclose = divmenu.querySelector(".menuClose");
    menuclose.addEventListener("click", function () {
        divmenu.remove(); 
    });
})
















