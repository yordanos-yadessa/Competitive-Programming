/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
           var temp=-1;
    for(var i=0;i<head.length;i++){
        if(temp==head[i]){
             head.splice(i,2);
        }
        if(head[i]==head[i+1]){
            head.splice(i,2);
            temp=head[i];
        }
    }
    return head;

    
};
