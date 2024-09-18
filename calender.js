let months = document.getElementsByTagName('select')[0];
let b=0;

var arr = [{ month: 'jan', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Feb', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Mar', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'April', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'May', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Jun', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'July', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Aug', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Sept', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'oct', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Nov', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] },
{ month: 'Dec', days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saterday"], date: [] }]






let todayDate = new Date();
let month = new Date().getMonth();

let year = new Date().getFullYear();
let year1=new Date().getFullYear();
let cal = document.getElementsByClassName('calender')[0];
let options=document.getElementsByTagName('select')[0];



function futureYear(item){
    month=item;
    
    document.getElementsByClassName('button')[0].getElementsByTagName('button')[0].disabled = false;
            document.getElementsByTagName('table')[0].style.paddingBottom = '0';
            document.getElementsByTagName('tbody')[0].innerHTML = '';
            document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr'));
    document.getElementsByClassName('yearWithDate')[0].innerText = `${arr[month].month.toUpperCase()} ${year}`;
    getDaysOfMonth1(year,month);

}





function getAllYear(year1) {
    for (let i = 0; i < 10; i++) {
        let option=document.createElement('option');
        option.innerText=year1;
        option.value=year1;
        options.appendChild(option);
        year1 += 1;
        } 

    }

getAllYear(year1);
function changeYear(item){
year=item;
if(year==document.getElementsByTagName('select')[0].lastChild.innerText){
   getAllYear(Number(year)+1);  
}
changeMonth();
futureYear(month);
}
function changeMonth() {
   
    let option = document.getElementsByClassName('months');
    arr.forEach((item, index) => {
        if (year == todayDate.getFullYear() && index < todayDate.getMonth()) {
            option[index].disabled = true;
        }
        else {
            option[index].disabled = false;
            
        }
    })
}
changeMonth();


document.getElementsByClassName('yearWithDate')[0].innerText = `${arr[month].month.toUpperCase()} ${year}`
document.getElementsByClassName('button')[0].getElementsByTagName('button')[0].disabled = true
function designit(item, month) {
    month=Number(month);
    for (let i = 1; i < item[0]?.dayno; i++) {
        document.getElementsByTagName('tr')[1].appendChild(document.createElement('td'))
    }
    for (let j = 0; j < item.length; j++) {
        // document.getElementsByTagName('div')[0].innerHTML += `${item1.day.toUpperCase()} ${item1.date}`
        // document.getElementsByTagName('div')[0].appendChild(document.createTextNode("\u00A0"))
        document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].
            appendChild(document.createElement('td')).innerText = `${item[j].date}`;
        let k = document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].getElementsByTagName('td').length - 1;
        if (item[j].date < todayDate.getDate() && month == todayDate.getMonth() && year == todayDate.getFullYear()) {
            document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].getElementsByTagName('td')[k].innerText = ''
        }


        document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].getElementsByTagName('td')[k].addEventListener('click', (() => {
            document.getElementsByTagName('p')[0].innerText = `you have picked date ${item[j].date}/${month + 1}/${year}`
        }))
        document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].getElementsByTagName('td')[k].style.cursor = 'pointer'


        if (year == todayDate.getFullYear() && month == todayDate.getMonth() && item[j].date == todayDate.getDate()) {

            document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].getElementsByTagName('td')[k].style.color = 'red'
        }

        if (item[j].dayno % 7 == 0) {
            document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr'))
        }
    }

    document.getElementsByClassName('yearWithDate')[0].style.textAlign = 'center';

}
function getDaysOfMonth1(year, month) {
    (month == todayDate.getMonth() && year == todayDate.getFullYear()) && (document.getElementsByClassName('button')[0].getElementsByTagName('button')[0].disabled = true,
        document.getElementsByTagName('table')[0].style.paddingBottom = '20px');
    var date = new Date(year, month, 1);
    arr[month].date = [];
    while (date.getMonth() == month) {
        let day = date.getDay();
        let obj = { day: arr[month].days[day], date: new Date(date).getDate(), dayno: day + 1 };
        arr[month].date.push(obj);
        date.setDate(date.getDate() + 1);
        

    }
    designit(arr[month].date, month)

}

getDaysOfMonth1(todayDate.getFullYear(), todayDate.getMonth())


function previousMonth() {
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr'))
    if (month > 0) {
        month--;
    }
    else if (month == 0) {
        month = 11;
        year--
    }
    getDaysOfMonth1(year, month)
    document.getElementsByClassName('yearWithDate')[0].innerText = `${arr[month].month.toUpperCase()} ${year}`

}
function nextMonth() {
    document.getElementsByClassName('button')[0].getElementsByTagName('button')[0].disabled = false
    document.getElementsByTagName('table')[0].style.paddingBottom = '0'
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr'))
    if (month == 11) {
        month = 0;
        year++;
    }
    else {
        month++;
    }
    getDaysOfMonth1(year, month);
    
    
    document.getElementsByClassName('yearWithDate')[0].innerText = `${arr[month].month.toUpperCase()} ${year}`
}






