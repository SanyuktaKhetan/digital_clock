function clock(){
    var hours=document.getElementById("hr_sp");
    var minutes=document.getElementById("min_sp");
    var seconds=document.getElementById("sec_sp");
    var am=document.getElementById("am_pm");

    var time=new Date();
    var a=time.getHours();
    if(a>=12){
        am.innerHTML="PM"
    }
    else if(a<12){
        am.innerHTML="AM";
    }
    var b=time.getMinutes();
    var c=time.getSeconds();
    
    if(a>11){
        a=a-12;
    }
    

    // if(b>60){
    //     b=0;
    // }
    // if(c>60){
    //     c=0;
    // }
    
    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
}




setInterval(clock,1000);


function setTime(){

    t1();
    t2();
    t3();
    t4();
    check_work();

}

function t1(){
    var a1=document.getElementById("timer1").value;
    console.log(a1);
    // if(a1=="1"){
    //     document.getElementById("time1").innerHTML =" Wake Up Time : 1AM - 2AM";
    // }
    switch(a1){
        case '1':document.getElementById("time1").innerHTML =" Wake Up Time : 1AM - 2AM";
        break;
        case '2':document.getElementById("time1").innerHTML =" Wake Up Time : 2AM - 3AM";
        break;
        case '3':document.getElementById("time1").innerHTML =" Wake Up Time : 3AM - 4AM";
        break;
        case '4':document.getElementById("time1").innerHTML =" Wake Up Time : 4AM - 5AM";
        break;
        case '5':document.getElementById("time1").innerHTML =" Wake Up Time : 5AM - 6AM";
        break;
        case '6':document.getElementById("time1").innerHTML =" Wake Up Time : 6AM - 7AM";
        break;
        case '7':document.getElementById("time1").innerHTML =" Wake Up Time : 7AM - 8AM";
        break;
        case '8':document.getElementById("time1").innerHTML =" Wake Up Time : 8AM - 9AM";
        break;
        case '9':document.getElementById("time1").innerHTML =" Wake Up Time : 9AM - 10AM";
        break;
        case '10':document.getElementById("time1").innerHTML =" Wake Up Time : 10AM - 11AM";
        break;
        case '11':document.getElementById("time1").innerHTML =" Wake Up Time : 11AM - 12PM";
        break;
        case '12':document.getElementById("time1").innerHTML =" Wake Up Time : 12PM - 1PM";
        break;
        case '13':document.getElementById("time1").innerHTML =" Wake Up Time : 1PM - 1PM";
        break;
        case '14':document.getElementById("time1").innerHTML =" Wake Up Time : 2PM - 3PM";
        break;
        case '15':document.getElementById("time1").innerHTML =" Wake Up Time : 3PM - 4PM";
        break;
        case '16':document.getElementById("time1").innerHTML =" Wake Up Time : 4PM - 5PM";
        break;
        case '17':document.getElementById("time1").innerHTML =" Wake Up Time : 5PM - 6PM";
        break;
        case '18':document.getElementById("time1").innerHTML =" Wake Up Time : 6PM - 7PM";
        break;
        case '19':document.getElementById("time1").innerHTML =" Wake Up Time : 7PM - 8PM";
        break;
        case '20':document.getElementById("time1").innerHTML =" Wake Up Time : 8PM - 9PM";
        break;
        case '21':document.getElementById("time1").innerHTML =" Wake Up Time : 9PM - 10PM";
        break;
        case '22':document.getElementById("time1").innerHTML =" Wake Up Time : 10PM - 11PM";
        break;
        case '23':document.getElementById("time1").innerHTML =" Wake Up Time : 11PM - 12PM";
        break;
        case '0':document.getElementById("time1").innerHTML =" Wake Up Time : 12AM - 1AM";
        break;
        default: document.getElementById("time1").innerHTML =" Wake Up Time ";
    }
}

function t2(){
    var a2=document.getElementById("timer2").value;
    console.log(a2);
    // if(a1=="1"){
    //     document.getElementById("time1").innerHTML =" Wake Up Time : 1AM - 2AM";
    // }
    switch(a2){
        case '1':document.getElementById("time2").innerHTML =" Lunch Time : 1AM - 2AM";
        break;
        case '2':document.getElementById("time2").innerHTML =" Lunch Time : 2AM - 3AM";
        break;
        case '3':document.getElementById("time2").innerHTML =" Lunch Time : 3AM - 4AM";
        break;
        case '4':document.getElementById("time2").innerHTML =" Lunch Time : 4AM - 5AM";
        break;
        case '5':document.getElementById("time2").innerHTML =" Lunch Time : 5AM - 6AM";
        break;
        case '6':document.getElementById("time2").innerHTML =" Lunch Time : 6AM - 7AM";
        break;
        case '7':document.getElementById("time2").innerHTML =" Lunch Time : 7AM - 8AM";
        break;
        case '8':document.getElementById("time2").innerHTML =" Lunch Time : 8AM - 9AM";
        break;
        case '9':document.getElementById("time2").innerHTML =" Lunch Time : 9AM - 10AM";
        break;
        case '10':document.getElementById("time2").innerHTML =" Lunch Time : 10AM - 11AM";
        break;
        case '11':document.getElementById("time2").innerHTML =" Lunch Time : 11AM - 12PM";
        break;
        case '12':document.getElementById("time2").innerHTML =" Lunch Time : 12PM - 1PM";
        break;
        case '13':document.getElementById("time2").innerHTML =" Lunch Time : 1PM - 1PM";
        break;
        case '14':document.getElementById("time2").innerHTML =" Lunch Time : 2PM - 3PM";
        break;
        case '15':document.getElementById("time2").innerHTML =" Lunch Time : 3PM - 4PM";
        break;
        case '16':document.getElementById("time2").innerHTML =" Lunch Time : 4PM - 5PM";
        break;
        case '17':document.getElementById("time2").innerHTML =" Lunch Time : 5PM - 6PM";
        break;
        case '18':document.getElementById("time2").innerHTML =" Lunch Time : 6PM - 7PM";
        break;
        case '19':document.getElementById("time2").innerHTML =" Lunch Time : 7PM - 8PM";
        break;
        case '20':document.getElementById("time2").innerHTML =" Lunch Time : 8PM - 9PM";
        break;
        case '21':document.getElementById("time2").innerHTML =" Lunch Time : 9PM - 10PM";
        break;
        case '22':document.getElementById("time2").innerHTML =" Lunch Time : 10PM - 11PM";
        break;
        case '23':document.getElementById("time2").innerHTML =" Lunch Time : 11PM - 12PM";
        break;
        case '0':document.getElementById("time2").innerHTML =" Lunch Time : 12AM - 1AM";
        break;
        default: document.getElementById("time2").innerHTML =" Lunch Time ";
    }
}

function t3(){
    var a3=document.getElementById("timer3").value;
    console.log(a3);
    // if(a1=="1"){
    //     document.getElementById("time1").innerHTML =" Wake Up Time : 1AM - 2AM";
    // }
    switch(a3){
        case '1':document.getElementById("time3").innerHTML =" Nap Time : 1AM - 2AM";
        break;
        case '2':document.getElementById("time3").innerHTML =" Nap Time : 2AM - 3AM";
        break;
        case '3':document.getElementById("time3").innerHTML =" Nap Time : 3AM - 4AM";
        break;
        case '4':document.getElementById("time3").innerHTML =" Nap Time : 4AM - 5AM";
        break;
        case '5':document.getElementById("time3").innerHTML =" Nap Time : 5AM - 6AM";
        break;
        case '6':document.getElementById("time3").innerHTML =" Nap Time : 6AM - 7AM";
        break;
        case '7':document.getElementById("time3").innerHTML =" Nap Time : 7AM - 8AM";
        break;
        case '8':document.getElementById("time3").innerHTML =" Nap Time : 8AM - 9AM";
        break;
        case '9':document.getElementById("time3").innerHTML =" Nap Time : 9AM - 10AM";
        break;
        case '10':document.getElementById("time3").innerHTML =" Nap Time : 10AM - 11AM";
        break;
        case '11':document.getElementById("time3").innerHTML =" Nap Time : 11AM - 12PM";
        break;
        case '12':document.getElementById("time3").innerHTML =" Nap Time : 12PM - 1PM";
        break;
        case '13':document.getElementById("time3").innerHTML =" Nap Time : 1PM - 1PM";
        break;
        case '14':document.getElementById("time3").innerHTML =" Nap Time : 2PM - 3PM";
        break;
        case '15':document.getElementById("time3").innerHTML =" Nap Time : 3PM - 4PM";
        break;
        case '16':document.getElementById("time3").innerHTML =" Nap Time : 4PM - 5PM";
        break;
        case '17':document.getElementById("time3").innerHTML =" Nap Time : 5PM - 6PM";
        break;
        case '18':document.getElementById("time3").innerHTML =" Nap Time : 6PM - 7PM";
        break;
        case '19':document.getElementById("time3").innerHTML =" Nap Time : 7PM - 8PM";
        break;
        case '20':document.getElementById("time3").innerHTML =" Nap Time : 8PM - 9PM";
        break;
        case '21':document.getElementById("time3").innerHTML =" Nap Time : 9PM - 10PM";
        break;
        case '22':document.getElementById("time3").innerHTML =" Nap Time : 10PM - 11PM";
        break;
        case '23':document.getElementById("time3").innerHTML =" Nap Time : 11PM - 12PM";
        break;
        case '0':document.getElementById("time3").innerHTML =" Nap Time : 12AM - 1AM";
        break;
        default: document.getElementById("time3").innerHTML =" Nap Time ";
    }
}

function t4(){
    var a4=document.getElementById("timer4").value;
    console.log(a4);
    // if(a1=="1"){
    //     document.getElementById("time1").innerHTML =" Wake Up Time : 1AM - 2AM";
    // }
    switch(a4){
        case '1':document.getElementById("time4").innerHTML =" Night Time : 1AM - 2AM";
        break;
        case '2':document.getElementById("time4").innerHTML =" Night Time : 2AM - 3AM";
        break;
        case '3':document.getElementById("time4").innerHTML =" Night Time : 3AM - 4AM";
        break;
        case '4':document.getElementById("time4").innerHTML =" Night Time : 4AM - 5AM";
        break;
        case '5':document.getElementById("time4").innerHTML =" Night Time : 5AM - 6AM";
        break;
        case '6':document.getElementById("time4").innerHTML =" Night Time : 6AM - 7AM";
        break;
        case '7':document.getElementById("time4").innerHTML =" Night Time : 7AM - 8AM";
        break;
        case '8':document.getElementById("time4").innerHTML =" Night Time : 8AM - 9AM";
        break;
        case '9':document.getElementById("time4").innerHTML =" Night Time : 9AM - 10AM";
        break;
        case '10':document.getElementById("time4").innerHTML =" Night Time : 10AM - 11AM";
        break;
        case '11':document.getElementById("time4").innerHTML =" Night Time : 11AM - 12PM";
        break;
        case '12':document.getElementById("time4").innerHTML =" Night Time : 12PM - 1PM";
        break;
        case '13':document.getElementById("time4").innerHTML =" Night Time : 1PM - 1PM";
        break;
        case '14':document.getElementById("time4").innerHTML =" Night Time : 2PM - 3PM";
        break;
        case '15':document.getElementById("time4").innerHTML =" Night Time : 3PM - 4PM";
        break;
        case '16':document.getElementById("time4").innerHTML =" Night Time : 4PM - 5PM";
        break;
        case '17':document.getElementById("time4").innerHTML =" Night Time : 5PM - 6PM";
        break;
        case '18':document.getElementById("time4").innerHTML =" Night Time : 6PM - 7PM";
        break;
        case '19':document.getElementById("time4").innerHTML =" Night Time : 7PM - 8PM";
        break;
        case '20':document.getElementById("time4").innerHTML =" Night Time : 8PM - 9PM";
        break;
        case '21':document.getElementById("time4").innerHTML =" Night Time : 9PM - 10PM";
        break;
        case '22':document.getElementById("time4").innerHTML =" Night Time : 10PM - 11PM";
        break;
        case '23':document.getElementById("time4").innerHTML =" Night Time : 11PM - 12PM";
        break;
        case '0':document.getElementById("time4").innerHTML =" Night Time : 12AM - 1AM";
        break;
        default: document.getElementById("time4").innerHTML =" Night Time ";
    }
}

function check_work(){
   // document.getElementById("time1").innerHTML=
    
    var hourr=new Date().getHours();
    console.log("hour = "+hourr);

    var i=document.getElementById("timer1").value;
    console.log("i= " +i);
    if(i==hourr){
        document.getElementById("time_msg").innerHTML="It's Breakfast Time!!";
        document.getElementById("output_img").style.backgroundImage="url('morning.png')";
    }

    var j=document.getElementById("timer2").value;
    console.log("j= " +j);
    if(j==hourr){
        document.getElementById("time_msg").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("output_img").style.backgroundImage="url('Lunch_Time.png')";
    }

    var k=document.getElementById("timer3").value;
    console.log("k= " +k);
    if(k==hourr){
        document.getElementById("time_msg").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("output_img").style.backgroundImage="url('Evening_img.png')";
    }

    var l=document.getElementById("timer4").value;
    console.log("l= " +l);
    if(l==hourr){
        document.getElementById("time_msg").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("output_img").style.backgroundImage="url('Night_img.png')";
    }
}
