// 경로: src/components/Button.js
import './App.css'

function Button(props) {
    switch (props.color) {
        case 'green': {
            return (
                <button
                    style={{ background: 'green', color: 'white' }}
                    onClick={props.onClick}
                >
                    {props.children}
                </button>
            );
        }
        case 'red': {
            return (
                <button
                    style={{ background: 'red', color: 'white' }}
                    onClick={props.onClick}
                >
                    {props.children}
                </button>
            );
        }
        default: {
            return <button onClick={props.onClick}>{props.children}</button>;
        }
    }
}
 
export default Button;

  // 💡💡 외부 모듈(파일)에서 Sqaure 컴포넌트를 사용할 수 있게 export(내보내기)해줘야 한다.