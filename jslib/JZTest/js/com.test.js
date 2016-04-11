$(function () {
    var t_allquestion = [
   {
       "id": 1,
       "question": "是否有以下生活习惯",
       "a1": "长时间保持同一姿势",
       "a2": "缺乏运动",
       "a3": "喜欢高枕",
       "a4": "常常感觉压力大/思虑过度",
       "a5": "颈肩常暴露在潮湿，寒冷的空气中", 
       "i1": 5,
       "i2": 5,
       "i3": 5,
       "i4": 5,
       "i5": 5,
       "in1": "常用电脑，久坐，就站，久低头看书，玩手机等，颈椎长时间处于屈位或特定体位，颈椎键盘的压力增加，颈部即溶长期处于非协调受力状态，可引起颈肩不适，甚至颈椎病，长时间是指一般超过4个小时。",
       "in2": "缺乏运动是加剧颈椎病的推手，有氧运动使气血畅通，无氧运动使肌肉强实（辅助骨骼支撑），拉伸运动令骨正筋柔",
       "in3": "《释名》：“枕，是捡的意思，就是用来匡正颈椎，后来叫项。太高了项就弯曲，令=会令脖子酸痛，不能转动，枕头的高度因人而异，最好是侧卧时恰恰与肩平，在仰卧时也觉得安然舒服。",
       "in4": "肩背与脊椎是人类承受负担的象征，心理上的不堪负重，并不需要伴随生理上的负重劳动，直接便制造出肩背痛和颈椎病来",
       "in5": "环境温度过低或环境潮湿，导致颈椎受风寒之邪，流注经络，致气血运行不畅，不通则痛。"

   },
   {
       "id": 2,
       "question": "你的颈椎是否有如下现象",
       "a1": "转动头颈时发出“咔咔”的声音",
       "a2": "点头 仰头 转头活动范围减小",
       "a3": "颈肩部按压时有明显痛点",
       "a4": "经常落枕",
       "i1": 5,
       "i2": 5,
       "i3": 5,
       "i4": 5,
       "in1": "一年内出现三四次甚至更多便是经常落枕，是颈椎问题的早期信号，说明颈椎周围的肌肉，韧带松弛，或颈椎的骨关节已经非常态。",
       "in2": "关节软骨受损或关节间产生的润滑液少，加大了关节磨损的损耗，容易听到咔咔响声了，如果重复使用此关节容易导致关节炎的发生。",
       "in3": "活动自如的颈椎，慢慢低头可令下巴碰到前胸，慢慢后仰时双眼可以看到天花板，慢慢侧头可令耳朵与肩膀有一拳之隔（不耸肩），左右旋转时可以看见自己的肩头（以上动作不可强行试做），若颈椎退化病变，则活动范围减小。",
       "in4": "明显的压痛点往往出现在颈背衔接处，颈肩交接处。"
   },
   {
       "id": 3,
       "question": "是否有过以下体验",
       "a1": "常常感到颈部沉重/僵硬甚至疼痛",
       "a2": "常常感到肩部沉重/僵硬甚至疼痛",
       "a3": "手指/手臂发麻",
       "a4": "颈部发冷/怕冷",
       "a5": "腰部疼痛",
       "i1": 5,
       "i2": 5,
       "i3": 5,
       "i4": 5,
       "i5": 5,
       "in1": "颈肩背因疲劳受寒等引发的骨骼肌肉病变，形成条索或结节状的紧实硬块，用力按压会产生向远方的扩散疼痛。",
       "in2": "颈肩背因疲劳受寒等引发的骨骼肌肉病变，形成条索或结节状的紧实硬块，用力按压会产生向远方的扩散疼痛。",
       "in3": "由于颈椎退化，从而造成脊柱变型，椎间管狭窄压迫神经根，若压迫第六条神经根，则会造成大拇指的麻木，若压迫第七条神经根则会造成食指、中指、无名指的麻木、若压迫第八条神经根。则会造成小拇指的麻木，严重者更是会造成手部肌肉萎缩，无法握紧东西。",
       "in4": "气血运行不通畅无法将所受湿邪排除",
       "in5": "当颈椎生理曲度发生变化，必然影响整条脊椎、腰背部肌肉。"
   },
   {
       "id": 4,
       "question": "是否因为颈椎病问题引发如下症状",
       "a1": "睡眠质量下降",
       "a2": "脑袋发懵，记忆力减退",
       "a3": "曾因压力引发头痛或颈肩不适时伴随头痛",
       "a4": "曾因颈椎不适引发晕眩/耳鸣/听力下降",
       "a5": "视力减退/视物模糊/眼睛胀痛",
       "a6": "有时会出现心慌，胸闷、喘不上气的情况",
       "i1": 5,
       "i2": 5,
       "i3": 5,
       "i4": 5,
       "i5": 5,
       "i6": 5,
       "in1": "因颈肩问题导致的睡眠质量下降可表现在许多方面：入睡困难、失眠、易醒、多梦等问题。这个可能与疼痛，脑供血不足和植物神经功能紊乱有关。",
       "in2": "颈椎生理弯曲变形，压迫交感和副交感神经，阻碍气血流通，并牵扯肌肉，不但使颈椎产生疼痛，还令脑袋发懵，记忆力减退。",
       "in3": "来自精神的压力或颈肩的气血不畅，会使头部的血液循环受到影响，肌肉也会收缩，持续时间久了，就可能引发肌肉紧张性头痛和枕神经（颈部两侧）痛",
       "in4": "负责听觉及平衡功能的内耳，其血液来源依靠基底动脉的内听支供给，颈部各种疾病情况，常导致颈动脉供血不足而引起眩晕、耳鸣等问题。若颈椎病复发时，即可产生耳鸣，若颈椎病转好，耳鸣也随之消失，就可以确定由颈椎病引起的",
       "in5": "当然视力减退不一定是由颈椎病引起的，但是当颈椎问题导致交感神经受刺激或是颈椎动脉血管受到卡压时往往会影响视力，颈椎问题的改善也会使得视力跟随改善，尤其注意那些伴随颈椎不适出现的视力问题，如果单从眼科去治疗是徒劳无功。",
       "in6": "当颈椎神经后根或颈交神经丛星状神经节（位于前斜角肌）受颈椎关节增生压迫或肌肉损伤痉挛刺激时，会出现心慌，胸闷等症状，久之引发颈心综合症。"
   }];

    var infos = "";
    var scorepos = 0;
    var currentinfo = "";
    $('.data-reload').hide(0);
    var objs = eval(t_allquestion);
    for (var i = 0; i < objs.length; i++) {
        var hs; i == 0 ? hs = "com-show" : hs = "com-hide";
        var html = '<div class="com-test-q ' + hs + '">' +
            '<p class="com-title-q"><span class="com-id-q">' + objs[i].id + '</span> ' + objs[i].question + '</p>' +
            '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i1 + '"></span> ' + objs[i].a1 + '<span data-info="' + objs[i].in1 + '" class="com-id-q-i">!</span></p>' +
            '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i2 + '"></span> ' + objs[i].a2 + '<span data-info="' + objs[i].in2 + '" class="com-id-q-i">!</span></p>' +
            '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i3 + '"></span> ' + objs[i].a3 + '<span data-info="' + objs[i].in3 + '" class="com-id-q-i">!</span></p>' +
            '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i4 + '"></span> ' + objs[i].a4 + '<span data-info="' + objs[i].in4 + '" class="com-id-q-i">!</span></p>';

        if (objs[i].i5 != null) { html += '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i5 + '"></span> ' + objs[i].a5 + '<span data-info="' + objs[i].in5 + '" class="com-id-q-i">!</span></p>' };
        if (objs[i].i6 != null) { html += '<p class="com-aq" ><span class="com-id-q-s" data-inte="' + objs[i].i6 + '"></span> ' + objs[i].a6 + '<span data-info="' + objs[i].in6 + '" class="com-id-q-i">!</span></p>' };
        html += '</div>';
        $('.com-test').append(html);
    }
    $('.com-test').append('<p class="com-aq"><a class="com-aq-submit">完成选择</a></p>');
    $('.com-test').append('<p class="com-aq line"></p>');
    $('.com-test').append('<p class="com-aq alginleft">声明 (提交代表您已经接受以下声明)</p>');
    $('.com-test').append('<p class="com-aq alginleft">当你发生胸闷、胸痛、恶心、呕吐、血压增高、吞咽障碍、视力快速下降、下肢麻木等情况是要及时就医，如果你有吞咽障碍，发生过晕厥，颈椎受过外伤，或是拍照证实有椎管狭窄，颈椎骨刺等情况不适合此应用。</p>');
    $('.com-test').append('<p class="com-aq alginleft">本应用内容不作为诊断和资料的依据，内容及方法仅作为生活保障的咨询建议。如遇不适建议及时就医治疗因心血管疾病的某些症状与颈椎病的一些症状相似，故使用此应用前应排除心血管疾病，以免延误自身病情。</p>');

    $('.com-id-q-s').bind("click", function () {
        if ($(this).text() != "") {
            $(this).text("");
            return;
        }
        $(this).text("√");
    });

    $('.com-aq-submit').live("click", function () {
        $('.com-test-q').hide();
        $('.com-aq').hide();
        $(window).scrollTop(0);
        var inte = getallinte();
        $('.com-test').append('<p class="com-aq res-yourp"><span class="res_all res_20">健康</span><span class="res_all res_40">亚健康</span><span class="res_all res_60">需要警惕</span><span class="res_all res_80">高度患病风险</span><span class="res_all res_100">已出现颈椎病症状</span></p><p class="com-aq com-aq-res-pos"><span class="res_all_pos">▲</span></p>');
        $('.res_all_pos').css("margin-left", scorepos);
        $('.com-test').append('<div class="com-test-q-res"><p>您的得分：<span class="data-result">' + inte + '<span></p>' +
            '<p class="data-tips"></p>' + currentinfo +
            '<p class="com-aq line"></p>' + infos + '</div>');
        $('.data-reload').show(1000);
    });

    function getallinte() {
        var allin = 0;
        $(".com-aq").each(function () {
            var t = $(this).find(".com-id-q-s").text();
            if (t == "√") {
                allin = allin + 5;
                infos += '<div class="infos-div"><p class="infos-ps">您的状况：' + $(this).text().replace("√", "") + '</p><p class="infos-pi">相关知识：' + $(this).find(".com-id-q-i").attr("data-info") + '</p></div>';
            }
        });
        if (allin == 0) allin = 5;
        if (allin == 100) allin = 95;
        allin = 100 - allin;
        if (allin >= 90 && allin <= 100) {
            scorepos = "-660px";
            currentinfo = "<p class='res_info_5'>恭喜你！根据你的回答，目前你的颈椎健康状况良好，而且没有想想颈椎健康的坏习惯，保持良好身姿，常做几个简单的保健动作，并避免着凉，便可以让你的颈椎持续保持灵活、健康。</p>";
        } else if (allin >= 80 && allin <= 89) {
            scorepos = "-450px";
            currentinfo = "<p class='res_info_5'>亚健康你明白吧？就是你的颈椎不是那么健康了</p><p class='res_info_5'>你可能并没有在意偶尔的不舒服，但是如果继续坚持那些错误的习惯，颈肩问题就会逐渐加重。颈肩部肌肉疲劳还是很容易缓解的，进而坏习惯可能会导致颈椎和胸椎关节紊乱，不但令日常活动受限，甚至会影响整体健康，如果能保持日常锻炼，会帮助你的颈椎恢复健康状态。</p>";

        } else if (allin >= 70 && allin <= 79) {
            currentinfo = "<p class='res_info_5'>这种程度的颈椎不适最不容易引起重视，因为一切都在可忍受范围，但若不注意保养，很快就会加重，会从肌肉的不适发展成为颈椎关节的错位和紊乱，甚至影响颈动脉甚至颈神经，从而妨碍日常活动、经常落枕、甚至令睡眠不佳、头昏头痛，保证每天定时的对颈椎进行适合的锻炼，则会缓解目前的颈椎症状。</p>";
            scorepos = "-200px";
        } else if (allin >= 60 && allin <= 69) {
            currentinfo = "<p class='res_info_5'>颈椎不适已经成为你的困扰，出现了肌肉劳损和关节紊乱的状况，妨碍了正常的工作生活，令你成为换上颈椎病的高危人群，若不注意保护，不仅目前的症状会加重，还可能因颈动脉和神经受到压迫发生头晕乏力、情绪焦躁、视力减退，颈椎键盘突出或骨质增生等问题，请务必通过日常的颈椎锻炼保护你的颈椎</p>";
            scorepos = "-30px";
        } else if (allin < 60) {
            currentinfo = "<p class='res_info_5'>你自己应该感觉到颈椎病的危害了。</p><p class='res_info_5'>你的颈椎问题可能不仅仅表现在颈肩的疼痛上，你的颈动脉或是颈神经很可能已经受到了压迫，不管不顾只会让问题更加严重，逐步出现睡眠质量下降、头昏头痛、恶心胸闷等问题。其实不必仅仅依赖于医疗器械，最有帮助的反而是简单的日常活动，只要坚持就一定会有改善。</p>";
            scorepos = "380px";
        }
        return allin;
    }

    $('.com-id-q-i').hover(
        function () {
            $('.float-div').text($(this).attr("data-info"));
            $('.float-div').css("left", (parseInt($(this).offset().left) - 260) + "px");
            $('.float-div').css("top", $(this).offset().top + "px");
            $('.float-div').show();
        }, function () {
            $('.float-div').hide();
        });



});