window.tests = {
	
	"make" : function(){
		var ul;
		for ( var i = 0; i < 250; i++ ) {
			ul = document.createElement('ul');
			YAHOO.util.Dom.addClass(ul, 'fromcode');
			YAHOO.util.Dom.setAttribute(ul, 'id', 'setid'+i);
			document.body.appendChild(ul);
			
			var li1 = document.createElement('li');
			var li2 = document.createElement('li');
			var li3 = document.createElement('li');
			
			li1.innerHTML = 'one';
			li2.innerHTML = 'two';
			li3.innerHTML = 'three';
			
			ul.appendChild(li1);
			ul.appendChild(li2);
			ul.appendChild(li3);
		}
		return YAHOO.util.Selector.query('ul.fromcode').length;
	},
	
	"indexof" : function(){
		// No indexof method for arrays in YUI
		var target, uls, index, i, j, len;
		for ( i = 0; i < 20; i++ ) {
			target = YAHOO.util.Dom.get('setid150');
			uls = YAHOO.util.Selector.query('ul');
			index = 0;
			for ( j = 0, len = uls.length; j < len; j++ ) {
				if ( uls[j] === target ) {
					index = j;
					break;
				}
			}
		}
		return index;
	},
	
	"bind" : function(){
		var lis = YAHOO.util.Selector.query('ul > li');
		YAHOO.util.Event.on(lis, 'click', function(){});
		return lis.length;
	},
	
	"attr" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('ul'), function(el){
			return YAHOO.util.Dom.getAttribute(el, 'id');
		}).length;
	},
	
	"bindattr" : function(){
		var lis = YAHOO.util.Selector.query('ul > li'),
			subscriber = function(){};
		return YAHOO.util.Dom.batch(lis, function(li){
			YAHOO.util.Event.on(li, 'mouseover', subscriber);
			YAHOO.util.Dom.setAttribute(li, 'rel', 'touched');
			YAHOO.util.Event.removeListener(li, 'mouseover', subscriber);
		}).length;
	},

	"table": function(){
		// Making sure to help IE with DOM manipulation wrt tables
		var table, tr, td1, td2;
		for (var i = 0; i < 40; i++ ) {
		  table = document.createElement('table');
		  YAHOO.util.Dom.addClass(table, 'madetable');
		  document.body.appendChild(table);
			
			tr = document.createElement('tr');
			table.appendChild(tr);
			
			td1 = document.createElement('td');
			td1.innerHTML = 'first';
		  tr.appendChild(td1);
		  
		  td2 = document.createElement('td');
		  td2.innerHTML = 'before';
		  
			YAHOO.util.Dom.insertBefore(td2, td1);
		}
		return YAHOO.util.Selector.query('tr td').length;
	},
	
	"addanchor" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode > li'), function(li){
		  var a = document.createElement('a');
		  YAHOO.util.Dom.setAttribute(a, 'href', "http://example.com");
		  a.innerHTML = 'link';
		  
			li.appendChild(a);
		}).length;
	},

	"append" : function(){
		var div;
		for ( var i = 0; i < 500; i++ ) {
			div = document.createElement('div');
			YAHOO.util.Dom.setAttribute(div, 'rel', 'foo2');
			document.body.appendChild(div);
		}
		return YAHOO.util.Selector.query("div[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
		var divs = YAHOO.util.Selector.query('div'),
			// odds = YAHOO.util.Selector.filter(divs, ':nth-child(even)'),
			odds = [],
			i;
		YAHOO.util.Dom.addClass(divs, 'added');
		for ( i = 0; i < divs.length; i++ ) { // like dojo 1.3
			if ( i % 2 === 1 ) {
				odds.push(divs[i]);
			}
		}
		YAHOO.util.Dom.addClass(odds, 'odd');
		return odds.length;
	},
	
	"style": function(){
		var nodes = YAHOO.util.Dom.getElementsByClassName('added');
        YAHOO.util.Dom.setStyle(nodes, 'background-color', '#ededed');
        YAHOO.util.Dom.setStyle(nodes, 'color', '#fff');
		return nodes.length;
	},
	
	"removeclass": function(){
		var nodes = YAHOO.util.Dom.getElementsByClassName('added');
		YAHOO.util.Dom.removeClass(nodes, 'added');
		return nodes.length;
	},
	
	"sethtml": function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('div'), function(div){
			div.innerHTML = '<p>new content</p>';
		}).length;
	},
	
	"insertbefore" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode a'), function(a){
			var p = document.createElement('p');
			p.innerHTML = 'A Link';
			YAHOO.util.Dom.insertBefore(p,a);
		}).length;
	},
	
	"insertafter" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode a'), function(a){
			var p = document.createElement('p');
			p.innerHTML = 'After Link';
			YAHOO.util.Dom.insertAfter(p,a);
		}).length;
	},
	
	"destroy": function(){ 
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode'), function(n){
			n.parentNode.removeChild(n);
		}).length;
	},
	
	"finale": function(){
		document.body.innerHTML = ''; // Same as other library's empty methods
		return YAHOO.util.Selector.query('body *').length;
	}
	
};
