var dataJson;

function getQuote() {
    _czc.push(["_trackEvent", "舔狗日记", "再来一段", "舔狗日记再来一段"]);

    // console.log(dataJson)
    var date = new Date();
    $('#date').text((date.getMonth() + 1) + '月' + date.getDate() + '日 晴');
    if (dataJson && dataJson !== undefined) {
        getRandomQuote();
    } else {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: './api',
            success: function (data) {
                if (data && data !== undefined && data.data !== undefined) {
                    dataJson = data.data;
                    getRandomQuote()
                } else {
                    console.log('接口请求失败');
                    setDefaultContent()
                }

            }
        });
    }
}

function getRandomQuote() {
    var arrLen = dataJson.length;
    if (arrLen > 0) {
        var content = dataJson[Math.floor(Math.random() * arrLen)]
        console.log()

        if (content !== "") {
            $('#quote').text(content);
        } else {
            setDefaultContent()
        }
    } else {
        console.log('暂无数据');
        setDefaultContent()
    }
}

function setDefaultContent() {
    $('#author').text("今天我观战了一天你和别人打游戏，你们玩的很开心，我给你发了200多条消息，你说没流量就不回了，晚上发说说没有人爱你，我连滚带爬评论了句有我在。你把我拉黑了，我给你打电话也无人接听。对不起我不该打扰你。我求求你再给我一次当好友的机会吧！");

}

$(document).ready(function () {
    getQuote();
});