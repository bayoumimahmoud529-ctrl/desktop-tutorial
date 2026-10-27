// ===== المحاضرة 2: الجديد في جافا سكربت =====

// تشغيل الملف من الترمنال
// node app.js

// ---------- المتغير ----------
// نعرف المتغير مرة واحدة فقط بهذه الكلمة، وبعدها نغير قيمته بالاسم فقط.
// let
let age = 38;
age = 50;
console.log(age);                  // 50

// ---------- الثابت ----------
// قيمته لا تتغير، ولازم نعطيه قيمة وقت التعريف.
// const
const email = "ahmed@gmail.com";
console.log(email);                // ahmed@gmail.com
// email = "x@gmail.com";          // TypeError: Assignment to constant variable.

// ---------- تعريف بدون قيمة ----------
// المتغير يكون موجود وقيمته غير معرّفة.
let day;
console.log(day);                  // undefined

// ---------- تكرار التعريف ----------
// إعادة تعريف نفس الاسم تعطي خطأ.
// let age = 60;                   // SyntaxError: Identifier 'age' has already been declared

// ---------- قواعد الاسم ----------
// يسمح بالشرطة السفلية وعلامة الدولار في البداية.
let _score = 10;
let $price = 5;
console.log(_score, $price);       // 10 5

// ---------- طريقة كتابة الاسم ----------
// الكلمة الأولى بحرف صغير، وكل كلمة بعدها تبدأ بحرف كبير.
// camelCase
let firstName = "Ali";
console.log(firstName);            // Ali

// ---------- القيمة المنطقية ----------
// تكتب بحروف صغيرة.
let isMarried = true;
console.log(isMarried);            // true

// ---------- معرفة النوع ----------
// يشبه الدالة المعروفة في بايثون، لكن بدون أقواس.
// typeof
let y = 20;
console.log(typeof y);             // number
y = "Ali";
console.log(typeof y);             // string