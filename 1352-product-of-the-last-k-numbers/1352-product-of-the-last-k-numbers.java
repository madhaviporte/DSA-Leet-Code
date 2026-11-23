class ProductOfNumbers {
    List<Long> prefix;

    public ProductOfNumbers() {
        prefix = new ArrayList<>();
        prefix.add(1L);
    }

    public void add(int num) {
        if (num == 0) {
            prefix.clear();
            prefix.add(1L);
        } else {
            prefix.add(prefix.get(prefix.size() - 1) * num);
        }
    }

    public int getProduct(int k) {
        if (k >= prefix.size()) return 0;

        return (int) (prefix.get(prefix.size() - 1) /
                      prefix.get(prefix.size() - k - 1));
    }
}