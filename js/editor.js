function Define(contenu)
{
	var p = contenu.search(/#{/),
		define = "";
			
	if(p>=0){
		define = "<span style=\"";
	}
		
	while(p>=0){
	var prepro = contenu.substr(p+2,contenu.search(/};/)-p-2);
	contenu = contenu.replace("#{"+prepro+"};","");
		var p2;
		if((p2 = prepro.search(/police /))>=0){
			var police = prepro.substr(p2+7);
			define += "font-family : "+police+";";
		}
		else if((p2 = prepro.search(/couleur /))>=0){
			var couleur = prepro.substr(p2+8);
			define += "color : var(--"+couleur+");"
		}
		else if((p2 = prepro.search(/taille /))>=0){
			var taille = prepro.substr(p2+6);
			define += "font-size : "+taille+";"
		}
		p = contenu.search(/#{/);
	}
	
	if(define.length > 0)
	{
		define += "\">" + contenu + "</span>";
	}
			
	return define;
}

function View(article,view)
{
			var contenu = article.value,
				notebaspage = 0,
				baspage = ""

		//nettoyage de caractères vides en début de contenu
			while(contenu.length > 0 && (contenu.search(" ")==0 || contenu.search("\n")==0 || contenu.search("\t")==0))
			{
				contenu = contenu.slice(1,contenu.length);
			}


		//détermination de la première balise
			if(contenu.search("'>")==0){
				contenu = contenu.replace("'>","<p class=\"important\">");
			}
			else if(contenu.search("t>")==0){
				contenu = contenu.replace("t>","<h2>");
			}
			else if(contenu.search(".>")!=0){
				contenu = "<p>" + contenu;
			}

		//italique et gras

			contenu = contenu.replace(/\*\/>/gi,"<strong>italiq>");
			contenu = contenu.replace(/\/\*>/gi,"<strong>italiq>");

			contenu = contenu.replace(/\/>/gi,"italiq>");
			
			contenu = contenu.replace(/<\/\*/gi,"double>");
			contenu = contenu.replace(/<\//gi,"</em>");
			contenu = contenu.replace(/double>/gi,"</em></strong>");

			contenu = contenu.replace(/<\*\//gi,"</em></strong>");
			
			contenu = contenu.replace(/\*>/gi,"<strong>");
			contenu = contenu.replace(/<\*/gi,"</strong>");


		//barre
			contenu = contenu.replace(/b>/gi,"<span style=\"text-decoration:line-through var(--theme);\">"); // class=\"barre\"
			contenu = contenu.replace(/<b/gi,"</span>");


		//insertion d'image DEPRECATED
			contenu = contenu.replace(/\n!>small<size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> small <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!>small <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> small<size/gi,"</br><img class=\"center\" src=\"");
			
			contenu = contenu.replace(/\n!>big<size/gi,"</br><img src=\"");
			contenu = contenu.replace(/\n!> big <size/gi,"</br><img src=\"");
			contenu = contenu.replace(/\n!>big <size/gi,"</br><img src=\"");
			contenu = contenu.replace(/\n!> big<size/gi,"</br><img src=\"");
			
			contenu = contenu.replace(/\n!>medium<size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> medium <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!>medium <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> medium<size/gi,"</br><img class=\"center\" src=\"");
			
			contenu = contenu.replace(/!>small<size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> small <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!>small <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> small<size/gi,"<img class=\"center\" src=\"");
			
			contenu = contenu.replace(/!>big<size/gi,"<img src=\"");
			contenu = contenu.replace(/!> big <size/gi,"<img src=\"");
			contenu = contenu.replace(/!>big <size/gi,"<img src=\"");
			contenu = contenu.replace(/!> big<size/gi,"<img src=\"");
			
			contenu = contenu.replace(/!>medium<size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> medium <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!>medium <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> medium<size/gi,"<img class=\"center\" src=\"");


		//insertion d'image	
			contenu = contenu.replace(/!>left<size/gi,"<img class=\"left\" src=\"");
			contenu = contenu.replace(/!> left <size/gi,"<img class=\"left\" src=\"");
			contenu = contenu.replace(/!>left <size/gi,"<img class=\"left\" src=\"");
			contenu = contenu.replace(/!> left<size/gi,"<img class=\"left\" src=\"");
			
			contenu = contenu.replace(/!>right<size/gi,"<img class=\"right\" src=\"");
			contenu = contenu.replace(/!> right <size/gi,"<img class=\"right\" src=\"");
			contenu = contenu.replace(/!>right <size/gi,"<img class=\"right\" src=\"");
			contenu = contenu.replace(/!> right<size/gi,"<img class=\"right\" src=\"");
			
			contenu = contenu.replace(/\n!>center<size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> center <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!>center <size/gi,"</br><img class=\"center\" src=\"");
			contenu = contenu.replace(/\n!> center<size/gi,"</br><img class=\"center\" src=\"");
			
			contenu = contenu.replace(/!>center<size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> center <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!>center <size/gi,"<img class=\"center\" src=\"");
			contenu = contenu.replace(/!> center<size/gi,"<img class=\"center\" src=\"");
			
			contenu = contenu.replace(/!>/gi,"<img src=\"");
			contenu = contenu.replace(/<!/gi,"\" alt=\"image non disponible\"/>");


		//insertion d'articles
			contenu = contenu.replace(/a>/gi,"article>");
			contenu = contenu.replace(/<a/gi,"\"><img src=\"https://i.imgur.com/gkWVdWs.png\" width=\"100%\"/><span class=\"overlay\"><span>Article 195</span><span>Le Fil 999</span></span></a>");
			contenu = contenu.replace(/article>/gi,"<a class=\"article\" href=\"");	


		//découpage des note de bas de page
			var p = contenu.search(/\^>/);
			while(p>=0){
				var note = contenu.substr(p+2,contenu.search(/<\^/)-p-2);
				notebaspage++;
				contenu = contenu.replace("^>"+note+"<^"," <a class=\"intern\" style=\"font-size:60%;vertical-align:super;\" href=\"#note_"+notebaspage+"\"> ["+notebaspage+"] </a>"); // class=\"note\"
				baspage += "\nsmp;note_"+notebaspage+"\">["+notebaspage+"] "+note;
				p = contenu.search(/\^>/);
			}

			contenu += baspage;


		// mise en forme des notes de bas de page
			contenu = contenu.replace(/<'\nsmp;/g,"</p><p style=\"font-size:60%\" class=\"my-0\" id=\"");
			contenu = contenu.replace(/<t\nsmp;/g,"</h2><p style=\"font-size:60%\" class=\"my-0\" id=\"");
			contenu = contenu.replace(/\nsmp;/g,"</p><p style=\"font-size:60%\" class=\"my-0\" id=\""); // class=\"note-pied\"


		//mode d'édition
			p = contenu.search(/e>/);
			while(p>=0)
			{
				var p_fin = contenu.search(/<e/);
				var edit = Define(contenu.substr(p + 2,p_fin-p-2));
				contenu = contenu.substr(0,p) + edit + contenu.substr(p_fin+2);
				p = contenu.search(/e>/);
			}


		//fin de la procédure d'échappement de l'italique
			contenu = contenu.replace(/italiq>/gi,"<em>");


		//lien
			contenu = contenu.replace(/l>/gi,"<a href=\"");
			contenu = contenu.replace(/<:>/gi,"\">");
			contenu = contenu.replace(/<l/gi,"</a>");


		//titre
			contenu = contenu.replace(/t>/gi,"</p><h2>");
			contenu = contenu.replace(/<t/gi,"</h2><p>");


		//citation
			contenu = contenu.replace(/\n\'>/gi,"</p><p class=\"important\">");
			contenu = contenu.replace(/<\'\n/gi,"</p><p>");

			contenu = contenu.replace(/\'>/gi,"<span class=\"important\">");
			contenu = contenu.replace(/<\'/gi,"</span>");


		//liste
			contenu = contenu.replace(/\.>\n/gi,"</p><ul><li>");
			contenu = contenu.replace(/\.>/gi,"</p><ul><li>");

			contenu = contenu.replace(/\.1>\n/gi,"</p><ol><li>");
			contenu = contenu.replace(/\.1>/gi,"</p><ol><li>");

			contenu = contenu.replace(/\n<;\n/gi,"</li><li>");
			contenu = contenu.replace(/<;\n/gi,"</li><li>");
			contenu = contenu.replace(/\n<;/gi,"</li><li>");
			contenu = contenu.replace(/<;/gi,"</li><li>");

			contenu = contenu.replace(/\n<\.1/gi,"</li></ol><p>");
			contenu = contenu.replace(/<\.1/gi,"</li></ol><p>");

			contenu = contenu.replace(/\n<\./gi,"</li></ul><p>");
			contenu = contenu.replace(/<\./gi,"</li></ul><p>");


		//paragraphe simple
			contenu = contenu.replace(/\n/gi,"</p><p>");


		//insertion des esperluettes
			contenu = contenu.replace(/&/gi,"ₔ");


		//fermeture des dernières balises
			contenu = "<section>"+contenu+"</p></section>";


		//nettoyage des balises vides
			contenu = contenu.replace(/<p><\/p>/gi,"");
			contenu = contenu.replace(/<li><\/li>/gi,"");


		//insertion de l'article
			view.innerHTML = contenu;
}

var mode_view = true;
			
function setModeView(button)
{
	if(mode_view)
	{
		View(button.parentElement.getElementsByTagName('textarea')[0],button.parentElement.getElementsByClassName('view')[0]);
		button.parentElement.removeAttribute('edit');
	}
	else
	{
		button.parentElement.setAttribute('edit','');
	}
	
	mode_view = !mode_view;
}