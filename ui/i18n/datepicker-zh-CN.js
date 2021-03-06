/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
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

if ( typeof datepicker.regional[ "zh-CN" ] === "undefined" ) {
	datepicker.regional[ "zh-CN" ] = {
		closeText: "关闭",
		prevText: "&#x3C;上月",
		nextText: "下月&#x3E;",
		currentText: "今天",
		monthNames: [ "一月","二月","三月","四月","五月","六月",
		"七月","八月","九月","十月","十一月","十二月" ],
		monthNamesShort: [ "一月","二月","三月","四月","五月","六月",
		"七月","八月","九月","十月","十一月","十二月" ],
		dayNames: [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六" ],
		dayNamesShort: [ "周日","周一","周二","周三","周四","周五","周六" ],
		dayNamesMin: [ "日","一","二","三","四","五","六" ],
		weekHeader: "周",
		dateFormat: "yy-mm-dd",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "年" };
	datepicker.setDefaults( datepicker.regional[ "zh-CN" ] );
}

return datepicker.regional[ "zh-CN" ];

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
