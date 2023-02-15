$(function () {
    SYNOSSO.init({
        oauthserver_url: 'http://qunhui.bt.clovernet.top',
        app_id: 'eeda593b733827a21232294a6fb42925',
        redirect_uri: 'http://172.29.192.1:59070/index.html',
        callback: authCallback,
    })
    
    function authCallback(response) {
        if ('not_login' === response.status) { //user not login
            if(Cookies.get('access_token')) {
                if (location.pathname == "/" || location.pathname == "/index.html"){
                    location.href = 'edit.html'
                    return
                }
            }else {
                SYNOSSO.login();
            }
        } else if ('login' === response.status) {
            Cookies.set('access_token', response.access_token)
            window.location.href = 'edit.html';
        } else {
            alert("加载登录模块失败");
        }
    }
})