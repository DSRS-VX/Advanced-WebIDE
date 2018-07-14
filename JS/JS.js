function LC()
{
	var Body = document.getElementById("Body")
	Body.style = "background-color: #FFFFFF;"
}
function DC()
{
	var Body = document.getElementById("Body")
	Body.style = "background-color: #000000;"
}
function Preview()
{
	var HTML = document.getElementById("HTMLIDE");
	var CSS = document.getElementById("CSSIDE");
	var JS = document.getElementById("JSIDE");
	let newWindow = window.open("about:blank", "", "_blank");
   		let textBlock = HTML.value + "<style>" + CSS.value + "</style>" + "<script>" + JS.value + "</script>";
    	if (newWindow) {
    		newWindow.document.write(textBlock);
    	}
    	else
    	{
    		Console.log("Preview is not working due to you not enabling popups, this will not spam your computer")
    	}
}