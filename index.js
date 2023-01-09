// Bài tập 1
document.getElementById("btntinhketqua").onclick = function(){
    let total = 0;
    let n = 0;
    while(total <= 10000){  
        n++; 
        total += n;   
        
    }
    // for(n=0; total < 10000; n++){
    //     total += n;
    // }
    document.getElementById('ketqua').innerHTML = " Số nguyên dương nhỏ nhất là: " + n;
}

// Bài tập 2
document.getElementById('btntinhtong').onclick = function(){
    let x = +document.getElementById('nhapsoX').value;
    let n = +document.getElementById('nhapsoY').value;
    let total = 0;
    let i = 1;
    let y = 1 ;
    while (i <= n){
        y *= x
        total += y
        i++
    }
    document.getElementById('tinhtong').innerHTML = " Tổng: " + total.toLocaleString();
}


// Bài tập 3
document.getElementById('btntinhGiaithua').onclick = function(){
    let nhapso = document.getElementById('nhapso').value;
    let giaithua = 1;
    let giatri = 1;

    while(giatri <= nhapso){
        giaithua = giaithua * giatri

        giatri ++;
    }

    document.getElementById('giaithua').innerHTML = " Giai thừa: " + giaithua;
}


// Bài tập 4
document.getElementById('btntinhThediv').onclick = function(){
    let output = "";
    for(let i = 1; i <= 10; i++){
        if(i % 2 == 0){
            let divChan = '<div class= "alert bg-danger mt-2 ">Div chẵn</div>'
            output += divChan
        }else{
            let divle = '<div class= "alert bg-info mt-2">Div lẻ</div>'
            output += divle
        }
    }
    document.getElementById('divChanLe').innerHTML = output;
}
