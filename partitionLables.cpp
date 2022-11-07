class Solution {
public:
    vector<int> partitionLabels(string s) {
               map<char,int> index;
        for(int i=0; i<s.size(); i++) {
            index[s[i]]=i;
        }
        vector<int>res;
        int pivot=0;
        int last_index=0;
        for(int curr=0; curr<s.size(); curr++) {
            last_index = max(last_index, index[s[curr]]);
            if(curr == last_index) {
                res.push_back(last_index-pivot+1);
                pivot=curr+1;
            }
        }
        return res;
     
    }
};
