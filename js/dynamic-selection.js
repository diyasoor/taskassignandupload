function givetask(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "arjunkapoor"){
        var optionArray = ['t1|Make a draft of the new blog post'];
    }
    else if(s1.value == "abhayrawat"){
        var optionArray = ['t2|Add new features to the product page'];
    }

    else if(s1.value == "aditiroy"){
        var optionArray = ['t3|Submit the design for client109'];
    }

    else if(s1.value == "bhaskarraj"){
        var optionArray = ['t4|Check all the mailers are up to date or not'];
    }

    else if(s1.value == "debjanidas"){
        var optionArray = ['t5|Make the UI design for client107'];
    }

    else if(s1.value == "gunjansharma"){
        var optionArray = ['t6|Add new features to our app'];
    }

    else if(s1.value == "harrypatel"){
        var optionArray = ['t7|Complete the meeting with the new client'];
    }
    else if(s1.value == "jackpotter"){
        var optionArray = ['t8|Publish the new payment website by today'];
    }
    else if(s1.value == "kumarroy"){
        var optionArray = ['t9|Help the event manager'];
    }
    else if(s1.value == "sarthakbose"){
        var optionArray = ['t10|Make a creative for client111'];
    }
    else if(s1.value == "sayansingh"){
        var optionArray = ['t11|Get the new posters from the store'];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
}