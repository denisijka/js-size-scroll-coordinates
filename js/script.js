// ===================================================================================
// 1. Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна. 
/*
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);
*/

// ------------------------------

// Ширина и высота окна вместе с полосами прокрутки
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/
// ------------------------------

// Ширина и высота документа
// Включая прокрученную часть

// Если нам нужно получить высоту либо ширину всего документа вкючая ту часть кот. мы видим только при скроле. Для этого мы можем использовать вот такую конструкцию вкючающую в себя множество свойст о кот. мы будем говорить далее, но из-за разнице в браузерах и возможный ошибках чаще всего используют именно такой подход с помощу математической функции Math.max мы получаем максимальное значение из присутствующих:
/*
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/
// ------------------------------

// Получить кол-во прокрученых пикселей
// Только для чтения
/*
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/
// ------------------------------
// Управление прокруткой страницы

// Метод scrollBy(x,y) прокручивает страницу относительно ее текущего положения
/*
function setscrollBy() {
	window.scrollBy(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

*/

// Метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты (pageX,pageY), тоже самое что и window.scroll().

function setScrollTo() {
	// при первом клике сдвинеться вниз на 50px, а при следующем ничего не будет меняться - скролл будет оставаться на том же значении и будут выводиться в консоль те же 50px. Потому что каждый раз страница пытается прокрутиться от 0 до 50px. Если scrollBy добавлял к текущуму скролу каждый раз по 50px то scrollTo от 0 просто прокручивает до 50px.
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}
// scrollTo с параметрами(3-я кнопка):
function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto, по умолчанию auto
		behavior: 'smooth' /* это значит что прокрутка будет плавной. */
		// instant - это прокрутка не плавная, такая же как и у scrollTo без каких то параметров.
		// Проблема в том что эти опции не работают в Safari и широкого приминения у них нет в таком виде.
	});
}
// ------------------------------
// Управление прокруткой страницы
// Вызов elem.scrollIntoView(top) прокручивает страницу,
// чтобы elem оказался вверху. У него есть 1 аргумент:

/*
- если top = true(по умолчанию), то страница будет прокручена, чтобы elem 
появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, что бы elem появился внизу. Нижний край элемента будет совмещён с нижним краем окна.
*/

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		// "start", 'center', 'end' или 'nearest'. По умолчанию 'center'.
		block: 'center',
		// "start", 'center', 'end' или 'nearest'. По умолчанию 'nearest'.
		inline: 'nearest',
		// 'auto' или 'smooth'. По умолчанию 'smooth'.
		behavior: 'smooth'
	});
}
// опции не работают в Safari

// ------------------------------
// Управление прокруткой страницы

// Запретить прокрутку
function setEnableDisableScroll() {
	// document.body.style.overflow = 'hidden';
	document.body.classList.toggle('scroll-lock');
}
/*
Для прокрутки страницы из JavaScript ее DOM должен быть полностью
посроен. По этому скрипты с подоным функционалом не обходимо подключать обязательно внизу страницы.
Например, если мы попытаемся прокрутить страницу из скрипта в <head>, это не сработает.


// ------------------------------

// Метрики элементов на странице

// Получаем объект
// const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойство offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент относительно кот. позицинирован наш объект
// const elementOffsetParent = block.offsetParent;

/*
Это будет ближайший предок, кот. удовлетворяет следующим условиям:

1. Является CSS-позиционированным (css-свойство position равно absolute, relative, fixed или sticky)
2. Или теги <td>, <th>, <table>,
3. или <body>.
*/

// console.log(elementOffsetParent);

/*
Ситуация в кот. offsetParent равно null:
1.Для скрытых элементов (с css - свойство display: none; иди когда его нет в документе).
2.Для элементов <body> и <html>.
3.Для элементо с position:fixed;
*/

// ------------------------------

// Метрики элементов на странице
/*
// Получаем объект
const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент относительно которого позицинировал наш объект
const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);


// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

// console.log(elementOffsetLeft);/* наш объект смещен влево на 520px относительно <div class="lesson"> */
// console.log(elementOffsetTop);/* а сверху он смещен на 1015px относительно <div class="lesson">  */

// ------------------------------

// Метрики элементов на странице
/*
// Получаем объект
const block = document.querySelector('.lesson__block');

// Общие размеры объекта
// offsetWidth и offsetHeight

// Получаем размеры объекта при box-sizing: border-box;
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
// Эти значения включают в себя и рамку border и padding и полосу прокрутки. Одним словом это общая ширина и высота подопытного объекта.

// Метрики для не показываемых элементов равны нулю.
*/
// ------------------------------

// Метрики элементов на странице

// Получаем объект
/*
const block = document.querySelector('.lesson__block');

// Отступы внутренней части элемента от внешней
// clientTop и clientLeft

const elementclientTop = block.clientTop;
const elementclientLeft = block.clientLeft;

console.log(elementclientTop);
console.log(elementclientLeft);
*/
/*
 Мы видим 2 значения 20 и 20. Это значения которые равны ширине рамки, ширине border.
 clientTop и clientLeft возращают не размер рамки, а именно отступ внутренней части элемента от внешней
*/

// ------------------------------

// Метрики элементов на странице

// Получаем объект

// const block = document.querySelector('.lesson__block');

/*
Размеры объекта без
рамок и полосы прокрутки
clientWidth и clientHeight
*/
/*
const elementclientWidth = block.clientWidth;
const elementclientHeight = block.clientHeight;

console.log(elementclientWidth);
console.log(elementclientHeight);
*/
/*
Общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
500 - 20 - 20 - 17 = 443
*/

// ------------------------------

// Метрики элементов на странице

// Получаем объект

// const block = document.querySelector('.lesson__block');

/*
Размеры объекта включающие в себя
прокрученную (которую не видно) часть.
В остальном работают как clientWidth/clientHeight,
scrollWidth и scrollHeight
*/
/*
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/
// ------------------------------

// Метрики элементов на странице

// Получаем объект

// const block = document.querySelector('.lesson__block');

/*
Размеры прокрученной области
scrollLeft и scrollTop
*/
/*
Эти свойства работают не только для чтения
и мы можем задать изначально прокрученную часть
*/
// block.scrollTop = 150; /* что подразумевает 150px сверху */
/*
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/
// ------------------------------

// Метрики элементов на странице

// Получаем объект

// const block = document.querySelector('.lesson__block');

// Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта у которого есть полоса прокрутки
/*
function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: 'smooth'
	});
}
*/
//========================================================================================================================================================
// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
(как position: fixed, отсчёт идет от верхнего левого угла окна.)
Принято обозначать clientX / clientY.
2. Относительно документа.
(как position: absolute относительно < body >, отсчёт идет от
	верхнего левого угла документа).
Принято обозначать pageX / pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в контексте окна
меняются, так как они двигаются, но в то же время их координаты относительно
документа остаются такими же.
*/
// ------------------------------
// Координаты относительно окна браузера

// getBoundingClientRect
/*
// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера

const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);
*/
/*
Значения bottom и right
Значение bottom - это значение суммы top и height, если сложить
то мы получим bottom. 292px + 57px = 349px это bottom.
Собственно это координата нижнего края нашего объекта сверху.
Тоже самое будет в метрике right - это положение правого края
нашего объекта относительно левого края браузера. Так же мы в консоли замечаем
дублирующее значение x и у - они равны left и top. На самом деле они не
всегда могут быть равны, но на практике мы, как правило всегда используем left и top.
*/

/*
// Получаем конкретную координату относительно окна браузера 
// позицию слева
const getItemLeftCoords = item.getBoundingClientRect().left;
console.log(getItemLeftCoords);
*/
/*
// Получаем конкретную координату относительно окна браузера 
// позицию сверху(то есть положение верхнего края моего объекта относительно верхнего края окна браузера)
const getItemTopCoords = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно окна документа
// (создаем вторую константу и к текущему положению добавляем window.pageYOffset - мы знаем что это свойство возращает количество прокрученных пикселей в данном случае по вертикали)
const getItemTopDocumentCoords = getItemTopCoords + window.pageYOffset;

console.log(getItemTopCoords);
console.log(getItemTopDocumentCoords);
*/
/*
По скольку наш скролл в верхней позиции, то эти значения будут равны. Но стоит нам немного скролл покрутить и мы увидим что просто getBoundingClientRect().top; уменьшился, то есть теперь растояние вверхнего края до верхнего края браузера уже 92px, но второе значение относительно документа никак не изменилось и осталось 292px, потому что к 92px добавлен pageYOffset(количество прокрученных пикселей)
*/


// ------------------------------
// Получение объекта по координатам 
// document.elementFromPoint(x,y)

/*
Если нам нужно обратное действие, у нас есть координаты, 
но нет объекта, мы хотим узнать какой же элемент 
находиться по заданным координатам.
*/

const elem = document.elementFromPoint(100, 100);

console.log(elem);
/*
Но получаемый объект всегда будет другим в зависимости
от того где находится наш скролл, все потому что
эти координаты относительно окна браузера.
*/


//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


/*
// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/
//---------------------------------

/*
// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/

//---------------------------------

/*
// Получить кол-во прокрученных пикселей
// Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

//---------------------------------
// Управление прокруткой страницы 

/*
// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

function setScrollBy() {
window.scrollBy(0, 50);
const windowScrollTop = window.pageYOffset;
console.log(windowScrollTop);
}
*/

//------

/*
// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()

function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/

//------

/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/
/*
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/


//-------

/*
// Запретить прокрутку
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}
*/
/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/

//========================================================================================================================================================

// Метрики элементов на странице

// Получаем объект
//const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
//const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

//console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/


/*
// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/


//========================================================================================================================================================

// Общие размеры объекта
// offsetWidth и offsetHeight
/*
// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/
// Метрики для не показываемых элементов равны нулю.

//========================================================================================================================================================

/*
// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

//========================================================================================================================================================

/*
// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443
*/

//========================================================================================================================================================

/*
// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

//========================================================================================================================================================

/*
// Размеры прокрученной области
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

//========================================================================================================================================================

/*
// Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта

function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: "smooth"
	})
}*/

//========================================================================================================================================================


// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
	(как position: fixed, отсчёт идёт от верхнего левого угла окна.)
	Принято обозначать clientX/clientY.
2. Относительно документа.
	(как position: absolute относительно <body>, отсчёт идёт от
	верхнего левого угла документа.)
	Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются такими же.

*/

//========================================================================================================================================================


/*
// Координаты относительно окна браузера
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/

//========================================================================================================================================================


/*
// Координаты относительно документа
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);
*/

//========================================================================================================================================================

/*
// Получение объекта по координатам
// document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);
console.log(elem);
*/

//========================================================================================================================================================
//========================================================================================================================================================



/*
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
// ==========================================================
// Задача №1.
// Узнать ширину полосы прокрутки

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

// ------------------------------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

// ==========================================================
/*
// Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы
*/

const timerID = setTimeout(logger, 1000);

function logger() {

	window.scrollTo({
		top: 850,
		left: 0,

		behavior: 'smooth'
	});
}

// ==========================================================
/*
// Задача №3.
Получите координаты любых трех элементов на странице
*/

const elemet = document.elementFromPoint(100, 100);

console.log(elem);
