import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.fade-swiper', {
		modules: [Navigation, Autoplay, EffectFade],
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
	});
});
