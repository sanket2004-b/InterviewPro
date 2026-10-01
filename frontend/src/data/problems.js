export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int> nums, int target) {
    // Write your solution here
    
    return {};
}

void printVector(const vector<int>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]" << endl;
}

int main() {
    printVector(twoSum({2, 7, 11, 15}, 9)); // Expected: [0, 1]
    printVector(twoSum({3, 2, 4}, 6)); // Expected: [1, 2]
    printVector(twoSum({3, 3}, 6)); // Expected: [0, 1]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

void printVector(const vector<char>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]" << endl;
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    printVector(test1); // Expected: [o, l, l, e, h]
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    printVector(test2); // Expected: [h, a, n, n, a, H]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      cpp: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << isPalindrome("race a car") << endl; // Expected: false
    cout << isPalindrome(" ") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int> nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << maxSubArray({-2,1,-3,4,-1,2,1,-5,4}) << endl; // Expected: 6
    cout << maxSubArray({1}) << endl; // Expected: 1
    cout << maxSubArray({5,4,-1,7,8}) << endl; // Expected: 23
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(vector<int> height) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << maxArea({1,8,6,2,5,4,8,3,7}) << endl; // Expected: 49
    cout << maxArea({1,1}) << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      cpp: "49\n1",
    },
  },
"3sum": {
  id: "3sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums, return all the triplets such that nums[i] + nums[j] + nums[k] == 0.",
  },
  examples: [
    { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function threeSum(nums) {
  // Write your solution here
}

console.log(threeSum([-1,0,1,2,-1,-4]));`,

    python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int> nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> result = threeSum({-1,0,1,2,-1,-4});
    cout << "[";
    for (size_t i = 0; i < result.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "[";
        for (size_t j = 0; j < result[i].size(); j++) {
            if (j > 0) cout << ", ";
            cout << result[i][j];
        }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`
  },
},
"longest-substring-without-repeating": {
  id: "longest-substring-without-repeating",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Find the length of the longest substring without repeating characters.",
  },
  examples: [
    { input: 's = "abcabcbb"', output: "3" }
  ],
  constraints: ["1 ≤ s.length ≤ 10⁵", "-10⁴ ≤ s[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb"));`,

    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl;
    return 0;
}`
  },
},

"product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array • Prefix",
  description: {
    text: "Return an array such that answer[i] is equal to the product of all elements except nums[i].",
  },
  examples: [
    { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

console.log(productExceptSelf([1,2,3,4]));`,

    python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> productExceptSelf(vector<int> nums) {
    // Write your solution here
    return vector<int>(nums.size());
}

int main() {
    vector<int> result = productExceptSelf({1,2,3,4});
    cout << "[";
    for (size_t i = 0; i < result.size(); i++) {
        if (i > 0) cout << ", ";
        cout << result[i];
    }
    cout << "]" << endl;
    return 0;
}`
  },
},
"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  description: {
    text: "Determine if the input string containing brackets is valid.",
  },
  examples: [
    { input: 's = "()[]{}"', output: "true" }
  ],
  constraints: ["1 ≤ s.length ≤ 10⁵", "-10⁴ ≤ s[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function isValid(s) {
  // Write your solution here
}

console.log(isValid("()[]{}"));`,

    python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()[]{}"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isValid("()[]{}") << endl;
    return 0;
}`
  },
},

"search-in-rotated-sorted-array": {
  id: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  description: {
    text: "Given a rotated sorted array and target, return index. If not found return -1.",
  },
  examples: [
    { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function search(nums, target) {
  // Write your solution here
}

console.log(search([4,5,6,7,0,1,2], 0));`,

    python: `def search(nums, target):
    # Write your solution here
    pass

print(search([4,5,6,7,0,1,2], 0))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int> nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    cout << search({4,5,6,7,0,1,2}, 0) << endl;
    return 0;
}`
  },
},
"merge-intervals": {
  id: "merge-intervals",
  title: "Merge Intervals",
  difficulty: "Medium",
  category: "Array • Sorting",
  description: {
    text: "Merge all overlapping intervals.",
  },
  examples: [
    { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function merge(intervals) {
  // Write your solution here
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));`,

    python: `def merge(intervals):
    # Write your solution here
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> merge(vector<vector<int>> intervals) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> intervals = {{1,3},{2,6},{8,10},{15,18}};
    vector<vector<int>> result = merge(intervals);
    cout << "[";
    for (size_t i = 0; i < result.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "[";
        for (size_t j = 0; j < result[i].size(); j++) {
            if (j > 0) cout << ", ";
            cout << result[i][j];
        }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`
  },
},
"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Array • Two Pointers",
  description: {
    text: "Given n non-negative integers representing elevation map, compute how much water it can trap after raining."
  },
  examples: [
    { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }
  ],
  constraints: ["1 ≤ height.length ≤ 2 * 10^4", "0 ≤ height[i] ≤ 10^5"],

  starterCode: {
    javascript: `function trap(height) {
  // Write your solution here
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));`,

    python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int trap(vector<int> height) {
    // Write your solution here
    return 0;
}

int main() {
    cout << trap({0,1,0,2,1,0,1,3,2,1,2,1}) << endl;
    return 0;
}`
  },
},
"kth-largest-element": {
  id: "kth-largest-element",
  title: "Kth Largest Element in an Array",
  difficulty: "Medium",
  category: "Heap • Quickselect",
  description: {
    text: "Given an integer array nums and integer k, return the kth largest element."
  },
  examples: [
    { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" }
  ],
  constraints: ["1 ≤ k ≤ nums.length ≤ 10^5"],
  starterCode: {
    javascript: `function findKthLargest(nums, k) {
  // Write your solution here
}

console.log(findKthLargest([3,2,1,5,6,4], 2));`,

    python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

print(findKthLargest([3,2,1,5,6,4], 2))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int findKthLargest(vector<int> nums, int k) {
    // Write your solution here
    return 0;
}

int main() {
    cout << findKthLargest({3,2,1,5,6,4}, 2) << endl;
    return 0;
}`
  },
},
"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "HashMap • String",
  description: {
    text: "Given an array of strings strs, group the anagrams together."
  },
  examples: [
    { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }
  ],
  constraints: ["1 ≤ strs.length ≤ 10^4"],
  starterCode: {
    javascript: `function groupAnagrams(strs) {
  // Write your solution here
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));`,

    python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string> strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<string>> result = groupAnagrams({"eat","tea","tan","ate","nat","bat"});
    cout << "[";
    for (size_t i = 0; i < result.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "[";
        for (size_t j = 0; j < result[i].size(); j++) {
            if (j > 0) cout << ", ";
            cout << result[i][j];
        }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`
  },
},
"coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: {
    text: "Given coins of different denominations and total amount, return minimum coins needed. If impossible return -1."
  },
  examples: [
    { input: "coins = [1,2,5], amount = 11", output: "3" }
  ],
  constraints: ["1 ≤ coins.length ≤ 12", "0 ≤ amount ≤ 10^4"],
  starterCode: {
    javascript: `function coinChange(coins, amount) {
  // Write your solution here
}

console.log(coinChange([1,2,5], 11));`,

    python: `def coinChange(coins, amount):
    # Write your solution here
    pass

print(coinChange([1,2,5], 11))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int coinChange(vector<int> coins, int amount) {
    // Write your solution here
    return -1;
}

int main() {
    cout << coinChange({1,2,5}, 11) << endl;
    return 0;
}`
  },
},

"word-break": {
  id: "word-break",
  title: "Word Break",
  difficulty: "Medium",
  category: "Dynamic Programming • String",
  description: {
    text: "Given a string s and dictionary wordDict, return true if s can be segmented into space-separated words."
  },
  examples: [
    { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }
  ],
  constraints: ["1 ≤ s.length ≤ 300"],
  starterCode: {
    javascript: `function wordBreak(s, wordDict) {
  // Write your solution here
}

console.log(wordBreak("leetcode", ["leet","code"]));`,

    python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

print(wordBreak("leetcode", ["leet","code"]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool wordBreak(string s, vector<string> wordDict) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << wordBreak("leetcode", {"leet","code"}) << endl;
    return 0;
}`
  },
},
"subarray-sum-equals-k": {
  id: "subarray-sum-equals-k",
  title: "Subarray Sum Equals K",
  difficulty: "Medium",
  category: "Array • Prefix Sum • HashMap",
  description: {
    text: "Given an integer array nums and an integer k, return the total number of continuous subarrays whose sum equals k."
  },
  constraints: [
    "1 <= nums.length <= 2 * 10^4",
    "-1000 <= nums[i] <= 1000",
    "-10^7 <= k <= 10^7"
  ],
  examples: [
    { input: "nums = [1,1,1], k = 2", output: "2" }
  ],
  starterCode: {
    javascript: `function subarraySum(nums, k) {
  // Write your solution here
}

console.log(subarraySum([1,1,1], 2));`,

    python: `def subarraySum(nums, k):
    # Write your solution here
    pass

print(subarraySum([1,1,1], 2))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int subarraySum(vector<int> nums, int k) {
    // Write your solution here
    return 0;
}

int main() {
    cout << subarraySum({1,1,1}, 2) << endl;
    return 0;
}`
  },
},
"linked-list-cycle": {
  id: "linked-list-cycle",
  title: "Detect Cycle in Linked List",
  difficulty: "Easy",
  category: "Linked List • Two Pointers",
  description: {
    text: "Given the head of a linked list, determine if the linked list has a cycle in it."
  },
  constraints: [
    "The number of nodes in the list is in the range [0, 10^4]",
    "-10^5 <= Node.val <= 10^5",
    "pos is -1 or a valid index in the linked-list"
  ],
  examples: [
    { input: "head = [3,2,0,-4], pos = 1", output: "true" }
  ],
  starterCode: {
    javascript: `function hasCycle(head) {
  // Write your solution here
}

console.log(hasCycle(null));`,

    python: `def hasCycle(head):
    # Write your solution here
    pass

print(hasCycle(None))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode* head) {
    // Write your solution here
    return false;
}`
  },
},

"clone-graph": {
  id: "clone-graph",
  title: "Clone Graph",
  difficulty: "Medium",
  category: "Graph • DFS • BFS",
  description: {
    text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph."
  },
  constraints: [
    "The number of nodes in the graph is in the range [0, 100]",
    "1 <= Node.val <= 100",
    "No duplicate edges and no self-loops",
    "The graph is connected"
  ],
  examples: [
    { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "Cloned Graph" }
  ],
  starterCode: {
    javascript: `function cloneGraph(node) {
  // Write your solution here
}

console.log(cloneGraph(null));`,

    python: `def cloneGraph(node):
    # Write your solution here
    pass

print(cloneGraph(None))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
};

Node* cloneGraph(Node* node) {
    // Write your solution here
    return nullptr;
}`
  },
},

"number-of-islands": {
  id: "number-of-islands",
  title: "Number of Islands",
  difficulty: "Medium",
  category: "Graph • DFS • BFS • Matrix",
  description: {
    text: "Given an m x n 2D binary grid grid which represents '1' (land) and '0' (water), return the number of islands."
  },
  constraints: [
    "m == grid.length",
    "n == grid[i].length",
    "1 <= m, n <= 300",
    "grid[i][j] is '0' or '1'"
  ],
  examples: [
    { input: "grid = [['1','1','0'],['1','0','0'],['0','0','1']]", output: "2" }
  ],
  starterCode: {
    javascript: `function numIslands(grid) {
  // Write your solution here
}

console.log(numIslands([['1','1','0'],['1','0','0'],['0','0','1']]));`,

    python: `def numIslands(grid):
    # Write your solution here
    pass

print(numIslands([['1','1','0'],['1','0','0'],['0','0','1']]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    return 0;
}`
  },
},
"binary-tree-level-order": {
  id: "binary-tree-level-order",
  title: "Binary Tree Level Order Traversal",
  difficulty: "Medium",
  category: "Tree • BFS",
  description: {
    text: "Given the root of a binary tree, return the level order traversal of its nodes' values."
  },
  constraints: [
    "The number of nodes in the tree is in the range [0, 2000]",
    "-1000 <= Node.val <= 1000"
  ],
  examples: [
    { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }
  ],
  starterCode: {
    javascript: `function levelOrder(root) {
  // Write your solution here
}

console.log(levelOrder(null));`,

    python: `def levelOrder(root):
    # Write your solution here
    pass

print(levelOrder(None))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    // Write your solution here
    return {};
}`
  },
},
"longest-increasing-subsequence": {
  id: "longest-increasing-subsequence",
  title: "Longest Increasing Subsequence",
  difficulty: "Medium",
  category: "Dynamic Programming • Binary Search",
  description: {
    text: "Given an integer array nums, return the length of the longest strictly increasing subsequence."
  },
  examples: [
    { input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }
  ],
  constraints: [
    "1 <= nums.length <= 2500",
    "-10^4 <= nums[i] <= 10^4"
  ],
  starterCode: {
    javascript: `function lengthOfLIS(nums) {
  // Write your solution here
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));`,

    python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

print(lengthOfLIS([10,9,2,5,3,7,101,18]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLIS(vector<int> nums) {
    // Write your solution here
    return 0;
}`
  },
},

"valid-sudoku": {
  id: "valid-sudoku",
  title: "Valid Sudoku",
  difficulty: "Medium",
  category: "Hashing • Matrix",
  description: {
    text: "Determine if a 9x9 Sudoku board is valid."
  },
  examples: [
    { input: "Valid partially filled 9x9 board", output: "true" }
  ],
  constraints: [
    "board.length == 9",
    "board[i].length == 9",
    "Each cell is digit 1-9 or '.'"
  ],
  starterCode: {
    javascript: `function isValidSudoku(board) {
  // Write your solution here
}

console.log(isValidSudoku([]));`,

    python: `def isValidSudoku(board):
    # Write your solution here
    pass

print(isValidSudoku([]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    // Write your solution here
    return true;
}`
  },
},
"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: {
    text: "You can climb 1 or 2 steps. Return number of distinct ways to reach the top."
  },
  examples: [
    { input: "n = 3", output: "3" }
  ],
  constraints: [
    "1 <= n <= 45"
  ],
  starterCode: {
    javascript: `function climbStairs(n) {
  // Write your solution here
}

console.log(climbStairs(3));`,

    python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(3))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}`
  },
},
"generate-parentheses": {
  id: "generate-parentheses",
  title: "Generate Parentheses",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Generate all combinations of well-formed parentheses."
  },
  examples: [
    { input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' }
  ],
  constraints: [
    "1 <= n <= 8"
  ],
  starterCode: {
    javascript: `function generateParenthesis(n) {
  // Write your solution here
}

console.log(generateParenthesis(3));`,

    python: `def generateParenthesis(n):
    # Write your solution here
    pass

print(generateParenthesis(3))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<string> generateParenthesis(int n) {
    // Write your solution here
    return {};
}`
  },
},
"best-time-to-buy-sell-stock": {
  id: "best-time-to-buy-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Greedy",
  description: {
    text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Return the maximum profit you can achieve. If no profit is possible, return 0."
  },
  examples: [
    { input: "prices = [7,1,5,3,6,4]", output: "5" }
  ],
  constraints: [
    "1 <= prices.length <= 10^5",
    "0 <= prices[i] <= 10^4"
  ],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4]));`,

    python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int> prices) {
    // Write your solution here
    return 0;
}`
  },
},
"minimum-path-sum": {
  id: "minimum-path-sum",
  title: "Minimum Path Sum",
  difficulty: "Medium",
  category: "Dynamic Programming • Matrix",
  description: {
    text: "Given a m x n grid filled with non-negative numbers, find a path from top-left to bottom-right which minimizes the sum of all numbers along its path. You can only move right or down."
  },
  examples: [
    { input: "grid = [[1,3,1],[1,5,1],[4,2,1]]", output: "7" }
  ],
  constraints: [
    "m == grid.length",
    "n == grid[i].length",
    "1 <= m, n <= 200",
    "0 <= grid[i][j] <= 100"
  ],
  starterCode: {
    javascript: `function minPathSum(grid) {
  // Write your solution here
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));`,

    python: `def minPathSum(grid):
    # Write your solution here
    pass

print(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int minPathSum(vector<vector<int>>& grid) {
    // Write your solution here
    return 0;
}`
  },
},

"decode-ways": {
  id: "decode-ways",
  title: "Decode Ways",
  difficulty: "Medium",
  category: "Dynamic Programming • String",
  description: {
    text: "A message containing letters from A-Z can be encoded into numbers using mapping 'A'->1 to 'Z'->26. Given a string s, return the total number of ways to decode it."
  },
  examples: [
    { input: 's = "226"', output: "3" }
  ],
  constraints: [
    "1 <= s.length <= 100",
    "s contains only digits and may contain leading zeros"
  ],
  starterCode: {
    javascript: `function numDecodings(s) {
  // Write your solution here
}

console.log(numDecodings("226"));`,

    python: `def numDecodings(s):
    # Write your solution here
    pass

print(numDecodings("226"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int numDecodings(string s) {
    // Write your solution here
    return 0;
}`
  },
},
"flood-fill": {
  id: "flood-fill",
  title: "Flood Fill",
  difficulty: "Easy",
  category: "DFS • BFS • Matrix",
  description: {
    text: "Given an image represented by a 2D array, perform a flood fill starting from (sr, sc) replacing the color with newColor."
  },
  examples: [
    { input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2", output: "[[2,2,2],[2,2,0],[2,0,1]]" }
  ],
  constraints: [
    "1 <= image.length, image[0].length <= 50",
    "0 <= image[i][j], newColor < 2^16",
    "0 <= sr < image.length",
    "0 <= sc < image[0].length"
  ],
  starterCode: {
    javascript: `function floodFill(image, sr, sc, newColor) {
  // Write your solution here
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2));`,

    python: `def floodFill(image, sr, sc, newColor):
    # Write your solution here
    pass

print(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
    // Write your solution here
    return image;
}`
  },
},
"gas-station": {
  id: "gas-station",
  title: "Gas Station",
  difficulty: "Medium",
  category: "Greedy • Array",
  description: {
    text: "There are n gas stations in a circle. If you can travel around the circuit once in the clockwise direction, return the starting gas station's index. Otherwise return -1."
  },
  examples: [
    { input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" }
  ],
  constraints: [
    "1 <= gas.length == cost.length <= 10^5",
    "0 <= gas[i], cost[i] <= 10^4"
  ],
  
  starterCode: {
    javascript: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));`,

    python: `def canCompleteCircuit(gas, cost):
    # Write your solution here
    pass

print(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    // Write your solution here
    return -1;
}`
  },
},

"permutations": {
  id: "permutations",
  title: "Permutations",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Given an array nums of distinct integers, return all possible permutations."
  },
  examples: [
    { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
  ],
  constraints: [
    "1 <= nums.length <= 6",
    "-10 <= nums[i] <= 10",
    "All integers are unique"
  ],
  
  starterCode: {
    javascript: `function permute(nums) {
  // Write your solution here
}

console.log(permute([1,2,3]));`,

    python: `def permute(nums):
    # Write your solution here
    pass

print(permute([1,2,3]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> permute(vector<int>& nums) {
    // Write your solution here
    return {};
}`
  },
},

"implement-trie": {
  id: "implement-trie",
  title: "Implement Trie (Prefix Tree)",
  difficulty: "Medium",
  category: "Trie • Design",
  description: {
    text: "Implement a trie with insert, search, and startsWith methods."
  },
  examples: [
    { input: 'insert("apple"), search("apple")', output: "true" }
  ],
  constraints: [
    "1 <= word.length, prefix.length <= 2000",
    "word and prefix consist of lowercase English letters",
    "At most 3 * 10^4 calls will be made"
  ],

  starterCode: {
    javascript: `class Trie {
  constructor() {
    // Initialize data structure
  }

  insert(word) {
    // Write your solution here
  }

  search(word) {
    // Write your solution here
  }

  startsWith(prefix) {
    // Write your solution here
  }
}`,

    python: `class Trie:

    def __init__(self):
        # Initialize data structure
        pass

    def insert(self, word):
        pass

    def search(self, word):
        pass

    def startsWith(self, prefix):
        pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

class Trie {
public:
    Trie() {
        // Initialize data structure
    }

    void insert(string word) {
        // Write your solution here
    }

    bool search(string word) {
        return false;
    }

    bool startsWith(string prefix) {
        return false;
    }
};`
  },
},
"house-robber": {
  id: "house-robber",
  title: "House Robber",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: {
    text: "You cannot rob two adjacent houses. Return the maximum amount of money you can rob."
  },
  constraints: [
    "1 <= nums.length <= 100",
    "0 <= nums[i] <= 400"
  ],
  examples: [
    { input: "nums = [2,7,9,3,1]", output: "12" }
  ],
  starterCode: {
    javascript: `function rob(nums) {
  // Write your solution here
}

console.log(rob([2,7,9,3,1]));`,

    python: `def rob(nums):
    # Write your solution here
    pass

print(rob([2,7,9,3,1]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}`
  },
},

"find-all-anagrams": {
  id: "find-all-anagrams",
  title: "Find All Anagrams in a String",
  difficulty: "Medium",
  category: "Sliding Window • HashMap",
  description: {
    text: "Given two strings s and p, return all start indices of p's anagrams in s."
  },
  constraints: [
    "1 <= s.length, p.length <= 3 * 10^4",
    "s and p consist of lowercase English letters"
  ],
  examples: [
    { input: 's = "cbaebabacd", p = "abc"', output: "[0,6]" }
  ],
  starterCode: {
    javascript: `function findAnagrams(s, p) {
  // Write your solution here
}

console.log(findAnagrams("cbaebabacd", "abc"));`,

    python: `def findAnagrams(s, p):
    # Write your solution here
    pass

print(findAnagrams("cbaebabacd", "abc"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> findAnagrams(string s, string p) {
    // Write your solution here
    return {};
}`
  },
},

"single-number": {
  id: "single-number",
  title: "Single Number",
  difficulty: "Easy",
  category: "Bit Manipulation",
  description: {
    text: "Every element appears twice except for one. Find that single one."
  },
  constraints: [
    "1 <= nums.length <= 3 * 10^4",
    "-3 * 10^4 <= nums[i] <= 3 * 10^4"
  ],
  examples: [
    { input: "nums = [4,1,2,1,2]", output: "4" }
  ],
  starterCode: {
    javascript: `function singleNumber(nums) {
  // Write your solution here
}

console.log(singleNumber([4,1,2,1,2]));`,

    python: `def singleNumber(nums):
    # Write your solution here
    pass

print(singleNumber([4,1,2,1,2]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}`
  },
},

"course-schedule": {
  id: "course-schedule",
  title: "Course Schedule",
  difficulty: "Medium",
  category: "Graph • Topological Sort",
  description: {
    text: "Return true if you can finish all courses given prerequisite pairs."
  },
  constraints: [
    "1 <= numCourses <= 2000",
    "0 <= prerequisites.length <= 5000"
  ],
  examples: [
    { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" }
  ],
  starterCode: {
    javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
}

console.log(canFinish(2, [[1,0]]));`,

    python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

print(canFinish(2, [[1,0]]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    return true;
}`
  },
},

"majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array • Boyer-Moore",
  description: {
    text: "Find the element that appears more than ⌊n/2⌋ times."
  },
  constraints: [
    "1 <= nums.length <= 5 * 10^4",
    "-10^9 <= nums[i] <= 10^9"
  ],
  examples: [
    { input: "nums = [3,2,3]", output: "3" }
  ],
  starterCode: {
    javascript: `function majorityElement(nums) {
  // Write your solution here
}

console.log(majorityElement([3,2,3]));`,

    python: `def majorityElement(nums):
    # Write your solution here
    pass

print(majorityElement([3,2,3]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    return 0;
}`
  },
},

"median-of-two-sorted-arrays": {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search • Divide & Conquer",
  description: {
    text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity must be O(log(m+n))."
  },
  examples: [
    { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" }
  ],
  constraints: [
    "0 <= m, n <= 1000",
    "1 <= m + n <= 2000",
    "-10^6 <= nums1[i], nums2[i] <= 10^6"
  ],
  starterCode: {
    javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

console.log(findMedianSortedArrays([1,3],[2]));`,

    python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1,3],[2]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}`
  },
},
"merge-k-sorted-lists": {
  id: "merge-k-sorted-lists",
  title: "Merge K Sorted Lists",
  difficulty: "Hard",
  category: "Heap • Linked List",
  description: {
    text: "You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list."
  },
  examples: [
    { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }
  ],
  constraints: [
    "k == lists.length",
    "0 <= k <= 10^4",
    "0 <= total nodes <= 10^4",
    "-10^4 <= Node.val <= 10^4"
  ],
  starterCode: {
    javascript: `function mergeKLists(lists) {
  // Write your solution here
}`,

    python: `def mergeKLists(lists):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Write your solution here
        return nullptr;
    }
};`
  },
},

"word-ladder": {
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "BFS • Graph",
  description: {
    text: "Given beginWord, endWord and a wordList, return the length of shortest transformation sequence from beginWord to endWord."
  },
  examples: [
    { input: 'beginWord="hit", endWord="cog"', output: "5" }
  ],
  constraints: [
    "1 <= wordList.length <= 5000",
    "1 <= word length <= 10",
    "All words are lowercase"
  ],
  starterCode: {
    javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}`,

    python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        // Write your solution here
        return 0;
    }
};`
  },
},

"n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: {
    text: "Place n queens on an n×n chessboard such that no two queens attack each other. Return all distinct solutions."
  },
  examples: [
    { input: "n = 4", output: "2 solutions" }
  ],
  constraints: [
    "1 <= n <= 9"
  ],
  starterCode: {
    javascript: `function solveNQueens(n) {
  // Write your solution here
}`,

    python: `def solveNQueens(n):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        // Write your solution here
        return {};
    }
};`
  },
},

"regular-expression-matching": {
  id: "regular-expression-matching",
  title: "Regular Expression Matching",
  difficulty: "Hard",
  category: "Dynamic Programming • String",
  description: {
    text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' matches any single character. '*' matches zero or more of the preceding element."
  },
  examples: [
    { input: 's = "aa", p = "a*"', output: "true" }
  ],
  constraints: [
    "1 <= s.length <= 20",
    "1 <= p.length <= 30",
    "s contains only lowercase letters",
    "p contains lowercase letters, '.' and '*'"
  ],
  starterCode: {
    javascript: `function isMatch(s, p) {
  // Write your solution here
}

console.log(isMatch("aa", "a*"));`,

    python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch("aa", "a*"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool isMatch(string s, string p) {
    // Write your solution here
    return false;
}`
  },
},

"serialize-deserialize-binary-tree": {
  id: "serialize-deserialize-binary-tree",
  title: "Serialize and Deserialize Binary Tree",
  difficulty: "Hard",
  category: "Tree • Design • DFS",
  description: {
    text: "Design an algorithm to serialize and deserialize a binary tree."
  },
  examples: [
    { input: "root = [1,2,3,null,null,4,5]", output: "Serialized and Deserialized correctly" }
  ],
  constraints: [
    "The number of nodes in the tree is in the range [0, 10^4]",
    "-1000 <= Node.val <= 1000"
  ],
  starterCode: {
    javascript: `var serialize = function(root) {
  // Write your solution here
};

var deserialize = function(data) {
  // Write your solution here
};`,

    python: `class Codec:

    def serialize(self, root):
        # Write your solution here
        pass

    def deserialize(self, data):
        # Write your solution here
        pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        // Write your solution here
        return "";
    }

    TreeNode* deserialize(string data) {
        // Write your solution here
        return nullptr;
    }
};`
  },
},

"largest-rectangle-histogram": {
  id: "largest-rectangle-histogram",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack • Monotonic Stack",
  description: {
    text: "Given an array of integers heights representing the histogram's bar height, return the area of the largest rectangle in the histogram."
  },
  examples: [
    { input: "heights = [2,1,5,6,2,3]", output: "10" }
  ],
  constraints: [
    "1 <= heights.length <= 10^5",
    "0 <= heights[i] <= 10^4"
  ],
  starterCode: {
    javascript: `function largestRectangleArea(heights) {
  // Write your solution here
}

console.log(largestRectangleArea([2,1,5,6,2,3]));`,

    python: `def largestRectangleArea(heights):
    # Write your solution here
    pass

print(largestRectangleArea([2,1,5,6,2,3]))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    // Write your solution here
    return 0;
}`
  },
},
"minimum-window-substring": {
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Sliding Window • HashMap",
  description: {
    text: "Given two strings s and t, return the minimum window substring of s such that every character in t is included."
  },
  examples: [
    { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }
  ],
  constraints: [
    "1 <= s.length, t.length <= 10^5",
    "s and t consist of uppercase and lowercase English letters"
  ],
  starterCode: {
    javascript: `function minWindow(s, t) {
  // Write your solution here
}

console.log(minWindow("ADOBECODEBANC","ABC"));`,

    python: `def minWindow(s, t):
    # Write your solution here
    pass

print(minWindow("ADOBECODEBANC","ABC"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    return "";
}`
  },
},

"edit-distance": {
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: {
    text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You can insert, delete, or replace a character."
  },
  examples: [
    { input: 'word1 = "horse", word2 = "ros"', output: "3" }
  ],
  constraints: [
    "0 <= word1.length, word2.length <= 500",
    "word1 and word2 consist of lowercase English letters"
  ],
  starterCode: {
    javascript: `function minDistance(word1, word2) {
  // Write your solution here
}

console.log(minDistance("horse","ros"));`,

    python: `def minDistance(word1, word2):
    # Write your solution here
    pass

print(minDistance("horse","ros"))`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    return 0;
}`
  },
},
"critical-connections": {
  id: "critical-connections",
  title: "Critical Connections in a Network",
  difficulty: "Hard",
  category: "Graph • Tarjan's Algorithm",
  description: {
    text: "There are n servers connected by undirected connections. Return all critical connections (bridges) in the network."
  },
  examples: [
    { input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]", output: "[[1,3]]" }
  ],
  constraints: [
    "1 <= n <= 10^5",
    "n - 1 <= connections.length <= 10^5",
    "0 <= ai, bi < n",
    "No duplicate edges"
  ],
  starterCode: {
    javascript: `function criticalConnections(n, connections) {
  // Write your solution here
}`,

    python: `def criticalConnections(n, connections):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        // Write your solution here
        return {};
    }
};`
  },
},

"number-of-connected-components": {
  id: "number-of-connected-components",
  title: "Number of Connected Components in an Undirected Graph",
  difficulty: "Medium",
  category: "Union Find • Graph",
  description: {
    text: "Given n nodes and edges, return the number of connected components in the graph."
  },
  examples: [
    { input: "n = 5, edges = [[0,1],[1,2],[3,4]]", output: "2" }
  ],
  constraints: [
    "1 <= n <= 2000",
    "0 <= edges.length <= 5000",
    "0 <= ai, bi < n",
    "ai != bi"
  ],
  starterCode: {
    javascript: `function countComponents(n, edges) {
  // Write your solution here
}`,

    python: `def countComponents(n, edges):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int countComponents(int n, vector<vector<int>>& edges) {
    // Write your solution here
    return 0;
}`
  },
},
"burst-balloons": {
  id: "burst-balloons",
  title: "Burst Balloons",
  difficulty: "Hard",
  category: "Dynamic Programming • Interval DP",
  description: {
    text: "You are given n balloons, indexed from 0 to n-1. If you burst balloon i, you gain nums[i-1] * nums[i] * nums[i+1] coins. Return the maximum coins you can collect."
  },
  examples: [
    { input: "nums = [3,1,5,8]", output: "167" }
  ],
  constraints: [
    "1 <= nums.length <= 300",
    "0 <= nums[i] <= 100"
  ],
  starterCode: {
    javascript: `function maxCoins(nums) {
  // Write your solution here
}`,

    python: `def maxCoins(nums):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int maxCoins(vector<int>& nums) {
    // Write your solution here
    return 0;
}`
  },
},

"validate-bst": {
  id: "validate-bst",
  title: "Validate Binary Search Tree",
  difficulty: "Medium",
  category: "Binary Search Tree • DFS",
  description: {
    text: "Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST). A valid BST satisfies: left subtree values are strictly less than the node's value, and right subtree values are strictly greater than the node's value."
  },
  examples: [
    { input: "root = [2,1,3]", output: "true" },
    { input: "root = [5,1,4,null,null,3,6]", output: "false" }
  ],
  constraints: [
    "The number of nodes in the tree is in the range [1, 10^4]",
    "-2^31 <= Node.val <= 2^31 - 1"
  ],
  starterCode: {
    javascript: `function isValidBST(root) {
  // Write your solution here
}`,

    python: `def isValidBST(root):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    bool isValidBST(TreeNode* root) {
        // Write your solution here
        return false;
    }
};`
  },
},
"kth-smallest-bst": {
  id: "kth-smallest-bst",
  title: "Kth Smallest Element in a BST",
  difficulty: "Medium",
  category: "Binary Search Tree • Inorder Traversal",
  description: {
    text: "Given the root of a Binary Search Tree and an integer k, return the kth smallest value (1-indexed) among all the nodes in the tree."
  },
  examples: [
    { input: "root = [3,1,4,null,2], k = 1", output: "1" },
    { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3" }
  ],
  constraints: [
    "The number of nodes in the tree is n",
    "1 <= k <= n <= 10^4",
    "-10^4 <= Node.val <= 10^4"
  ],
  starterCode: {
    javascript: `function kthSmallest(root, k) {
  // Write your solution here
}`,

    python: `def kthSmallest(root, k):
    # Write your solution here
    pass`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        // Write your solution here
        return 0;
    }
};`
  },
},


};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};