int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int gcdOfOddEvenSums(int n) {
    int sumOdd = n * n;       // sum of first n odd numbers
    int sumEven = n * (n+1);  // sum of first n even numbers
    return gcd(sumOdd, sumEven);
}
