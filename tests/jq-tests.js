window.tests = {
	
	"make": function(){
		for(var i = 0; i<250; i++){
		  $('<ul>', {'id': 'setid'+i, 'class': 'fromcode'})
		    .append($('<li>', {html: 'one'}))
		    .append($('<li>', {html: 'two'}))
		    .append($('<li>', {html: 'three'}))
		    .appendTo(document.body);
		}
		return $("ul.fromcode").length;
	},
	
	"indexof" : function(){
		var n, id;
		for(var i = 0; i < 20; i++){
			n = $("ul").index( $("#setid150")[0] )
		}
		return n;
	},
	
	"bind" : function(){
		return $("ul > li").bind("click", function(){ }).length;
	},
	
	"attr" : function(){
		return $("ul").map(function(){ return this.id; }).length;
	},
	
	"bindattr" : function(){
		function someFn(){}
		return $("ul > li")
			.bind("mouseover", someFn)
			.attr("rel", "touched")
			.unbind("mouseover")
			.length;
	},

	"table": function(){
	  var table, tr;
		for(var i = 0; i < 40; i++){
		  table = $("<table>", {'class': 'madetable'}).appendTo(document.body);
		  
		  $('<tr>')
		    .append($('<td>'))
		    .appendTo(table)
		    .prepend($('<td>'));
		}
		
		return $("tr td").length;
	},
	
	"addanchor" : function(){
		return $(".fromcode > li").each(function(index, link) {
		  $(link).append($('<a>', {href: 'http://example.com', html: 'link'}));
		}).length;
	},
	
	"append": function(){
		for(var i = 0; i<500; i++){
			$("body").append($('<div>', {rel: 'foo', html: 'test'}));
		}
		return $("[rel^='foo']").length;
	},
		
	"addclass-odd" : function(){
		return $("div").addClass("added").filter(":odd").addClass("odd").length;
	},
	
	"style" : function(){
		return $(".added").css({ backgroundColor:"#ededed", color:"#fff" }).length;
	},

	"removeclass" : function(){
		return $(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		return $("div").html("<p>new content</p>").length;
	},
	
	"insertbefore" : function(){
	  return $(".fromcode a").each(function(index, link) {
	    $(link).before($('<p>', {html: 'A Link'}));
	  }).length;
	},
	
	"insertafter" : function(){
		return $(".fromcode a").each(function(index, link) {
		  $(link).after($('<p>', {html: 'After Link'}));
		}).length;
	},
	
	"destroy": function(){
		return $(".fromcode").remove().length;
	},
	
	"finale": function(){
		$("body").empty();
		return $("body *").length;
	}
	
};
