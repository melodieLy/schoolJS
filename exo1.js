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
var aws;

function deepClone(obj) {
    switch (typeof obj) {
        case "object":
            if(obj === null) {
                result = null;
            } else {
                switch (toString.call(obj)) {
                    case "[object Array]":
                        result = obj.map(x => x);
                        break;

                    case "[object Date]":
                        result = obj.map(x => x);
                        break;
                
                    default:
                        break;
                }
            }
            break;    
            
        default:
            console.log("Not found");
            break;
    }
    return result;
}

const arr = [];
DeepClone(arr);