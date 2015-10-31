
$( document ).ready(function() {
    $(".click-product").hover(function() {
		$(".product-image").addClass("darken");
		console.log(this);
		if (this.id === "classic-click") {
			$("#classic").removeClass("darken");
			$("#product-classic").addClass("popUp");
			$("#product-classic .product-name").removeClass("hide");
		} else if (this.id === "gold-click") {
			$("#gold").removeClass("darken");
			$("#product-gold").addClass("popUp");
			$("#product-gold .product-name").removeClass("hide");
		} else if (this.id === "blue-click") {
			$("#blue").removeClass("darken");
			$("#product-blue").addClass("popUp");
			$("#product-blue .product-name").removeClass("hide");
		} else if (this.id === "menthol-click") {
			$("#menthol").removeClass("darken");
			$("#product-menthol").addClass("popUp");
			$("#product-menthol .product-name").removeClass("hide");
		} else if (this.id === "goldSlim-click") {
			$("#goldSlim").removeClass("darken");
			$("#product-gold-slim").addClass("popUp");
			$("#product-gold-slim .product-name").removeClass("hide");
		};
	}, function() {
		$(".product-image").removeClass("darken");
		if (this.id === "classic-click") {
			$("#product-classic").removeClass("popUp");
			$("#product-classic .product-name").addClass("hide");
		} else if (this.id === "gold-click") {
			$("#product-gold").removeClass("popUp");
			$("#product-gold .product-name").addClass("hide");
		} else if (this.id === "blue-click") {
			$("#product-blue").removeClass("popUp");
			$("#product-blue .product-name").addClass("hide");
		} else if (this.id === "menthol-click") {
			$("#product-menthol").removeClass("popUp");
			$("#product-menthol .product-name").addClass("hide");
		} else if (this.id === "goldSlim-click") {
			$("#product-gold-slim").removeClass("popUp");
			$("#product-gold-slim .product-name").addClass("hide");
		};
	});
});