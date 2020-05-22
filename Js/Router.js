const defaultFolder = '/MyProjects/Online_store';
const routes = {
	'/': home,
	'/home':home,
	'/basket':basket,
	'/phone':phone_description,
	'/filter':filterPage	
};

const scripts = {
	'/':'Js/Home.js',
	'/home':'Js/Home.js',
	'/basket':'Js/Basket.js',
	'/phone':'Js/MobileDescription.js'
}

const authRoutes = ['/basket'];

function getPathWithoutParams(pathname){	
	let startParamsIndex = pathname.indexOf('?');
	if(startParamsIndex != -1)
		return pathname.slice(0, startParamsIndex);
	return pathname;
}

function addScript(pathname){
	var scriptSrc = scripts[pathname];
	var script = document.createElement('script');
	script.src = scriptSrc;
	content.appendChild(script);
}

async function addContent(pathname){
	/*if(authRoutes.includes(pathname)){
		let isAuth = await authService.isAuthenticated();
		if(!isAuth){
			onNavigate('/404');
			return;
		}
	}*/
	
	pathname = getPathWithoutParams(pathname);	
	if(pathname in routes){
		content.innerHTML = routes[pathname];		
		if(pathname in scripts)
			addScript(pathname);
	}
	//else
		//onNavigate('/404');
}

const onNavigate = (pathname) =>{
	window.history.pushState(
		{},
		pathname,
		window.location.origin + defaultFolder + pathname);
	console.log(window.location.origin + defaultFolder + pathname);
	addContent(pathname);
}

window.onpopstate = () => {
	addContent(window.location.pathname);
}

function openFilter(){
	content.style.margin ='-8px';
	onNavigate('/filter');
}

function closeFilter(){
	content.style.margin ='0px';
	onNavigate('/home');
}

const content = document.getElementById('content');
onNavigate('/');
