$(window).ready(function(){
    $(document).ready(function(){
        $(function(){
            $(".home").on("click", function(){
                $(".sub-menu").slideToggle(500);
            });
        });
        
        $(function(){
            $(".about").on("click", function(){
                $(".about-sub-menu").slideToggle(500)
            });
        });
        
        $(function(){
            $(".services").on("click", function(){
                $(".services-sub-menu").slideToggle(500);
            });
        });

        var images = [
            "images\\documents\\forex fundamentals.jpg",
            "images\\documents\\smart money.jpg",
            "images\\documents\\trading 101.jpg"
        ];
        var num = 0;
        function next() {
            var slider = document.getElementById('slider');
            num++;
            if(num >= images.length) {
                num = 0;
            }
            slider.src = images[num];
        }
        function prev() {
            var slider = document.getElementById('slider');
            num--;
            if(num < 0) {
                num = images.length-1;
            }
            slider.src = images[num];
        };

    });
});


//var storEmail = document.getElementById("email");
//localStorage.setItem("storEmail", JSON.stringify(storEmail));
//var retrieve = localStorage.getItem("storEmail");
//console.log('retrieve', JSON.parse(retrieve);




