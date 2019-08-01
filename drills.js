'use strict';

// #1 understanding merge sort

// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49,
// 39, 27, 43, 34, 46, 40

// [ 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 ]  // 16 elements

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 1 ) left side [21, 1, 26, 45, 29, 28, 2, 9 ]    right side:  [16, 49, 39, 27, 43, 34, 46, 40 ]   (1)
// merge sort left side
//     2 ) left side [21, 1, 26, 45]   right side: [ 29, 28, 2, 9 ] (2)   -> continues...
//          merge sort of left side  ,  returns -> [ 1, 21, 26, 45]
//          3) left side [21, 1]     right side: [26, 45]  ,  
//               merge sort of left side returns [1, 21] (3)      , merge sort of right side returns [26, 45] ()
//                 4) left side [21]     right side: [1]    merge returns: [1, 21]   
//                 merge sort of left returns [21]  (4)       merge sort of right returns [1] (5)      left side [26] , right side [45]   , return merge [26, 45] 
//             ]                                                                                          merge sort of left returns [26]  (7)   , merge sort of right returns [45] (8)   
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// result of 16 recursive calls is completely sorted array  
// What are the first 2 lists to be merged?
// 1 ) left side [21, 1, 26, 45, 29, 28, 2, 9 ]    right side:  [16, 49, 39, 27, 43, 34, 46, 40 ]
// Which two lists would be merged on the 7th merge?
// only sorted left half (only elements 0-7 compared with each other)



// 2) After the first partition step has been completed, 
// the contents of the array is in the following order: 3 9 1 14 17 24 22 20. 

// The pivot could have been 17, but could not have been 14 -> FALSE
// The pivot could have been either 14 or 17 -> TRUE
// Neither 14 nor 17 could have been the pivot -> FALSE
// The pivot could have been 14, but could not have been 17 -> FALSE

// 2B)
// the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 

// show the resulting list after the second partitioning according to the quicksort algorithm.
// When using the last item on the list as a pivot
// 1st partion:  10, 17, 13, 15, 19, 14, 3, 16, 9, 12  
// 2nd partion: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12

// When using the first item on the list as a pivot
// Original list: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// 1st partition: 14, 17, 13, 15, 19, 10, 3[i], 12, 9[j], 16
// 2nd partition: 14, 17, 13, 15[i], 9, 10, 3, 12[j], 19, 16
// 3rd partition: 14, 17, 13, 12, 9, 10, 3, 15, 19, 16
