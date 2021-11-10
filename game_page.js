player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player_1_name + " : ";
document.getElementById("player2_name").innerHTML=player_2_name + " : ";

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

function send(){
 getWord=document.getElementById("word").value;
 word=getWord.toLowerCase();
console.log("word in lowercase is " + word);

charAt1=word.charAt(1);
console.log(charAt1);

mid_pos=Math.floor(word.length/2);
console.log(mid_pos);

charAt2=word.charAt(mid_pos);
console.log(charAt2);

length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

q_word="<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
input_box="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check </button>";

row=q_word + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

