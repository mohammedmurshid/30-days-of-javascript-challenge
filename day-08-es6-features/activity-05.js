// -------- Enhanced Object Literals  --------
// Task 08
const name = "John Doe";
const place = "California";
const companyName = "Apple Inc";

function getNameAndCompany() {
  return `${this.name} works at ${this.companyName}`;
}

const person = { name, place, companyName, getNameAndCompany };
console.log("🚀 ~ person:", person);

const getPersonDetails = person.getNameAndCompany();
console.log("🚀 ~ getPersonDetails:", getPersonDetails);

// -*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*-

//  -------- Computed Property Names --------
// Task 09
const wholesaleItems = [
  { itemName: "MacBook Pro M3", brand: "Apple", price: 249900, discount: 10 },
  { itemName: "Mac Mini M2", brand: "Apple", price: 59900, discount: 0 },
  { itemName: "MacBook Air M3", brand: "Apple", price: 149900, discount: 0 },
];

const retailItems = wholesaleItems.map((item) => {
  return {
    ["productName"]: `latest ${item.itemName}`,
    ["companyName"]: item.brand,
    // ["itemPrice"]: item.price - item.price * (item.discount / 100),
    [item.discount > 0 ? "discountPrice" : "normalPrice"]:
      item.price - item.price * (item.discount / 100),
  };
});

console.log("🚀 ~ retailItems:", retailItems);
// console.log("🚀 ~ retailItems:", retailItems[0]["productName"]);
