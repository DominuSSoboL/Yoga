$(document).ready(function(){function a(){$(window).width()<992?($(".navbar-header").addClass("navbar-header--collapse"),$(".navbar-menu").addClass("navbar-menu--collapse"),$(".navbar-menu").css("transform","scaleY(0)")):($(".navbar-header").removeClass("navbar-header--collapse"),$(".navbar-menu").removeClass("navbar-menu--collapse"),$(".navbar-menu").css("transform","scaleY(1)"))}$(window).on("scroll",function(){$(this).scrollTop()>="10"?$(".navbar").addClass("navbar-stick"):$(this).scrollTop()<"10"&&$(".navbar").removeClass("navbar-stick")}),$("a.navbar-header_burger").click(function(a){a.preventDefault(),$(this).toggleClass("navbar__button-burger--active");const b=$(".navbar-menu").css("transform");"matrix(1, 0, 0, 0, 0, 0)"==b?$(".navbar-menu").css("transform","scaleY(1)"):$(".navbar-menu").css("transform","scaleY(0)")}),$(window).resize(function(){a()}),a();var b=$("html, body");$(".item-menu a").click(function(){return $(".item-menu a").removeClass("active"),$(this).addClass("active"),b.animate({scrollTop:$($.attr(this,"href")).offset().top},1e3),!1})}),$(document).ready(function(){const a=$("header.page-header").height();$("section.slider").css("paddingTop",a),$(".openSliderModal").click(function(){$(".contact-modal").addClass("active-modal"),$(".bg-contact-modal").fadeIn(),$(".bg-contact-modal").click(function(){$(".contact-modal").removeClass("active-modal"),$(".bg-contact-modal").fadeOut()})})}),$(document).ready(function(){$(".image-zoom").fadeOut(),$(".gallery-item").hover(function(){$(window).width()>600&&$(this).children("div.link-to-detail").fadeIn(200)},function(){$(window).width()>600&&$(this).children("div.link-to-detail").fadeOut(200)}),$(".galleryModal-bg").click(function(){$(".galleryModal").fadeOut(200),$(this).fadeOut(200)}),$(".close-gallery-modal").click(function(){$(".galleryModal").fadeOut(200),$(".galleryModal-bg").fadeOut(200)}),$("div.link-to-detail").click(function(){const a=$(this).data("imgurl");$(".galleryModal .gallary-box-decor img").attr("src",a),$(".galleryModal").fadeIn(200),$(".galleryModal-bg").fadeIn(200)})}),$(document).ready(function(){$("button.next").click(function(){var a=$("img.curry"),b=$(".img.curry").index(),c=b+1,d=$(".img").eq(c);c==$(".img:last").index()+1?($(".img").eq(0).fadeIn(1e3),$(".img").eq(0).addClass("curry")):(d.fadeIn(1e3),d.addClass("curry")),a.fadeOut(1e3),a.removeClass("curry")}),$("button.prev").click(function(){var a=$("img.curry"),b=$(".img.curry").index(),c=b-1,d=$(".img").eq(c);a.fadeOut(1e3),a.removeClass("curry"),d.fadeIn(1e3),d.addClass("curry")})}),$(document).ready(function(){$(".btn-by-table").hover(function(){var a=$(this).closest(".price-table");a.find(".price-table-title").css("backgroundColor","rgba(91,108,235,0.8)")},function(){var a=$(this).closest(".price-table");a.find(".price-table-title").css("backgroundColor","rgba(91,108,235,1)")})}),$(document).ready(function(){$(function(){var a=$(".owl-carousel");a.owlCarousel({items:1,margin:10,loop:!0,nav:!0,navText:['<span class="arrow-owl arrow-left"><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 512"><path fill="#5b6ceb" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></span>','<span class="arrow-owl arrow-right"><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 512"><path fill="#5b6ceb" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span>']}),a.on("changed.owl.carousel",function(a){var b=a.item.index,c=$(a.target).find(".owl-item").eq(b+1).find("img").attr("src"),d=$(a.target).find(".owl-item").eq(b+1).find("p.position").text(),e=$(a.target).find(".owl-item").eq(b+1).find("p.name").text();$(".next-slide .next-slide-avatar img").attr("src",c),$("p.next-slide-name").text(e),$("p.next-slide-position").text(d)})}),$(".next_button").click(function(){owl.trigger("next.owl.carousel")}),$(".prev_button").click(function(){owl.trigger("prev.owl.carousel")})});