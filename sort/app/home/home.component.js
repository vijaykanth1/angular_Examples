"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var geoname_service_1 = require('./geoname.service');
var HomeComponent = (function () {
    function HomeComponent(_geonameService) {
        this._geonameService = _geonameService;
        this.copyCountries = [];
        this.sortAsc = true;
    }
    HomeComponent.prototype.loadCountries = function () {
        var _this = this;
        this._geonameService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; }, function () { return _this.copyCountries = _this.countries; });
    };
    HomeComponent.prototype.sortType = function (sort) {
        if (sort === 'name') {
            this.sortAsc = !this.sortAsc;
            var sortAsc = this.sortAsc;
            sortAsc ? this.countries = this.copyCountries.sort(this.sortByCountryNameAsc) :
                this.countries = this.copyCountries.sort(this.sortByCountryNameDesc);
            console.log(this.countries);
        }
        if (sort === 'pop') {
            this.countries = this.copyCountries.sort(this.sortByPopulation);
            console.log(this.countries);
        }
    };
    HomeComponent.prototype.sortByCountryNameAsc = function (c1, c2) {
        if (c1.countryName > c2.countryName)
            return 1;
        else if (c1.countryName === c2.countryName)
            return 0;
        else
            return -1;
    };
    HomeComponent.prototype.sortByCountryNameDesc = function (c1, c2) {
        if (c1.countryName < c2.countryName)
            return 1;
        else if (c1.countryName === c2.countryName)
            return 0;
        else
            return -1;
    };
    HomeComponent.prototype.filterBy = function (filter) {
        switch (filter) {
            case 'all':
                this.countries = this.copyCountries;
                console.log('all countries clicked');
                break;
            case 'europe':
                this.countries = this.countries.filter(function (country) {
                    return country.continentName.toLowerCase().includes('europe');
                });
                console.log('show only european countries');
                break;
            case 'pop':
                this.countries = this.countries.filter(function (country) {
                    return parseInt(country.population) > 1000000;
                });
                console.log('show poulation > 1M');
                break;
        }
    };
    // let copyCountries = Object.assign({}, this.countries)
    // let copyCountries = this.countries.slice(0)
    HomeComponent.prototype.sortByPopulation = function (c1, c2) {
        return parseInt(c1.population) - parseInt(c2.population);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng-home',
            templateUrl: 'home.template.html'
        }), 
        __metadata('design:paramtypes', [geoname_service_1.GeonameService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
// function sortByNameAsc(c1: ICountry, c2: ICountry) {
//   if(c1.countryName > c2.countryName) return 1
//     else if(c1.countryName === c2.countryName) return 0
//       else return -1
// }
//# sourceMappingURL=home.component.js.map