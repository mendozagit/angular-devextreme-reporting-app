import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

@Component({
selector: 'report-viewer',
encapsulation: ViewEncapsulation.None,
standalone: true,
imports: [
  CommonModule,
  RouterOutlet,
  DxReportViewerModule
],
templateUrl: './report-viewer.component.html',
styleUrls: [
    "../../../../node_modules/devextreme/dist/css/dx.material.purple.light.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.material.purple.light.css",
    "../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"


    // "../../../../node_modules/devextreme-dist/css/dx.material.purple.light.css",
    // "../../../../node_modules/devexpress-richedit/dist/dx.richedit.css",
    // "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    // "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.material.purple.light.css",
    // "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css",
    // "../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css",
    // "../../../../node_modules/devexpress-reporting/dist/css/dx-reportdesigner.css"
]
})
export class ReportViewerComponent {
    title = 'DXReportViewerSample';
    reportUrl: string = 'Report1';
    hostUrl: string = 'https://localhost:7071/';
    // Use this line if you use an ASP.NET MVC backend
    //invokeAction: string = "/WebDocumentViewer/Invoke";
    // Use this line if you use an ASP.NET Core backend
    invokeAction: string = '/DXXRDV';
}
