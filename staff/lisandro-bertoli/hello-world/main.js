document.getElementsByTagName('h1')[0].addEventListener('click', function() {
	alert('Hello, World!');
});

var content = document.getElementById('content');

var btn = document.createElement('button');
btn.classList.add('btn-style');

btn.innerHTML = 'Press de Button';
content.appendChild(btn);

var phrases = ['¡La concha de la lora!','¡el código no se entiende!','¡O espavilas o te expulso del BootCamp','¡Eres un inútil!','!menudo paquete!'];

var btnAction = document.getElementsByTagName('button')[0];

btnAction.addEventListener('click',function(){
	var rand = Math.floor(Math.random() * (3 - 0)) + 0;
	alert(phrases[rand]);
});
