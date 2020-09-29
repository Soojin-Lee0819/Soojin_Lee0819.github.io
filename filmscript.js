let      myVideo; 

        window.onload = function()
        {
            myVideo=document.getElementById("film"); 
            btnfullMode.addEventListener("click", setFullScreenMode, true); 
            film.addEventListener("loadedmetadata", makeFullModeVisible, true);
        } 

        function makeFullModeVisible()
        {
                if (film.webkitSupportsFullscreen)
            {
                    document.getElementById("btnfullMode").style.visibility="visible";
            }
        } 

        function setFullScreenMode()
        {
                    film.webkitEnterFullscreen();
        }
       