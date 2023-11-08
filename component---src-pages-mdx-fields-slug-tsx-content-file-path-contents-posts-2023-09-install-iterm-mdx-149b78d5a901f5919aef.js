"use strict";(self.webpackChunkflash=self.webpackChunkflash||[]).push([[612],{3574:function(e,t,a){var n=a(1151),l=a(7294);function r(e){const t=Object.assign({p:"p",hr:"hr",h2:"h2",a:"a",span:"span",pre:"pre",code:"code",h3:"h3"},(0,n.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"오늘은 mac 필수 앱인 iTerm2를 설치하고 기본 터미널과 다르게 알록달록하게 테마를 적용해봐요."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"1-iterm2-설치",style:{position:"relative"}},l.createElement(t.a,{href:"#1-iterm2-%EC%84%A4%EC%B9%98","aria-label":"1 iterm2 설치 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. iTerm2 설치"),"\n",l.createElement(t.p,null,"설치는 brew로 해줄게요."),"\n",l.createElement(t.p,null,"만약 Homebrew가 설치되어 있지 않으시면 ",l.createElement(t.a,{href:"/posts/2023/09/install-homebrew"},"이 포스팅"),"을 따라서 설치하고 돌아와주세요."),"\n",l.createElement(t.p,null,"이제 아래 명령어를 터미널에 입력해서 설치해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"brew install iterm2\n")),"\n",l.createElement(t.h2,{id:"2-oh-my-zsh-설치",style:{position:"relative"}},l.createElement(t.a,{href:"#2-oh-my-zsh-%EC%84%A4%EC%B9%98","aria-label":"2 oh my zsh 설치 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. oh-my-zsh 설치"),"\n",l.createElement(t.p,null,"iterm2에서 여러 가지 테마를 적용하거나 자동완성 등의 기능을 적용하기 위해 zsh(Z shell)의 플러그인 중 하나인 oh-my-zsh를 설치해요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n')),"\n",l.createElement(t.h2,{id:"3-iterm-컬러-스킴-및-설정-변경",style:{position:"relative"}},l.createElement(t.a,{href:"#3-iterm-%EC%BB%AC%EB%9F%AC-%EC%8A%A4%ED%82%B4-%EB%B0%8F-%EC%84%A4%EC%A0%95-%EB%B3%80%EA%B2%BD","aria-label":"3 iterm 컬러 스킴 및 설정 변경 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. iterm 컬러 스킴 및 설정 변경"),"\n",l.createElement(t.h3,{id:"3-1-컬러-스킴-선택",style:{position:"relative"}},l.createElement(t.a,{href:"#3-1-%EC%BB%AC%EB%9F%AC-%EC%8A%A4%ED%82%B4-%EC%84%A0%ED%83%9D","aria-label":"3 1 컬러 스킴 선택 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-1. 컬러 스킴 선택"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://iterm2colorschemes.com/"},"공식 사이트"),"에서 여러 컬러 스킴들을 확인 후 다운로드 받으세요."),"\n",l.createElement(t.p,null,"저는 개인적으로 파스텔톤이 이뻐서 아래의 Snazzy 컬러 스킴을 다운로드해서 사용 중이에요."),"\n",l.createElement("a",{download:"Snazzy.itermcolors",href:"/files/2023/09/Snazzy.itermcolors"},"Snazzy 테마 다운로드"),"\n",l.createElement(t.p,null,"어떤 테마든 다운로드 받으셨다면 더블 클릭하시면 자동으로 iterm2의 iTerm Color Preset에 추가되요."),"\n",l.createElement(t.p,null,"확인하기 위해 iTerm2를 실행시킨 후 (⌘ + ,)를 함께 눌러주세요."),"\n",l.createElement(t.p,null,"그리고 나온 아래와 같은 창에서 Profile -> Colors -> Color Presets... -> Snazzy(또는 다운받은 컬러 스킴)를 선택해주세요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a23a2fc366305b47b914cc2756c695ce/62ac3/iterm-0.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84.65116279069768%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwBACdASoUABEAPtFcqE4oJSQiKAqpABoJYwDLLBEUITQzwIYCMrJeVbAA/uMyJSoejSrwOPce3owMo54fPEIFBCgDxIfrCYH1yq3SSZeatPoahU1z4P+tbCVU6W6PfanQ/g+ldGANNAAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="iterm2 color presets"\n        title=""\n        src="/static/a23a2fc366305b47b914cc2756c695ce/31b17/iterm-0.webp"\n        srcset="/static/a23a2fc366305b47b914cc2756c695ce/4bbe2/iterm-0.webp 215w,\n/static/a23a2fc366305b47b914cc2756c695ce/866c5/iterm-0.webp 430w,\n/static/a23a2fc366305b47b914cc2756c695ce/31b17/iterm-0.webp 860w,\n/static/a23a2fc366305b47b914cc2756c695ce/e027f/iterm-0.webp 1290w,\n/static/a23a2fc366305b47b914cc2756c695ce/9d85b/iterm-0.webp 1720w,\n/static/a23a2fc366305b47b914cc2756c695ce/62ac3/iterm-0.webp 1850w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h3,{id:"3-2-한글-깨짐-방지",style:{position:"relative"}},l.createElement(t.a,{href:"#3-2-%ED%95%9C%EA%B8%80-%EA%B9%A8%EC%A7%90-%EB%B0%A9%EC%A7%80","aria-label":"3 2 한글 깨짐 방지 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-2. 한글 깨짐 방지"),"\n",l.createElement(t.p,null,"터미널에서 한글이 깨지는 경우가 많이 발생하는데 아래와 같이 설정해서 한글 깨짐을 방지해주세요."),"\n",l.createElement(t.p,null,"위와 같은 창에서 Profile -> Text -> Unicode normalization form: NFC 로 변경해주세요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6d2d7bb8f431c3cafda6d35b8a75b391/9901c/iterm-1.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 51.162790697674424%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQBACdASoUAAoAPtFUo0uoJKMhsAgBABoJZwDA3CHfIP9AeB5a4lAwAAD+6RHMfnhRE7VgCZXMmqbYfXrEZIrycmAAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="iterm2 한글 깨짐 방지"\n        title=""\n        src="/static/6d2d7bb8f431c3cafda6d35b8a75b391/31b17/iterm-1.webp"\n        srcset="/static/6d2d7bb8f431c3cafda6d35b8a75b391/4bbe2/iterm-1.webp 215w,\n/static/6d2d7bb8f431c3cafda6d35b8a75b391/866c5/iterm-1.webp 430w,\n/static/6d2d7bb8f431c3cafda6d35b8a75b391/31b17/iterm-1.webp 860w,\n/static/6d2d7bb8f431c3cafda6d35b8a75b391/e027f/iterm-1.webp 1290w,\n/static/6d2d7bb8f431c3cafda6d35b8a75b391/9d85b/iterm-1.webp 1720w,\n/static/6d2d7bb8f431c3cafda6d35b8a75b391/9901c/iterm-1.webp 1868w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h3,{id:"3-3-상태바-추가",style:{position:"relative"}},l.createElement(t.a,{href:"#3-3-%EC%83%81%ED%83%9C%EB%B0%94-%EC%B6%94%EA%B0%80","aria-label":"3 3 상태바 추가 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-3. 상태바 추가"),"\n",l.createElement(t.p,null,"위와 같은 창에서 Profile -> Session -> Status bar enabled를 체크해주시고 오른쪽의 Configure Status Bar를 클릭해주세요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/afb47a7646bda9c69b72c6edc8fae119/ffcc2/iterm-2.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 63.25581395348837%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAABQAwCdASoUAA0APtFUo0uoJKMhsAgBABoJZwC/OCHfZVEkAAD+6RHNOEraWtfYKDlcuxHSqwOf4gbk/dZlcltHWC2vF0mu2JgAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="iterm2 status bar"\n        title=""\n        src="/static/afb47a7646bda9c69b72c6edc8fae119/31b17/iterm-2.webp"\n        srcset="/static/afb47a7646bda9c69b72c6edc8fae119/4bbe2/iterm-2.webp 215w,\n/static/afb47a7646bda9c69b72c6edc8fae119/866c5/iterm-2.webp 430w,\n/static/afb47a7646bda9c69b72c6edc8fae119/31b17/iterm-2.webp 860w,\n/static/afb47a7646bda9c69b72c6edc8fae119/e027f/iterm-2.webp 1290w,\n/static/afb47a7646bda9c69b72c6edc8fae119/9d85b/iterm-2.webp 1720w,\n/static/afb47a7646bda9c69b72c6edc8fae119/ffcc2/iterm-2.webp 1826w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"그럼 아래와 같은 창이 나오는데 터미널에 표시됐으면 하는 컴포넌트를 클릭하시고 확인을 눌러주세요."),"\n",l.createElement(t.p,null,"저는 CPU Utilization, Memory Utilization, Nework Throughput, git state 총 네 개를 사용하고 있어요."),"\n",l.createElement(t.p,null,"하단에 Auto-Rainbow에서 색 테마를 선택할 수 있으니 좋아하시는 테마를 선택해주세요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/3eebe6e25f2367ec0b91de4dc1d8646e/18e83/iterm-3.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.27906976744186%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQAwCdASoUAAsAPtFUo0uoJKMhsAgBABoJZQAAg++Fv0poAAD+71ZTr0gCcPb1ZWJWnteJxZmuBxTer58HxJ0ReJYNMJmcAwWCNpdIYD/7ApdLJImeHezQAAA=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="iterm2 status bar components"\n        title=""\n        src="/static/3eebe6e25f2367ec0b91de4dc1d8646e/31b17/iterm-3.webp"\n        srcset="/static/3eebe6e25f2367ec0b91de4dc1d8646e/4bbe2/iterm-3.webp 215w,\n/static/3eebe6e25f2367ec0b91de4dc1d8646e/866c5/iterm-3.webp 430w,\n/static/3eebe6e25f2367ec0b91de4dc1d8646e/31b17/iterm-3.webp 860w,\n/static/3eebe6e25f2367ec0b91de4dc1d8646e/e027f/iterm-3.webp 1290w,\n/static/3eebe6e25f2367ec0b91de4dc1d8646e/9d85b/iterm-3.webp 1720w,\n/static/3eebe6e25f2367ec0b91de4dc1d8646e/18e83/iterm-3.webp 1830w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"저는 상태창이 하단에 있는게 좋아서 아래 이미지와 같이 수정했는데 이건 개인 취향이니까 마음껏 변경해주세요."),"\n",l.createElement(t.p,null,"Appearance -> General -> Status bar location 에서 변경하실 수 있어요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ea3cff38324c726661d83b604545d5bb/c6231/iterm-4.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 36.74418604651163%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAwCdASoUAAcAPtFUpEuoJKOhsAgBABoJZwDG9Bgf1Hx9E50AAP7jwxUuIPNNCiCHG9f4ufOlo6ADshsOC5AAAAA=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="iterm2 status bar location"\n        title=""\n        src="/static/ea3cff38324c726661d83b604545d5bb/31b17/iterm-4.webp"\n        srcset="/static/ea3cff38324c726661d83b604545d5bb/4bbe2/iterm-4.webp 215w,\n/static/ea3cff38324c726661d83b604545d5bb/866c5/iterm-4.webp 430w,\n/static/ea3cff38324c726661d83b604545d5bb/31b17/iterm-4.webp 860w,\n/static/ea3cff38324c726661d83b604545d5bb/e027f/iterm-4.webp 1290w,\n/static/ea3cff38324c726661d83b604545d5bb/c6231/iterm-4.webp 1572w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h2,{id:"4-플러그인-설치",style:{position:"relative"}},l.createElement(t.a,{href:"#4-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%84%A4%EC%B9%98","aria-label":"4 플러그인 설치 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. 플러그인 설치"),"\n",l.createElement(t.p,null,"이제 oh-my-zsh의 가장 강점인 플러그인들을 설치해봐요."),"\n",l.createElement(t.p,null,"저는 명령어 하이라이팅 플러그인(",l.createElement(t.a,{href:"https://github.com/zsh-users/zsh-syntax-highlighting"},"zsh-syntax-highlighting"),")과 자동완성 플러그인(",l.createElement(t.a,{href:"https://github.com/zsh-users/zsh-autosuggestions"},"zsh-autosuggestions"),")을 사용해요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"# zsh-syntax-highlighting\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n\n# zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions\n")),"\n",l.createElement(t.p,null,"다운로드가 완료되면 ~/.zshrc 파일을 열어서 수정해줘요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"vi ~/.zshrc\n")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"# ~/.zshrc\n# ...\n\nplugins=(\n    # ...\n    zsh-syntax-highlighting\n    zsh-autosuggestions\n    # ...\n)\n\n# ...\n")),"\n",l.createElement(t.p,null,"수정을 완료한 후 아래 명령어로 수정을 적용해줘요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"source ~/.zshrc\n")),"\n",l.createElement(t.h2,{id:"5-테마-선택",style:{position:"relative"}},l.createElement(t.a,{href:"#5-%ED%85%8C%EB%A7%88-%EC%84%A0%ED%83%9D","aria-label":"5 테마 선택 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"5. 테마 선택"),"\n",l.createElement(t.p,null,"iterm2 프롬프트에는 ",l.createElement(t.a,{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes"},"다양한 테마"),"가 존재하고 해요."),"\n",l.createElement(t.p,null,"가장 유명한 테마들에는\n",l.createElement(t.a,{href:"https://github.com/romkatv/powerlevel10k"},"powerlevel10k"),",\n",l.createElement(t.a,{href:"https://spaceship-prompt.sh/"},"spaceship"),",\n",l.createElement(t.a,{href:"https://github.com/sindresorhus/pure"},"pure")," 등 여러 종류가 있지만 그 중 저는  성능이 가장 좋은 powerlevel10k를 사용하고 있어요."),"\n",l.createElement(t.p,null,"저는 powerlevel10k를 설치해서 적용해볼게요. 다른 테마들도 비슷한 방식으로 설치하고 적용하면 되요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k\n")),"\n",l.createElement(t.p,null,"설치 완료 후 ~/.zshrc 파일을 열어서 ZSH_THEME 항목을 수정해요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"vi ~/.zshrc\n")),"\n",l.createElement(t.p,null,"아래와 같이 ZSH_THEME 부분을 수정해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'# ~/.zshrc\n\n# ...\n\nZSH_THEME="powerlevel10k/powerlevel10k"\n\n# ...\n')),"\n",l.createElement(t.p,null,"수정 완료 후에는 아래와 같이 수정 내용을 적용해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"source ~/.zshrc\n")),"\n",l.createElement(t.p,null,"위 명령어를 실행한 후 새로 탭을 열면, 대화형 설정창이 뜨고 상세하게 테마를 설정할 수 있어요."),"\n",l.createElement(t.p,null,"만약, 다시 설정하고 싶으면 p10k configure를 입력해주세요."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"정리하며",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EB%A9%B0","aria-label":"정리하며 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"정리하며"),"\n",l.createElement(t.p,null,"오늘은 iTerm2 앱 설치와 알록달록한 테마와 편리한 플러그인들을 추가하는 방법에 대해 알아봤어요."),"\n",l.createElement(t.p,null,"제가 사용하고 있는 것들이라 100% 강추하는 것들이어서 여러분들한테도 도움이 됐으면 좋겠어요."),"\n",l.createElement(t.p,null,"다들 iTerm 잘 사용하시고 조금씩 원하는 방향으로 튜닝하시는 걸 추천드려요."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},3848:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t),a.d(t,{Head:function(){return _},default:function(){return k}});var l=a(3574),r=a(7294),i=a(394),c=a(1151),s=a(3476),o=a(2742),m=a(4764),d=a(4428),p=a(6337),h=a(7526),b=a(9878),g=a(1006),u=e([h]);h=(u.then?(await u)():u)[0];const E=i.default.div.withConfig({displayName:"mdxfields__slug__BodyContainer",componentId:"sc-13a3pz0-0"})(["width:100%;"]),w=i.default.div.withConfig({displayName:"mdxfields__slug__ContentContainer",componentId:"sc-13a3pz0-1"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],d.Z.custom(1199),d.Z.custom(767)),A=i.default.span.withConfig({displayName:"mdxfields__slug__CategoryLabel",componentId:"sc-13a3pz0-2"})(["color:black;font-size:0.875em;font-weight:600;margin-bottom:8px;"]),y=i.default.h1.withConfig({displayName:"mdxfields__slug__TitleLabel",componentId:"sc-13a3pz0-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],m.Z.viloet[6]),v=i.default.div.withConfig({displayName:"mdxfields__slug__DateContainer",componentId:"sc-13a3pz0-4"})(["margin-bottom:12px;p{color:",";font-size:0.8em;}"],m.Z.gray[6]),x=i.default.div.withConfig({displayName:"mdxfields__slug__MdxContainer",componentId:"sc-13a3pz0-5"})(["width:100%;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor{left:-15px;}}.anchor{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],m.Z.viloet[6],d.Z.custom(767),m.Z.viloet[6],m.Z.gray[5],m.Z.viloet[5],m.Z.viloet[7],m.Z.gray[2]),z=i.default.div.withConfig({displayName:"mdxfields__slug__FooterContainer",componentId:"sc-13a3pz0-6"})(["width:100%;"]),C={h2:e=>r.createElement("div",{className:"h2-div"},r.createElement("h2",e)),code:h.Z};function S(e){let{data:t,children:a}=e;return r.createElement(s.Z,null,r.createElement(o.Z,null),r.createElement(E,null,r.createElement(w,null,void 0!==t.mdx.frontmatter.category&&r.createElement(A,null,t.mdx.frontmatter.category),r.createElement(y,null,t.mdx.frontmatter.title),r.createElement(v,null,r.createElement("p",null,"게시: ",(0,g.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&r.createElement("p",null,"수정: ",(0,g.Z)(t.mdx.frontmatter.updated_at))),r.createElement(x,null,r.createElement(c.Z,{components:C},a)))),r.createElement(z,null,r.createElement(p.Z,null)))}function k(e){return r.createElement(S,e,r.createElement(l.Z,e))}const _=e=>{let{data:t}=e;return r.createElement(b.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};n()}catch(f){n(f)}}))}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-contents-posts-2023-09-install-iterm-mdx-149b78d5a901f5919aef.js.map