// Because classes are not hoisted you will need to start your code at the bottom of the page.  
// Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.buttons = this.article.querySelector('.buttons')
    this.expandButton = this.article.querySelector('.expandButton');
    this.closeButton = this.article.querySelector('.closeButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // Added "Expand" into HTML
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.buttons.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('close');
    this.article.classList.toggle('article-open');
    this.article.classList.toggle('closeButton')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
- iterate over the articles NodeList and create a new instance of Article by passing 
- in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');

articles.forEach(function(article) {
  return new Article(article);
})

