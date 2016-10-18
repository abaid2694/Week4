//these are the variable of the programm
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = "pen";
var value = "blue";
var key1 = "keys";
var value1 = "silver";
var key2 = "drink";
var value2 = "redbull";
var key3 = "Dell";
var value3 = "pc";
var key4 = "screen";
var value4 = "24inc";


//this function check the first command if the device is ready or not
    function onLoad() {
        
        window.alert localStorage.setItem(key, value);
        window.alert localStorage.setItem(key1, value1);
        window.alert localStorage.setItem(key2, value2);
        window.alert localStorage.setItem(key3, value3);
        window.alert localStorage.setItem(key4, value4);
        
        
    }
	
//this function updates the display any changes made
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}




    // device APIs are available
    //
    /*function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }*/

