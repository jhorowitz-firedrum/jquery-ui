/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
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

if ( typeof datepicker.regional.is === "undefined" ) {
	datepicker.regional.is = {
		closeText: "Loka",
		prevText: "&#x3C; Fyrri",
		nextText: "Næsti &#x3E;",
		currentText: "Í dag",
		monthNames: [ "Janúar","Febrúar","Mars","Apríl","Maí","Júní",
		"Júlí","Ágúst","September","Október","Nóvember","Desember" ],
		monthNamesShort: [ "Jan","Feb","Mar","Apr","Maí","Jún",
		"Júl","Ágú","Sep","Okt","Nóv","Des" ],
		dayNames: [
			"Sunnudagur",
			"Mánudagur",
			"Þriðjudagur",
			"Miðvikudagur",
			"Fimmtudagur",
			"Föstudagur",
			"Laugardagur"
		],
		dayNamesShort: [ "Sun","Mán","Þri","Mið","Fim","Fös","Lau" ],
		dayNamesMin: [ "Su","Má","Þr","Mi","Fi","Fö","La" ],
		weekHeader: "Vika",
		dateFormat: "dd.mm.yy",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.is );
}

return datepicker.regional.is;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
