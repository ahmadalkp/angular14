import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalyticsEnhancedEcommerce } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-google-analytics';

  constructor(
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2,
    private angulartics2GoogleAnalyticsEnhancedEcommerce: Angulartics2GoogleAnalyticsEnhancedEcommerce) {
    angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit(): void {
  }

  test() {
    this.angulartics2.eventTrack.next({
      action: 'myAction',
      properties: {
        category: 'myCategory',
        label: 'myLabel',
      },
    });
  }

  analytics(param: any) {
    if (param == "ecAddImpression") {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecAddImpression({
        id: '123123',
        name: 'test',
        list: 'list',
        brand: 'brand',
        category: 'category',
        variant: 'variant',
        position: 12,
        price: 10000,
      });
    } else if (param == "ecAddProduct") {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecAddProduct({
        id: '123123',
        name: 'test',
        brand: 'brand',
        category: 'category',
        variant: 'variant',
        price: 10000,
        quantity: 1,
        coupon: 'coupon',
        position: 12,
      });
    }
  }
}
