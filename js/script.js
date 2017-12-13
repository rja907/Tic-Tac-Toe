element1 = document.getElementById('d1');
element2 = document.getElementById('d2');
element3 = document.getElementById('d3');
element4 = document.getElementById('d4');
element5 = document.getElementById('d5');
element6 = document.getElementById('d6');
element7 = document.getElementById('d7');
element8 = document.getElementById('d8');
element9 = document.getElementById('d9');
para = document.getElementById('para');
para2 = document.getElementById('para2');
var a, b;
var cnt = 0,
  cnt1 = 0,
  cnt2 = 0;
var flg1 = true,
  flg2 = true,
  flg3 = true,
  flg4 = true,
  flg5 = true,
  flg6 = true,
  flg7 = true,
  flg8 = true,
  flg9 = true,
  flgw = true,
  flgq = true;
var v1 = 2,
  v2 = 2,
  v3 = 2,
  v4 = 2,
  v5 = 2,
  v6 = 2,
  v7 = 2,
  v8 = 2,
  v9 = 2;
//Checking if winning Condition has been met.
function over() {
  if (v1 == 1 && v2 == 1 && v3 == 1) refreshX();
  if (v4 == 1 && v5 == 1 && v6 == 1) refreshX();
  if (v7 == 1 && v8 == 1 && v9 == 1) refreshX();
  if (v1 == 1 && v5 == 1 && v9 == 1) refreshX();
  if (v3 == 1 && v5 == 1 && v7 == 1) refreshX();
  if (v1 == 1 && v4 == 1 && v7 == 1) refreshX();
  if (v2 == 1 && v5 == 1 && v8 == 1) refreshX();
  if (v3 == 1 && v6 == 1 && v9 == 1) refreshX();
  if (v1 == 0 && v2 == 0 && v3 == 0) refreshO();
  if (v4 == 0 && v5 == 0 && v6 == 0) refreshO();
  if (v7 == 0 && v8 == 0 && v9 == 0) refreshO();
  if (v1 == 0 && v5 == 0 && v9 == 0) refreshO();
  if (v3 == 0 && v5 == 0 && v7 == 0) refreshO();
  if (v1 == 0 && v4 == 0 && v7 == 0) refreshO();
  if (v2 == 0 && v5 == 0 && v8 == 0) refreshO();
  if (v3 == 0 && v6 == 0 && v9 == 0) refreshO();
  else if (cnt >= 9) draw();
}
//This runs if X wins.
function refreshX() {
  var r = confirm('X Wins');
  if (r == true) {
    window.location.reload();
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 1;
    }
  } else {
    flg1 = false;
    flg2 = false;
    flg3 = false;
    flg4 = false;
    flg5 = false;
    flg6 = false;
    flg7 = false;
    flg8 = false;
    flg9 = false;
  }
}
//This runs if O wins.
function refreshO() {
  var r = confirm('O Wins');
  if (r == true) {
    window.location.reload();
    if (localStorage.count2) {
      localStorage.count2 = Number(localStorage.count2) + 1;
    } else {
      localStorage.count2 = 1;
    }
  } else {
    flg1 = false;
    flg2 = false;
    flg3 = false;
    flg4 = false;
    flg5 = false;
    flg6 = false;
    flg7 = false;
    flg8 = false;
    flg9 = false;
  }
}
//This runs if the game results in a draw.
function draw() {
  var r = confirm('Game Draw');
  if (r == true) {
    window.location.reload();
  } else {
    flg1 = false;
    flg2 = false;
    flg3 = false;
    flg4 = false;
    flg5 = false;
    flg6 = false;
    flg7 = false;
    flg8 = false;
    flg9 = false;
  }
}
//Checks which block is clicked first.
element1.onclick = function() {
  if (flg1 == true) {
    cnt++;

    a = 'X';
    v1 = 1;
    element1.innerHTML = a.fontcolor('red');

    over();
    setTimeout('artint()', 200);
  }
  flg1 = false;
};

element2.onclick = function() {
  if (flg2 == true) {
    cnt++;

    a = 'X';
    v2 = 1;
    element2.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg2 = false;
};
element3.onclick = function() {
  if (flg3 == true) {
    cnt++;

    a = 'X';
    v3 = 1;
    element3.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg3 = false;
};
element4.onclick = function() {
  if (flg4 == true) {
    cnt++;

    a = 'X';
    v4 = 1;
    element4.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg4 = false;
};
element5.onclick = function() {
  if (flg5 == true) {
    cnt++;

    a = 'X';
    v5 = 1;
    element5.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg5 = false;
};
element6.onclick = function() {
  if (flg6 == true) {
    cnt++;

    a = 'X';
    v6 = 1;
    element6.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg6 = false;
};
element7.onclick = function() {
  if (flg7 == true) {
    cnt++;

    a = 'X';
    v7 = 1;
    element7.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg7 = false;
};
element8.onclick = function() {
  if (flg8 == true) {
    cnt++;

    a = 'X';
    v8 = 1;
    element8.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg8 = false;
};
element9.onclick = function() {
  if (flg9 == true) {
    cnt++;

    a = 'X';
    v9 = 1;
    element9.innerHTML = a.fontcolor('red');
    over();
    setTimeout('artint()', 200);
  }
  flg9 = false;
};
//Runs when the human wants to play second.
function second() {
  cnt = cnt + 1;
  artint();
}
//Starts the algorithm for the game.
function artint() {
  cnt++;
  /* Check for Winning Condition */

  if (v1 == 0 && v2 == 0 && flg3 == true) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v1 == 0 && v3 == 0 && flg2 == true) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  } else if (v2 == 0 && v3 == 0 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v4 == 0 && v5 == 0 && flg6 == true) {
    b = 'O';
    v6 = 0;
    element6.innerHTML = b.fontcolor('green');
    flg6 = false;
    over();
  } else if (v4 == 0 && v6 == 0 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 0 && v6 == 0 && flg4 == true) {
    b = 'O';
    v4 = 0;
    element4.innerHTML = b.fontcolor('green');
    flg4 = false;
    over();
  } else if (v7 == 0 && v8 == 0 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v7 == 0 && v9 == 0 && flg8 == true) {
    b = 'O';
    v8 = 0;
    element8.innerHTML = b.fontcolor('green');
    flg8 = false;
    over();
  } else if (v8 == 0 && v9 == 0 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 0 && v4 == 0 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 0 && v7 == 0 && flg4 == true) {
    b = 'O';
    v4 = 0;
    element4.innerHTML = b.fontcolor('green');
    flg4 = false;
    over();
  } else if (v4 == 0 && v7 == 0 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v2 == 0 && v5 == 0 && flg8 == true) {
    b = 'O';
    v8 = 0;
    element8.innerHTML = b.fontcolor('green');
    flg8 = false;
    over();
  } else if (v2 == 0 && v8 == 0 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 0 && v8 == 0 && flg2 == true) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  } else if (v3 == 0 && v6 == 0 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v3 == 0 && v9 == 0 && flg6 == true) {
    b = 'O';
    v6 = 0;
    element6.innerHTML = b.fontcolor('green');
    flg6 = false;
    over();
  } else if (v6 == 0 && v9 == 0 && flg3 == true) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v1 == 0 && v5 == 0 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 0 && v9 == 0 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 0 && v9 == 0 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v3 == 0 && v5 == 0 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v3 == 0 && v7 == 0 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 0 && v7 == 0 && flg3 == true) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v1 == 1 && v2 == 1 && flg3 == true) {
    /* Playing Defense */

    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v1 == 1 && v3 == 1 && flg2 == true) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  } else if (v2 == 1 && v3 == 1 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v4 == 1 && v5 == 1 && flg6 == true) {
    b = 'O';
    v6 = 0;
    element6.innerHTML = b.fontcolor('green');
    flg6 = false;
    over();
  } else if (v4 == 1 && v6 == 1 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 1 && v6 == 1 && flg4 == true) {
    b = 'O';
    v4 = 0;
    element4.innerHTML = b.fontcolor('green');
    flg4 = false;
    over();
  } else if (v7 == 1 && v8 == 1 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v7 == 1 && v9 == 1 && flg8 == true) {
    b = 'O';
    v8 = 0;
    element8.innerHTML = b.fontcolor('green');
    flg8 = false;
    over();
  } else if (v8 == 1 && v9 == 1 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 1 && v4 == 1 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 1 && v7 == 1 && flg4 == true) {
    b = 'O';
    v4 = 0;
    element4.innerHTML = b.fontcolor('green');
    flg4 = false;
    over();
  } else if (v4 == 1 && v7 == 1 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v2 == 1 && v5 == 1 && flg8 == true) {
    b = 'O';
    v8 = 0;
    element8.innerHTML = b.fontcolor('green');
    flg8 = false;
    over();
  } else if (v2 == 1 && v8 == 1 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 1 && v8 == 1 && flg2 == true) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  } else if (v3 == 1 && v6 == 1 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v3 == 1 && v9 == 1 && flg6 == true) {
    b = 'O';
    v6 = 0;
    element6.innerHTML = b.fontcolor('green');
    flg6 = false;
    over();
  } else if (v6 == 1 && v9 == 1 && flg3 == true) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v1 == 1 && v5 == 1 && flg9 == true) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 1 && v9 == 1 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 1 && v9 == 1 && flg1 == true) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v3 == 1 && v5 == 1 && flg7 == true) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v3 == 1 && v7 == 1 && flg5 == true) {
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v5 == 1 && v7 == 1 && flg3 == true) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (flg5 == true) {
    /* The First Move */
    b = 'O';
    v5 = 0;
    element5.innerHTML = b.fontcolor('green');
    flg5 = false;
    over();
  } else if (v1 == 1 && v9 == 1 && flg2 == true) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  } else if (v3 == 1 && v7 == 1 && flg8 == true) {
    b = 'O';
    v8 = 0;
    element8.innerHTML = b.fontcolor('green');
    flg8 = false;
    over();
  } else if (v2 == 2 && v3 == 2 && flg1 == true && cnt == 2) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 2 && v2 == 2 && flg3 == true && cnt == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v8 == 2 && v9 == 2 && flg7 == true && cnt == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v7 == 2 && v8 == 2 && flg9 == true && cnt == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v4 == 2 && v7 == 2 && flg1 == true && cnt == 2) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 2 && v4 == 2 && flg7 == true && cnt == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v6 == 2 && v9 == 2 && flg3 == true && cnt == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 2 && v6 == 2 && flg9 == true && cnt == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v5 == 2 && v9 == 2 && flg1 == true && cnt == 2) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 2 && v5 == 2 && flg9 == true && cnt == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v5 == 2 && v7 == 2 && flg3 == true && cnt == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 2 && v5 == 2 && flg7 == true && cnt == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 2 && v2 == 2 && v3 == 0) {
    /* The Next Move */

    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 0 && v2 == 2 && v3 == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v7 == 2 && v8 == 2 && v9 == 0) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v7 == 0 && v8 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 2 && v4 == 2 && v7 == 0) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 0 && v4 == 2 && v7 == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v3 == 2 && v6 == 2 && v9 == 0) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 0 && v6 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 2 && v5 == 2 && v9 == 0) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 0 && v5 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v3 == 2 && v5 == 2 && v7 == 0) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 0 && v5 == 2 && v7 == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 2 && v2 == 2 && v3 == 1) {
    /* Special Move */

    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 1 && v2 == 2 && v3 == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v7 == 2 && v8 == 2 && v9 == 1) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v7 == 1 && v8 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 2 && v4 == 2 && v7 == 1) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 1 && v4 == 2 && v7 == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v3 == 2 && v6 == 2 && v9 == 1) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 1 && v6 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v1 == 2 && v5 == 2 && v9 == 1) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v1 == 1 && v5 == 2 && v9 == 2) {
    b = 'O';
    v9 = 0;
    element9.innerHTML = b.fontcolor('green');
    flg9 = false;
    over();
  } else if (v3 == 2 && v5 == 2 && v7 == 1) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v3 == 1 && v5 == 2 && v7 == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 2 && v2 == 1 && v3 == 2) {
    //My Addition to the algorithm--------------
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v7 == 2 && v8 == 1 && v9 == 2) {
    b = 'O';
    v7 = 0;
    element7.innerHTML = b.fontcolor('green');
    flg7 = false;
    over();
  } else if (v1 == 2 && v4 == 1 && v7 == 2) {
    b = 'O';
    v1 = 0;
    element1.innerHTML = b.fontcolor('green');
    flg1 = false;
    over();
  } else if (v3 == 2 && v6 == 1 && v9 == 2) {
    b = 'O';
    v3 = 0;
    element3.innerHTML = b.fontcolor('green');
    flg3 = false;
    over();
  } else if (v4 == 2 && v6 == 2) {
    //-------------
    b = 'O';
    v6 = 0;
    element6.innerHTML = b.fontcolor('green');
    flg6 = false;
    over();
  } else if (v2 == 2 && v8 == 2) {
    b = 'O';
    v2 = 0;
    element2.innerHTML = b.fontcolor('green');
    flg2 = false;
    over();
  }
}
function score() {
  document.getElementById('t3').innerHTML = localStorage.count;
  document.getElementById('t4').innerHTML = localStorage.count2;
}
function reset() {
  window.location.reload();
  localStorage.count = 0;
  localStorage.count2 = 0;
}