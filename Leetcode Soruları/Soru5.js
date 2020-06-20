/* Soru 5
Given two arrays, write a function to compute their intersection.
*/

var intersect = function(nums1, nums2) {
    var map1=new Map()
    
    for(var i=0;i<nums1.length;i++){
        if(!map1.has(nums1[i]))
            map1.set(nums1[i],1)
        else
            map1.set(nums1[i],map1.get(nums1[i])+1)
    }
    var result=[]
    for(var i=0;i<nums2.length;i++){
        if(map1.has(nums2[i]) && map1.get(nums2[i])>0)
            result.push(nums2[i]);
            map1.set(nums2[i],map1.get(nums2[i])-1)
    }
    return result
};