// Task 05
const library = {
  name: "Public Library",
  place: "Jayanagar 4th block, Bangalore",
  books: [
    {
      title: "Five Point Someone",
      author: "Chetan Bhagath",
      category: "Romance",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
    },
    {
      title: "The Subtle art of not giving a f*ck",
      author: "Mark Manson",
      category: "Self Help",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
    },
  ],
};

console.log(library);

// Task 06
const libraryName = library.name;
console.log("libraryName:", libraryName);

// for logging the titles of book in the library
for (let i = 0; i < library.books.length; i++) {
  console.log(library.books[i].title);
}
