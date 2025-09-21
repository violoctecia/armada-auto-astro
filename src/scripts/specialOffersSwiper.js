import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.special-swiper', {
		modules: [Navigation],
		navigation: {
			nextEl: '.specialNext',
			prevEl: '.specialPrev',
		},

		breakpoints: {
			0: { slidesPerView: 'auto', spaceBetween: 15 },
			1200: { slidesPerView: 4, spaceBetween: 30 },
		},
	});
});
