'use strict'

///////////MUST2-1/////////
// function double(number) {
//     return number * 2 ;
//   }
  
//   console.log(double(8)); // => 16
//   console.log(double(10)); // => 20


// function greeting(people){
//     return `こんにちは、${people}さん！`;
// };

// console.log(greeting("ひとみ")); // => "こんにちは、ひとみさん！"
// console.log(greeting("sayoko")); // => "こんにちは、sayokoさん！"



// function bookData(title, author) {
//     return `タイトルは「${title}」、作者は${author}です。`;
// } 
  
// console.log(bookData("こころ", "夏目漱石")); // => "タイトルは「こころ」、作者は夏目漱石です。"
// console.log(bookData("羅生門", "芥川龍之介")); // => "タイトルは「羅生門」、作者は芥川龍之介です。"
  
//   // 余裕がある人はテンプレートリテラルで書いてみましょう！
//   // 余裕がある人はconsole.log()を増やして、自分の好きな本を表示させてみましょう！

 
// function type(data){
//     return typeof data;
// }

// console.log(type(1)); // => "number"
// console.log(type("Hello")); // => "string"
// console.log(type(true)); // => "boolean"


// function triangle(num1,num2){
//     return num1 * num2 / 2;
// }

// console.log(triangle(10, 20)); // => 100
// console.log(triangle(6, 3)); // => 9


// let countNumber = 0;

// function counter(){
//     return  countNumber += 1;
// }

// console.log(counter()); // => 1
// console.log(counter()); // => 2
// console.log(counter()); // => 3

// //////Level2-3//////////////////
// function overFive(number) {
//     if(number >= 5){
//         return true;
//     }else{
//         return false;
//     }
// }
  
// test(overFive(1), false);
// test(overFive(10), true);
// test(overFive(5), true);


// function comparison(num1,num2){
//     return num1 > num2;
// }

// test(comparison(10, 2), true);
// test(comparison(5, 7), false);


// function isLessThanZero(num){
//     return num - 10 < 0;
// }

// test(isLessThanZero(18), false);
// test(isLessThanZero(3), true);
// test(isLessThanZero(10), false);


// function isString(data){
//     return typeof data === "string";
// }

// test(isString(6), false);
// test(isString("6"), true);
// test(isString("false"), true);


// function isEvenNumber(num){
//     return num % 2 === 0;
// }

// test(isEvenNumber(2), true);
// test(isEvenNumber(5), false);


// function isMse(data){
//     return data === "MsE";
// }

// test(isMse("MsE"), true);
// test(isMse("engineer"), false);
// test(isMse("MSE"), false);


//////Level3-1///////////////////
// function goOrStop(color) {
//     if(color === "青"){
//         return "進む";
//     }else if(color === "赤"){
//         return "止まる";
//     }else{
//         return "認識できません";
//     }
// }
  
// test(goOrStop("青"), "進む");
// test(goOrStop("赤"), "止まる");
// test(goOrStop("紫"), "認識できません");
// test(goOrStop("緑"), "認識できません");


// function thirty(num1,num2){
//     if(num1 + num2 >= 30){
//         return "30以上です";
//     }else{
//         return "まだ足りません";
//     }
// }

// test(thirty(12, 17), "まだ足りません");
// test(thirty(20, 20), "30以上です");


// function lengthOfString(word){
//     if(word.length >= 5){
//         return word.length;
//     }else{
//         return "5文字以上にしてください";
//     }
// }

// test(lengthOfString("abc"), "5文字以上にしてください");
// test(lengthOfString("abcdefg"), 7);
// test(lengthOfString("12345"), 5);


// function mustItem(weather){
//     if(weather === "晴れ"){
//         return "帽子";
//     }else if(weather === "曇り"){
//         return "折り畳み傘";
//     }else if(weather === "雨"){
//         return "傘";
//     }else if(weather === "雪"){
//         return "スノーブーツ";
//     }
// }

// test(mustItem("晴れ"), "帽子");
// test(mustItem("曇り"), "折り畳み傘");
// test(mustItem("雨"), "傘");
// test(mustItem("雪"), "スノーブーツ");


// let balance = 1000;

// function viewBalance(){
//     return balance;
// }

// function deposit(depositAmount){
//     balance += depositAmount;
//     return viewBalance;
// }

// function withdraw(withdrawAmount){
//     if(balance >= withdrawAmount){
//         balance -= withdrawAmount; 
//         return viewBalance;
//     }else{
//         return "残高が足りません";
//     }

// }

// // ここから下は変更しないでください
// test(viewBalance(), 1000);
// deposit(2000);
// test(viewBalance(), 3000);
// test(withdraw(5000), "残高が足りません");
// deposit(3000);
// withdraw(5000);
// test(viewBalance(), 1000);


// function makeSpace(haiku){
//     if(haiku.length === 17){
//         return haiku.slice(0,5)+ " " + haiku.slice(5,12)+ " " + haiku.slice(12,17);
//     }else{
//         return `${haiku.length}文字には対応していません`;
//     }
// }

// let haiku1 = "しずかさやいわにしみいるせみのこえ";
// let haiku2 = "なのはなやつきはひがしにひはにしに";
// let haiku3 = "すなのごときくもながれゆくあさのあき";
// let haiku4 = "すずめのこそこのけそこのけおうまがとおる";

// test(makeSpace(haiku1), "しずかさや いわにしみいる せみのこえ");
// test(makeSpace(haiku2), "なのはなや つきはひがしに ひはにしに");
// test(makeSpace(haiku3), "18文字には対応していません");
// test(makeSpace(haiku4), "20文字には対応していません");


//////////Level 3-2//////////////
// ここに関数を定義しましょう
// function toGetDomain(domain){
//     // let loweacaseDomain = domain.toLowerCase();
//     if(domain === "google" || domain === "GOOGLE"){
//         return `${user}@gmail.com`;
//     }else if(domain === "yahoo" || domain === "YAHOO"){
//         return `${user}@yahoo.co.jp`;
//     }else if(domain === "biglobe" || domain === "BIGLOBE"){
//         return `${user}@biglobe.ne.jp`;
//     }else{
//         return `エラーです`;
//     }
// }

// let user = "my-address";

// test(toGetDomain("google"), "my-address@gmail.com");
// test(toGetDomain("GOOGLE"), "my-address@gmail.com");
// test(toGetDomain("yahoo"), "my-address@yahoo.co.jp");
// test(toGetDomain("YAHOO"), "my-address@yahoo.co.jp");
// test(toGetDomain("biglobe"), "my-address@biglobe.ne.jp");
// test(toGetDomain("BIGLOBE"), "my-address@biglobe.ne.jp");
// test(toGetDomain("pome"), "エラーです");

// user = "piyo";

// test(toGetDomain("google"), "piyo@gmail.com");
// test(toGetDomain("GOOGLE"), "piyo@gmail.com");
// test(toGetDomain("yahoo"), "piyo@yahoo.co.jp");
// test(toGetDomain("YAHOO"), "piyo@yahoo.co.jp");
// test(toGetDomain("biglobe"), "piyo@biglobe.ne.jp");
// test(toGetDomain("BIGLOBE"), "piyo@biglobe.ne.jp");
// test(toGetDomain("pome"), "エラーです");



// function hasToRush(weekday){
//     let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//     let mustStady = weekday === "Tuesday" ||  weekday === "Thursday";

//     if(mustStady){
//         return true;
//     }else if(weekday === "Saturday"){
//         return "not, but I have to wake up early";
//     }else if(weekday === "Sunday"){
//         return "Today is Holiday!";
//     }else if(!week.includes(weekday)){
//         return "try again";
//     }else{
//         return false;
//     }
// }

// test(hasToRush("Monday"),false);
// test(hasToRush("Tuesday"),true);
// test(hasToRush("Wednesday"), false);
// test(hasToRush("Thursday"),true);
// test(hasToRush("Friday"), false);
// test(hasToRush("Saturday"), "not, but I have to wake up early");
// test(hasToRush("Sunday"), "Today is Holiday!");
// test(hasToRush("Mew"), "try again");



// function travelExpenses(distance,parking){
//     let workDays = 20 ;
//     let carFare = distance * 200 * 2;
//     let parkingFare = parking ? +5000 : 0;

//     if(distance < 2){
//         return parkingFare;
//     }else if(distance >= 2 && distance < 15){
//         return carFare * workDays + parkingFare;
//     }else if(distance >= 15){
//         return carFare * workDays * 1.2 + parkingFare;
//     }

// }

// test(travelExpenses(1, true), 5000);
// test(travelExpenses(10, false), 80000);
// test(travelExpenses(10, true), 85000);
// test(travelExpenses(15, false), 144000);
// test(travelExpenses(20, true), 197000);



// function groupName(year){
//     if(0 < year && year <= 1996){
//         return "結成させていません";
//     }else if(1997 <= year && year <= 2013){
//         return "モーニング娘。";
//     }else if(2014 <= year && year <= 2023){
//         return `モーニング娘。'${year-2000}`;
//     }else if(2024 <= year){
//         return "まだわかりません";
//     }else{
//         return "西暦をいれてください";
//     }
// }
// test(groupName(1997), "モーニング娘。");
// test(groupName(2000), "モーニング娘。");
// test(groupName(2014), "モーニング娘。'14");
// test(groupName(2022), "モーニング娘。'22");
// test(groupName(1990),"結成させていません");// ← まだ結成されていない
// test(groupName(2025),"まだわかりません");// ← 未来のことなので分からない
// test(groupName(-8),"西暦をいれてください");// ← 西暦としてふさわしくない値が引数に入ってくる


// function first(word){
//     let upperCase = word[0].toUpperCase();
//     if(upperCase === "A"){
//         return "「A」です。"
//     }else{
//         return `違います。「${upperCase}」です。`;
//     }
// }


// const word = "Little and often fills the purse."
// const word2 = "A picture is worth a thousand words."
// const word3 = "Better late than never."
// const word4 = "after a storm comes a calm."

// test(first(word), "違います。「L」です。");
// test(first(word2), "「A」です。");
// test(first(word3), "違います。「B」です。");
// test(first(word4), "「A」です。");




// function passwordChecker(pass){
    
//     return(5 <= pass.length && pass.length <= 10) &&
//     (typeof pass !== "number") &&
//     (pass[pass.length-1] !== "O")
// }
//  //(pass.slice(-1) !== "O")

// test(passwordChecker(12345),false);
// test(passwordChecker("12345"), true);
// test(passwordChecker("1234567890a"), false);
// test(passwordChecker("qwe"),false);
// test(passwordChecker("qwerty"),true);
// test(passwordChecker("tomato"),true);
// test(passwordChecker("TOMATO"),false);



//////////////////Level3-3//////////////////////
// let string = "これは外側";

// function scope() {
//   let string = "これは内側";
//   return string;
// }

// console.log(scope()); // =>　何が表示されるでしょうか？

// let string = "これは外側";

// function scope() {
//   return string;
// }

// console.log(scope()); // =>　何が表示されるでしょうか？


// let count = 0;
// function addOne() {
//     return count += 1;
//   }
  
//   test(addOne(), 1);
//   test(addOne(), 2);
//   test(addOne(), 3);
//   test(addOne(), 4);
//   test(addOne(), 5);


// let result = "";
// function likeZenitsu(){
   
//     for(let i = 0; i < 5; i++){
//         result += "a";
//     }
//     return result + "!";
// }

// test(likeZenitsu(), "aaaaa!"); // aは5個
// test(likeZenitsu(), "aaaaaaaaaa!"); // aは10個
// test(likeZenitsu(), "aaaaaaaaaaaaaaa!"); // aは15個



// function likeGiyuu(){
//     let word = "";
//     for(let i = 0; i < 5; i++){
//         word += ".";
//     }
//     return word;
// }
// test(likeGiyuu(), "....."); // .は5個
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");


//////////level4-1///////////////
///MUST5.6///////
// function pushArray(array,pushWord){
//     array.push(pushWord);
//     return array;
// }

// const testArray = ["one", 2, "three", 4, "five"];
// test(pushArray(testArray, 6), ["one", 2, "three", 4, "five", 6]);
// test(pushArray(testArray, "seven"), ["one", 2, "three", 4, "five", 6, "seven"]);


// ここに関数を定義しましょう
// function arrayChanger(array,indexNum){
//     array[indexNum] = "changed";
//     return array;
// }

// const numArray = [1, 2, 3, 4, 5];
// test(arrayChanger(numArray, 2), [1, 2, "changed", 4, 5]);

// const catName = ["Tama", "Omochi", "Mikan"];
// test(arrayChanger(catName, 0), ["changed", "Omochi", "Mikan"]);

// const mixedArray = [1, "Tama", 2, "Omochi", 3, "Mikan", 4, "Kitty", 5];
// test(arrayChanger(mixedArray, 4), [1, "Tama", 2, "Omochi", "changed", "Mikan", 4, "Kitty", 5]);


///////ADVANCE/////////////
// function getLyrics(start,end){
//     let array = myFavoriteThings.split(" ");
//     return array.slice(start,end);
// }

// let myFavoriteThings = "Raindrops on roses and whiskers on kittens Bright copper kettles and warm woolen mittens Brown paper packages tied up with strings These are a few of my favorite things";

// test(getLyrics(0, 5), ["Raindrops", "on", "roses", "and", "whiskers"]);
// test(getLyrics(6, 9), ["kittens", "Bright", "copper"]);
// test(getLyrics(21, 29), [
//   "These",
//   "are",
//   "a",
//   "few",
//   "of",
//   "my",
//   "favorite",
//   "things"
// ]);
// test(getLyrics(0, 0), []);


// const espanolNumber = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siste", "ocho"];

// // function getBetweenNumber(start,end){
// //     return espanolNumber.slice(start,end);
// // }

// // test(getBetweenNumber(2, 5), ["dos", "tres", "cuatro"]);
// // test(getBetweenNumber(4, 6), ["cuatro", "cinco"]);
// // test(getBetweenNumber(0, 0), []);
// // test(getBetweenNumber(0, espanolNumber.length), ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siste', 'ocho'])

// function getRemovedNumber(start,end){
//     return espanolNumber.splice(start,end);
// }

// test(getRemovedNumber(0, 1), ["cero"]);
// test(getRemovedNumber(3, 3), ["cuatro", "cinco", "seis"]);
// test(getRemovedNumber(0, 0), []);
// test(getRemovedNumber(0, espanolNumber.length),["uno", "dos", "tres", "siste", "ocho"]);
// console.log(espanolNumber.length); // => 9

// function nameCheck(array,sweetsBland){
//     let index = array.indexOf(sweetsBland);
//     if(index === -1){
//         return "存在しません";
//     }else{
//         return `${index + 1}番目に存在します`;
//     }
// }

// const nameArray = ["kihachi", "godiva", "west", "wittamer"]

// test(nameCheck(nameArray, "louange"), "存在しません");
// test(nameCheck(nameArray, "west"), "3番目に存在します");
// test(nameCheck(nameArray, "kihachi"), "1番目に存在します");



///////level4-2//////////////////////////
//MUST///2~

// function getSweets(obj) {
//     return obj.sweets;
//   }
  
  
//   const testObj1 = {
//     userId: 1,
//     name: "yoshiki",
//     sweets : "ice"
//   }
  
//   const testObj2 = {
//     userId: 2,
//     name: "aki",
//     sweets: "bread"
//   }
  
//   const testObj3 = {
//     userId: 3,
//     name: "kazuma",
//     sweets: "candy"
//   }
  
  
//   test(getSweets(testObj1), "ice");
//   test(getSweets(testObj2), "bread");
//   test(getSweets(testObj3), "candy");


// function getValue(obj, key) {
//     return obj[key];
//   }
  
  
//   const object1 = {
//     a: 1,
//     b: false,
//     c: "text"
//   }
  
//   test(getValue(object1, "b"), false);
//   test(getValue(object1, "c"), "text");
  
  
//   const object2 = {
//     userId: 100,
//     user: "null",
//     mail: "gmail"
//   }
  
//   test(getValue(object2, "userId"), 100);
//   test(getValue(object2, "user"), "null");


// function isYey(obj, key) {
//     if(obj[key] === "Yey!"){
//         return "いいですね！";
//     }else{
//         return "残念でした";
//     }
//   }
  
  
//   const object3 = {
//     a: "Yey!",
//     b: "Yey!",
//     c: "Yey!",
//     d: true
//   }
  
//   test(isYey(object3, "a"), "いいですね！");
//   test(isYey(object3, "c"), "いいですね！");
//   test(isYey(object3, "b"), "いいですね！");
//   test(isYey(object3, "d"), "残念でした");
  
  
//   const object4 = {
//     month: 8,
//     season: "summer",
//     feel: "Yey!"
//   }
  
//   test(isYey(object4, "8"), "残念でした");
//   test(isYey(object4, "season"), "残念でした");
//   test(isYey(object4, "feel"), "いいですね！");



// function getFood(obj, array, index) {
//     // let place = array[index];
//     //return obj[place];
//     return obj[array[index]];
//   }
  
  
//   const japanObj = {
//     Yamanashi: "ほうとう",
//     Akita: "きりたんぽ",
//     Miyazaki: "チキン南蛮",
//     Okinawa: "ゴーヤチャンプルー"
//   };
  
//   const japanArray = ["Tokyo", "Okinawa", "Nara", "Yamanashi", "Fukuoka"];
  
//   test(getFood(japanObj, japanArray, 1), "ゴーヤチャンプルー");
//   test(getFood(japanObj, japanArray, 3), "ほうとう");
  
  
//   const worldObj = {
//     Korea: "キンパ",
//     Italy: "ピザ",
//     Spain: "パエリア",
//     Mexico: "タコス",
//     India: "カレー"
//   }
  
//   const worldArray = ["India", "America", "Korea", "Mexico", "Canada"];
  
//   test(getFood(worldObj, worldArray, 0), "カレー");
//   test(getFood(worldObj, worldArray, 2), "キンパ");


//////////////////////////////////
//Level4-3//
// function getTotal(num){
//     let result = num;
//     for(let i = 0; i < num; i++){
//         console.log(`\n${i + 1}ループ目のi:`, i);
//       console.log(`${i + 1}ループ目の処理前のresult:`, result);
//     //   console.log(`${i + 1}ループ目のarray[i]:`, array[i]);
//         result += i;
//         console.log(`${i + 1}ループ目の処理後のresult:`, result);
//     }
//     return result;
// }

// test(getTotal(5), 15);
// test(getTotal(10), 55);
// test(getTotal(15), 120);



// function sumArray(array){
//     let result = 0;
//     for(let i = 0; i < array.length; i++){
//         result += array[i];
//     }
//     return result;
// }

// const toThree = [1, 2, 3];
// test(sumArray(toThree), 6);

// const toFive = [1, 2, 3, 4, 5];
// test(sumArray(toFive), 15);

// const toMany = [10, 20, 30, 100];
// test(sumArray(toMany), 160);


// function getByEven(num){
//     let result = [];
//     for(let i = 0; i < num; i++){
//         if(i % 2 === 0){
//             result.push(i);
//         }
//     }
//     return result;
// }

// test(getByEven(5), [0, 2, 4]);
// test(getByEven(10), [0, 2, 4, 6, 8]);
// test(getByEven(16), [0, 2, 4, 6, 8, 10, 12, 14]);



// function getDecrement(){
//     for(let i = 10; i > 0; i--){
//         console.log(i);
//     }
// }


// getDecrement();　// =>下記のように表示されればOKです
// //10
// //9
// //8
// //7
// //6
// //5
// //4
// //3
// //2
// //1



// function getSumArray(array1,array2){
//     let result = [];
//     for(let i = 0; i < array1.length; i++){
//         result.push(array1[i]+array2[i]);
//     }
//     return result;
// }


// test(getSumArray([1, 2, 3], [1, 2, 3]), [2, 4, 6]);
// test(getSumArray([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(getSumArray([100], [100]), [200]);
// test(getSumArray([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), [7, 7, 7, 7, 7, 7]);
// test(getSumArray([1, 2, 3, 4, 5, 6], [-6, -5, -4, -3, -2, -1]), [-5, -3, -1, 1, 3, 5]);


function fruitChecker(num){
    let result =[];
    for(let i = 1; i <= num; i++){
        if(i % 12 === 0){
            result.push("strawberry")
        }else if(i % 3 === 0){
            result.push("apple");
        }else if(i % 4 === 0){
            result.push("orange");
        }else{
            result.push(i);
        }
    } 
    return result;
}


test(fruitChecker(3),[1, 2, 'apple']);
test(fruitChecker(4),[1, 2, 'apple', 'orange']);
test(fruitChecker(20),[1, 2, 'apple', 'orange', 5, 'apple', 7, 'orange', 'apple', 10, 11, 'strawberry', 13, 14, 'apple', 'orange', 17, 'apple', 19, 'orange']);
test(fruitChecker(40),[1, 2, 'apple', 'orange', 5, 'apple', 7, 'orange', 'apple', 10, 11, 'strawberry', 13, 14, 'apple', 'orange', 17, 'apple', 19, 'orange', 'apple', 22, 23, 'strawberry', 25, 26, 'apple', 'orange', 29, 'apple', 31, 'orange', 'apple', 34, 35, 'strawberry', 37, 38, 'apple', 'orange']);