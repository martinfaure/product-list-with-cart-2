const btnAdd1 = document.getElementById("btn1");
const art1 = document.querySelector(".art-1");
const cart = document.querySelector(".Cart");
const emptyCart = document.querySelector(".center");

let btnn = document.createElement("button");

let idk = false;

btnAdd1.addEventListener("click", (e) => {
	// // btnAdd1.style.backgroundColor = "#C73B0F";
	if (idk) return;
	idk = !idk;
	art1.appendChild(btnn);
	btnn.appendChild(cartIcon);
	btnn.appendChild(document.createTextNode("0"));
	btnn.appendChild(cartIcon2);
	btnn.style.position = "absolute";
	btnn.style.display = "flex";
	btnn.style.justifyContent = "center";
	btnn.style.bottom = "150px";
	btnn.style.left = "70px";
	btnn.style.borderRadius = "25px";
	btnn.style.padding = "10px";
	btnn.style.backgroundColor = "#C73B0F";
	btnn.style.color = "white";
	btnn.style.gap = "25px";
	cartIcon.src = "./Add to Cart - Subtract Icon.svg";
	cartIcon2.src = "./Add to Cart - Add Icon.svg";
});

let cartIcon = document.createElement("img");
let cartIcon2 = document.createElement("img");
let cart1 = document.createElement("div");

cartIcon2.addEventListener("click", () => {
	cart.appendChild(cart1);
	cart1.style.width = "100%";
	cart1.style.padding = "50px";
	cart1.style.backgroundColor = "red";
	emptyCart.remove();
	let conter = 0;
	const contCart = document.getElementById("contCart");
	conter = contCart.innerText;
	for (let i = 0; i < contCart.length; i++) {
		conter++;
	}
});

cartIcon.addEventListener("click", () => {
	cart1.remove();
	cart.appendChild(emptyCart);
});
