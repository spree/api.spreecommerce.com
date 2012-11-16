// Homepage
// $(document).ready(function(){
//   bonsai.run(document.getElementById('api-objects'), {
//       code: function() {
//         var p_opt = [0, 0, 80, 6]

//         var products =     new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var orders =       new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var images =       new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var taxons =       new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var taxonomies =   new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var payments =     new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var line_items =   new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var orders =       new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var shipments =    new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var zones =        new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var countries =    new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var addresses =    new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var product_prop = new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var variants =     new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);
//         var return_auth =  new Polygon(p_opt[0], p_opt[1], p_opt[2], p_opt[3]);

//         stage.addChild(products.)        
//       },
//       width: 500,
//       height: 400
//     });
// });


// Init sidebar
$(function() {
  var activeItem,
      helpList = $('#js-sidebar .js-topic'),
      firstOccurance = true

  // hide list items at startup
  if($('body.api') && window.location){
    var reg = /\/\/[^\/]+(\/.+)/g,
        docUrl = reg.exec(window.location.toString())
    if(docUrl){
      $('#js-sidebar .js-topic a').each(function(){
        var url = $(this).attr('href').toString()
        if(url.indexOf(docUrl[1]) >= 0 && url.length == docUrl[1].length){
          $(this).parent('li').addClass('disable')
          var parentTopic = $(this).parentsUntil('div.sidebar-module > ul').last()
          parentTopic.addClass('js-current')
          parentTopic.find('.js-expand-btn').toggleClass('collapsed expanded')
        }
      })
    }
  }

  $('#js-sidebar .js-topic').each(function(){
    if(($(this).find('.disable').length == 0 || firstOccurance == false) &&
    $(this).hasClass('js-current') != true){
      $(this).find('.js-guides').children().hide()
    } else {
      activeItem = $(this).index()
      firstOccurance = false
    }
  })

  // Toggle style list. Expanded items stay
  // expanded when new items are clicked.
  $('#js-sidebar .js-toggle-list .js-expand-btn').click(function(){
    var clickedTopic = $(this).parents('.js-topic'),
        topicGuides  = clickedTopic.find('.js-guides li')
    $(this).toggleClass('collapsed expanded')
    topicGuides.toggle(100)
    return false
  })

  // Accordion style list. Expanded items
  // collapse when new items are clicked.
  $('#js-sidebar .js-accordion-list .js-topic h3 a').click(function(){
    var clickedTopic = $(this).parents('.js-topic'),
        topicGuides = clickedTopic.find('.js-guides li')

    if(activeItem != clickedTopic.index()){
      if(helpList.eq(activeItem)){
        helpList.eq(activeItem).find('.js-guides li').toggle(100)
      }
      activeItem = clickedTopic.index()
      topicGuides.toggle(100)
    } else {
      activeItem = undefined
      topicGuides.toggle(100)
    }

    return false
  })

  $('.help-search .search-box').focus(function(){
    $(this).css('background-position','0px -25px')
  })

  $('.help-search .search-box').focusout(function(){
    if($(this).val() == ''){
      $(this).css('background-position','0px 0px')
    }
  })

  // Dynamic year for footer copyright
  var currentYear = (new Date).getFullYear();
  $("#year").text( (new Date).getFullYear() );

});