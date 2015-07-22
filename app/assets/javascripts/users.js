var ajaxPage = {
  init: function() {
    ajaxPage.initEvents();
  },

  initEvents: function() {
    $('ul.my-list').on('click','li a',function(event) {
      event.preventDefault();
      var myPageNumber = this.innerHTML;
      ajaxPage.ajaxCall(myPageNumber);
    });
  },

  initStyling: function() {

  },

  ajaxCall: function(pageNumber) {
    $.ajax({
      method: 'GET',
      url: '/ajaxified_users/' + pageNumber,
      success: function(data) {
        $('.user-list').html("");
      }
    }).then(function(data) {
      data.forEach(function(el) {
        var newLine = "";
        newLine += el.name + ", ";
        newLine += el.email + ", ";
        newLine += el.occupation;
        $('.user-list').append(newLine);
        $('.user-list').append("<br>");
      })
    }).then(function() {
      // console.log(pageNumber);
      var $list = $('.my-list');
      pageNumberInt = parseInt(pageNumber,10)
      if(pageNumberInt === 1 || pageNumberInt === 2 || pageNumberInt === 3) {
        $list.children()[0].innerHTML = '<a href="">' + 1 + '</a>';
        $list.children()[1].innerHTML = '<a href="">' + 2 + '</a>';
        $list.children()[2].innerHTML = '<a href="">' + 3 + '</a>';
        $list.children()[3].innerHTML = '<a href="">' + 4 + '</a>';
        $list.children()[4].innerHTML = '<a href="">' + 5 + '</a>';
      } else {
        $list.children()[0].innerHTML = '<a href="">' + (pageNumberInt - 2) + '</a>';
        $list.children()[1].innerHTML = '<a href="">' + (pageNumberInt - 1) + '</a>';
        $list.children()[2].innerHTML = '<a href="">' + (pageNumberInt) + '</a>';
        $list.children()[3].innerHTML = '<a href="">' + (pageNumberInt + 1) + '</a>';
        $list.children()[4].innerHTML = '<a href="">' + (pageNumberInt + 2) + '</a>';
      }
    });
  }
};


$(document).ready(function() {
  ajaxPage.init();
});
