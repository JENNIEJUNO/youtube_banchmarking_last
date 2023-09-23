window.onload = function(){//검색창 생성 및 숨김, 사이드바 생성 및 숨김, 마이크 이모티콘, 돋보기 이모티콘
    main_resize();
    window.addEventListener('resize', function(){
        main_resize();
    });

    function main_resize(){
        const max_width = window.innerWidth;
        const max_height = window.innerHeight;
        const header_left_width = document.getElementsByClassName('left')[0].clientWidth;//left 너비

        if(max_width <= 800){
            document.getElementsByClassName('search_box')[0].style.display = 'none';//검색창
            document.getElementsByClassName('li_hover')[1].style.display = 'flex';//마이크 이모티콘
            document.getElementsByClassName('side_menu')[0].style.display = 'none';//side_menu 숨김
            document.getElementsByClassName('video_tag')[0].style.marginLeft = '80px';//video_tag 마진(left)
            document.getElementsByClassName('video_box')[0].style.marginLeft = '80px';//video_box 마진(left)
            document.getElementsByClassName('video_box')[0].style.marginRight = '10px';//video_box 마진(right)
        }
        else{
            document.getElementsByClassName('search_box')[0].style.display = 'flex';//검색창
            document.getElementsByClassName('li_hover')[1].style.display = 'none';//마이크 이모티콘
            document.getElementsByClassName('side_menu')[0].style.display = 'block';//side_menu 생성
            document.getElementsByClassName('side_menu')[0].style.width = header_left_width + 70 + 'px';//side_menu 너비
            document.getElementsByClassName('side_menu')[0].style.height = max_height - 70 + 'px';//side_menu 높이
            document.getElementsByClassName('video_tag')[0].style.marginLeft = header_left_width + 90 + 'px';//video_tag 마진(left)
            document.getElementsByClassName('video_box')[0].style.marginLeft = header_left_width + 90 + 'px';//video_box 마진(left)
        }

        document.getElementsByClassName('search_box')[0].style.width = max_width - 600 + 'px';//자동으로 변하는 검색창 크기
        document.getElementsByClassName('video_tag')[0].style.width = max_width + 'px';//video_tag 너비

        //검색창 크기가 1000이 넘어가면 1000고정
        const search_width = document.getElementsByClassName('search_box')[0].clientWidth;//search_box너비
        if(search_width > 1000){
            document.getElementsByClassName('search_box')[0].style.width = '1000px';
        }


        const video_box_width = document.getElementsByClassName('video_box')[0].clientWidth;//video_box_width
        const row_video_list_li = document.getElementsByClassName('row_video_list_li');
        const row_video_button = document.getElementsByClassName('row_video_button');

        const column_video_box = document.getElementsByClassName('column_video_box');
        const column_video_list_width = document.getElementsByClassName('column_video_list')[0].clientWidth;
        const column_video_list_li = document.getElementsByClassName('column_video_list_li');
        const column_video_button = document.getElementsByClassName('column_video_button');

        if(max_width <= 800){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = '90%';
                row_video_button[i].style.height = '300px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(column_video_list_width / 2) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }
        else if(max_width > 800 && max_width <= 900){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
                row_video_button[i].style.height = '180px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '330px';
            }
        }
        else if(max_width > 900 && max_width <= 1000){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
                row_video_button[i].style.height = '190px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '340px';
            }
        }
        else if(max_width > 1000 && max_width <= 1100){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }
            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }
        else if(max_width > 1100 && max_width <= 1200){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                row_video_button[i].style.height = '190px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '330px';
            }
        }
        else if(max_width > 1200 && max_width <= 1300){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '340px';
            }
        }
        else if(max_width > 1300 && max_width <= 1400){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
                row_video_button[i].style.height = '210px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }
        else if(max_width > 1400 && max_width <= 1500){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
                row_video_button[i].style.height = '180px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '330px';
            }
        }
        else if(max_width > 1500 && max_width <= 1600){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
                row_video_button[i].style.height = '190px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '340px';
            }
        }
        else if(max_width > 1600 && max_width <= 1700){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }
        else if(max_width > 1700 && max_width <= 1800){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                row_video_button[i].style.height = '180px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 7) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '330px';
            }
        }
        else if(max_width > 1800 && max_width <= 1900){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                row_video_button[i].style.height = '190px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 7) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '340px';
            }
        }
        else if(max_width > 1900 && max_width <= 2000){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 7) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }
        else if(max_width > 2000 && max_width <= 2100){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                row_video_button[i].style.height = '180px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 9) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '330px';
            }
        }
        else if(max_width > 2100 && max_width <= 2200){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                row_video_button[i].style.height = '190px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 9) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '340px';
            }
        }
        else if(max_width > 2200 && max_width <= 3000){
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 9) - 1 + 'px';
                column_video_button[i].style.width = '95%';
                column_video_button[i].style.height = '350px';
            }
        }

        else{ // column의 비율 조정
            for(let i = 0; i < row_video_list_li.length; i++){//row
                row_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
                row_video_button[i].style.height = '200px';
            }

            for(let i = 0; i < column_video_list_li.length; i++){//column
                column_video_list_li[i].style.width = Math.floor(video_box_width / 9) - 1 + 'px';
                column_video_button[i].style.width = '80%';
                column_video_button[i].style.height = '350px';
            }
        }

        //column_video_box display, hr display
        const video_hr = document.getElementsByClassName('video_hr');
        if(max_width <= 800){
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 0){column_video_box[i].style.display = 'flex';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 0 || i == 1){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }

        else if(max_width > 800 && max_width <= 1100){
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 1){column_video_box[i].style.display = 'flex';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 2 || i == 3){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }

        else if(max_width > 1100 && max_width <= 1400){
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 2){column_video_box[i].style.display = 'block';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 4 || i == 5){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }

        else if(max_width > 1400 && max_width <= 1700){
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 3){column_video_box[i].style.display = 'block';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 6 || i == 7){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }

        else if(max_width > 1700 && max_width <= 2000){
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 4){column_video_box[i].style.display = 'block';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 8 || i == 9){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }

        else{
            for(let i = 0; i < column_video_box.length; i++){//column
                if(i == 5){column_video_box[i].style.display = 'block';}
                else{column_video_box[i].style.display = 'none';}
            }

            for(let i = 0; i < video_hr.length; i++){//hr
                if(i == 10 || i == 11){video_hr[i].style.display = 'block';}
                else{video_hr[i].style.display = 'none';}
            }
        }
    }
}

rescroll();

function scroll_make(){
    const new_video_list_li = document.createElement('li'); new_video_list_li.setAttribute('class', 'new_video_list_li');
    const new_video_button = document.createElement('div'); new_video_button.setAttribute('class', 'new_video_button');
    const new_temp_box = document.createElement('div'); new_temp_box.setAttribute('class', 'new_temp_box');
    const play_button = document.createElement('i'); play_button.setAttribute('class', "fa-solid fa-play");
    play_button.style.color = 'white';
    const new_profile_box = document.createElement('div'); new_profile_box.setAttribute('class', 'new_profile_box');
    const new_profile = document.createElement('div'); new_profile.setAttribute('class', 'new_profile');
    const profile_img = document.createElement('i'); profile_img.setAttribute('class', "fa-solid fa-play");
    const new_text_box = document.createElement('div'); new_text_box.setAttribute('class', 'new_text_box');

    new_text_box.append('abcd efgh ijkl mnop qrst uvwx yzab cdef ghij klmn opqr stuv');
    new_profile.append(profile_img);
    new_profile_box.append(new_profile);
    new_temp_box.append(new_profile_box);
    new_temp_box.append(new_text_box);
    new_video_button.append(play_button);
    new_video_list_li.append(new_video_button);
    new_video_list_li.append(new_temp_box);

    return new_video_list_li;
}

window.addEventListener('scroll', function(){
    rescroll();
    const new_video_list_li = document.getElementsByClassName('new_video_list_li');
    if(new_video_list_li.length >= 1){
        resize();
    }
});

window.addEventListener('resize', function(){
    resize();
});

function rescroll(){
    const y = document.documentElement.scrollTop;
    const max_height = window.innerHeight;
    const fullheight = document.body.scrollHeight;
    if(y + max_height >= fullheight - 50){
        for(let i = 0; i < 6; i++){
            const new_box = scroll_make();
            document.getElementsByClassName('row_video_list')[0].append(new_box);
        }
    }
}


function resize(){
    const max_width = window.innerWidth;
    const new_video_list_li = document.getElementsByClassName('new_video_list_li');
    const new_video_button = document.getElementsByClassName('new_video_button');
    const video_box_width = document.getElementsByClassName('video_box')[0].clientWidth;
    
    if(max_width <= 800){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = '90%';
            new_video_button[i].style.height = '300px';
        }
    }
    else if(max_width > 800 && max_width <= 900){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
            new_video_button[i].style.height = '180px';
        }
    }
    else if(max_width > 900 && max_width <= 1000){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
            new_video_button[i].style.height = '190px';
        }
    }
    else if(max_width > 1000 && max_width <= 1100){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 2) - 1 + 'px';
            new_video_button[i].style.height = '200px';
        }
    }
    else if(max_width > 1100 && max_width <= 1200){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
            new_video_button[i].style.height = '190px';
        }
    }
    else if(max_width > 1200 && max_width <= 1300){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
            new_video_button[i].style.height = '200px';
        }
    }
    else if(max_width > 1300 && max_width <= 1400){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 3) - 1 + 'px';
            new_video_button[i].style.height = '210px';
        }
    }
    else if(max_width > 1400 && max_width <= 1500){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
            new_video_button[i].style.height = '180px';
        }
    }
    else if(max_width > 1500 && max_width <= 1600){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
            new_video_button[i].style.height = '190px';
        }
    }
    else if(max_width > 1600 && max_width <= 1700){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 4) - 1 + 'px';
            new_video_button[i].style.height = '200px';
        }
    }
    else if(max_width > 1700 && max_width <= 1800){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
            new_video_button[i].style.height = '180px';
        }
    }
    else if(max_width > 1800 && max_width <= 1900){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
            new_video_button[i].style.height = '190px';
        }
    }
    else if(max_width > 1900 && max_width <= 2000){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 5) - 1 + 'px';
            new_video_button[i].style.height = '200px';
        }
    }
    else if(max_width > 2000 && max_width <= 2100){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
            new_video_button[i].style.height = '180px';
        }
    }
    else if(max_width > 2100 && max_width <= 2200){
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
            new_video_button[i].style.height = '190px';
        }
    }
    else{
        for(let i = 0; i < new_video_list_li.length; i++){
            new_video_list_li[i].style.width = Math.floor(video_box_width / 6) - 1 + 'px';
            new_video_button[i].style.height = '200px';
        }
    }

    var count = 1;
    const new_profile = document.getElementsByClassName('new_profile');
    for(let i = 0; i < new_video_button.length; i++){
        if(count == 1){
            new_video_button[i].setAttribute('color', 'orange');
            new_profile[i].setAttribute('color', 'orange');
            count++;
        }
        else if(count == 2){
            new_video_button[i].setAttribute('color', 'yellow');
            new_profile[i].setAttribute('color', 'yellow');
            count++;
        }
        else if(count == 3){
            new_video_button[i].setAttribute('color', 'green');
            new_profile[i].setAttribute('color', 'green');
            count++;
        }
        else if(count == 4){
            new_video_button[i].setAttribute('color', 'blue');
            new_profile[i].setAttribute('color', 'blue');
            count++;
        }
        else if(count == 5){
            new_video_button[i].setAttribute('color', 'navy');
            new_profile[i].setAttribute('color', 'navy');
            count++;
        }
        else if(count == 6){
            new_video_button[i].setAttribute('color', 'purple');
            new_profile[i].setAttribute('color', 'purple');
            count = 1;
        }
    }
}