https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

    function maxTriSum(numbers){
        let max1 = Math.max(...numbers);
        let max2 = Math.min(...numbers);
        let max3 = Math.min(...numbers);
        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] > max2 && numbers[i] !== max1)
                max2 = numbers[i];
        }
        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] > max3 && numbers[i] !== max2 && numbers[i] !== max1 )
                max3 = numbers[i];
        }
        return max1 + max2 + max3;
    }