var data = [
  {
    name: "Merrill Turner",
    phone: "1-281-761-1427",
    region: "Valle del Cauca",
    numberrange: "3",
    country: "South Korea",
  },
  {
    name: "Flynn Wooten",
    phone: "1-417-576-1759",
    region: "Junín",
    numberrange: "6",
    country: "Costa Rica",
  },
  {
    name: "Lara Middleton",
    phone: "1-338-468-3748",
    region: "Yaroslavl Oblast",
    numberrange: "2",
    country: "Ukraine",
  },
  {
    name: "Maxwell Mosley",
    phone: "1-338-810-1737",
    region: "Himachal Pradesh",
    numberrange: "7",
    country: "South Korea",
  },
  {
    name: "Thane Moreno",
    phone: "1-373-223-3065",
    region: "Guainía",
    numberrange: "0",
    country: "Ukraine",
  },
];
//////////////////////////////////////////////////////////////////////
const submit = document.querySelector("button");
let input = document.querySelector("input");
function print(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].phone = arr2[i];
  }
}
const clickHandler = () => {
  input = input.value;
  const result = data.map((item) => item.phone.replaceAll("-", input));
  print(data, result);
  console.log(data);
};
submit.addEventListener("click", clickHandler);
////////////////////////////////////////////////////////////////////
