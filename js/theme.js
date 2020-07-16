var palette = "1",
	format = "a4";
function refreshView()
{
	document.getElementsByTagName("html")[0].style="--theme: var(--theme_"+palette+");--fond: var(--fond_"+palette+");--titre: var(--titre_"+palette+");--height: var(--height-"+format+");--width: var(--width-"+format+");--height-header: var(--height-"+format+"-header);--height-body: var(--height-"+format+"-body);"; 
}
function changeTheme(_palette)
{
	palette = _palette;
	refreshView();
}
function changeFormat(_format)
{
	format = _format;
	refreshView();
}

refreshView();