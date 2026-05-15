import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    color: {
        background: {
            default: "#F3F4F6",
            paper: "#FFFFFF",
        },
        text: {
            default: "#1F2937",
            disabled: "#9CA3AF",
        },
        divider: "#E5E7EB",
        primary: "#2563EB",
        secondary: "#4B5563",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
    },
};

export const darkTheme: DefaultTheme = {
    color: {
        background: {
            default: "#111827",
            paper: "#1F2937",
        },
        text: {
            default: "#F9FAFB",
            disabled: "#6B7280",
        },
        divider: "#374151",
        primary: "#3B82F6",
        secondary: "#9CA3AF",
        success: "#34D399",
        error: "#F87171",
        warning: "#FBBF24",
        info: "#60A5FA",
    },
};

// theme 기능을 2가지 방법

// 1. useStata()
//    : 저장되어져 있는 값이 바뀌면, 그것과 연관이 되어져 있는 부분이 리렌더링 됨
//      리렌더링(화면을 다시 그린다 라는 것)은 화면을 교체한다는 뜻이라기 보다
//      이미 존재한 화면이 있고
//      다시 그려져야 하는 화면에 대해서 준비한 다음 => 결국 CPU 소비
//      그 두개가 다른 지점을 찾아서 그 부분만 교체

// 2. Context API > createContext, Context.Provider, useContext
// 단점
// 1. 휘발성 메모리 값을 저장하기 때문에, 지속적인 데이터 유지를 위해서는 localStorage
// 2. 어쨌든 자식 컴포넌트에서 이 값에 접근하기 위해서는 미리 부모 측에 Provider 존재해야 함
// 3. Context.Provider로 감싸진 컴포넌트들은, 이 Context의 값이 바뀌면, 리렌더링 됨

// 3번 단점 때문에, 아싸리 Context API 또는 useState 사용한다고 해서 최상단 부모인 App에서 모두 감싸는건 지양