import Swiper from 'swiper';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

document.addEventListener('DOMContentLoaded', () => {
	new Swiper('.inStockSwiper', {
		modules: [Navigation, Grid],
		navigation: { nextEl: '.next', prevEl: '.prev' },
		slidesPerView: 7,
		grid: { rows: 2, fill: 'row' },
		spaceBetween: 15,
		loop: false,
		centeredSlides: false,
		breakpoints: {
			0: { slidesPerView: 'auto', grid: { rows: 1 } },
			1000: { slidesPerView: 5, grid: { rows: 2 } },
			1400: { slidesPerView: 7, grid: { rows: 2 } },
		},
		slidesOffsetBefore: 10,
		slidesOffsetAfter: 5,
	});
});
