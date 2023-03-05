import { AfterViewInit, Directive, inject, OnDestroy, ViewContainerRef } from '@angular/core';
import { Map } from 'maplibre-gl';
import { ENVIRONMENT } from 'src/app/core';

@Directive({
  selector: '[mapDir]'
})
export class MapDirective implements AfterViewInit, OnDestroy {
  public map!: Map | undefined;

  private readonly environment = inject(ENVIRONMENT);

  constructor(
    private readonly hostRef: ViewContainerRef
  ) {}

  public ngAfterViewInit(): void {
    this.init();
  }

  public ngOnDestroy(): void {
    this.map?.remove();
  }

  private init(): void {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };
    const apiKey = this.environment.maptilerApiKey;

    this.map = new Map({
      container: this.hostRef.element.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }
}
