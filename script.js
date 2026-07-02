// ======= Tạo bầu trời sao =======
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(star);
}

// ======= Tim bay =======
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 250);

// ======= Lời chúc =======
const text = `

🎉 Happy Birthday Chị! 🎉

Chúc chị có một ngày sinh nhật thật hạnh phúc.

Chúc chị luôn mạnh khỏe.

Luôn xinh đẹp.

Luôn vui vẻ.

Luôn gặp nhiều may mắn.

Mọi dự định đều thành công.

Công việc luôn thuận lợi.

Tiền vào như nước.

Mong rằng tuổi mới sẽ mang đến thật nhiều điều tốt đẹp.

Hy vọng nụ cười sẽ luôn nở trên môi chị.

Hãy luôn sống thật hạnh phúc nhé Chị hihi.

Happy Birthday ❤️

`;

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("message").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

// ======= Mở quà =======
function openGift() {

    document.getElementById("cake").style.display = "block";

    document.getElementById("message").innerHTML = "";

    index = 0;

    typeWriter();

    launchFireworks();

}
