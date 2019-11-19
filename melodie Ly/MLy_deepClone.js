// EXERCICE: Make a DeepClone Function (use recursion) for 
// - array
// - object
// - date 
// - function
/*When performing a deep copy, those external objects are copied as well, so the new, cloned object is completely independent from the old one.*/

/*
- Verify Type of ToClone 
    => TypeOf Wait for Object(array), string, date(String) AND function
- Define of to know the type :
    =>  varName.constructor
- Depending of the precedent result, find a way to deepclone !
    => Array : const map1 = array1.map(x => x); CLEAR
    => objects : https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
        const copied = { ...original }
    => Date: https://stackoverflow.com/questions/1090815/how-to-clone-a-date-object;
    => Function : https://flaviocopes.com/how-to-clone-javascript-object/ 
        
*/

var myData = [
    1, 
    "A", 
    { "id": 1 }, 
    Date.now, 
    [
        "coucou", 
        { "id": 3 }, 
       
        function a(txt) { 
            console.log(txt); 
        }
    ]
];

function deepClone(obj) {
    result = null;
    switch (toString.call(obj)) {
        case "[object Array]":
            result = obj.map(x => x);
            break;

        case "[object Date]":
            result = new Date(obj.getTime());
            break;
    
        case "[object Object]":
            result = {...obj};
        break;

        default:
            result = obj;
        break;
    }
    return result;
}

deepClone(myData);