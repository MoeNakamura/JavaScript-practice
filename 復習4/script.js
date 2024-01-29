'use strict'

let balance = 1000;

// ここにコードを書きましょう
// function viewBalance(){
//      return balance;
// }

// function deposit(depositAmount){
//      balance += depositAmount;
//      return viewBalance;
// }

// function withdraw(withdrawAmount){
//      if(balance >= withdrawAmount){
//      balance -= withdrawAmount;
//      return viewBalance;
//      }else{
//           return "残高が足りません";
//      }
// }

// // ここから下は変更しないでください
// test(viewBalance(), 1000);
// deposit(2000);
// test(viewBalance(), 3000);
// test(withdraw(5000), "残高が足りません");
// deposit(3000);
// withdraw(5000);
// test(viewBalance(), 1000);


// ここにコードを書きましょう
// function makeSpace(haiku){
//      if(haiku.length === 17){
//           return haiku.slice(0,5) + " " + haiku.slice(5,12) + " " + haiku.slice(12,17);
//      }else{
//           return `${haiku.length}文字には対応していません`;
//      }
// }

// let haiku1 = "しずかさやいわにしみいるせみのこえ";
// let haiku2 = "なのはなやつきはひがしにひはにしに";
// let haiku3 = "すなのごときくもながれゆくあさのあき";
// let haiku4 = "すずめのこそこのけそこのけおうまがとおる";

// test(makeSpace(haiku1), "しずかさや いわにしみいる せみのこえ");
// test(makeSpace(haiku2), "なのはなや つきはひがしに ひはにしに");
// test(makeSpace(haiku3), "18文字には対応していません");
// test(makeSpace(haiku4), "20文字には対応していません");

// ここに関数を定義しましょう
// function toGetDomain(domain){
//      if(domain === "google" || domain === "GOOGLE"){
//           return `${user}@gmail.com`;
//      }else if(domain === "yahoo" || domain === "YAHOO"){
//           return `${user}@yahoo.co.jp`;
//      }else if(domain === "biglobe" || domain === "BIGLOBE"){
//           return `${user}@biglobe.ne.jp`;
//      }else{
//           return "エラーです";
//      }
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


// ここに関数を定義しましょう
// function hasToRush(week){
//      let weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//      let mustStady =week === "Tuesday" || week === "Thursday";

//      if(week === "Saturday"){
//           return "not, but I have to wake up early";
//      }else if(week === "Sunday"){
//           return "Today is Holiday!";
//      }else if(!weekdays.includes(week)){
//           return "try again";
//      }  
//      return mustStady ;  
// }

// test(hasToRush("Monday"),false);
// test(hasToRush("Tuesday"),true);
// test(hasToRush("Wednesday"), false);
// test(hasToRush("Thursday"),true);
// test(hasToRush("Friday"), false);
// test(hasToRush("Saturday"), "not, but I have to wake up early");
// test(hasToRush("Sunday"), "Today is Holiday!");
// test(hasToRush("Mew"), "try again");


// ここに関数を定義しましょう
// function travelExpenses(distance,parking){
//      let workDays = 20;
//      let carFare = distance * 200 *2;
//      let parkingFare = parking ? + 5000 : + 0 ;

//      if(distance < 2){
//           return parkingFare;
//      }else if(distance >= 2 && distance < 15){
//           return carFare * workDays + parkingFare;
//      }else if(distance >= 15){
//           return carFare * 1.2 * workDays + parkingFare;
//      }
// }

// test(travelExpenses(1, true), 5000);
// test(travelExpenses(10, false), 80000);
// test(travelExpenses(10, true), 85000);
// test(travelExpenses(15, false), 144000);
// test(travelExpenses(20, true), 197000);


// ここに関数を定義しましょう
// function groupName(year){
//      let annual = `'${year - 2000}`;

//      if(0 <=  year && year <= 1996){
//           return "まだ結成されていません";
//      }else if(1997 <=  year && year <= 2013){
//           return "モーニング娘。";
//      }else if(2014 <=  year && year <= 2023){
//           return `モーニング娘。${annual}`;
//      }else if(2024 <=  year){
//           return "まだわかりません";
//      }else{
//           return "西暦をいれてください";
//      }
// }

// test(groupName(1997), "モーニング娘。");
// test(groupName(2000), "モーニング娘。");
// test(groupName(2014), "モーニング娘。'14");
// test(groupName(2022), "モーニング娘。'22");
// test(groupName(1990),"まだ結成されていません"); // ← まだ結成されていない
// test(groupName(2025),"まだわかりません"); // ← 未来のことなので分からない
// test(groupName(-8),"西暦をいれてください"); // ← 西暦としてふさわしくない値が引数に入ってくる


// ここに関数を作成しましょう
// function first(word){
//      let firstWord = word[0].toUpperCase();
//      if(firstWord === "A"){
//           return "「A」です。";
//      }else{
//           return `違います。「${firstWord}」です。`;
//      }
// }


// const word = "Little and often fills the purse."
// const word2 = "A picture is worth a thousand words."
// const word3 = "Better late than never."
// const word4 = "after a storm comes a calm."

// test(first(word), "違います。「L」です。");
// test(first(word2), "「A」です。");
// test(first(word3), "違います。「B」です。");
// test(first(word4), "「A」です。");


// ここに関数を定義しましょう
// function passwordChecker(pass){
//      return (pass.length >= 5 && pass.length <= 10) &&
//      (typeof pass !== "number") &&
//      (pass[pass.length-1] !== "O");
// }

// test(passwordChecker(12345),false);
// test(passwordChecker("12345"), true);
// test(passwordChecker("1234567890a"), false);
// test(passwordChecker("qwe"),false);
// test(passwordChecker("qwerty"),true);
// test(passwordChecker("tomato"),true);
// test(passwordChecker("TOMATO"),false);


// ここに関数を作成しましょう
// function goOut(season,weather){
//      if((season === "春" || season === "秋") && weather === "晴れ"){
//           return "遊園地";
//      }else if((season === "春" || season === "秋") && weather === "雨"){
//           return "屋内スポーツ施設";
//      }else if(season === "夏" && weather === "晴れ"){
//           return "海";
//      }else if(season === "夏" && weather === "雨"){
//           return "図書館";
//      }else if(season === "冬" && (weather === "晴れ" || weather === "雨")){
//           return "スキー場";
//      }else{
//           return "季節は春夏秋冬のどれか、天気は晴れか雨で入力してください"
//      }
// }


// test(goOut("春", "晴れ"), "遊園地");
// test(goOut("秋", "晴れ"), "遊園地");
// test(goOut("6月", "晴れ"), "季節は春夏秋冬のどれか、天気は晴れか雨で入力してください");
// test(goOut("春", "曇り"), "季節は春夏秋冬のどれか、天気は晴れか雨で入力してください");
// test(goOut("10月", "曇り"), "季節は春夏秋冬のどれか、天気は晴れか雨で入力してください");
// test(goOut("春", "雨"), "屋内スポーツ施設");
// test(goOut("夏", "晴れ"), "海");
// test(goOut("夏", "雨"), "図書館");
// test(goOut("冬", "晴れ"), "スキー場");
// test(goOut("冬", "雨"), "スキー場");
// test(goOut("冬", "曇り"), "季節は春夏秋冬のどれか、天気は晴れか雨で入力してください");

// let count = 0;
// function addOne() {
//      count += 1;
//      return count;
//    }
   
//    test(addOne(), 1);
//    test(addOne(), 2);
//    test(addOne(), 3);
//    test(addOne(), 4);
//    test(addOne(), 5);

// let result = "";
// function likeZenitsu(){
//     for(let i = 0; i < 5; i++){
//      result += "a";
//     }
//     return result + "!";
// }

// test(likeZenitsu(), "aaaaa!"); // aは5個
// test(likeZenitsu(), "aaaaaaaaaa!"); // aは10個
// test(likeZenitsu(), "aaaaaaaaaaaaaaa!"); // aは15個


// function likeGiyuu(){
//      let result = "";
//      for(let i = 0; i < 5; i++){
//          result += "."; 
//      }
//      return result;
// }

// test(likeGiyuu(), "....."); // .は5個
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");
// test(likeGiyuu(), ".....");

////////////////////////////////////
// ここに関数を定義しましょう
// function pushArray(array,pushWord){
//      array.push(pushWord);
//      return array;
// }
// const testArray = ["one", 2, "three", 4, "five"];
// test(pushArray(testArray, 6), ["one", 2, "three", 4, "five", 6]);
// test(pushArray(testArray, "seven"), ["one", 2, "three", 4, "five", 6, "seven"]);

// ここに関数を定義しましょう
// function arrayChanger(array,indexNum){
//      array[indexNum] = "changed";
//      return array;
// }

// const numArray = [1, 2, 3, 4, 5];
// test(arrayChanger(numArray, 2), [1, 2, "changed", 4, 5]);

// const catName = ["Tama", "Omochi", "Mikan"];
// test(arrayChanger(catName, 0), ["changed", "Omochi", "Mikan"]);

// const mixedArray = [1, "Tama", 2, "Omochi", 3, "Mikan", 4, "Kitty", 5];
// test(arrayChanger(mixedArray, 4), [1, "Tama", 2, "Omochi", "changed", "Mikan", 4, "Kitty", 5]);


// function getLyrics(start,end){
//      let array = myFavoriteThings.split(" ")
//      return array.slice(start,end);
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

const espanolNumber = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siste", "ocho"];

// function getBetweenNumber(start,end){
//       return espanolNumber.slice(start,end);
// }

// test(getBetweenNumber(2, 5), ["dos", "tres", "cuatro"]);
// test(getBetweenNumber(4, 6), ["cuatro", "cinco"]);
// test(getBetweenNumber(0, 0), []);
// test(getBetweenNumber(0, espanolNumber.length), ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siste', 'ocho'])


// function getRemovedNumber(bigin,count){
//      return espanolNumber.splice(bigin,count);
// }

// test(getRemovedNumber(0, 1), ["cero"]);
// test(getRemovedNumber(3, 3), ["cuatro", "cinco", "seis"]);
// test(getRemovedNumber(0, 0), []);
// test(getRemovedNumber(0, espanolNumber.length),["uno", "dos", "tres", "siste", "ocho"]);
// console.log(espanolNumber.length); // => ???


　// ここに関数を作りましょう
// function nameCheck(array,sweetsBland){
//      let index = array.indexOf(sweetsBland)
//      if(index === -1){
//           return "存在しません";
//      }else{
//           return `${index + 1}番目に存在します`;
//      }
// }

// const nameArray = ["kihachi", "godiva", "west", "wittamer"]

// test(nameCheck(nameArray, "louange"), "存在しません");
// test(nameCheck(nameArray, "west"), "3番目に存在します");
// test(nameCheck(nameArray, "kihachi"), "1番目に存在します");

// function getSweets(obj) {
//      return obj.sweets;
//    }
   
   
//    const testObj1 = {
//      userId: 1,
//      name: "yoshiki",
//      sweets : "ice"
//    }
   
//    const testObj2 = {
//      userId: 2,
//      name: "aki",
//      sweets: "bread"
//    }
   
//    const testObj3 = {
//      userId: 3,
//      name: "kazuma",
//      sweets: "candy"
//    }
   
   
//    test(getSweets(testObj1), "ice");
//    test(getSweets(testObj2), "bread");
//    test(getSweets(testObj3), "candy");


// function getValue(obj, key) {
//      return obj[key];
//    }
   
   
//    const object1 = {
//      a: 1,
//      b: false,
//      c: "text"
//    }
   
//    test(getValue(object1, "b"), false);
//    test(getValue(object1, "c"), "text");
   
   
//    const object2 = {
//      userId: 100,
//      user: "null",
//      mail: "gmail"
//    }
   
//    test(getValue(object2, "userId"), 100);
//    test(getValue(object2, "user"), "null");

// function isYey(obj, key) {
//      if(obj[key] === "Yey!"){
//           return "いいですね！";
//      }else{
//           return "残念でした";
//      }
//    }
   
   
//    const object3 = {
//      a: "Yey!",
//      b: "Yey!",
//      c: "Yey!",
//      d: true
//    }
   
//    test(isYey(object3, "a"), "いいですね！");
//    test(isYey(object3, "c"), "いいですね！");
//    test(isYey(object3, "b"), "いいですね！");
//    test(isYey(object3, "d"), "残念でした");
   
   
//    const object4 = {
//      month: 8,
//      season: "summer",
//      feel: "Yey!"
//    }

//    test(isYey(object4, "8"), "残念でした");
//    test(isYey(object4, "season"), "残念でした");
//    test(isYey(object4, "feel"), "いいですね！");


// function getFood(obj, array, index) {
//      let place = array[index];
//      return obj[place];
//    }
   
   
//    const japanObj = {
//      Yamanashi: "ほうとう",
//      Akita: "きりたんぽ",
//      Miyazaki: "チキン南蛮",
//      Okinawa: "ゴーヤチャンプルー"
//    };
   
//    const japanArray = ["Tokyo", "Okinawa", "Nara", "Yamanashi", "Fukuoka"];
   
//    test(getFood(japanObj, japanArray, 1), "ゴーヤチャンプルー");
//    test(getFood(japanObj, japanArray, 3), "ほうとう");
   
   
//    const worldObj = {
//      Korea: "キンパ",
//      Italy: "ピザ",
//      Spain: "パエリア",
//      Mexico: "タコス",
//      India: "カレー"
//    }
   
//    const worldArray = ["India", "America", "Korea", "Mexico", "Canada"];
   
//    test(getFood(worldObj, worldArray, 0), "カレー");
//    test(getFood(worldObj, worldArray, 2), "キンパ");

// ここに関数を定義しましょう
// function getTotal(num){
//   let result = 0;
//   for(let i = 0; i <= num; i++){
//      result += i;
//   }
//   return result;
// }


// test(getTotal(5), 15);
// test(getTotal(10), 55);
// test(getTotal(15), 120);


// ここに関数を定義しましょう★★
// function sumArray(array){
//   let result = 0;
//   for(let i = 0; i < array.length; i++){
//     result += array[i];
//   }
//   return result;
// }

// const toThree = [1, 2, 3];
// test(sumArray(toThree), 6);

// const toFive = [1, 2, 3, 4, 5];
// test(sumArray(toFive), 15);

// const toMany = [10, 20, 30, 100];
// test(sumArray(toMany), 160);


// ここに関数を定義しましょう
// function getByEven(num){
//   let result = [];
//   for(let i = 0; i < num; i++){
//     if(i % 2 === 0){
//       result.push(i);
//     }
//   }
//   return result;
// }

// test(getByEven(5), [0, 2, 4]);
// test(getByEven(10), [0, 2, 4, 6, 8]);
// test(getByEven(16), [0, 2, 4, 6, 8, 10, 12, 14]);


// ここに関数を定義しましょう
// function getDecrement(){
//   for(let i = 10; i > 0; i--){
//     console.log(i);
//   }
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
//2
//1

// ここに関数を定義しましょう
// function getSumArray(array1,array2){
//     let result = [];
//     for(let i = 0; i < array1.length; i++){
//       result.push(array1[i] + array2[i]);
//     }
//     return result;
// }

// test(getSumArray([1, 2, 3], [1, 2, 3]), [2, 4, 6]);
// test(getSumArray([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(getSumArray([100], [100]), [200]);
// test(getSumArray([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), [7, 7, 7, 7, 7, 7]);
// test(getSumArray([1, 2, 3, 4, 5, 6], [-6, -5, -4, -3, -2, -1]), [-5, -3, -1, 1, 3, 5]);


// ここに関数を定義しましょう
function fruitChecker(num){
  let result = [];
  for(let i = 1; i <= num; i++){
    if(i % 12 === 0){
       result.push("strawberry");
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