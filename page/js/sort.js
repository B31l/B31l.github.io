    /**
     * Fisher–Yates shuffle
     */
     Array.prototype.shuffle = function() {

        var input = this;
  
        setTimeout(function() {
  
          (function() {
            var arr = input,
              len = arr.length;
  
            (function doProcess() {
              if (len--) {
                /* do something with arr[len] */
                // debugger
                var randomIndex = Math.floor(Math.random() * (len + 1));
  
                document.querySelector('.randomIndex').innerHTML = randomIndex;
                document.querySelector('.index').innerHTML = len;
  
                var itemAtIndex = input[randomIndex];
  
                input[randomIndex] = input[len];
                input[len] = itemAtIndex;
  
                exchange(randomIndex, len);
  
                // console.log(len);
                setTimeout(doProcess, 1500);
              }
            })();
          })();
        }, 1500);
        return input;
      };
  
      var arr = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ];
  
      render(arr);
  
      arr.shuffle()
  
      /**
       * 渲染
       */
      function render(arr) {
        var wrap = document.querySelector('.wrap');
        for (var i = 0; i < arr.length; i++) {
          wrap.insertAdjacentHTML('beforeend', '<div class="bar" style="height:' + arr[i] * 12 + 'px;left:' + i * 15 + 'px" pos="' + i + '"></div>');
        }
      }
  
      /**
       * 交换
       */
      function exchange(i, j) {
  
        console.log(i, j);
        var iDiv = document.querySelector('.wrap [pos="' + i + '"]');
        var jDiv = document.querySelector('.wrap [pos="' + j + '"]');
  
        var iLeft = iDiv.style.left;
        var jLeft = jDiv.style.left;
  
        iDiv.style.left = jLeft;
        jDiv.style.left = iLeft;
  
        iDiv.setAttribute('pos', j);
        jDiv.setAttribute('pos', i);
      }