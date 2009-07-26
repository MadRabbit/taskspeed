window.tests = {
	
	"make" : function(){
		for(var i = 0; i<250; i++){
			var ul = dojo.create("ul", { 
				"class": "fromcode",
				id:"setid" + i
			}, dojo.body());
			
			dojo.create('li', {innerHTML: 'one'}, ul);
			dojo.create('li', {innerHTML: 'two'}, ul);
			dojo.create('li', {innerHTML: 'three'}, ul);
		}
		return dojo.query("ul.fromcode").length;
	},
	
	"indexof" : function(){
		for(var i = 0; i < 20; i++){
			var id = dojo.byId("setid150");
			n = dojo.query("ul").indexOf(id);
		}
		return n; 
	},
	
	"bind" : function(){
		return dojo.query("ul > li").connect("onclick", function(){ }).length;
	},
	
	"attr" : function(){
		return dojo.query("ul").attr("id").length;
	},
	
	"bindattr" : function(){
		var someFn = function(){};
		return dojo.query("ul > li").forEach(function(n){
			var c = dojo.connect(n, "onmouseover", someFn);
			dojo.attr(n, "rel", "touched");
			dojo.disconnect(c);
		}).length;
	},

	"table": function(){
		for(var i = 0; i < 40; i++){
		  var n = dojo.create("table", { "class":"madetable" }, dojo.body());
			var row = dojo.create('tr', {}, n);
			
			dojo.create('td', {innerHTML: 'first'}, row);
			dojo.create('td', {innerHTML: 'before'}, row, "first");
		}
		return dojo.query("tr td").length;
	},
	
	"addanchor" : function(){
		return dojo.query(".fromcode > li").forEach(function(li) {
		  dojo.create('a', {href: 'http://example.com', innerHTML: 'link'}, li);
		}).length;
	},

	"alt-add" : function(){
		return dojo.query(".fromcode > li").forEach(function(n){
			dojo.place("<a href='http://example.com'>link2</a>", n);
		}).length;
	},
	
	"create" : function(){
		for(var i = 0; i<500; i++){
			dojo.create("div", { innerHTML:"dojotest", rel:"bar" }, dojo.body());
		}
		return dojo.query("[rel^='bar']").length;
	},
	
	"append" : function(){
		for(var i = 0; i<500; i++){
		  dojo.create('div', {rel: 'bar2'}, dojo.body());
		}
		return dojo.query("div[rel^='bar2']").length;
	},
	
	"addclass-odd" : function(){
		return dojo.query("div").addClass("added").filter(function(n,i){
			return i % 2 === 1
		}).addClass("odd").length;
	},
	
	"style": function(){
		return dojo.query(".added").style({ backgroundColor:"#ededed", color:"#fff" }).length;
	},
	
	"confirm-added" : function(){
		return dojo.query("div.added").length;
	},
	
	"removeclass": function(){
		return dojo.query(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		return dojo.query("div").addContent("<p>new content</p>", "only").length;
	},
	
	"sethtml-alt" : function(){
		return dojo.query(".odd").filter(function(n,i){
			return i % 50 === 0;
		}).forEach(function(n){
			n.innerHTML = "<p>alt content</p>"
		}).length;
	},
	
	"insertbefore" : function(){
		return dojo.query(".fromcode a").forEach(function(a) {
		  dojo.create('p', {innerHTML: 'A Link'}, a, 'before');
		}).length;
	},
	
	"insertafter" : function(){
		return dojo.query(".fromcode a").forEach(function(a) {
		  dojo.create('p', {innerHTML: 'After Link'}, a, 'after');
		}).length;
	},
	
	destroy: function(){ 
		return dojo.query(".fromcode").forEach(dojo.destroy).length;
	},
	
	finale: function(){
		dojo.empty(dojo.body());
		return dojo.query("body *").length; 
	}
	
}