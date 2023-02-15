import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalyticsEnhancedEcommerce } from 'angulartics2';

declare var ga: Function; // declare the ga function

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
  ) {
    angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit(): void {
    ga('require', 'ec');
  }

  test() {
    this.angulartics2.eventTrack.next({
      action: "action",
      properties: {
        category: "category",
        label: "label"
      }
    }
    )
  }

  ecommerce() {
    this.angulartics2.eventTrack.next({
      action: "send",
      properties: {
        event: "event",
        category: "checkout",
        label: "label"
      }
    }
    )
  }

  analytics(param: any) {
    if (param == "ecAddImpression") {
      Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddImpression({
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
      Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddProduct({
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
    } else {
      Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecSetAction('purchase', {          // Transaction details are provided in an actionFieldObject.
        'id': 'T12345',                         // (Required) Transaction id (string).
        'affiliation': 'Google Store - Online', // Affiliation (string).
        'revenue': 10000000,                     // Revenue (number).
        'tax': 1000,                          // Tax (number).
        'shipping': 50000,                     // Shipping (number).
        'coupon': 'SUMMER2013'                  // Transaction coupon (string).
      });

    }
  }
}
