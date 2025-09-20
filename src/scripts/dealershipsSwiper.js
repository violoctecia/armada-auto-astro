import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.dealership-swiper', {
		modules: [Navigation],
		navigation: {
			nextEl: '.dlrNext',
			prevEl: '.dlrPrev',
		},
		slidesPerView: 2,
		spaceBetween: 30,
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		breakpoints: {
			0: { slidesPerView: 1 },
			1000: { slidesPerView: 2 },
		},
	});
});
