function bubble_sort(arr) {
    const n = arr.length;
    let count = 0;
    for (let i=0; i<n-1; i++){
        for (let j=n-1; j>i; j--) {
            count++;
            setTimeout(()=>{
                if (arr[j-1] > arr[j]) {
                    [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                    exchange(j-1, j);
                }
                else
                    accent(j-1, j);
                console.log(arr);
            }, 2000*count);
        }
    }
}

function retry() {
    arr = [90, 56, 34, 12, 78];
    render(arr);
    console.log(arr);
}

function render(arr) {
    var wrap = document.querySelector('.wrap');
    wrap.innerHTML = "";
    for(var i=0; i <arr.length; i++) {
        wrap.insertAdjacentHTML('beforeend', `<div class="bar" style="height:35px; width:100px; top:${i*50+20}px;" pos="${i}"></div>`);
    }
    var bar = document.getElementsByClassName("bar");
    for(let i=0; i<arr.length; i++) {
        bar[arr.length - 1 - i].innerHTML = `<div class="message">${arr[arr.length - 1 - i]}</div>`;
    }
}

function exchange(i, j) {
    var iDiv = document.querySelector(`.wrap [pos="${i}"]`);   // wrap [pos="i"]
    var jDiv = document.querySelector(`.wrap [pos="${j}"]`);   // wrap [pos="j"]
    var iTop = iDiv.style.top;
    var jTop = jDiv.style.top;
    accent(i, j);
    setTimeout(() => {
        iDiv.style.top = jTop;
        jDiv.style.top = iTop;
        iDiv.setAttribute('pos', j );    // 요소의 속성 값을 정한다.
        jDiv.setAttribute('pos', i );    // 요소의 속성 값을 정한다.
    }, 500);

}

function accent(i, j) {
    var iDiv = document.querySelector(`.wrap [pos="${i}"]`);   // wrap [pos="i"]
    var jDiv = document.querySelector(`.wrap [pos="${j}"]`);   // wrap [pos="j"]
    iDiv.style.borderColor = "red";
    jDiv.style.borderColor = "red";
    setTimeout(() => {              //#FFF4D4
        iDiv.style.borderColor = "#33FFCC";
        jDiv.style.borderColor = "#33FFCC";
    }, 1000);
}

retry()