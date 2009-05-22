window.tests = {
	
	"make" : function(){
	  for (var i = 0; i < 250; i++) {
	    document.body.appendChild(
	      new Element('ul', {
	        'class': 'fromcode', id: 'setid'+i
	      }).insert([
	        new Element('li', {html: 'one'}),
	        new Element('li', {html: 'two'}),
	        new Element('li', {html: 'three'})
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
	  var elements = $$('ul > li');
	  elements.each('on', 'click', function() {});
		return elements.length;
	},
	
	"attr" : function(){
		return $$("ul").map('id').length;
	},
	
	"bindattr" : function(){
	  var f = function() {};
	  var elements = $$("ul > li");
	  
	  elements.each('observe', 'mouseover', f);
	  elements.each('set', 'rel', 'touched');
	  elements.each('stopObserving', 'mouseover', f);
	  
	  return elements.length;
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
	  var elements = $$('.fromcode > li');
	  elements.each(function(li) {
		  li.appendChild(new Element('a', { href: 'http://example.com', html: 'link' }))
		});
		return elements.length;
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
	  var elements = $$('.added');
		elements.each('setStyle', {
			backgroundColor: '#ededed',
			color: '#fff'
		});
		return elements.length;
	},
	
	"removeclass": function(){
	  var elements = $$('.added');
	  elements.each('removeClass', 'added');
		return elements.length;
	},
	
	"sethtml": function(){
	  var elements = $$('div');
	  elements.each('udpate', "<p>new content</p>");
		return elements.length;
	},
	
	"insertbefore" : function(){
	  var elements = $$('.fromcode a');
		elements.each(
		  'insert', new Element('p', {html: "A Link"}), 'before'
		);
		return elements.length;
	},
	
	"insertafter" : function(){
	  var elements = $$(".fromcode a");
		elements.each(
			'insert', new Element('p', {html: "After Link"}), 'after'
		);
		return elements.length;
	},
	
	"destroy": function(){ 
		return $$(".fromcode").each('remove').length;
	},
	
	"finale": function(){
	  $(document.body).clean();
	  return $$("body *").length;
	}
};
