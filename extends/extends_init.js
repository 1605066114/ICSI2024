$(function(){
  
  //Jumbotran
  $(".focus").sudyfocus({
    p:301,
    zWidth: 1920,
    zHeight: 360,
    isNavHover: true,
    pagination: true,
    title: {active: true, // 是否显示标题
    isAutoWidth: true, // 标题背景自动宽度
    href: false // 标题是否加文章链接
    },
    speed:800
  });

  //Slider
  $(".slider").sudyfocus({
    p:4021,
    zWidth: 280,
    zHeight: 200,
    isNavHover: true,
    pagination: true,
    title: {active: true, // 是否显示标题
    isAutoWidth: false, // 标题背景自动宽度
    href: false // 标题是否加文章链接
    },
    speed:800
  });

  //Scroll
  $(".scroll").sudyScroll({
    width: "100%",    // 单元格宽度
    height: 84,   // 单元格高度
    display: 3,   // 显示几个单元
    step: 3,      // 每次交替增加几个单元，值不能大于display
    dir:"y",    // 交替方向，纵向为"y"，水平为"x"，默认为"y"纵向交替
    auto:true,    // 是否自动交替,默认为自动
    speed:500,    // 交替速度
    hoverPause:5000,    // 交替暂留时间
    navigation:false,   // 是否显示导航按钮
    navTrigger:"click",   // 导航按钮事件
    pagination:true,    // 是否显示索引按钮
    pagTrigger:"mouseenter"  //索引按钮事件
  });


});


