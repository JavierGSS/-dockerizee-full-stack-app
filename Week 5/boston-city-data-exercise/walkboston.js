  function top5Boston(boston, container) {
    let people = boston.data;
    var html = '';

    let orderedSet = people.sort(function(a, b) {return b[11] - a[11];});

    for (let i = 0; i < 5; i++) {
      html +=
      '<li class="post">' + 
      '<h2>' + orderedSet[i][8] + '</h2>' + 
      '<h3>' + orderedSet[i][11] + '</h3>';
    }

    container.innerHTML = '<ul id = "top5">' + html + '</ul>';

  }

  function over200(boston, container) {
    let people = boston.data;
    var html = '';

    let orderedSet = people.sort(function(a, b) {return b[11] - a[11];});
    let  up200 = orderedSet.filter(orderedSet => orderedSet[11] >= 200000);

    for (let i = 0; i < up200.length; i++) {
        html += '<li class="post">' +
        '<h2>' + up200[i][8] + '</h2>' +
        '<h3>' + up200[i][11] + '</h3>'
    }

    container.innerHTML = '<ul id = "topEmployees">' + html + '</ul>';

  }

  top5Boston(boston, document.getElementById('container'));
  over200(boston, document.getElementById('container'));
