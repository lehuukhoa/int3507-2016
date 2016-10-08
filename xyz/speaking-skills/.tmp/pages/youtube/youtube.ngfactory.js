/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../services/ytbsearch.service';
import * as import4 from './youtube';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/button/button';
import * as import16 from 'ionic-angular/components/menu/menu-toggle';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from 'ionic-angular/components/icon/icon';
import * as import20 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import21 from 'ionic-angular/components/content/content';
import * as import22 from 'ionic-angular/components/list/list';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import30 from 'ionic-angular/components/menu/menu-controller';
import * as import31 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import32 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import33 from 'ionic-angular/util/keyboard';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from 'ionic-angular/components/tabs/tabs';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from '@angular/core/src/linker/template_ref';
import * as import38 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/thumbnail/thumbnail';
import * as import41 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import42 from 'ionic-angular/util/form';
import * as import43 from '@angular/core/src/security';
var renderType_Youtube_Host = null;
var _View_Youtube_Host0 = (function (_super) {
    __extends(_View_Youtube_Host0, _super);
    function _View_Youtube_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Youtube_Host0, renderType_Youtube_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Youtube_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-youtube', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Youtube0(this.viewUtils, this.injector(0), this._appEl_0);
        this._YtbSearchService_0_4 = new import3.YtbSearchService(this.parentInjector.get(import9.Http));
        this._Youtube_0_5 = new import4.Youtube(this.parentInjector.get(import10.NavController), this._YtbSearchService_0_4);
        this._appEl_0.initComponent(this._Youtube_0_5, [], compView_0);
        compView_0.create(this._Youtube_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Youtube_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.YtbSearchService) && (0 === requestNodeIndex))) {
            return this._YtbSearchService_0_4;
        }
        if (((token === import4.Youtube) && (0 === requestNodeIndex))) {
            return this._Youtube_0_5;
        }
        return notFoundResult;
    };
    return _View_Youtube_Host0;
}(import1.AppView));
function viewFactory_Youtube_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Youtube_Host === null)) {
        (renderType_Youtube_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Youtube_Host0(viewUtils, parentInjector, declarationEl);
}
export var YoutubeNgFactory = new import12.ComponentFactory('page-youtube', viewFactory_Youtube_Host0, import4.Youtube);
var styles_Youtube = [];
var renderType_Youtube = null;
var _View_Youtube0 = (function (_super) {
    __extends(_View_Youtube0, _super);
    function _View_Youtube0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Youtube0, renderType_Youtube, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Youtube0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import27.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n  	', null);
        this._el_5 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_5, 'menuToggle', '');
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import29.viewFactory_Button0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Button_5_4 = new import15.Button('', '', this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_5), this.renderer);
        this._MenuToggle_5_5 = new import16.MenuToggle(this.parentInjector.get(import30.MenuController), new import25.ElementRef(this._el_5), this.parentInjector.get(import26.ViewController, null), this._Navbar_3_4);
        this._ToolbarItem_5_6 = new import17.ToolbarItem(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_3_4);
        this._query_Button_5_0 = new import18.QueryList();
        this._appEl_5.initComponent(this._Button_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_7, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_7, 'role', 'img');
        this._Icon_7_3 = new import19.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_5.create(this._Button_5_4, [[].concat([
                this._text_6,
                this._el_7,
                this._text_8
            ])], null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import2.AppElement(10, 3, this, this._el_10);
        var compView_10 = import31.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import20.ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_3_4);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'Speaking with Youtube', null);
        compView_10.create(this._ToolbarTitle_10_4, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4, [
            [].concat([this._el_5]),
            [],
            [],
            [].concat([
                this._text_4,
                this._text_9,
                this._el_10,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_15, 'padding', '');
        this._appEl_15 = new import2.AppElement(15, null, this, this._el_15);
        var compView_15 = import32.viewFactory_Content0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Content_15_4 = new import21.Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_15.initComponent(this._Content_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-list', null);
        this._List_17_3 = new import22.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import36.GestureController));
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._appEl_19 = new import2.AppElement(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import37.TemplateRef_(this._appEl_19, viewFactory_Youtube1);
        this._NgFor_19_6 = new import23.NgFor(this._appEl_19.vcRef, this._TemplateRef_19_5, this.parentInjector.get(import38.IterableDiffers), this.ref);
        this._text_20 = this.renderer.createText(this._el_17, '\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n', null);
        compView_15.create(this._Content_15_4, [
            [],
            [].concat([
                this._text_16,
                this._el_17,
                this._text_21
            ]),
            []
        ], null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_3 = import8.UNINITIALIZED;
        this._expr_4 = import8.UNINITIALIZED;
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
        this._expr_8 = import8.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [disposable_0], []);
        return null;
    };
    _View_Youtube0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.Icon) && (7 === requestNodeIndex))) {
            return this._Icon_7_3;
        }
        if (((token === import15.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Button_5_4;
        }
        if (((token === import16.MenuToggle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MenuToggle_5_5;
        }
        if (((token === import17.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_5_6;
        }
        if (((token === import20.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4;
        }
        if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_3_4;
        }
        if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_1_3;
        }
        if (((token === import37.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import23.NgFor) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6;
        }
        if (((token === import22.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._List_17_3;
        }
        if (((token === import21.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Content_15_4;
        }
        return notFoundResult;
    };
    _View_Youtube0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_3 = '';
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MenuToggle_5_5.menuToggle = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_5 = 'menu';
        if (import5.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_7_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_15_4.ngOnInit();
        }
        changes = null;
        var currVal_8 = this.context.videos;
        if (import5.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._NgFor_19_6.ngForOf = currVal_8;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import8.SimpleChange(this._expr_8, currVal_8);
            this._expr_8 = currVal_8;
        }
        if ((changes !== null)) {
            this._NgFor_19_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_19_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_5_0.dirty) {
                this._query_Button_5_0.reset([this._Button_5_4]);
                this._ToolbarItem_5_6._buttons = this._query_Button_5_0;
                this._query_Button_5_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_5_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_5_5.isHidden;
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_7_3._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_7, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_15_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_15, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_Youtube0.prototype.destroyInternal = function () {
        this._Icon_7_3.ngOnDestroy();
        this._Content_15_4.ngOnDestroy();
    };
    _View_Youtube0.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_5_5.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Youtube0;
}(import1.AppView));
export function viewFactory_Youtube0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Youtube === null)) {
        (renderType_Youtube = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_Youtube, {}));
    }
    return new _View_Youtube0(viewUtils, parentInjector, declarationEl);
}
var _View_Youtube1 = (function (_super) {
    __extends(_View_Youtube1, _super);
    function _View_Youtube1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Youtube1, renderType_Youtube, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Youtube1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import41.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import39.Item(this.parent.parentInjector.get(import42.Form), this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import39.ItemContent();
        this._query_Label_0_0 = new import18.QueryList();
        this._query_Button_0_1 = new import18.QueryList();
        this._query_Icon_0_2 = new import18.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-thumbnail', null);
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this._Thumbnail_2_3 = new import40.Thumbnail();
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'img', null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'h2', null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(null, '\n      ', null);
        this._el_10 = this.renderer.createElement(null, 'p', null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_6,
                this._el_7,
                this._text_9,
                this._el_10,
                this._text_12
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import8.UNINITIALIZED;
        this._expr_2 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    };
    _View_Youtube1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Thumbnail) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Thumbnail_2_3;
        }
        if (((token === import39.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Item_0_4;
        }
        if (((token === import39.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_Youtube1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_1 = import5.interpolate(1, '', this.context.$implicit.snippet.thumbnails.high.url, '');
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import43.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import5.interpolate(1, '', this.context.$implicit.snippet.title, '');
        if (import5.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_8, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import5.interpolate(1, '', this.context.$implicit.snippet.channelTitle, '');
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_11, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Youtube1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.playVideo(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_Youtube1;
}(import1.AppView));
function viewFactory_Youtube1(viewUtils, parentInjector, declarationEl) {
    return new _View_Youtube1(viewUtils, parentInjector, declarationEl);
}
