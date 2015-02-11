    var makeClick = document.createElement("a");
    var targetFill = document.createElement("img");
    
    makeClick.setAttribute("class", "clickTarget");
    makeClick.setAttribute("href", ""); 
    targetFill.setAttribute("class", "box");
    targetFill.setAttribute("src", whichOne);
    attachTo.appendChild(makeClick);
    makeClick.appendChild(targetFill);
