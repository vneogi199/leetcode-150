function reverseWords(s: string): string {
  return s.split(' ').filter(str => !!str).reverse().join(' ');
};

console.log(reverseWords("   Let's take LeetCode contest   "))
console.log(reverseWords("Let's take LeetCode contest   "))
