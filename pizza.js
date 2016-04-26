
$(document).on('ready',function() {

var baseprice = 10;
var newprice = 10;

//need a function for calculating current price with baseprice



	$('.btn-pepperonni').on('click',function() {
		$('.btn-pepperonni').toggleClass('active')
		$('.pep').toggle();

		if ( $('.btn-pepperonni').hasClass('active') ) {
			newprice=baseprice+1;
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(1)').show();
			}
		else {
			newprice=baseprice-1;
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(1)').hide();
		}
	});

	$('.btn-mushrooms').on('click',function() {
		$('.btn-mushrooms').toggleClass('active')
		$('.mushroom').toggle();

		if ( $('.btn-mushrooms').hasClass('active')){
			newprice=baseprice+1;
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(2)').show();
		}
		else{
			$('.price ul li:nth-child(2)').hide();
		}
	});

	$('.btn-green-peppers').on('click',function() {
		$('.btn-green-peppers').toggleClass('active')
		$('.green-pepper').toggle();

		if ( $('.btn-green-peppers').hasClass('active')){
			newprice=baseprice+1;
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(3)').show();
		}
		else {
			newprice=baseprice-1;
			$('.price ul li:nth-child(3)').hide();
		}
	});	


	$('.btn-sauce').on('click',function() {
		$('.btn-sauce').toggleClass('active')
		$('.sauce').toggle();

		if ( $('.btn-sauce').hasClass('active')){
			newprice=baseprice+3
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(4)').show();
		}
		else {
			$('.price ul li:nth-child(4)').hide();
		}
	});	


	$('.btn-crust').on('click',function() {
		$('.btn-crust').toggleClass('active')
		$('.crust').toggle();

		if ( $('.btn-crust').hasClass('active')){
			newprice=baseprice+5
			$('strong').text('$' + newprice);
			$('.price ul li:nth-child(5)').show();
		}
		else {
			$('.price ul li:nth-child(5)').hide();
			
		}
	});	

});