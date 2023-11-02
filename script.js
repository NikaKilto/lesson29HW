//PIRVELI DAVALEBA PIRVELI DAVALEBA PIRVELI DAVALEBA
//PIRVELI DAVALEBA PIRVELI DAVALEBA PIRVELI DAVALEBA

// სთხოვეთ მომხმარებელს შემოიტანოს დადებითი რიცხვი 50 დან 100
// მდე , იპოვეთ მომხმარებლის მიერ შემოტანილი რიცხვის გამყოფების
// საშუალო არითმეტიკული და დაბეჭდეთ კონსოლში.

// var number = Number(prompt("Enter num between 50-100"));
// var count = 0;
// var sum = 0;

// while(number<50 || number>100){
//     number = Number(prompt("Enter correct num between 50-100"));
// }

// for(var i = 1; i<number; i++){
//     if(number%i==0){
//         sum+=i;
//         count++;
//     }
// }

// console.log(sum/count);








//MEORE DAVALEBA MEORE DAVALEBA MEORE DAVALEBA MEORE DAVALEBA
//MEORE DAVALEBA MEORE DAVALEBA MEORE DAVALEBA MEORE DAVALEBA

// თხოვეთ მომხმარებელს შემოიტანოს 3 რიცხვი 70 დან 140 მდე
// შუალედში, დაითვალეთ ყველა რიცხვის გამოყოვების რაოდენობა და
// დაბეჭდეთ კონსოლში ის რიცხვი რომელსაც ყველაზე მეტი გამყოფი
// ეყოლება

// var num1 = Number(prompt("Enter Num 1"));
// var num2 = Number(prompt("Enter Num 2"));
// var num3 = Number(prompt("Enter Num 3"));
// var count1 = 0;
// var count2 = 0;
// var count3 = 0;

// while(num1 < 70 || num1>140){
//     num1 = Number(prompt("Enter Num 1 CORRECTLY"));
// }
// while(num2 < 70 || num2>140){
//     num2 = Number(prompt("Enter Num 2 CORRECTLY"));
// }
// while(num3 < 70 || num3>140){
//     num3 = Number(prompt("Enter Num 3 CORRECTLY"));
// }

// for(var i=0; i<=Math.max(num1,num2,num3); i++){
//     if(num1%i==0){
//         count1++;
//     }
//     if(num2%i==0){
//         count2++;
//     }
//     if(num3%i==0){
//         count3++;
//     }
// }
// if(Math.max(count1,count2,count3)==count1){
//     console.log(`რიცხვ ${num1} აქვს ყველაზე მეტი - ${count1} გამყოფი`);
// }else if(Math.max(count1,count2,count3)==count2){
//     console.log(`რიცხვ ${num2} აქვს ყველაზე მეტი - ${count2} გამყოფი`);
// }else if(Math.max(count1,count2,count3)==count3){
//     console.log(`რიცხვ ${num3} აქვს ყველაზე მეტი - ${count3} გამყოფი`);
// } 











// MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA
// MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA MESAME DAVALEBA

// დაითვალეთ 10 დან 180 მდე ყველა 3 ის ან 5 ის ჯერადი რიცხვების
// ნამრავლი და დაბეჭდეთ კონსოლში

// var num1 = 10;
// var num2 = 180;
// var multiple = 1;

// for(var i=num1; i<=num2; i++){
//     if(i % 15 == 0){
//         multiple*=i;
//     }
// }
// console.log(multiple);















//MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA
//MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA MEOTXE DAVALEBA

// სთხოვეთ მომხმარებელს შემოიტანოს 4 რიცხვი, დაბეჭდეთ
// კონსოლში შემოტანილი რიცხვიდან რომელია უდიდესი

// var number1 = Number(prompt("Enter number 1"));
// var number2 = Number(prompt("Enter number 2"));
// var number3 = Number(prompt("Enter number 3"));
// var number4 = Number(prompt("Enter number 4"));

// var maxNum = Math.max(number1,number2,number3,number4);
// console.log(maxNum);














// MEXUTE DAVALEBA MEXUTE DAVALEBA MEXUTE DAVALEBA MEXUTE DAVALEBA
// MEXUTE DAVALEBA MEXUTE DAVALEBA MEXUTE DAVALEBA MEXUTE DAVALEBA

// სთხოვეთ მომხარებელს შემოტიანოს საკუთარ სახელი და გვარი,
// ელ.ფოსტა, სურათის მისამართი , ამის შემდგომ დააგენერირეთ html
// ფორმატის სტრინგი და დააგენერირეთ ის document ში ქარდის სახით

// var inputName = prompt("Enter Name"); 
// var inputLastName = prompt("Enter Last Name"); 
// var inputMail = prompt("Enter Mail"); 
// var inputImg = prompt("Enter Image Link");

// var cardInsert = `<div class="card" style="width: 18rem;">
// <img class="card-img-top" src=${inputImg} alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">${inputName}</h5>
//   <p class="card-text">${inputLastName}</p>
// </div>
// <div class="card-body">
//   <p class="mail" class="card-link">${inputMail}</a>
// </div>
// </div>`

// document.write(cardInsert);















// MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA
// MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA MEEQVSE DAVALEBA

// გაქვთ შემდეგი სახის განტოლება 3x^2 + 2x – 5 = 0, დაითვალეთ რას
// უდრის x1 და x2 ის მნიშვნელობები

// var a = 3;
// var b = 2;
// var c = -5;
// var d = (b**2)-(4*a*c);

// var x1 = -b-(Math.sqrt(d))/2*a;
// var x2 = -b+(Math.sqrt(d))/2*a;

// if(d<0){
//     alert("დისკრიმინანტი ნულზე ტოლია, ამოხსნა არ არსებობს");
// }else{
//     console.log(`x1 = ${x1}, x2 = ${x2}`);
// }
















// MESHVIDE DAVALEBA MESHVIDE DAVALEBA MESHVIDE DAVALEBA MESHVIDE DAVALEBA
// MESHVIDE DAVALEBA MESHVIDE DAVALEBA MESHVIDE DAVALEBA MESHVIDE DAVALEBA

// თხოვეთ მომხმარებელს შემოიტანოს მართკუთხა სამკუთხედის
// კათეზები, დაითვალეთ რას უდრის ჰიპოტენუზა

// var info = confirm("ვიპოვნოთ სამკუთხედის ჰიპოტენუზა")
// var a = Number(prompt("შეიყვანე a კათეტი"));
// var b = Number(prompt("შეიყვანე b კათეტი"));
// var c = Math.sqrt(a**2 + b**2);
// if(a+b<=c||a+c<=b||b+c<=a){
//     alert("არ არსებობს ასეთი სამკუთხედი");
// }else{
//     console.log("ჰიპოტენუზის სიგრძეა " + c);
// }

















// MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA
// MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA MERVE DAVALEBA

// თხოვეთ მომხმარებელს შემოიტანოს გარკვეული რიცხვი 0 დან 200
// მდე, გაიგეთ ეს რიცხვი მარტივია, შედგენილი თუ არც მარტივი და
// არც შედგენილი , ამის შემდგომ მიღებული პასუხი დალოგეთ
// კონსოლში

// var inputNum = Number(prompt("enter num between 0-200"));
// var isMartivi = true;
// while(inputNum<0||inputNum>200){
//     inputNum = Number(prompt("enter correct num between 0-200"));
// }

// for(var i = 2; i<inputNum; i++){
//     if(inputNum%i==0){
//         isMartivi=false;
//     }
// }

// if(inputNum==1){
//     console.log("არც მარტივია, არც შედგენილი")
// }else if(isMartivi){
//     console.log("მარტივი რიცხვია")
// }else{
//     console.log("შედგენილი რიცხვია")
// }
















// MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA
// MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA MECXRE DAVALEBA

// თხოვეთ მომხმარებელს შემოიტანოს საკუთარი : name, surname, age,
// email და დალოგეთ კონსოლში შემდეგი სტრინგი რომელშიც
// რეალური მონაცემები იქნება ჩასმული : Hello I am “name” “surname” I
// am “age” year old, my email is “email”

// var name = prompt("Enter Name"); 
// var surname = prompt("Enter Surname"); 
// var age = Number(prompt("Enter Age")); 
// var mail = prompt("Enter Mail"); 

// console.log(`Hello I am ${name} ${surname} I am ${age} years old, my email is ${mail}`);















// MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA
// MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA MEATE DAVALEBA

// გაიგეთ ყველა მარტივი რიცხვი 10 დან 90 მდე და დაბეჭდეთ ისინი
// კონსოლში

// var num1 = 10;   
// var num2 = 90;
// for(var i=num1; i<num2; i++){
//     for(var j=2; j<num2; j++){
//         if(i%j!=0){
//             console.log(i);
//         }
//     }
// }



















// METERTMETE DAVALEBA METERTMETE DAVALEBA METERTMETE DAVALEBA METERTMETE DAVALEBA 
// METERTMETE DAVALEBA METERTMETE DAVALEBA METERTMETE DAVALEBA METERTMETE DAVALEBA 

// დააგენერირეთ 10 ცალი რენდომული ფერი rgb ფორმატში,
// მაგალითად შემდეგი ფორმატის rgb(123,43,11);

// for(var i=0; i<=10; i++){
//     var num1 = Math.round(Math.random()*256);
//     var num2 = Math.round(Math.random()*256);
//     var num3 = Math.round(Math.random()*256);
    
//     var randomRgb = `rgb(${num1},${num2},${num3})`;
//     console.log(randomRgb);
// }


















// METORMETE DAVALEBA METORMETE DAVALEBA METORMETE DAVALEBA METORMETE DAVALEBA
// METORMETE DAVALEBA METORMETE DAVALEBA METORMETE DAVALEBA METORMETE DAVALEBA

 
//  for(var i=0; i<8; i++){
//     var shape = '';
//      for(var j=i; j<8; j++){
//          shape+='*';
//     }
//     console.log(shape);
//  }




















// MECAMETE DAVALEBA MECAMETE DAVALEBA MECAMETE DAVALEBA MECAMETE DAVALEBA 
// MECAMETE DAVALEBA MECAMETE DAVALEBA MECAMETE DAVALEBA MECAMETE DAVALEBA 

//  for(var i=0; i<10; i++){
//     var shape = '';
//      for(var j=i; j<19; j+=2){
//         shape+='*';
//     }
//     console.log(shape);
//  }???????????????????????????????














//METOTXMETE DAVALEBA METOTXMETE DAVALEBA METOTXMETE DAVALEBA METOTXMETE DAVALEBA 
//METOTXMETE DAVALEBA METOTXMETE DAVALEBA METOTXMETE DAVALEBA METOTXMETE DAVALEBA 

// var cycle = Number(prompt("enter cycle amount"));
// var sum = 0;
// var count = 0;

// for(var i=0; i<=cycle; i++){
//     var random = Math.round(Math.random()*236+135);
//     if(random%2==0){
//         sum+=random;
//         count++
//         console.log(random);
//     }
// }

// console.log(sum/count);













// METXUTMETE DAVALEBA METXUTMETE DAVALEBA METXUTMETE DAVALEBA METXUTMETE DAVALEBA
// METXUTMETE DAVALEBA METXUTMETE DAVALEBA METXUTMETE DAVALEBA METXUTMETE DAVALEBA

// var triangleSize = Number(prompt("Enter Triange Size"));
// for(var i=0; i<triangleSize;i++){
//     var stars = "";
//     for(var j=i; j<triangleSize; j++){
//         stars+="*";
//     }
//     console.log(stars);
// }















// METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA
// METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA METEQVSMETE DAVALEBA


// var moneyList = [200,100,50,20,10,5];
// var changeList = [];
// var moneyInput = Number(prompt("enter money u have"));
// while(moneyInput%5!=0){
//     moneyInput = Number(prompt("enter money u have"));
// }
// while(moneyInput>=0){
//     if(moneyInput-moneyList[0]>0){
//         changeList.push(200);
//         moneyInput=moneyInput-200;
//     }else if(moneyInput-moneyList[1]>0){
//         changeList.push(100);
//         moneyInput=moneyInput-100;
//     }else if(moneyInput-moneyList[2]>0){
//         changeList.push(50);
//         moneyInput=moneyInput-50;
//     }else if(moneyInput-moneyList[3]>0){
//         changeList.push(20);
//         moneyInput=moneyInput-20;
//     }else if(moneyInput-moneyList[4]>0){
//         changeList.push(10);
//         moneyInput=moneyInput-10;
//     }else if(moneyInput-moneyList[5]>0){
//         changeList.push(5);
//         moneyInput=moneyInput-5;
//     }else{
//         changeList.push(5);
//         break;
//     }
// }
// console.log(changeList);














//MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA 
//MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA MECHVIDMETE DAVALEBA 

// var gel = Number(prompt("Enter your Gel"));
// var toDollar = 2.7;
// var toRub = 0.2;
// var toFunt = 3;0
// var question = prompt("choose currency a)$; b)rub; c)funt");
// if(question=='a'){
//     console.log(gel*toDollar + "$")
// }else if(question=='b'){
//     console.log(gel*toRub + "euro");
// }else if(question=='c' + "funt"){
//     console.log(gel*toFunt);
// }else{
//     console.log("wrong inpit");
// }