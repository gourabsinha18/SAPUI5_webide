sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.agecalculator.ZAgeCalculator.controller.Home", {
		onInit: function () {

		},
		onpress: function () {
			var todayDate = new Date();
			var birthDate = this.getView().byId("DP1").getDateValue();
			var age = todayDate.getFullYear() - birthDate.getFullYear();
			var m = todayDate.getMonth() - birthDate.getMonth();
			var day = todayDate.getDate() - birthDate.getDate();
			if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
				age--;
			}
			if (m < 0 && day < 0) {
				m = 12 + m;
				day = -(day);
			}

			sap.m.MessageToast.show("You are Now " + " " + age + " " + "years" + " " + m + " " + "months" + " " + day + " " + "days old");

		}

	});
});