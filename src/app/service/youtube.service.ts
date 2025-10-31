import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
 // private apiKey = 'AIzaSyAkRBo1KYJDyxKPpfztqPDrXXppso5syzU';   // 🔴 Replace with your actual YouTube Data API v3 key

  private apiKey = 'AIzaSyCi0aUe7ZwMGkD67eK6q_uw5Hz5cfJuWqo';
  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  /** Get currently live videos */
  fetchLiveVideos(channelId: string, maxResults = 3): Observable<any[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('channelId', channelId)
      .set('type', 'video')
      .set('eventType', 'live')
      .set('maxResults', maxResults)
      .set('key', this.apiKey);

    return this.http
      .get<any>(`${this.baseUrl}/search`, { params })
      .pipe(map(res => res.items || []));
  }

  /** Get recent uploads (past live streams included) */
  fetchRecentVideos(channelId: string, maxResults = 3): Observable<any[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('channelId', channelId)
      .set('type', 'video')
      .set('order', 'date')
      .set('maxResults', maxResults)
      .set('key', this.apiKey);

    return this.http
      .get<any>(`${this.baseUrl}/search`, { params })
      .pipe(map(res => res.items || []));
  }

  /** Unified call → always returns up to 3 items */
  fetchLast3LiveOrRecent(channelId: string): Observable<any[]> {
    return this.fetchLiveVideos(channelId, 3).pipe(
      switchMap(liveItems => {
        if (liveItems.length >= 3) {
          return of(liveItems);
        } else {
          const needed = 3 - liveItems.length;
          return this.fetchRecentVideos(channelId, needed + liveItems.length).pipe(
            map(recentItems => {
              const combined = liveItems.concat(
                recentItems.filter(r => !liveItems.some(l => l.id.videoId === r.id.videoId))
              );
              return combined.slice(0, 3);
            })
          );
        }
      })
    );
  }
}
