
var myData = [
    1, 
    "A", 
    { "id": 1 }, 
    Date.now, 
    [
        "coucou", 
        { "id": 3 }, 
        /**
         * @param {any} txt
         */
        function a(txt) { 
            console.log(txt); 
        }
    ]
];

/**
 * @param {any} item
 */
function clone(item) {
    if (!item) { return item; } // null, undefined values check

    switch (typeof item) {
        case typeof Object:
            return new Object(item);

        case typeof Array:
            /** @type {any[] | never[]} */
            var myarray = [];
            item.forEach(element => {
                myarray.push(clone(element));
            });
            return myarray;

        case typeof Date:
            var strDate = item.toString();
            return new Date(strDate);

        case typeof Function:
            return new Function(item , item.arguments);

        default:
            return item;
    }
}

myData.forEach(element =>  clone(element));