/* Kyrgyz (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Sergey Kartashov (ebishkek@yandex.ru). */
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

if ( typeof datepicker.regional.ky === "undefined" ) {
	datepicker.regional.ky = {
		closeText: "Жабуу",
		prevText: "&#x3c;Мур",
		nextText: "Кий&#x3e;",
		currentText: "Бүгүн",
		monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
		"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
		monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
		"Июл","Авг","Сен","Окт","Ноя","Дек" ],
		dayNames: [ "жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби" ],
		dayNamesShort: [ "жек", "дүй", "шей", "шар", "бей", "жум", "ише" ],
		dayNamesMin: [ "Жк","Дш","Шш","Шр","Бш","Жм","Иш" ],
		weekHeader: "Жум",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ""
	};
	datepicker.setDefaults( datepicker.regional.ky );
}

return datepicker.regional.ky;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
