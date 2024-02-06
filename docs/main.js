(self["webpackChunkangular_api_userblog"] = self["webpackChunkangular_api_userblog"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.component */ 2227);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/posts.component */ 715);
/* harmony import */ var _user_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-albums/user-albums.component */ 7799);
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/photos.component */ 5035);
/* harmony import */ var _edit_photo_edit_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-photo/edit-photo.component */ 1650);








const routes = [{
  path: "",
  component: _users_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent
},
// {
//   path: "details/:id",
//   component: DetailsComponent,
// },
{
  path: "albums",
  component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__.PostsComponent
}, {
  path: "albums/:id",
  component: _user_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_2__.UserAlbumsComponent
}, {
  path: "photos/:id",
  component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_3__.PhotosComponent
}, {
  path: "edit-photo/:id",
  component: _edit_photo_edit_photo_component__WEBPACK_IMPORTED_MODULE_4__.EditPhotoComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {})],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let AppComponent = class AppComponent {
  constructor() {
    this.title = 'angular-user-posts';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 2711);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ 715);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ 2227);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ 4712);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _user_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-albums/user-albums.component */ 7799);
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/photos.component */ 5035);
/* harmony import */ var _edit_photo_edit_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-photo/edit-photo.component */ 1650);





 // Import ReactiveFormsModule










let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__.PostsComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_5__.DetailsComponent, _user_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_6__.UserAlbumsComponent, _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__.PhotosComponent, _edit_photo_edit_photo_component__WEBPACK_IMPORTED_MODULE_8__.EditPhotoComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})], AppModule);


/***/ }),

/***/ 7015:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



let DataService = (_class = class DataService {
  constructor(http) {
    this.http = http;
  }
  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getUser(userId) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + userId);
  }
  getAlbums() {
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }
  getUserAlbum(userId) {
    return this.http.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId);
  }
  getPhotos(albumId) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId);
  }
  getIndividualPhoto(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos/" + id);
  }
  updatePhotoTitle(photoId, title) {
    console.log("Photo Id: ", photoId);
    console.log("Title: ", title);
    const data = {
      title: title
    };
    return this.http.patch("https://jsonplaceholder.typicode.com/photos/" + photoId, data);
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
}], _class);
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], DataService);


/***/ }),

/***/ 4712:
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.component.html?ngResource */ 8393);
/* harmony import */ var _details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.component.scss?ngResource */ 1770);
/* harmony import */ var _details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;






let DetailsComponent = (_class = class DetailsComponent {
  constructor(data, route) {
    this.data = data;
    this.route = route;
    this.route.params.subscribe(params => this.user$ = params.id);
  }
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(data => this.user$ = data);
  }
}, _class.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
DetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-details',
  template: _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DetailsComponent);


/***/ }),

/***/ 1650:
/*!****************************************************!*\
  !*** ./src/app/edit-photo/edit-photo.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPhotoComponent: () => (/* binding */ EditPhotoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _edit_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-photo.component.html?ngResource */ 5554);
/* harmony import */ var _edit_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-photo.component.scss?ngResource */ 7173);
/* harmony import */ var _edit_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;







let EditPhotoComponent = (_class = class EditPhotoComponent {
  constructor(route, dataService, fb) {
    this.route = route;
    this.dataService = dataService;
    this.fb = fb;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.photoId = +params['id'];
    });
    this.dataService.getIndividualPhoto(this.photoId).subscribe(data => {
      this.photoData = data;
      this.createForm(); // Call createForm after fetching photoData
    }, error => {
      console.error('Error fetching individual photo:', error);
    });
  }
  // Method to create the form group
  createForm() {
    this.photoForm = this.fb.group({
      title: [this.photoData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] // Prefill title and mark as required
    });
  }
  // Method to update the photo title
  updatePhoto() {
    if (this.photoForm.valid) {
      const updatedTitle = this.photoForm.value.title;
      this.dataService.updatePhotoTitle(this.photoId, updatedTitle).subscribe(response => {
        console.log('Photo title updated successfully:', response);
      }, error => {
        console.error('Error updating photo title:', error);
      });
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}], _class);
EditPhotoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-edit-photo',
  template: _edit_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_edit_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditPhotoComponent);


/***/ }),

/***/ 5035:
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotosComponent: () => (/* binding */ PhotosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _photos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos.component.html?ngResource */ 2744);
/* harmony import */ var _photos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos.component.scss?ngResource */ 136);
/* harmony import */ var _photos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_photos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2501);
var _class;







let PhotosComponent = (_class = class PhotosComponent {
  constructor(data, route) {
    this.data = data;
    this.route = route;
    this.route.params.subscribe(params => {
      this.userAlbum$ = params.id;
      this.albumTitle = params.title; // Set the album title
    });
  }

  ngOnInit() {
    this.data.getPhotos(this.userAlbum$).subscribe(data => this.userAlbum$ = data);
  }
}, _class.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
PhotosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-photos',
  template: _photos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('listStagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0,
    transform: 'translateY(-15px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('550ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 1,
    transform: 'translateY(0px)'
  })))], {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0
  })), {
    optional: true
  })])])],
  styles: [(_photos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PhotosComponent);


/***/ }),

/***/ 715:
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsComponent: () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _posts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component.html?ngResource */ 3440);
/* harmony import */ var _posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.component.scss?ngResource */ 7280);
/* harmony import */ var _posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
var _class;





let PostsComponent = (_class = class PostsComponent {
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    this.data.getAlbums().subscribe(data => this.posts$ = data);
  }
}, _class.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}], _class);
PostsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-posts',
  template: _posts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PostsComponent);


/***/ }),

/***/ 2711:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.html?ngResource */ 8945);
/* harmony import */ var _sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss?ngResource */ 3458);
/* harmony import */ var _sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;





let SidebarComponent = (_class = class SidebarComponent {
  constructor(router) {
    this.router = router;
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    router.events.subscribe(_ => this.currentUrl = this.router.url);
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}], _class);
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-sidebar",
  template: _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SidebarComponent);


/***/ }),

/***/ 7799:
/*!******************************************************!*\
  !*** ./src/app/user-albums/user-albums.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAlbumsComponent: () => (/* binding */ UserAlbumsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _user_albums_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-albums.component.html?ngResource */ 2548);
/* harmony import */ var _user_albums_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-albums.component.scss?ngResource */ 3528);
/* harmony import */ var _user_albums_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_albums_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2501);
var _class;







let UserAlbumsComponent = (_class = class UserAlbumsComponent {
  constructor(data, route) {
    this.data = data;
    this.route = route;
    this.route.params.subscribe(params => this.userAlbum$ = params.id);
  }
  ngOnInit() {
    this.data.getUserAlbum(this.userAlbum$).subscribe(data => this.userAlbum$ = data);
  }
}, _class.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
UserAlbumsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-user-albums',
  template: _user_albums_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('listStagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0,
    transform: 'translateY(-15px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('550ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 1,
    transform: 'translateY(0px)'
  })))], {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0
  })), {
    optional: true
  })])])],
  styles: [(_user_albums_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserAlbumsComponent);


/***/ }),

/***/ 2227:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component.html?ngResource */ 230);
/* harmony import */ var _users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.scss?ngResource */ 560);
/* harmony import */ var _users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 7015);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 2501);
var _class;






let UsersComponent = (_class = class UsersComponent {
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
  }
}, _class.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}], _class);
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-users',
  template: _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('listStagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    opacity: 0,
    transform: 'translateY(-15px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.stagger)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('550ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    opacity: 1,
    transform: 'translateY(0px)'
  })))], {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('100ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    opacity: 0
  })), {
    optional: true
  })])])],
  styles: [(_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UsersComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1770:
/*!***********************************************************!*\
  !*** ./src/app/details/details.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7173:
/*!*****************************************************************!*\
  !*** ./src/app/edit-photo/edit-photo.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 136:
/*!*********************************************************!*\
  !*** ./src/app/photos/photos.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
  padding: 16px;
}`, "",{"version":3,"sources":["webpack://./src/app/photos/photos.component.scss"],"names":[],"mappings":"AACA;EACE,aAAA;AAAF","sourcesContent":["\n.content {\n  padding: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7280:
/*!*******************************************************!*\
  !*** ./src/app/posts/posts.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3458:
/*!***********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav {
  background: #2D2E2E;
  height: 100%;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
nav ul li a {
  color: #fff;
  padding: 20px;
  display: block;
}
nav ul li .activated {
  background-color: #00a8ff;
}`, "",{"version":3,"sources":["webpack://./src/app/sidebar/sidebar.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,YAAA;AACJ;AACI;EACI,qBAAA;EACA,UAAA;EACA,SAAA;AACR;AAGY;EACI,WAAA;EACA,aAAA;EACA,cAAA;AADhB;AAIY;EACI,yBAAA;AAFhB","sourcesContent":["nav {\n    background: #2D2E2E;\n    height: 100%;\n\n    ul {\n        list-style-type: none;\n        padding: 0;\n        margin: 0;\n\n        li {\n\n            a {\n                color: #fff;\n                padding: 20px;\n                display: block;\n            }\n\n            .activated {\n                background-color: #00a8ff;\n            }\n        }\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3528:
/*!*******************************************************************!*\
  !*** ./src/app/user-albums/user-albums.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 560:
/*!*******************************************************!*\
  !*** ./src/app/users/users.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"container\">\n  <app-sidebar />\n\n  <div id=\"content\">\n    <router-outlet />\n  </div>\n</div>\n";

/***/ }),

/***/ 8393:
/*!***********************************************************!*\
  !*** ./src/app/details/details.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"user$\">\n  <h1>{{ user$.name }}</h1>\n\n  <ul>\n    <li><strong>Username:</strong> {{ user$.username }}</li>\n    <li><strong>Email:</strong> {{ user$.email }}</li>\n    <li><strong>Phone:</strong> {{ user$.phone }}</li>\n    <li><strong>Address:</strong> \n      {{ user$.address.street }}, \n      {{ user$.address.suite }}, \n      {{ user$.address.city }}, \n      {{ user$.address.zipcode }}\n    </li>\n    <li><strong>Company:</strong> \n      {{ user$.company.name }} \n      <strong>Catch phrase: </strong>{{ user$.company.catchPhrase }}. \n      <strong>Mission: </strong>{{ user$.company.bs }}.\n    </li>\n  </ul>\n</div>\n";

/***/ }),

/***/ 5554:
/*!*****************************************************************!*\
  !*** ./src/app/edit-photo/edit-photo.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"photoData\">\n  <ul>\n    <li><strong>Photo Title :</strong> {{ photoData.title }}</li>\n    <li><strong>Photo Url:</strong> {{ photoData.url }}</li>\n    <li><strong>Photo Id:</strong> {{ photoData.id }}</li>\n  </ul>\n\n  <form>\n    <label for=\"title\">Edit Title:</label>\n    <input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"photoData.title\" />\n    <!-- Alternatively, if using reactive forms -->\n    <!-- <input type=\"text\" formControlName=\"title\" /> -->\n    <button type=\"submit\" (click)=\"updatePhoto()\">Submit</button>\n  </form>\n</div>\n";

/***/ }),

/***/ 2744:
/*!*********************************************************!*\
  !*** ./src/app/photos/photos.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"text-center\">Album Title: {{ albumTitle }}</h1>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let photo of userAlbum$\">\n      <div class=\"card mb-4\">\n        <img src=\"{{ photo.url }}\" class=\"card-img-top\" alt=\"Photo\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ photo.title }}</h5>\n          <p class=\"card-text\">{{ photo.albumId }}</p>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/edit-photo', photo.id]\">View Image</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 3440:
/*!*******************************************************!*\
  !*** ./src/app/posts/posts.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1>Albums</h1>\n\n<ul>\n  <li *ngFor=\"let post of posts$\">\n    <p><strong>Album Title: </strong> {{ post.title }} </p>\n    <p><strong>Posted by:  </strong> {{ post.userId }} </p>\n    <a routerLink=\"\">{{ post.id }}</a>\n  </li>\n</ul>\n";

/***/ }),

/***/ 8945:
/*!***********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav>\n  <ul>\n    <li>\n      <!-- <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\"> -->\n      <a routerLink=\"\" routerLinkActive=\"activated\">\n        <i class=\"material-icons\">supervised_user_circle</i>\n      </a>\n    </li>\n    <li>\n      <!-- <a routerLink=\"posts\" [class.activated]=\"currentUrl == '/posts'\"> -->\n      <a routerLink=\"albums\" routerLinkActive=\"activated\">\n        <i class=\"material-icons\">album</i>\n      </a>\n    </li>\n  </ul>\n</nav>\n";

/***/ }),

/***/ 2548:
/*!*******************************************************************!*\
  !*** ./src/app/user-albums/user-albums.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1><u>User Details</u></h1>\n<app-details></app-details>\n\n<h1><u>User Albums</u></h1>\n\n<ul [@listStagger]=\"userAlbum$\">\n  <li *ngFor=\"let user of userAlbum$\">\n      <a\n        [routerLink]=\"['/photos', user.id, { title: user.title }]\"\n        routerLinkActive=\"activated\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n    {{ user.title }}\n  </a>\n\n    <ul>\n      <li><strong>Album Title:</strong> {{ user.title }} </li>\n      <li><strong>Album Id:</strong> {{ user.id }} </li>\n      <li><strong>Posted by User:</strong> {{ user.userId }} </li>\n      <li>\n        <a href=\"http://{{ user.website }}\">{{ user.website }}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n";

/***/ }),

/***/ 230:
/*!*******************************************************!*\
  !*** ./src/app/users/users.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1>Users</h1>\n\n<ul [@listStagger]=\"users$\">\n  <li *ngFor=\"let user of users$\">\n    <a\n      routerLink=\"/albums/{{ user.id }}\"\n      routerLinkActive=\"activated\"\n      [routerLinkActiveOptions]=\"{ exact: true }\"\n      >{{ user.name }}</a\n    >\n    <ul>\n      <li>User Id: {{ user.id }}</li>\n      <li>\n        <a href=\"http://{{ user.website }}\">{{ user.website }}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map