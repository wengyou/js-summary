/*
  JS函数库 
  
  ©2017-2019 Bux. All rights reserved.

  V1.0.0

*/
var deBug=true;

var sWidth=window.screen.availWidth;
var sHeight=window.screen.availHeight;
var wWidth=document.getElementsByTagName("html")[0].clientWidth;
var wHeight=document.getElementsByTagName("html")[0].clientHeight;
var html=document.getElementsByTagName("html")[0];

window.onresize=function(){
	sWidth=window.screen.availWidth;
	sHeight=window.screen.availHeight;
	wWidth=document.getElementsByTagName("html")[0].clientWidth;
	try{
		if(typeof(eval('reSize'))=='function'){
			reSize();
		}
	}
	catch(e){}
};

function isIE(){
	if (!!window.ActiveXObject||"ActiveXObject" in window){
		return true;
	}
	else{
		return false;
	}
}

function byClass(className,returnAll){
	var returnAll=arguments[1] || false;
	var result=document.getElementsByClassName(className);
	if(result.length==0){
		return false;
	}
	if(returnAll){
		return result;
	}
	return result[0];
}

function byId(idName,closeError){
	var closeError=arguments[1] || false;
	if(!document.getElementById(idName)){
		if(deBug&&!closeError){
			console.log('%cbyId(\''+idName+'\') Error','color:red');
		}
		return false;
	}
	return document.getElementById(idName);
}
function getCookie(name){
	var result=null;
	var reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
	if(result=document.cookie.match(reg)){
		return unescape(result[2]);
	}
	else{
		return null; 
	}
}
function jump(href,newW,parentW){
	var newW=arguments[1] || false;
	var parentW=arguments[2] || false;
	if(!arguments[0]){
		return false;
	}
	if(!newW){
		if(parentW&&self!=top){
			parent.location.href=href;
		}
		else{
			if(href.indexOf("?")!=-1){
				pageName=href.replace(/^(\/|\\)/ig,'').split("?")[0];
			}
			else{
				pageName=href;
			}
			if(typeof RouteConfig.pages[pageName]!='undefined'){
				Load(pageName,getRequest(href));
			}
			else{
				window.location.href=href;
			}
		}
	}
	else{
		if(parentW&&self!=top){
			parent.open(href);
		}
		else{
			window.open(href);
		}
	}
}
function getValue(params){
	var dom=byId(params);
	if(dom.tagName){
		if(dom.tagName=='INPUT'||dom.tagName=='TEXTAREA'){
			return dom.name+"="+byId(params).value;
		}
		else if(dom.tagName=='DIV'){
			return dom.name+"="+byId(params).innerHTML;
		}
		else if(dom.tagName=='SELECT'){
			return dom.name+"="+byId(params).options[byId(params).selectedIndex].value;
		}
		else{
			if(deBug){
				console.log("domType Error");
			}
			return false;
		}
	}
}
function encodeParams(allParams) {
	var tempArray = [];
	var returnData='';
	tempArray=allParams.split(',');
	for (var i=0;i<tempArray.length; i++) {
		if(i==0){
			returnData=returnData+getValue(tempArray[i]);
		}
		else{
			returnData=returnData+'&'+getValue(tempArray[i]);
		}
	}
	return returnData;
}
function isSet(value){
	if(typeof value != 'undefined'){
		return true;
	}
	return false;
}
function isEmpty(value){
	if(typeof value == 'undefined'||value==''||value==null){
		return true;
	}
	return false;
}

function noAction(){
	return false;
}
function checkForm(inputId,required,minLength,maxLength,regex,noMark){
	var required=arguments[1] || false;
	var minLength=arguments[2] || false;
	var maxLength=arguments[3] || false;
	var regex=arguments[4] || false;
	var noMark=arguments[5] || false;
	if(!byId(inputId)){
		return false;
	}
	byId(inputId).style.backgroundColor='';
	if(required&&(byId(inputId).value==null||byId(inputId).value.length==0)){
		if(!noMark){
			byId(inputId).style.backgroundColor='#fed8d9';
		}
		byId(inputId).focus();
		return false;
	}
	if((required||minLength&&byId(inputId).value.length>0)&&minLength&&byId(inputId).value.length<minLength){
		if(!noMark){
			byId(inputId).style.backgroundColor='#fed8d9';
		}
		byId(inputId).focus();
		return false;
	}
	if(maxLength&&byId(inputId).value.length>maxLength){
		if(!noMark){
			byId(inputId).style.backgroundColor='#fed8d9';
		}
		byId(inputId).focus();
		return false;
	}
	if(regex&&byId(inputId).value!=null&&byId(inputId).value.length>0){
		if(regex=='url'){
			regex=new RegExp('^(https|http)://(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?'
		+ '(([0-9]{1,3}.){3}[0-9]{1,3}'
		+ '|'
		+ '([0-9a-z_!~*\'()-]+.)*'
		+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].'
		+ '[a-z]{2,6})'
		+ '(:[0-9]{1,4})?'
		+ '((/?)|'
		+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$');
		}
		else if(regex=='ip'){
			regex=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
		}
		else if(regex=='email'){
			regex=/[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+/;
		}
		else if(regex=='mobile'){
			regex=/1\d{10}/;
		}
		else if(regex=='phone'){
			regex=/\d{3}-\d{8}|\d{4}-\{7,8}/;
		}
		else if(regex=='idcard'){
			regex=/(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)/;
		}
		else if(regex=='qq'){
			regex=/[1-9][0-9]{4,}/;
		}
		else if(regex=='post'){
			regex=/[1-9]\d{5}(?!\d)/;
		}
		else if(regex=='d'){
			regex=/[0-9]/;
		}
		else if(regex=='+'){
			regex=/[1-9]\d*/;
		}
		else if(regex=='cnstr'){
			regex=/[\u4e00-\u9fa5]/;
		}
		else if(regex=='enstr'){
			regex=/[a-zA-Z]/;
		}
		else if(regex=='name'){
			regex=/([\u4e00-\u9fa5]+|([a-zA-Z0-9]+\s?)+)/;
		}
		if(!regex.test(byId(inputId).value)){
			if(!noMark){
				byId(inputId).style.backgroundColor='#fed8d9';
			}
			byId(inputId).focus();
			return false;
		}
	}
	return true;
}

function goTop(){
	window.scrollBy(0,-20);
	var top=document.body.scrollTop+document.documentElement.scrollTop;
	if(top>10){
		setTimeout('goTop()',6);
	}
}

function getQuery(name){
	var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
	var value=window.location.search.substr(1).match(reg);
	if(value!=null){
		return unescape(value[2]);
	};
	return false;
}

function getRequest(url) {
	var url=arguments[0] || location.search;
	var result=new Object();
	if(url.indexOf("?")!=-1){
		url=url.substr(1);
		var query= url.split("&");
		for(var i=0;i<query.length;i++){
			if(isSet(query[i].split("=")[1])){
				result[query[i].split("=")[0]]=unescape(query[i].split("=")[1]);
			}
			else{
				result[query[i].split("=")[0]]='';
			}
		}
		return result;
	}
	else{
		return false
	}
}

function inObject(search,theObject){
	for(var Key in theObject){
		if(theObject[Key]==search){
			return true;
		}
	}
	return false;
}
function setCookie(name,value,time,path,domain) {
	var time=arguments[2]||false;
	var path=arguments[3]||'/';
	var domain=arguments[4]||'';
	time=time*1000;
	expTime=new Date();
	if(Time){
		expTime.setTime(time);
		expTime=expTime.toGMTString();
	}
	else{
		expTime='""';
	}
	document.cookie=name+"="+escape(value)+";expires="+expTime+";path="+path+";domain="+domain;
	return true;
}
String.prototype.timeToStr=function(){
	var NowTime=parseInt(new Date().getTime()/1000);
	var timeInterval=NowTime-this;
	if(timeInterval<60){
		return '刚刚';
	}
	else if(timeInterval>=60&&timeInterval<3600){
		return parseInt(timeInterval/60)+'分钟前';
	}
	else if(timeInterval>=3600&&timeInterval<86400){
		return parseInt(timeInterval/3600)+'小时前';
	}
	else if(timeInterval>=86400&&timeInterval<2592000){
		return parseInt(timeInterval/86400)+'天前';
	}
	else if(timeInterval>=2592000&&timeInterval<31536000){
		return parseInt(timeInterval/2592000)+'个月前';
	}
	else{
		return parseInt(timeInterval/31536000)+'年前';
	}
}