let word = "mexico";

let arr = [];

function createWave(str){
    str = word;
    // Kelimenin karakterleri içinde dön.
    for(let i=0; i<word.length; i++){
        // Sıfırıncı indexten i'ye kadar olanlar past değişkeninde:
        let past = word.slice(0, i);

        // Indexteki karakteri büyük harfe çevir ve letter değişkenine ata.
        let letter = word[i].toUpperCase();

        // Indexteki karakterden sonrası rest değişkeninde:
        let rest = word.slice(i+1);

        // Tüm parçaları newWord değişkeninde birleştir ve bu değişkeni diziye at.
        let newWord = past + letter + rest;
        arr.push(newWord);
        console.log(arr);
    }

    return str;
}
createWave();