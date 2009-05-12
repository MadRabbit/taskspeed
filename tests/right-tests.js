window.tests = {
	
	"make" : function(){
	  for (var i = 0; i < 250; i++) {
	    document.body.appendChild(
	      new Element('ul', {
	        'class': 'fromcode', id: 'setid'+i
	      }).insert([
	        new Element('li').insert('one'),
	        new Element('li').insert('two'),
	        new Element('li').insert('three')
	      ])
	    );
	  }
	  
		return $$('ul.fromcode').length;
	},
	
	"indexof" : function(){
		var index, el, uls;

		for (var i = 0; i < 20; i++) {
      el    = $('setid150');
      uls   = $$('ul');
      index = uls.indexOf(el);
		}
	  
		return index;
	},
	
	"bind" : function(){
		return $$('ul > li').each('onClick', function() {}).length;
	},
	
	"attr" : function(){
		return $$("ul").map(function() { return this.id; }).length;
	},
	
	"bindattr" : function(){
	  var f = function() {};
	  return $$("ul > li").each('observe', 'mouseover', f
	    ).each('set', 'rel', 'touched'
	    ).each('stopObserving', 'mouseover', f).length;
	},
	
	"table": function(){
		var table, tr;
		for (var i = 0; i < 40; i++) {
			table = new Element('table', { 'class': 'madetable' });
			document.body.appendChild(table);

			tr = new Element('tr');
			tr.appendChild(new Element('td'));

			table.appendChild(tr);

			tr.insert({ top: new Element('td') });		
		}
	  
		return $$('tr td').length;
	},
	
	"addanchor" : function(){
		return $$('.fromcode > li').each(function(li) {
		  li.appendChild(new Element('a', { href: 'http://example.com', 'html': 'link' }))
		}).length;
	},
	
	"append" : function(){
	  for (var i = 0; i < 500; i++) {
	    var el = new Element('div');
	    el.setAttribute('rel', 'foo2');
		  document.body.appendChild(el);
	  }
	  
	  return $$("[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
	  var oddDivs = [];
	  
	  $$('div').each(function(div, index) {
		  div.addClass('added');
		  if (index % 2 === 1) {
		    div.addClass('odd');
		    oddDivs.push(div);
		  }
	  });
	  
	  return oddDivs.length;
	},
	
	"style": function(){
		return $$('.added').each('setStyle', {
			backgroundColor: '#ededed',
			color: '#fff'
		}).length;
	},
	
	"removeclass": function(){
		return $$('.added').each('removeClass', 'added').length;
	},
	
	"sethtml": function(){
		return $$('div').each('udpate', "<p>new content</p>").length;
	},
	
	"insertbefore" : function(){
		return $$('.fromcode a').each(
		  'insert', new Element('p').update("A Link"), 'before'
		).length;
	},
	
	"insertafter" : function(){
		return $$(".fromcode a").each(
			'insert', new Element('p').update("After Link"), 'after'
		).length;
	},
	
	"destroy": function(){ 
		return $$(".fromcode").each('remove').length;
	},
	
	"finale": function(){
	  $(document.body).clean();
	  return $$("body *").length;
	}
};
