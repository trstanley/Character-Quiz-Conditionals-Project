$("button").click(function(){
    var age = $(".var1").val();
    var agenum = parseInt(age);
    var prefer = $(".var2").val();
    if(agenum <=18 && prefer ==="nature"){
        $(".img").attr("src","https://images-na.ssl-images-amazon.com/images/I/612xu%2BUStNL._SY879_.jpg");
        $(".text").text("You are Groot!  How cute!");
    }else if (agenum >=18 && prefer ==="nature"){
        $(".img").attr("src","https://amp.thisisinsider.com/images/5910bc1312dd1325008b4636-750-562.jpg");
        $(".text").text("You are Rocket! Ain't no thing like you except you!");
    }else if (agenum <=18 && prefer ==="people"){
        $(".img").attr("src","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/Star-Lord_AIW_Profile.jpg/revision/latest/scale-to-width-down/2000?cb=20180518211942");
        $(".text").text("You are Star Lord! A (wo)man with a plan.  Or at least part of one.");
    }else if (agenum >=18 && prefer ==="people"){
        $(".img").attr("src","https://i.pinimg.com/originals/62/aa/44/62aa44f895efd5b19297384108774c7e.jpg");
        $(".text").text("You are Gamora! You are the deadliest (wo)man in the entire galaxy!");
    }else{
    }

});