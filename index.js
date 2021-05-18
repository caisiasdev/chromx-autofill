var qryString = location.search;
const urlParams = new URLSearchParams(qryString);	
const uidno = urlParams.get('uidno');
const accno = urlParams.get('accno');

const type = urlParams.get('type');
if(type == 'verify'){
	document.getElementById('uidno').value = uidno;
	document.getElementById("security_code").focus();
}else if(type == 'kyc'){
	document.getElementById('uid1').value = uidno;
	document.getElementById("security_code").focus();
}else if(type == 'kisanuid'){
	simulateClick(document.getElementById('ContentPlaceHolder1_rdbAction_0'));
	setTimeout(function() {
		document.getElementById("ContentPlaceHolder1_txtBox").focus();
		simulateClick(document.getElementById('ContentPlaceHolder1_txtBox'));
		const log = document.getElementById('ContentPlaceHolder1_txtBox');
		document.addEventListener('keypress', logKey());
		function logKey() {
		  	log.value = uidno;
		}

	}, 1000);

	setTimeout(function() {
		simulateClick(document.getElementById('ContentPlaceHolder1_btnserch'));
	}, 1500);
	
}else if(type == 'kisanaccno'){
	simulateClick(document.getElementById('ContentPlaceHolder1_rdbAction_1'));
	setTimeout(function() {
		document.getElementById("ContentPlaceHolder1_txtBox").focus();
		simulateClick(document.getElementById('ContentPlaceHolder1_txtBox'));
		const log = document.getElementById('ContentPlaceHolder1_txtBox');
		document.addEventListener('keypress', logKey());
		function logKey() {
		  	log.value = accno;
		}

	}, 1000);

	setTimeout(function() {
		simulateClick(document.getElementById('ContentPlaceHolder1_btnserch'));
	}, 1500);
}

function simulateClick(control)
{
    if (document.all)
    {
        control.click();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        control.dispatchEvent(evObj);
    }
}



