quick_draw_data_Set = ["lollipop" , "apple" , "strawberry" , "helicopter" , "candy" , "car" , "dog" , "cat" , "alarm clock" , "asparagous" , "laptop" , "computer"];
random_no = Math.floor((Math.random()*quick_draw_data_Set.length)+1);
Element_of_array = quick_draw_data_Set[random_number];
document.getElementById("sketch").innerHTML = "sketch_to_be_drawn :"+ Element_of_array;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;