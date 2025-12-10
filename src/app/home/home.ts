import { Component } from '@angular/core';

interface Book {
  image: string;
  title: string;
  author: string;
  price?: string;
}

interface Category {
  image: string;
  name: string;
  count: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroBooks: Book[] = [
    { image: 'assets/hero_book_wild_1765393861105.png', title: 'Into the Wild', author: 'Jon Krakauer' },
    { image: 'assets/hero_book_mercy_1765393876411.png', title: 'This Dark Road to Mercy', author: 'Wiley Cash' },
    { image: 'assets/hero_book_castle_1765393893310.png', title: 'Castle in the Sky', author: 'Hayao Miyazaki' },
  ];

  newBooks: Book[] = [
    { image: 'assets/hero_book_wild_1765393861105.png', title: 'Cyber Angel', author: 'John Roberts', price: '$15.00' },
    { image: 'assets/hero_book_mercy_1765393876411.png', title: 'Ark Forging', author: 'John Roberts', price: '$18.50' },
    { image: 'assets/hero_book_castle_1765393893310.png', title: '2024', author: 'John Roberts', price: '$20.00' },
    { image: 'assets/hero_book_wild_1765393861105.png', title: 'August Maximus', author: 'John Roberts', price: '$12.00' },
    // Repeats for effect (simulating 8 books)
    { image: 'assets/hero_book_mercy_1765393876411.png', title: 'Liar of Dreams', author: 'Kathryn Moris', price: '$14.50' },
    { image: 'assets/hero_book_castle_1765393893310.png', title: 'Mist Algorab', author: 'John Roberts', price: '$16.99' },
    { image: 'assets/hero_book_wild_1765393861105.png', title: 'Now You See Me', author: 'Kathryn Moris', price: '$19.00' },
    { image: 'assets/hero_book_mercy_1765393876411.png', title: 'Aplex', author: 'John Roberts', price: '$22.00' },
  ];

  categories: Category[] = [
    { image: 'assets/cat_action_1765393912034.png', name: 'Action & Adventure', count: '1.2k+ Books' },
    { image: 'assets/cat_drama_1765393925857.png', name: 'Drama & Fiction', count: '800+ Books' },
    { image: 'assets/cat_romance_1765393942393.png', name: 'Romance & Love', count: '1.5k+ Books' },
    { image: 'assets/cat_action_1765393912034.png', name: 'Biography & History', count: '900+ Books' }, // Reusing image
  ];

  // Mock data for other sections
  author = {
    name: 'Melissa Pitter',
    role: 'Author of the Month',
    image: 'assets/hero_book_wild_1765393861105.png', // Fallback since generation failed
    desc: 'Melissa Pitter differs from other authors in her ability to weave complex emotion with gripping thriller elements. Her latest work has topped charts...',
    books: [
      { image: 'assets/hero_book_wild_1765393861105.png', title: 'Silent Road', author: 'M. Pitter' },
      { image: 'assets/hero_book_mercy_1765393876411.png', title: 'Art. Forging', author: 'M. Pitter' },
      { image: 'assets/hero_book_castle_1765393893310.png', title: 'Find The Way', author: 'M. Pitter' }
    ]
  };

  featuredBook = {
    image: 'assets/hero_book_castle_1765393893310.png', // Fallback
    title: 'Below Zero',
    author: 'Ali Hazelwood',
    desc: 'From the New York Times bestselling author of The Love Hypothesis comes a new steamy, steminist novella...'
  };
}
