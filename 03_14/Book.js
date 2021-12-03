const Book = class {
  constructor(name, author, category, pages, status, datePublished) {
    this.name = name;
    this.author = author;
    this.category = category;
    this.pages = pages;
    this.status = status;
    this.datePublished = datePublished;
  }
  changeStatus(newStatus) {
    this.status = newStatus;
  }

  bookAge() {
    let now = new Date();
    let published = new Date(this.datePublished);
    let elapsed = now - published; // elapsed time in milliseconds
    let yearsSincePublished = Math.floor(elapsed / (1000 * 3600 * 24 * 356));
    return yearsSincePublished;
  }
};

export default Book;
