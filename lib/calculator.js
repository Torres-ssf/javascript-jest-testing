
const calculator = (() => {
     const add = (...nums) =>{
         return nums.reduce((a,b)=>{
             return a + b;

         })
     };

    const subtract = (...nums) =>{
        return nums.reduce((a,b)=>{
            return a - b
        })
    };

    const multiply = (...nums) =>{
        return nums.reduce((a,b)=>{
            return a * b
        })
    };

    const divide = (...nums) =>{
        return nums.reduce((a,b)=>{
            return a / b
        })
    };





    return {
         add,
         subtract,
         multiply,
         divide

     }

})();

export default calculator


