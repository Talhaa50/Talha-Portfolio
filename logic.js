// header toogle start //
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=> {
	document.querySelector('body').classList.toggle('toggle-header')
	MenuBtn.classList.toggle('fa-xmark')
})

console.log('Hello World')



let type = new Typed('.TypingAnimation',{
	strings: ['Software Engineer', 'UI/UX designer', 'Web Developer'],
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 2000,
	loop: true,
});


const progressBars = document.querySelectorAll('.inner-bar');
window.addEventListener('scroll', function(){
	progressBars.forEach(function (progressBar) {
		const rect = progressBar.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom>=0) {
			const width = progressBar.getAttribute('data-width');
			progressBar.style.width = width + '%' 
		}
	})
})

let navLinks = document.querySelectorAll('header nav ul li a')


let Section = document.querySelectorAll('section')
window.addEventListener('scroll', ()=>{
	const scrollPos= window.scrollY + 50
	Section.forEach(section=>{
		if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
			navLinks.forEach(link =>{
				link.classList.remove('active');
				if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
					link.classList.add("active");
				}
			})
		}
	})
})
 
const checkbox = document.querySelector('.input');
const body = document.body;
const home = document.querySelector('#home'); 
const para = document.querySelectorAll('.sub-para ');
const head = document.querySelectorAll('#about .about-row .info-col .skills .skill-box .skill-nfo h4');
const bgpara = document.querySelectorAll('#exp .exp-row .exp-box');
const heading = document.querySelectorAll('#exp .exp-row .exp-box h2');
const pera = document.querySelectorAll('#service .ser-row .ser-box');
const haad = document.querySelectorAll('#service .ser-row .ser-box h2');
const btn = document.querySelectorAll('.btn');

// Set default (night mode) styles
btn.forEach(btn=>{
	btn.style.color = 'white'
});
pera.forEach(pera =>{
	pera.style.backgroundColor = '#333333';
});
body.style.backgroundColor = '#181d23'; 
body.style.color = '#181d23'; 
home.style.opacity = '0.7'; 
para.forEach(para => {
    para.style.color = 'rgb(156 163 175)'; 
});
head.forEach(head => {
    head.style.color = 'rgb(156 163 175)'; 
});
bgpara.forEach(bgpara => {
    bgpara.style.backgroundColor = '#333333'; 
});
heading.forEach(heading =>{
	heading.style.color = 'whitesmoke'
});
haad.forEach(haad=>{
	haad.style.color = 'whitesmoke'
});




checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // Switch to day mode
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#000000'; 
        home.style.opacity = '0.9';
		para.forEach(para => {
			para.style.color = 'black'; 
		});
	   head.forEach(head => {
		head.style.color = 'black'; 
	});
	bgpara.forEach(bgpara => {
		bgpara.style.backgroundColor = '#edede9'; 
	});
	heading.forEach(heading =>{
		heading.style.color = 'rgb(168 85 247)'
	})
	pera.forEach(pera =>{
		pera.style.backgroundColor = '#edede9';
	});
	haad.forEach(haad=>{
		haad.style.color = 'rgb(168 85 247)'
	});
	btn.forEach(btn=>{
		btn.style.color = 'rgb(168 85 247)'
	});
	   document.querySelector('.sun svg').style.fill = '#ffd43b'; 
        document.querySelector('.moon svg').style.fill = '#73C0FC';
		
    } else {
       
        body.style.backgroundColor = '#181d23'; 
        body.style.color = '#e8e8e8'; 
        home.style.opacity = '0.7'; 
		head.forEach(head => {
			head.style.color = 'rgb(156 163 175)'; 
		});
		bgpara.forEach(bgpara => {
			bgpara.style.backgroundColor = '#333333'; 
		});
		
		para.forEach(para => {
			para.style.color = 'rgb(156 163 175)'; 
		});
		heading.forEach(heading =>{
			heading.style.color = 'whitesmoke';
		});
		pera.forEach(pera =>{
			pera.style.backgroundColor = '#333333';
		});
		haad.forEach(haad=>{
			haad.style.color = 'whitesmoke'
		});
		btn.forEach(btn=>{
			btn.style.color = 'white'
		});
		document.querySelector('.sun svg').style.fill = '#73C0FC'; 
        document.querySelector('.moon svg').style.fill = '#ffd43b'; 
    }
});
