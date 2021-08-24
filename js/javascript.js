$(document).ready(function(){
	//step-1 애니큐빅
	$(".loading>p").fadeOut();
	$(".loading").delay(350).fadeOut(800, function(){
		$(this).remove();
	});



	
	$(window).on("scroll", function(){
		
		var $header = $("header");
		var scrollH = $(this).scrollTop();
		
		
		if(scrollH > $("#home").height()){			
			$header.addClass("n-fixed");
			$("#aboutme").css({
				"margin-top":$header.height()
			});
		}else{			
			$header.removeClass("n-fixed");
			$("#aboutme").css({
				"margin-top":0
			});
		}
		
    
		if($(this).scrollTop()>100){
			$("aside").stop().fadeIn();
		}else{
			$("aside").stop().fadeOut();
		}

	});
	  

	
	//로고 및 탑버튼을 클릭하면 최상단으로 이동
	$("aside").on("click",function(evt){
		
		$("html,body").stop().animate({
			"scrollTop" : 0
		},400,"easeInOutCubic");
		
		evt.preventDefault();
	});
	
	
	$(window).on("load",function(){		
			$("aside").trigger("click");
	});

	//내작업
	$(function(){



		$('header > .container > nav > .gnb > li > a').css({
			color:"#000"
		})
	
		$('section > article:nth-child(2) > .container').css({
			backgroundColor:'#f1f2dd'
		
		})
	
		$('section > article:nth-child(1) > .container').css({
			backgroundColor:'#fff'
		
		})
		$('section > article:nth-child(3) > .container').css({
			backgroundColor:'#fff'
		
		})
		$('section > article:nth-child(4) > .container').css({
			backgroundColor:'#fff'
		
		})
		$('footer').css({
			backgroundColor:'#f1f2dd',
			color:'#fff'
		})
	
	
		
	
	
		// 포토샵클릭 이벤트
		const $container = $('.photoshop > .container > p')
		const $pagination = $('.photoshop > .container > .pagination > li>a');
		const $btnPrev  = $('.photoshop > .container > p.prev');
		const $btnNext  = $('.photoshop > .container > p.next');
		
	
		let nowIdx = 0;
	
		const fadeFn = function(){
			$container.filter('.on').stop().fadeOut(200).removeClass('on');
	
			$container.eq(nowIdx).stop().fadeIn(300).addClass('on');
	
			$pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		};
		
	
		// 포토샵 화면이동
		$pagination.on('click', function(evt){
			evt.preventDefault();
	
			nowIdx = $pagination.index(this);
	
	
	
			$container.filter('.on').stop().fadeOut(200).removeClass('on');
	
			$container.eq(nowIdx).stop().fadeIn(300).addClass('on');
	
			$pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	
	
		
		
		
		});
	
	
		//이전버튼에 대한 클릭이벤트
		$btnPrev.on('click',function(evt){
			evt.preventDefault();
	
			
			if(nowIdx > 0){
				nowIdx--;
			}else{
				nowIdx=9;
			}
			fadeFn();
	
			//활성화표시
		
	
	
		
			
		});
	
	
		//다음버튼에 대한 클릭이벤트
	 $btnNext.on('click',function(evt){
		evt.preventDefault();
	
		if(nowIdx <9){
			nowIdx++;
		}else{nowIdx=0}
		fadeFn();
	
	
		
	
	
	 });
	
	//  자동재생
	
	$(window).on('load',function(){
		
		setInterval(() => {
			if(nowIdx <9){
				nowIdx++;
			}else{nowIdx=0}
			fadeFn();
		}, 3000);
		
		clearInterval(intervalKey);
	});
		 
	
	//  웹페이지 사이트버튼
	$('.web > .container > p.btn ').on('click',function(evt){
		evt.preventDefault();
	});
	
	
			//스크롤
			const arrTopVal = [];
	
			for(let i=0;i<11;i++){
				arrTopVal[i] = $('article').eq(i).offset().top;
			}
		
			console.log('arrTopVal =',arrTopVal);
		
		
			const moveFn = function(idx){
				$('html,body').stop().animate({scrollTop:arrTopVal[idx]-10},'easeInOutCubic');
			};
		
			const $mnu = $('.gnb>li>a');
			
			//메뉴-1에 대한 click 이벤트 구문
			$mnu.on('click', (evt)=>{
				evt.preventDefault();
		
				//이번에 click a의 인덱스번호 추출
				const nowIdx = $mnu.index(evt.currentTarget);
		
				moveFn(nowIdx);
			});
		
		
			//window에 대한 scroll 이벤트 구문
			$(window).on('scroll', function(){
				
				//현재시점 스크롤바의 top값을 추출
				const scrollTop = $(window).scrollTop();
		
				console.log(scrollTop);
		
				for(let i=0;i<11;i++){      
					if(scrollTop>=arrTopVal[i]-170){
					 
						$mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
					}else if(scrollTop<arrTopVal[0]-50){
						$mnu.parent().removeClass('on');
					}      
				}
			});


	

			$('.web>.container>p').on('click',function(evt){
				evt.preventDefault();
				let nowIdx = 0;
				nowIdx = $('.web>.container>p').index(this);
	
			$(this).addClass('on').siblings().removeClass('on');
			});
		
		$('.web > .container > p:nth-of-type(1)').on('click',function(evt){
			evt.preventDefault();
		
		  $('.gang').fadeIn();
			$('.mega').fadeOut();
			$('.paik').fadeOut();
		});
		$('.web > .container > p:nth-of-type(2)').on('click',function(evt){
			evt.preventDefault();
		
		  $('.gang').fadeOut();
			$('.mega').fadeIn();
			$('.paik').fadeOut();
		});
		$('.web > .container > p:nth-of-type(3)').on('click',function(evt){
			evt.preventDefault();
		
		  $('.gang').fadeOut();
			$('.mega').fadeOut();
			$('.paik').fadeIn();
		});
	 
		const $mainmun = $('section > .apply > dl > dt');

	
		$mainmun.on('click',function(){
			// let nowIdx=0;
			// nowIdx= $mainmun.nowIdx(this);
			$(this).addClass('on').slideDown().siblings().removeClass('on');
		});
		
		//load 이벤트
		$(window).on('load', function(){
	
		  $('html,body').stop().animate({scrollTop:0});
			
		});
	
	}); 
	  

});//end of ready