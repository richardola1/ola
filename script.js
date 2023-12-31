var number_of_star = 300;

var random_number = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function(){
  var star_rotation = 'move_right;';
  for(var i=0; i<number_of_star; i++){
    rot= (star_rotation=='move_right;'?'move_left;':'move_right;');
    var star_top = random_number(0,document.documentElement.clientHeight);
    var star_left = random_number(0,document.documentElement.clientWidth);
    var star_radius = random_number(0,4);
    var  star_duration= random_number(6,16);

    document.body.innerHTML += "<div class='star' style='top: "+star_top+"px; left: "+star_left+"px; width: "+star_radius+"px; height: "+star_radius+"px; "+
    "animation-name:"+star_rotation+"; animation-duration: "+star_duration+"s;'></div>";
  }
};

createStars();

let currentClue = 1;

function nextClue(clue) {
    if (clue === currentClue) {
        document.getElementById(`clue${clue}`).style.display = 'none';
        if (clue < 4) {
            currentClue++;
            document.getElementById(`clue${clue + 1}`).style.display = 'block';
        } else {
            document.getElementById('clue4').innerHTML = 'Step 4: You\'re my sunshine! The final surprise is coming up!';
        }
    }
}




