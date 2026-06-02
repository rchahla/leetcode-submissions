class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let encoded='';

        for (let item of strs) encoded += item.length + "#" + item;

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        // str is the encoded string
        // step 1 is decode it and push the words onto an array

        let arr = [];

        let i=0;

        while (i<str.length){
            // Grab the number from the encoded string

            let j=i;

            while (str[j] !=='#') j++; //So now J is equal to #

            let SliceNum = Number(str.slice(i,j));

            // So now we have the number we need to extract the word now

            let word= str.slice(j+1, j+1+SliceNum);

            arr.push(word);

            i=j+1+SliceNum;


        }

        return arr;

    }
}
