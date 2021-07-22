import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class MetaService {
  constructor(
    private meta: Meta,
    private titleService: Title,
  ) { }

  public updateMetaTags(title?: string, description?: string, image?: string, keywords?: string): MetaService {
    this.setTitle(title);
    if(description){
      this._nowUpdateMetaTag("description", description);
      this._nowUpdateMetaTag("og:description", description);
      this._nowUpdateMetaTag("twitter:description", description);
    }
    if(image){
      this._nowUpdateMetaTag("image", image);
      this._nowUpdateMetaTag("og:image", image);
      this._nowUpdateMetaTag("twitter:image", image);
    }
    if(keywords){
      this._nowUpdateMetaTag("keywords", keywords);
      this._nowUpdateMetaTag("og:keywords", keywords);
      this._nowUpdateMetaTag("twitter:keywords", keywords);
    }
    return this
  }

  public setTitle(title?: string): MetaService {
    this._nowUpdateMetaTag('title', title);
    this._nowUpdateMetaTag('og:title', title);
    this._nowUpdateMetaTag('twitter:title', title);
    this.titleService.setTitle(title);
    return this;
  }


  public _nowUpdateMetaTag(tag: string, value: string) {
    let prop = 'name';
    if (tag.startsWith(`og:`)) {
      prop = 'property';
    }
    this.meta.updateTag({ [prop]: tag, content: value });
  }

}