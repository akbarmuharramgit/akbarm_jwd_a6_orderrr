

let itemOrder = [
	{
		dipesan: false,
		harga: 40000,
		nama: 'One Piece Red',
	},
	{
		dipesan: false,
		harga: 60000,
		nama: 'Jujutsu Kaisen Zero',
	},
	{
		dipesan: false,
		harga: 50000,
		nama: 'Kimetsu no Yaiba',
	},
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName
('item');

const textTotal = document.getElementById
('last-item');

for (let i = 0; i < itemTerpilih.length; i++) {
	itemTerpilih[i].addEventListener('click', function() {
		setItemPemesanan(i, itemTerpilih[i]);
	});
}

function setItemPemesanan(index, elemen) {
	if (itemOrder[index].dipesan == false){
		itemOrder[index].dipesan = true;
		elemen.style.backgroundColor = 'silver';
		elemen.style.color = 'white';
		totalOrder = totalOrder + itemOrder[index].harga;
	} 
	else {
		itemOrder[index].dipesan = false;
		elemen.style.backgroundColor = 'chocolate';
		elemen.style.color = 'black';
		totalOrder = totalOrder - itemOrder[index].harga;
	}
	textTotal.innerHTML = "Total <span>Rp " + totalOrder + '</span>';
}