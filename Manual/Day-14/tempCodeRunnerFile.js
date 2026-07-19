let arr = new Array(126).fill(0)

for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i)
    arr[ascii-97] = arr[ascii-97]+1
}
for(let i=0; i<arr.length; i++){
    if(arr[i]>0)
        console.log(
    String.fromCharCode(i+97)+"->"+ arr[i]);
        
}