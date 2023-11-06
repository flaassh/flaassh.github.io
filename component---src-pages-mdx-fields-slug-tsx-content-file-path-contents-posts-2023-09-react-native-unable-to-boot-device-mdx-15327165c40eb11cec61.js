"use strict";(self.webpackChunkflash=self.webpackChunkflash||[]).push([[468],{3398:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(1151),c=t(7294),i=t.p+"static/boot-7-8a1ff8b4c6772854c39c66614de85ff4.webp";function o(e){const a=Object.assign({span:"span",p:"p",hr:"hr",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},(0,n.a)(),e.components);return c.createElement(c.Fragment,null,c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 530px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d11db51c6197afc62acb4312f1aeecd9/c2b64/boot-0.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 76.27906976744185%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQAwCdASoUAA8APtFUo0uoJKMhsAgBABoJYgCdACFM0+J8mrHV0AAA/tjXeqULKUCad1iiJo1eI1L+1WTIVkrTpCMcn+kv27DCgAZt2r9+KHSohmDhyeh8ImrBnbj+2+V2i7RpgAA=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 0"\n        title=""\n        src="/static/d11db51c6197afc62acb4312f1aeecd9/c2b64/boot-0.webp"\n        srcset="/static/d11db51c6197afc62acb4312f1aeecd9/4bbe2/boot-0.webp 215w,\n/static/d11db51c6197afc62acb4312f1aeecd9/866c5/boot-0.webp 430w,\n/static/d11db51c6197afc62acb4312f1aeecd9/c2b64/boot-0.webp 530w"\n        sizes="(max-width: 530px) 100vw, 530px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.p,null,"오늘은 react-native 0.7 버전 이후에 ios 시뮬레이터를 실행시키면 발생하는 unable to boot device in current state: Booted 오류를 해결하는 방법에 대해 알아봐요."),"\n",c.createElement(a.p,null,"오류가 나는 이유부터 알아보자면 시뮬레이터를 실행시키기 위해 터미널을 실행시켜야 하는데 해당 권한이 존재하지 않아서 발생하는 문제에요."),"\n",c.createElement(a.p,null,"그럼 이제 해결 방법에 대해 알아볼까요?"),"\n",c.createElement(a.hr),"\n",c.createElement(a.h2,{id:"1-해결-방법",style:{position:"relative"}},c.createElement(a.a,{href:"#1-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95","aria-label":"1 해결 방법 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 해결 방법"),"\n",c.createElement(a.h3,{id:"1-1-프로젝트-폴더-node_modules-열기",style:{position:"relative"}},c.createElement(a.a,{href:"#1-1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%B4%EB%8D%94-node_modules-%EC%97%B4%EA%B8%B0","aria-label":"1 1 프로젝트 폴더 node_modules 열기 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1. 프로젝트 폴더 node_modules 열기"),"\n",c.createElement(a.p,null,"현재 프로젝트의 폴더를 열어서 node_modules 폴더를 열어주세요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9ba5d1c5c7075b37ea268fc84347bc0c/8aa17/boot-1.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.697674418604656%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAAAQBACdASoUAAoAPtFUo0uoJKMhsAgBABoJZQCw7Yuayj2O58/d+/lQAAD+5QOj8+7Abdb582xE3iVFvYEs19ntpNoCLdcXPnh/1kP50ECsOwGPMP3ykftWSxUhxnL2Tq2APlup/z8a0Ame9jYDPtEaAGLLAU2Uwtv75+ZGDS27k+IBErj++WZjOr5Cu9m4YAA=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 1"\n        title=""\n        src="/static/9ba5d1c5c7075b37ea268fc84347bc0c/31b17/boot-1.webp"\n        srcset="/static/9ba5d1c5c7075b37ea268fc84347bc0c/4bbe2/boot-1.webp 215w,\n/static/9ba5d1c5c7075b37ea268fc84347bc0c/866c5/boot-1.webp 430w,\n/static/9ba5d1c5c7075b37ea268fc84347bc0c/31b17/boot-1.webp 860w,\n/static/9ba5d1c5c7075b37ea268fc84347bc0c/e027f/boot-1.webp 1290w,\n/static/9ba5d1c5c7075b37ea268fc84347bc0c/8aa17/boot-1.webp 1376w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-2-react-native-폴더-열기",style:{position:"relative"}},c.createElement(a.a,{href:"#1-2-react-native-%ED%8F%B4%EB%8D%94-%EC%97%B4%EA%B8%B0","aria-label":"1 2 react native 폴더 열기 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2. react-native 폴더 열기"),"\n",c.createElement(a.p,null,"node_modules 폴더 안에서 react-native 폴더를 찾아서 열어주세요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9914f206f8ff5ca9f4cc479585738e62/7fa3c/boot-2.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 62.7906976744186%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAACwBACdASoUAA0APtFUo0uoJKMhsAgBABoJYwCdMoGv/jDoM/pwKqKTM3HONg9AAP7PX9yQshMPhVyplP6WZhxDXrGQ8Je9e8HF3Pt2hbY9mr9Dq+LQQ9aIZ91e533Y6ps8LbZc/z/8oux7ZlazKj2/FE60qyvZ4ksGXBAtuEcFmBiL5wiwu31SSBtQEyytXK4XSjUuSrEMD8ib6b93cGWwIjcSbbO6VXyh06f5Y9eNfvb3IUs/4AAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 2"\n        title=""\n        src="/static/9914f206f8ff5ca9f4cc479585738e62/31b17/boot-2.webp"\n        srcset="/static/9914f206f8ff5ca9f4cc479585738e62/4bbe2/boot-2.webp 215w,\n/static/9914f206f8ff5ca9f4cc479585738e62/866c5/boot-2.webp 430w,\n/static/9914f206f8ff5ca9f4cc479585738e62/31b17/boot-2.webp 860w,\n/static/9914f206f8ff5ca9f4cc479585738e62/e027f/boot-2.webp 1290w,\n/static/9914f206f8ff5ca9f4cc479585738e62/7fa3c/boot-2.webp 1336w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-3-scripts-폴더-열기",style:{position:"relative"}},c.createElement(a.a,{href:"#1-3-scripts-%ED%8F%B4%EB%8D%94-%EC%97%B4%EA%B8%B0","aria-label":"1 3 scripts 폴더 열기 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-3. scripts 폴더 열기"),"\n",c.createElement(a.p,null,"./node_modules/react-native 폴더 안에서 scripts 폴더를 찾아서 열어주세요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f8432eabf3a02c4e0f3ca95d6fb81841/83135/boot-3.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 64.65116279069768%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAACQBACdASoUAA0APtFUo0uoJKMhsAgBABoJZQDCn8GJ/i1QW+z+93ncD7rlEkgA/tmrrLegSlzazEQ2tXhuccnrldHBEHwHzs02lcTjF+hsT2FLgIPerl6IBifRDl1JTwLCIK7KzAkfXKAzAZW+U2YICe/Geok3KQgBUSWQpP+RjLb9t+J6uNpNMgzFTUN5cvt/DJvjUmbJRAo3PifZBTlFWCeFKOUHRecwggnO3xeIUoQsQpQAAAAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 3"\n        title=""\n        src="/static/f8432eabf3a02c4e0f3ca95d6fb81841/31b17/boot-3.webp"\n        srcset="/static/f8432eabf3a02c4e0f3ca95d6fb81841/4bbe2/boot-3.webp 215w,\n/static/f8432eabf3a02c4e0f3ca95d6fb81841/866c5/boot-3.webp 430w,\n/static/f8432eabf3a02c4e0f3ca95d6fb81841/31b17/boot-3.webp 860w,\n/static/f8432eabf3a02c4e0f3ca95d6fb81841/e027f/boot-3.webp 1290w,\n/static/f8432eabf3a02c4e0f3ca95d6fb81841/83135/boot-3.webp 1306w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-4-launchpackagercommand-파일-다른-프로그램으로-열기",style:{position:"relative"}},c.createElement(a.a,{href:"#1-4-launchpackagercommand-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EB%A5%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%9C%BC%EB%A1%9C-%EC%97%B4%EA%B8%B0","aria-label":"1 4 launchpackagercommand 파일 다른 프로그램으로 열기 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-4. launchPackager.command 파일 다른 프로그램으로 열기"),"\n",c.createElement(a.p,null,"./node_modules/react-native/scripts 폴더 안에서 launchPackager.command 파일을 우클릭해서 아래 이미지와 같이 다른 파일로 열기를 클릭해요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4e57cc4c6961b030c3860e191c62327e/79349/boot-4.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 58.6046511627907%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAwCdASoUAAwAPtFUo0uoJKMhsAgBABoJZQAAW/GdfY7Z1V62vjl4AP7c2jWFIXEyQhA5HWOAGf5MpGUfVSiYgmSEmfjnesxvjbRHkhHLIKxFo8SyhiO3Mdh7jj9BXmsfPwAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 4"\n        title=""\n        src="/static/4e57cc4c6961b030c3860e191c62327e/31b17/boot-4.webp"\n        srcset="/static/4e57cc4c6961b030c3860e191c62327e/4bbe2/boot-4.webp 215w,\n/static/4e57cc4c6961b030c3860e191c62327e/866c5/boot-4.webp 430w,\n/static/4e57cc4c6961b030c3860e191c62327e/31b17/boot-4.webp 860w,\n/static/4e57cc4c6961b030c3860e191c62327e/e027f/boot-4.webp 1290w,\n/static/4e57cc4c6961b030c3860e191c62327e/9d85b/boot-4.webp 1720w,\n/static/4e57cc4c6961b030c3860e191c62327e/79349/boot-4.webp 2264w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-5-itermapp으로-앱-열기",style:{position:"relative"}},c.createElement(a.a,{href:"#1-5-itermapp%EC%9C%BC%EB%A1%9C-%EC%95%B1-%EC%97%B4%EA%B8%B0","aria-label":"1 5 itermapp으로 앱 열기 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-5. iTerm.app으로 앱 열기"),"\n",c.createElement(a.p,null,"아래 이미지처럼 iTerm.app으로 앱을 설정하고 Always Open With 체크 박스를 클릭한 후 열기를 클릭해요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/d90b2/boot-5.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.81395348837209%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwAwCdASoUAAsAPtFUpEuoJKOhsAgBABoJYwAAXAY7W7nIUvz0qE4AAP7jVhCgw5jlQCuDr4j20xpqZviaML2UTPRC2EGWSGmSK/x0g/AKhp3xDuiSAHyBvxRsTW4Q8dSTdxHmoPliuMH0AAA=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 5"\n        title=""\n        src="/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/31b17/boot-5.webp"\n        srcset="/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/4bbe2/boot-5.webp 215w,\n/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/866c5/boot-5.webp 430w,\n/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/31b17/boot-5.webp 860w,\n/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/e027f/boot-5.webp 1290w,\n/static/6b8aff7ecd450c97b00e50ca7a1f8b4a/d90b2/boot-5.webp 1590w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-6-iterm-앱-확인",style:{position:"relative"}},c.createElement(a.a,{href:"#1-6-iterm-%EC%95%B1-%ED%99%95%EC%9D%B8","aria-label":"1 6 iterm 앱 확인 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-6. iTerm 앱 확인"),"\n",c.createElement(a.p,null,"위에서 열기를 클릭하면 아래와 같이 iTerm이 실행되는 걸 확인하고 창을 꺼주세요."),"\n",c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/587169d3e0a9f2b91a7966b43aab06f2/e3770/boot-6.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 67.44186046511628%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABwAwCdASoUAA0APtFUo0uoJKMhsAgBABoJZQC7ABuliBFSs0AA/uvndZqUENg0dxEI5K6qegyGv1fhpSt876zGe1QAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="boot 6"\n        title=""\n        src="/static/587169d3e0a9f2b91a7966b43aab06f2/31b17/boot-6.webp"\n        srcset="/static/587169d3e0a9f2b91a7966b43aab06f2/4bbe2/boot-6.webp 215w,\n/static/587169d3e0a9f2b91a7966b43aab06f2/866c5/boot-6.webp 430w,\n/static/587169d3e0a9f2b91a7966b43aab06f2/31b17/boot-6.webp 860w,\n/static/587169d3e0a9f2b91a7966b43aab06f2/e027f/boot-6.webp 1290w,\n/static/587169d3e0a9f2b91a7966b43aab06f2/e3770/boot-6.webp 1292w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",c.createElement(a.h3,{id:"1-7-다시-앱-실행",style:{position:"relative"}},c.createElement(a.a,{href:"#1-7-%EB%8B%A4%EC%8B%9C-%EC%95%B1-%EC%8B%A4%ED%96%89","aria-label":"1 7 다시 앱 실행 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-7. 다시 앱 실행"),"\n",c.createElement(a.p,null,"원하시는 방식으로 앱을 실행시켜 주세요."),"\n",c.createElement(a.pre,null,c.createElement(a.code,{className:"language-bash"},"npm run ios\n\n# or \n# yarn ios\n")),"\n",c.createElement("img",{src:i,style:{width:250,margin:"auto",display:"block",marginBottom:20}}),"\n",c.createElement(a.hr),"\n",c.createElement(a.h2,{id:"정리하며",style:{position:"relative"}},c.createElement(a.a,{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EB%A9%B0","aria-label":"정리하며 permalink",className:"anchor before"},c.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"정리하며"),"\n",c.createElement(a.p,null,"오늘은 react-native 0.7 버전 이후에 ios 시뮬레이터를 실행시키면 발생하는 unable to boot device in current state: Booted 오류를 해결하는 방법에 대해 알아봤어요."),"\n",c.createElement(a.p,null,"이미지와 함께 보면서 따라오면 큰 어려움 없이 해결하실 수 있으니 차근차근 따라해서 해결하셨으면 좋겠어요."))}var l=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.a)(),e.components);return a?c.createElement(a,e,c.createElement(o,e)):o(e)}},5577:function(e,a,t){t.a(e,(async function(e,n){try{t.r(a),t.d(a,{default:function(){return x}});var c=t(3398),i=t(7294),o=t(394),l=t(1151),s=t(3476),r=t(2742),b=t(4764),p=t(4428),d=t(6337),m=t(7526),g=e([m]);m=(g.then?(await g)():g)[0];const f=o.default.div.withConfig({displayName:"mdxfields__slug__BodyContainer",componentId:"sc-13a3pz0-0"})(["width:100%;"]),u=o.default.div.withConfig({displayName:"mdxfields__slug__ContentContainer",componentId:"sc-13a3pz0-1"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],p.Z.custom(1199),p.Z.custom(767)),w=o.default.span.withConfig({displayName:"mdxfields__slug__CategoryLabel",componentId:"sc-13a3pz0-2"})(["color:black;font-size:0.875em;font-weight:600;margin-bottom:8px;"]),A=o.default.h1.withConfig({displayName:"mdxfields__slug__TitleLabel",componentId:"sc-13a3pz0-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],b.Z.viloet[6]),v=o.default.div.withConfig({displayName:"mdxfields__slug__MdxContainer",componentId:"sc-13a3pz0-4"})(["width:100%;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor{left:-15px;}}.anchor{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],b.Z.viloet[6],p.Z.custom(767),b.Z.viloet[6],b.Z.gray[5],b.Z.viloet[5],b.Z.viloet[7],b.Z.gray[2]),y=o.default.div.withConfig({displayName:"mdxfields__slug__FooterContainer",componentId:"sc-13a3pz0-5"})(["width:100%;"]),E={h2:e=>i.createElement("div",{className:"h2-div"},i.createElement("h2",e)),code:m.Z};function B(e){let{data:a,children:t}=e;return i.createElement(s.Z,null,i.createElement(r.Z,null),i.createElement(f,null,i.createElement(u,null,void 0!==a.mdx.frontmatter.category&&i.createElement(w,null,a.mdx.frontmatter.category),i.createElement(A,null,a.mdx.frontmatter.title),i.createElement(v,null,i.createElement(l.Z,{components:E},t)))),i.createElement(y,null,i.createElement(d.Z,null)))}function x(e){return i.createElement(B,e,i.createElement(c.Z,e))}n()}catch(h){n(h)}}))}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-contents-posts-2023-09-react-native-unable-to-boot-device-mdx-15327165c40eb11cec61.js.map