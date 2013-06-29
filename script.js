function bnreplace(words){
	for(var x=0;x<3;x++){
	words=words.replace("0","০");
	words=words.replace("1","১");
	words=words.replace("2","২");
	words=words.replace("3","৩");
	words=words.replace("4","৪");
	words=words.replace("5","৫");
	words=words.replace("6","৬");
	words=words.replace("7","৭");
	words=words.replace("8","৮");
	words=words.replace("9","৯");
	}
	return words;
}
//init
var start = new Date(); 
var datetoday=new Date();
var bnmonths= new Array("বৈশাখ","জৌষ্ঠ্য","আষাঢ","শ্রাবন","ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ন","পৌষ","মাঘ","ফাল্গুল","চৈত্র");
start.setDate(14);
start.setMonth(3);
var starttosec=start.getTime();
var todaytosec=datetoday.getTime();
var bnyr;
bnyr=start.getFullYear()-593;
//alert(bnyr);
//get date difference from 14 april
var elapseddate=(todaytosec-starttosec)/(3600*24*1000);
var months=0;
while(elapseddate>=30){ //if first 5 month
	if(months<=5){
		elapseddate-=31;
		months++;
	}
	else if(months>5 && months <=10){ // second 5 months
		elapseddate-=30;
		months++;
	}
	else if(months==11 && (bnyr%4==0)){
		elapseddate-=31;
		months++;
	}
	else if(months==11 && (bnyr%4!=0)){
		elapseddate-=30;
		months++;
	}
	else{
		elapseddate-=30;
		months++;
	}
}
if(elapseddate>0){
	months++;
}
//alert(months.toString()+" - "+bnyr.toString());
alert(bnreplace(elapseddate.toString()) +" "+ bnmonths[months-1]+ " "+bnreplace(bnyr.toString()));

