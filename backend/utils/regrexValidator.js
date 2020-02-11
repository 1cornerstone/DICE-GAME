
let pattern = '';
/*
* Returns a Boolean value that indicates whether or not match the pattern.
* @param string
*/
const noAlphanumeric = (text) =>{

    if (typeof text !== "string") return new TypeError("parameter must be type of string");
    pattern = /^([a-z\s])+$/i;
    return pattern.test(text)
};

/*
* Returns a Boolean value that indicates whether or not match the pattern.
* @param string
*/
const withAlphanumeric = (text) =>{

    if (typeof text !== "string") return new TypeError("parameter must be type of string");
    pattern = /^([a-z\s\d/$])+$/i;
    return pattern.test(text)
};

/*
* Returns a Boolean value that indicates whether or not match the pattern.
* @param string
*/

const isEmail = (text)=>{

    if (typeof text !== "string") return new TypeError("parameter must be type of string");
    pattern = /^([a-z\d])+@([a-z])+.com$/i;
    return pattern.test(text)
};

/*
* validate Nigeria phone number
* Returns a Boolean value that indicates whether or not match the pattern.
* @param string
*/
const isPhone=(text )=>{

    if (typeof text !== "string") return new TypeError("parameter must be type of string");

    pattern = /^0(7|8|9)(0|1)([\d]{8})$/i;
    return pattern.test(text)
};

module.exports ={noAlphanumeric,withAlphanumeric,isEmail,isPhone};
