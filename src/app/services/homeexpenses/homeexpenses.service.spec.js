"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var homeexpenses_service_1 = require("./homeexpenses.service");
describe('HomeexpensesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(homeexpenses_service_1.HomeexpensesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=homeexpenses.service.spec.js.map