/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
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

if ( typeof datepicker.regional.da === "undefined" ) {
	datepicker.regional.da = {
		closeText: "Luk",
		prevText: "&#x3C;Forrige",
		nextText: "Næste&#x3E;",
		currentText: "Idag",
		monthNames: [ "Januar","Februar","Marts","April","Maj","Juni",
		"Juli","August","September","Oktober","November","December" ],
		monthNamesShort: [ "Jan","Feb","Mar","Apr","Maj","Jun",
		"Jul","Aug","Sep","Okt","Nov","Dec" ],
		dayNames: [ "Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag" ],
		dayNamesShort: [ "Søn","Man","Tir","Ons","Tor","Fre","Lør" ],
		dayNamesMin: [ "Sø","Ma","Ti","On","To","Fr","Lø" ],
		weekHeader: "Uge",
		dateFormat: "dd-mm-yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.da );
}

return datepicker.regional.da;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
