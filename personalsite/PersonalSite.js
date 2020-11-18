var images = [
                "/PersonalSite/chill-slide.jpg",
                "/PersonalSite/doctor.jpg",
                "/PersonalSite/cert.jpg"
            ];
            var num = 0;
            function next(){
                var slider = document.getElementById('mySlides');
                num++;
                if(num>= images.length){
                    num = 0;
                }
                slider.src = images[num];
            }
            function prev(){
                var slider = document.getElementById('mySlides');
                num--;
                if(num < 0){
                    num = images.length-1;
                }
                slider.src = images[num];
            }