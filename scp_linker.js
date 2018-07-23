onload = function(){
	var content = document.body.innerHTML
	document.body.innerHTML = content.replace(/SCP-(\d{3,4})(-JP)?/g, '<a href="http://ja.scp-wiki.net/scp-$1$2" target="_">SCP-$1$2</a>')	
}