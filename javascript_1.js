Solution JavaScript 1: 
----------------------
function isValidWalk(walk) {
  if(walk.length === 10){
    var x = y = 0;
    walk.forEach(function(val){
      switch(val){
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'w':
          x--;
          break;
        case 'e':
          x++;
          break;          
      }
    });
    return ( x === 0 && y === 0);
  } else {
    return false;
  }
}

Tests:
------
Test Results:
Walk Validator
	should return false if walk is too short
		Test Passed
		Test Passed
		Completed in 1ms
	should return false if walk is too long
		Test Passed
		Test Passed
	should return false if walk does not bring you back to start
		Test Passed
		Test Passed
	should return true for a valid walk
		Test Passed
		Test Passed
		Test Passed
Completed in 7ms
You have passed all of the tests! :)