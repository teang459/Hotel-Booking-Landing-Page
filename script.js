const rooms = [
  { name: "Deluxe Room", price: 100 },
  { name: "Executive Room", price: 150 },
  { name: "Suite", price: 250 }
];

const roomList = document.getElementById("roomList");
const roomTypeInput = document.getElementById("roomType");
const totalPrice = document.getElementById("totalPrice");

// show rooms
rooms.forEach(room => {
  const div = document.createElement("div");
  div.className = "room";
  div.innerHTML = `
    <h3>${room.name}</h3>
    <p>$${room.price} / night</p>
    <button>Select</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    roomTypeInput.value = room.name;
    roomTypeInput.dataset.price = room.price;
  });

  roomList.appendChild(div);
});

// calculate price
document.getElementById("calcBtn").addEventListener("click", () => {
  const checkIn = new Date(document.getElementById("checkIn").value);
  const checkOut = new Date(document.getElementById("checkOut").value);
  const price = roomTypeInput.dataset.price;

  if (!checkIn || !checkOut || !price) {
    alert("Please fill everything");
    return;
  }

  const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const total = nights * price;

  totalPrice.innerText = "Total Price: $" + total;
});
