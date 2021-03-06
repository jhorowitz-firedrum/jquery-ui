/* Hungarian initialisation for the jQuery UI date picker plugin. */
( function( factory, global ) {
	if (
		typeof require === "function" &&
		typeof exports === "object" &&
		typeof module === "object" ) {

		// CommonJS or Node
		factory( require( "../widgets/datepicker" ) );
	} else if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Globals
		factory( global.jQuery.datepicker );
	}
}( function( datepicker ) {

if ( typeof datepicker.regional.hu === "undefined" ) {
	datepicker.regional.hu = {
		closeText: "bezár",
		prevText: "vissza",
		nextText: "előre",
		currentText: "ma",
		monthNames: [ "Január", "Február", "Március", "Április", "Május", "Június",
		"Július", "Augusztus", "Szeptember", "Október", "November", "December" ],
		monthNamesShort: [ "Jan", "Feb", "Már", "Ápr", "Máj", "Jún",
		"Júl", "Aug", "Szep", "Okt", "Nov", "Dec" ],
		dayNames: [ "Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat" ],
		dayNamesShort: [ "Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo" ],
		dayNamesMin: [ "V", "H", "K", "Sze", "Cs", "P", "Szo" ],
		weekHeader: "Hét",
		dateFormat: "yy.mm.dd.",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.hu );
}

return datepicker.regional.hu;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
