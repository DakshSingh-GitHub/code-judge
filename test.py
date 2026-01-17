
s = input()

def checkPalindrome(string: str):
    processed_string = ''.join(char for char in string if char.isalnum()).lower()
    rev = processed_string[::-1]
    if rev == processed_string:
        print("Palindrome")
    else:
        print("Not a Palindrome")

checkPalindrome(s)