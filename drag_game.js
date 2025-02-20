const drag_img = document.getElementById("drag_img");
const mimic_img = document.getElementById("mimic")
const killcount = document.getElementById("killcount")
let isDragging = false;
let offsetX, offsetY;
let counter = 0


function startDrag(ev) {
    isDragging = true;
    const clientX = ev.type.startsWith("touch") ? ev.touches[0].clientX : ev.clientX;
    const clientY = ev.type.startsWith("touch") ? ev.touches[0].clientY : ev.clientY;
    offsetX = clientX - drag_img.offsetLeft;
    offsetY = clientY - drag_img.offsetTop;
    ev.preventDefault();
    drag_img.src = 'images/confused.jpg';
}

function dragMove(ev)   {
    if (!isDragging) return;
    const clientX = ev.type.startsWith("touch") ? ev.touches[0].clientX : ev.clientX;
    const clientY = ev.type.startsWith("touch") ? ev.touches[0].clientY : ev.clientY;
    drag_img.style.left = clientX - offsetX + "px";
    drag_img.style.top = clientY - offsetY + "px";
    ev.preventDefault();
}

function stopDrag(ev) {
        if (!isDragging) return;
        const clientX = ev.type.startsWith("touch") ? ev.changedTouches[0].clientX : ev.clientX;
        const clientY = ev.type.startsWith("touch") ? ev.changedTouches[0].clientY : ev.clientY;
        const rect = mimic_img.getBoundingClientRect();
        if (clientX >= rect.left && clientX <= rect.right &&
            clientY >= rect.top && clientY <= rect.bottom) {
            mimic_img.src = 'images/frierenmimic.gif';
            drag_img.classList.add("hidden"); // Hide image
            setTimeout(() => {
                mimic_img.src = 'images/mimic.jpg';
                drag_img.src = 'images/frierensleep.gif';
                drag_img.classList.remove('hidden');
                drag_img.style.left = '';
                drag_img.style.top = '';
                drag_img.style.right = '10px';
                drag_img.style.bottom = '-300px';
                counter++;
                killcount.innerText = 'KILL COUNT: ' + counter;
            }, 3000);
        }
        else {
            drag_img.src = 'images/frierensleep.gif';
        }
        isDragging = false;
}

drag_img.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", dragMove);
document.addEventListener("mouseup", stopDrag);

drag_img.addEventListener("touchstart", startDrag, { passive: false });
document.addEventListener("touchmove", dragMove, { passive: false });
document.addEventListener("touchend", stopDrag);