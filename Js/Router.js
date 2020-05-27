const routes = {
	'/': home,
	'/home':home,
	'/basket':basket,
	'/phone':phone_description
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
	pathname = getPathWithoutParams(pathname);	
	if(pathname in routes){
		content.innerHTML = routes[pathname];		
		if(pathname in scripts)
			addScript(pathname);
	}	
}

const onNavigate = (pathname) =>{
	window.history.pushState(
		{},
		pathname,
		window.location.origin + pathname);
	console.log(window.location.origin +pathname);
	addContent(pathname);
}

window.onpopstate = () => {
	addContent(window.location.pathname);
}

const content = document.getElementById('content');
addContent(window.location.pathname);

