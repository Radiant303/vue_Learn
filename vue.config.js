module.exports = {
    pages:{
        index:{
            entry:'src/main.js',
        }
    },
    transpileDependencies: true,
    lintOnSave:false,
    // 配置代理服务器（方式一）
/*     devServer:{
        proxy:'http://localhost:5000'
    }  */
    // 配置代理服务器（方式二）
    devServer:{
        proxy:{
            '/getStudent':{
                target:'http://localhost:5000',
                pathRewrite:{'^/getStudent':''},
                ws:true,// 代理websocket
                changeOrigin:true // 改变源地址（说谎），请求头中host值
            },
            '/getCar':{
                target:'http://localhost:5001',
                pathRewrite:{'^/getCar':''},
                ws:true,// 代理websocket
                changeOrigin:true // 改变源地址（说谎），请求头中host值
            }
        }
    } 
}
