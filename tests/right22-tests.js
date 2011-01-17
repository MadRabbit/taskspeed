window.tests = {

  "make" : function(){
    for (var i = 0; i < 250; i++) {
      new Element('ul', {
        'class': 'fromcode', id: 'setid'+i
      }).insert([
        new Element('li', {html: 'one'}),
        new Element('li', {html: 'two'}),
        new Element('li', {html: 'three'})
      ]).insertTo(document.body);
    }

    return $$('ul.fromcode', true).length;
  },

  "indexof" : function(){
    var index, doc = $(document);

    for (var i = 0; i < 20; i++) {
      index = $$('ul', true).indexOf($('setid150')._);
    }

    return index;
  },

  "bind" : function(){
    var elements = $$('ul > li');
    elements.each('on', 'click', function() {});
    return elements.length;
  },

  "attr" : function(){
    return $$("ul", true).map(function(i) { return i.id; }).length;
  },

  "bindattr" : function(){
    var f = function() {};
    return $$("ul > li").each(function(element) {
      element
        .on('mouseover', f)
        .set('rel', 'touched')
        .stopObserving('mouseover', f);
    }).length;
  },

  "table": function(){
    var table, tr;
    for (var i = 0; i < 40; i++) {
      table = new Element('table', { 'class': 'madetable' }).insertTo(document.body);
      tr = new Element('tr');
      tr.insert(new Element('td'));

      table.insert(tr);

      tr.insert(new Element('td'), 'top');
    }

    return $$('tr td', true).length;
  },

  "addanchor" : function(){
    var elements = $$('.fromcode > li');
    elements.each(function(li) {
      li.insert(new Element('a', { href: 'http://example.com', html: 'link' }))
    });
    return elements.length;
  },

  "append" : function(){
    for (var i = 0; i < 500; i++) {
      $(document.body).insert(new Element('div', {rel: 'foo2'}));
    }

    return $$("[rel='foo2']", true).length;
  },

  "addclass-odd" : function(){
    return $$('div').filter(function(div, index) {
      div.addClass('added');
      if (index % 2 === 1) {
        div.addClass('odd');
        return true;
      } else {
        return false;
      }
    }).length;
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
    elements.each('update', "<p>new content</p>");
    return elements.length;
  },

  "insertbefore" : function(){
    var elements = $$('.fromcode a');
    elements.each(function(a) {
      a.insert(new Element('p', {html: "A Link"}), 'before');
    });
    return elements.length;
  },

  "insertafter" : function(){
    var elements = $$(".fromcode a");

    elements.each(function(a) {
      a.insert(new Element('p', {html: "After Link"}), 'after');
    });

    return elements.length;
  },

  "destroy": function(){
    return $$('.fromcode').each('remove').length;
  },

  "finale": function(){
    $(document.body).clean();
    return $$("body *", true).length;
  }
};
