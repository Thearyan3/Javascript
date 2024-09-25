// var data = {
//     id : 1,
//     name : "abc", 
//     email : "abc@example.com",
//     mobile : 78884937383,
//     address : {
//         city : "delhi",
//         str : 5,
//     },
// };

// console.log(data.address.str);
// console.log(data.mobile);
// console.log(data.email);
// console.log(data.name);

let data = {
     id : 1,
     user : "abc", 
     email : "abc@abc.com",
     address : {
        country : "India",
        city : "delhi",

        residentialaddress : [
            "a/block str no. 5",
            {
                nationality : "Indian"
            },
            {
            language : [
                "english", "Hindi", {
                    hellomsg : "helloworld",
                }
            ],
        }
        ],

        age : "18",
        selectgender : ["male", "female"],
     },
};

// console.log(data.address.residentialaddress[2].language[1]);

// const a = 10;
// a = 20;

// Note -> const and let are block-scope variable and var is global-scope variable.
// in Var, variable can be declare again and again but not in let and const.
// in Var and let, value can be declare again and again but not in const.




// Types of operators: 

// 1. arithmetic -> (+,-,*,/,%)
// let a = 10;
// let b = 20;
// let result = a - b ;
// console.log(result);

// // 2. comparison -> (==,===,!==,<,<=,>,>=) (returns answer in boolean value true or false)
// let a = 10;
// let b = "10";
// let result = a != b;
// console.log(result);

// 3. logical -> (&& = and,|| = or) (returns answer in boolean value means true or false)
// Note - In &&, value will be return true only when both conditions are true.
//        In ||, value will be return true even when single condition is true.
// let a = 10;
// let b = 100;
// let c = 50;
// let d = 50;
// let result = a === b && c >= d ;
// console.log(result);

// 4. bitwise
// 5. assignment -> ()
// let a = 10;
// a ++;
// console.log(a);

// 6. increment decrement

// 7. Ternery operator
// let d = 10;
// let result = d ? d: "no value found";
// console.log(result);

