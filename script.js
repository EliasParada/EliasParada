document.addEventListener("DOMContentLoaded", function () {
    const startSlider = document.getElementById("start-slider");
    const endSlider = document.getElementById("end-slider");
    const startTimeInput = document.getElementById("start-time");
    const endTimeInput = document.getElementById("end-time");
    const startDisplay = document.getElementById("start-slider-label");
    const endDisplay = document.getElementById("end-slider-label");
    const gradientBar1 = document.getElementById("gradient-bar-1");
    const gradientBar2 = document.getElementById("gradient-bar-2");

    const sliderContainer = document.querySelector('.relative');
    const sliderContainerWidth = sliderContainer.clientWidth - 24; // width of the container minus the width of the slider thumb

    let isDraggingStart = false;
    let isDraggingEnd = false;
    let startOffsetX = 0;
    let endOffsetX = 0;

    function formatTime(minutes) {
        const hrs = Math.floor(minutes / 60);
        const mins = Math.round(minutes % 60);
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }

    function updateGradient() {
        const startValue = parseInt(startSlider.style.left) || 0;
        const endValue = parseInt(endSlider.style.left) || 0;

        const startPercent = (startValue / sliderContainerWidth) * 100;
        const endPercent = (endValue / sliderContainerWidth) * 100;

        const startTime = Math.round((startValue / sliderContainerWidth) * 1440);
        const endTime = Math.round((endValue / sliderContainerWidth) * 1440);

        startTimeInput.value = formatTime(startTime);
        endTimeInput.value = formatTime(endTime);
        startDisplay.textContent = formatTime(startTime);
        endDisplay.textContent = formatTime(endTime);

        startDisplay.style.left = `calc(${startPercent}% - 1.5rem)`;
        endDisplay.style.left = `calc(${endPercent}% - 1.5rem)`;

        if (startTime < endTime) {
            gradientBar1.style.left = `${startPercent}%`;
            gradientBar1.style.width = `${endPercent - startPercent}%`;
            gradientBar2.style.width = '0%';
        } else {
            gradientBar1.style.left = '0%';
            gradientBar1.style.width = `${endPercent}%`;
            gradientBar2.style.left = `${startPercent}%`;
            gradientBar2.style.width = `${100 - startPercent}%`;
        }
    }

    function onMouseMove(event) {
        if (isDraggingStart) {
            const newLeft = Math.min(Math.max(event.clientX - startOffsetX, 0), sliderContainerWidth);
            startSlider.style.left = `${newLeft}px`;
            updateGradient();
        } else if (isDraggingEnd) {
            const newLeft = Math.min(Math.max(event.clientX - endOffsetX, 0), sliderContainerWidth);
            endSlider.style.left = `${newLeft}px`;
            updateGradient();
        }
    }

    function onMouseUp() {
        isDraggingStart = false;
        isDraggingEnd = false;
    }

    startSlider.addEventListener("mousedown", (event) => {
        isDraggingStart = true;
        startOffsetX = event.clientX - startSlider.getBoundingClientRect().left;
    });

    endSlider.addEventListener("mousedown", (event) => {
        isDraggingEnd = true;
        endOffsetX = event.clientX - endSlider.getBoundingClientRect().left;
    });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    updateGradient();
});
