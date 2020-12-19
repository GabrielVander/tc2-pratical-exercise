import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrls: Map<number, string> = new Map([
    [1, 'https://images.unsplash.com/photo-1575320181282-9afab399332c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saXRpY3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
    [2, 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
    [3, 'https://images.unsplash.com/photo-1470215883992-c49406afc34f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGN1bHR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
    [4, 'https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb25vbWljc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
    [5, 'https://images.unsplash.com/photo-1549816044-47649bae10f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVhdGh8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
  ]);

  constructor() { }

  getImageUrl(categoryId: number): string {
    return this.imageUrls.get(categoryId);
  }
}
