# ## Create React App
  
  ### Install
  ```
  npx craete-react-app project-name
  # or
  yarn create-react-app project-name
  ```
  이전에 create-react-app을 전역으로 설치한 경우 항상 npx를 통해 최신 버전을 사용하도록 제거하는 것이 좋습니다.
  
  ```
  yarn start
      Starts the development server.
          개발모드에서 앱을 실행합니다. (http://localhost:3000/)
          코드를 수정하면 페이지가 자동으로 새로고침 됩니다.
  
  yarn build
      Bundles the app into static files for production.
          build 폴더에 프로덕션용 앱을 빌드합니다.
          파일 이름에 해시가 포함됩니다.
  
  yarn test
      Starts the test runner.
  
  yarn eject
      Removes this tool and copies build dependencies, configuration files
      and scripts into the app directory. If you do this, you can’t go back!
          빌드 도구 및 구성 선택을 변경하고자 하면 eject를 실행 할 수 있습니다.
          한번 eject 를 실행하면 초기의 상태로 돌아갈 수 있는 방법은 없어요.
  ```
  프로젝트 생성이 완료되었습니다. 끝났어요.
  
  이렇게 생성된 프로젝트는 모든 최신 브라우저를 지원합니다.
  IE9~IE11 과 같은 브라우저는 최신 브라우저가 아니에요. 그래서 지원하지 않아요. ~~(IE go to Hell..!!)~~
  구형 브라우저를 지원하기 위해 polyfill을 사용해야 합니다.
  
  ```
  npm install react-app-polyfill
  # or
  yarn add react-app-polyfill
  
  // src/index.js의 제일 위에 선언합니다.
  import 'react-app-polyfill/ie9';
  
  // src/index.js의 제일 위에 선언합니다.
  import 'react-app-polyfill/ie11';
  ```
  지원하려는 브라우저의 최소 버전을 `import` 합니다.
  
  IE9를 가져오는 경우 IE10, IE11 지원이 포함됩니다.
  
  - Promise 지원
  - window.fetch
  - Object.assign
  - Symbol
  - Array.from
  
  ### react-hot-loader
  ```
  npm install react-hot-loader
  # or
  yarn add react-hot-loader
  ```
  ```
  import { hot } from 'react-hot-loader';
  ...
  ...
  export default hot(module)(Component);
  ```
  
  ### 개발시 HTTPS 사용
  
  환경변수 설정으로 개발서버에서 https를 사용할 수 있습니다.
  
  - Windows (cmd.exe)
  ```
  set HTTPS=true&npm start
  ```
  
  - Linux, macOS (Bash)
  ```
  HTTPS=true npm start
  ```
  
  ## 추가한 모듈
  - react-router-dom
  - node-sass
  - axios
  - redux
  - react-redux
  - redux-devtools-extension
      - 크롬 브라우저에 확장 프로그램을 설치해주세요.
      - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon
  - redux-actions
  - redux-logger
  - redux-saga
  - react-app-polyfill
