// Seleção de Elementos
const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const updatePagination = (tab, index) => {
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 280}px)`; 
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};

// Configuração do Swiper - Biblioteca do Slider
const swiper = new Swiper(".container-slider", {
    effect: "fade",
    speed: 1300,
    autoplay: { delay: 40000 },
    on: {
        init: function () {
            updatePagination(sliderTabs[this.activeIndex], this.activeIndex);
        }
    }
});

// Eventos de clique e mudança de slide
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updatePagination(tab, index);
    });
});

swiper.on('slideChange', function () {
    updatePagination(sliderTabs[swiper.activeIndex], swiper.activeIndex);
});

window.addEventListener("resize", () => {
    updatePagination(sliderTabs[swiper.activeIndex], swiper.activeIndex);
});
