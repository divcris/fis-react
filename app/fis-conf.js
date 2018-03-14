/**
 * @file FIS 配置
 * @author
 */
//fis3-enable
fis.config.set('namespace', 'app');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);



// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
    baseUrl: '/client/page',
    extList: ['.js', '.jsx']
});

fis.match('/node_modules/**.{js,jsx}', {
    isMod: true
});

fis.match('/client/node_modules/**.{js,jsx}', {
    isMod: true
});

fis.match('/client/page/static/js/**.js', {
    isMod: true
});




fis.match('/app/client/{actions,components,middleware,page,routes,stores,tbui,utils}/**.{js,es,jsx,ts,tsx}',{
    parser: fis.plugin('typescript', {
        module: 1,
        target: 0
    }),
    isJsXLike: true,
    isMod: true
});

fis.unhook('node_modules');

fis.hook('node_modules', {
    shimProcess: false
});

// fis.match('::package', {  
//     postpackager: fis.plugin('loader', {
//       resourceType: 'commonJs',
//       useInlineMap: true
//     })
// });


// if (fis.IS_FIS3) {
    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
    fis.media('debug-prod').match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
// }
// else {

//     fis.config.set('deploy', {
//         debug: {
//             to: '/',
//             // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
//             receiver: 'http://127.0.0.1:8085/yog/upload'
//         }
//     });
// }
