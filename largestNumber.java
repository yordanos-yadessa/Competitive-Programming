class Solution {
     public String largestNumber(int[] nums) {
        String arr[] = new String[nums.length];
			for (int i = 0; i < arr.length; i++)
				arr[i] = String.valueOf(nums[i]);
			Arrays.sort(arr, (a,b) -> (b+a).compareTo(a+b));
			
			if (arr[0].equals("0")) return "0";
			
			StringBuilder ans = new StringBuilder();
			
			for (String str : arr)
				ans.append(str);

			return ans.toString();
    }
}
