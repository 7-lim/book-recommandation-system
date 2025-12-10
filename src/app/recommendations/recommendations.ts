import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

interface RecommendedBook {
  title: string;
  author: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-recommendations',
  standalone: false,
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css',
})
export class Recommendations {
  searchQuery: string = '';
  recommendedBooks: RecommendedBook[] = [];

  constructor(private bookService: BookService) { }

  findRecommendations() {
    if (!this.searchQuery.trim()) return;

    this.bookService.searchBooks(this.searchQuery).subscribe((data: any) => {
      if (data.items) {
        this.recommendedBooks = data.items.map((item: any) => {
          const info = item.volumeInfo;
          return {
            title: info.title,
            author: info.authors ? info.authors.join(', ') : 'Unknown Author',
            image: info.imageLinks ? info.imageLinks.thumbnail : 'assets/hero_book_wild_1765393861105.png', // Fallback
            description: info.description
          };
        });
      }
    });
  }
}
